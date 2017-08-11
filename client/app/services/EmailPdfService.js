function EmailPdfService(c3ExportService, EmailService, ModalService) {
    "ngInject";

    function crop(can, a, b) {
        var ctx = can.getContext('2d');
        var imageData = ctx.getImageData(a.x, a.y, b.x, b.y);
        var newCan = document.createElement('canvas');
        newCan.width = b.x - a.x;
        newCan.height = b.y - a.y;
        var newCtx = newCan.getContext('2d');
        newCtx.putImageData(imageData, 0, 0);

        return newCan.toDataURL();
    }

    function getPDF(emails, graphElement, drilldownElement, expandAllElement, details) {

        function sendingPdf(legendCanvas) {
            html2canvas(drilldownElement, {
                onrendered: function(canvas) {
                    var sendingMsg = '<div class="alerts"><div class="alert alert-info">Sending Mail...</div></div>';
                    graphElement.append(sendingMsg);
                    var dataSrc = canvas.toDataURL();
                    var i = new Image();
                    var docDefinition = { content: [] };

                    for (var val in details) {
                        docDefinition.content.push({ text: details[val], style: 'header' });
                    }

                    i.onload = function() {
                        if (graphElement.hasClass("c3graph")) {
                            var myImage = c3ExportService.createChartImages(graphElement, {});
                            docDefinition.content.push({
                                image: myImage,
                                fit: [525, 750]
                            });
                        } else {
                            var svgEl = $(graphElement.find('svg')).first()[0];
                            var svgCopyEl = angular.element(svgEl.outerHTML)[0];
                            var canvasEl = angular.element('<canvas id="canvasOriginal"></canvas>')[0];
                            $(graphElement).parent().append(canvasEl);
                            canvg(canvasEl, new XMLSerializer().serializeToString(svgCopyEl));
                            var image2 = canvasEl.toDataURL();
                            docDefinition.content.push({
                                image: legendCanvas.toDataURL(),
                                width: 525
                            });
                            docDefinition.content.push({
                                image: image2,
                                width: 525
                            });
                            $(canvasEl).remove();
                        }
                        if (i.height > 800) {
                            var remHeigth = i.height;
                            var topleft = 0;
                            while (remHeigth > 800) {
                                var newCrop = crop(canvas, { x: 0, y: topleft }, { x: canvas.width, y: topleft + 800 });
                                remHeigth -= 800;
                                topleft += 800;
                                docDefinition.content.push({
                                    image: newCrop,
                                    width: 525
                                });
                            }
                            if (remHeigth > 0) {
                                var newCrop = crop(canvas, { x: 0, y: topleft }, { x: canvas.width, y: canvas.height });
                                docDefinition.content.push({
                                    image: newCrop,
                                    width: 525
                                });
                            }
                        } else {
                            docDefinition.content.push({
                                image: dataSrc,
                                width: 525
                            });
                        }
                        /*pdfMake.createPdf(docDefinition).open();*/
                        pdfMake.createPdf(docDefinition).getBlob(function(data) {

                            var formData = new FormData();
                            formData.append("pdf", data, "mygraph.pdf");
                            formData.append("email[]", emails);
                            formData.append("isLink", false);

                            EmailService.sendAttachment(formData).then((res) => {
                                graphElement.find('.alerts').remove();
                                console.log('PDF uploaded', res.data);

                                var alerts = '<div class="alerts">' + (res.data.failure.length > 0 ?
                                        '<div class="alert alert-danger"> Failed to send to ' + res.data.failure + ' <button type="button" class="close" data-dismiss="alert">×</button></div>' : "") +
                                    (res.data.success.length > 0 ?
                                        '<div class="alert alert-success"> Successfully sent to ' + res.data.success + ' <button type="button" class="close" data-dismiss="alert">×</button></div>' : "") +
                                    '</div>';
                                graphElement.append(alerts);

                                setTimeout(function() {
                                    graphElement.find('.alerts').remove();
                                }, 8000);
                            }).catch(function(e) {
                                graphElement.find('.alerts').remove();
                                console.log(e);
                            });
                        }, function(e) {
                            console.log(e);
                        });
                    };
                    i.src = dataSrc;
                }
            });
        }
        var checkExist = setInterval(function() {
            if (expandAllElement) {
                if (graphElement.hasClass("c3graph")) {
                    sendingPdf();
                } else {
                    html2canvas($(".legend"), {
                        onrendered: function(legendCanvas) {
                            sendingPdf(legendCanvas);
                        }
                    });
                }
                clearInterval(checkExist);
            } else {
                console.log("Not Exists!");
            }
        }, 100);
    }
    return {
        sendMail(graphElement, drilldownElement, expandAllElement, details) {
            var custMod = {
                size: 'md',
                controller: function($scope, $uibModalInstance) {
                    "ngInject";
                    $scope.form = {};
                    $scope.modalOptions = {
                        closeButtonText: 'Cancel',
                        actionButtonText: 'Send',
                        headerText: 'Send Reports'
                    };
                    $scope.submitForm = function() {
                        if ($scope.form.userForm.$valid) {
                            console.log('user form is in scope');
                            $uibModalInstance.close($scope.email);
                        } else {
                            console.log('userform is not in scope');
                        }
                    };

                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                    $scope.modalOptions.ok = function() {
                        $uibModalInstance.close();
                    };
                },
                template: `
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="myModalLabel">{{modalOptions.headerText}}</h4>
                </div>
                <form name="form.userForm" ng-submit="submitForm()" novalidate>
                    <div class="modal-body">
                        <!-- EMAILS -->
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" name="email" class="form-control" 
                                ng-model="email" multiple-emails required
                                placeholder="jane.doe1@mediamelt.com,jane.doe2@mediamelt.com...">
                            <p ng-show="form.userForm.email.$invalid && !form.userForm.email.$pristine" class="help-block">Enter valid email ids</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" ng-disabled="form.userForm.$invalid">Send</button>
                        <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
                    </div>
                </form>`
            };
            ModalService.showModal(custMod, {}).then(function(res) {
                var emails = res.split(",").map(function(item) {
                    return item.trim();
                });
                getPDF(emails, graphElement, drilldownElement, expandAllElement, details);
            }, function(err) {
                console.log(err);
            });
        }
    }
}

export default EmailPdfService;