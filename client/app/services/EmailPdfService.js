function EmailPdfService(c3ExportService, EmailService, ModalService, $q) {
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

    function getPDF(info, graphElement, drilldownElement, expandAllElement, details) {

        function sendingPdf(legendCanvas) {
            var deferred = $q.defer();

            html2canvas(drilldownElement, {
                onrendered: function(canvas) {
                    var sendingMsg = '<div class="alerts"><div class="alert alert-info">Sending Mail...</div></div>';
                    ($(graphElement).length>0) ? graphElement.append(sendingMsg) : $(".view-main").append(sendingMsg);
                    var dataSrc = canvas.toDataURL();
                    var header = "header", 
                        i = new Image();
                    var docDefinition = { content: [] };

                    for (var val in details) {
                        if(val == "chartType") {
                            header = "h1";
                        } else if(val == "song") {
                            header = "h2";
                        } else {
                            header = "h3"
                        }
                        docDefinition.content.push({
                            text: details[val],
                            style: header
                        });
                    }

                    docDefinition.styles = {
                        h1: {
                            fontSize: 18,
                            bold: true,
                            color: '#337ab7'
                        },
                        h2: {
                            fontSize: 16,
                            bold: true,
                            color: '#F5B041'
                        },
                        h3: {
                            fontSize: 12,
                            bold: false,
                            color: '#000'
                        }
                    };
                    i.onload = function() {
                        if (graphElement.hasClass("c3graph")) {
                            var myImage = c3ExportService.createChartImages(graphElement, {});
                            docDefinition.content.push({
                                image: myImage,
                                fit: [525, 950]
                            });
                        } else {
                            if ($(graphElement).length>0) {
                                var svg_str, svgEl = $(graphElement.find('svg')).first()[0];
                                var svgCopyEl = svgEl.outerHTML ? angular.element(svgEl.outerHTML)[0] : $(svgEl).clone()[0];
                                var canvasEl = angular.element('<canvas id="canvasOriginal"></canvas>')[0];
                                $(graphElement).parent().append(canvasEl);
                                try {
                                    svg_str = new XMLSerializer().serializeToString(svgCopyEl);
                                } catch(e) {
                                    svg_str = svgCopyEl.xml;
                                }
                                canvg(canvasEl, svg_str);

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
                            } else {
                                docDefinition.content.push({
                                    text: $(".no-map-data").text(), style: 'header'
                                });
                                
                            }
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
                            formData.append("email[]", info.emails);
                            formData.append("isLink", info.isLink);
                            if (info.isLink) {
                                formData.append("expDate", info.expDate);
                                formData.append("expTime", info.expTime);
                            }

                            EmailService.sendAttachment(formData).then((res) => {
                                graphElement.find('.alerts').remove();
                                $(".view-main").find('.alerts').remove();
                                console.log('PDF uploaded', res.data);

                                var alerts = '<div class="alerts">' + (res.data.failure.length > 0 ?
                                        '<div class="alert alert-danger"> Failed to send to ' + res.data.failure + ' <button type="button" class="close" data-dismiss="alert">×</button></div>' : "") +
                                    (res.data.success.length > 0 ?
                                        '<div class="alert alert-success"> Successfully sent to ' + res.data.success + ' <button type="button" class="close" data-dismiss="alert">×</button></div>' : "") +
                                    '</div>';
                                    ($(graphElement).length>0) ? graphElement.append(alerts) : $(".view-main").append(alerts);

                                setTimeout(function() {
                                    graphElement.find('.alerts').remove();
                                    $(".view-main").find('.alerts').remove();
                                }, 8000);

                                deferred.resolve(true);
                            }).catch(function(e) {
                                deferred.reject(false);
                                $(".view-main").find('.alerts').remove();
                                console.log(e);
                            });
                        }, function(e) {
                            deferred.reject(false);
                            console.log(e);
                        });
                    };
                    i.src = dataSrc;
                }
            });
            return deferred.promise;
        }
        // var checkExist = setInterval(function() {
            var deferred2 = $q.defer();
            if (expandAllElement) {
                if (graphElement.hasClass("c3graph")) {
                    sendingPdf().then(function(r) {
                        deferred2.resolve(true);
                    });
                } else if($(".legend").length>0) {
                    html2canvas($(".legend"), {
                        onrendered: function(legendCanvas) {
                            sendingPdf(legendCanvas).then(function(r) {
                                deferred2.resolve(true);
                            });
                        }
                    });
                } else {
                    sendingPdf().then(function(r) {
                        deferred2.resolve(true);
                    });
                }
                // clearInterval(checkExist);
            } else {
                deferred2.reject(false);
                console.log("Not Exists!");
            }
        // }, 100);
        return deferred2.promise;
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
                        headerText: 'Send Report'
                    };
                    $scope.s = {
                        options: 'Attachment'
                    }

                    $scope.dateBeforeRender = function($view, $dates, $leftDate, $upDate, $rightDate) {
                        $dates.filter((date) => {
                            return date.localDateValue() < moment().startOf('day').valueOf()
                        }).forEach((date) => {
                            date.selectable = false;
                        });
                        /*for (var i = 0; i < $dates.length; i++) {
                            if (new Date().getTime() < $dates[i].utcDateValue) {
                                $dates[i].selectable = false;
                            }
                        }*/
                    };
                    $scope.onSetTime = function() {
                        $scope.expDateOrig = undefined;
                        $scope.$broadcast('date-changed');
                    };
                    $scope.$watch('expTime', function(time) {
                        if(moment($scope.expDate, 'MM/D/YYYY').isSame(moment(new Date(), 'MM/D/YYYY'),'date')) {
                            $scope.timeError = moment(time).valueOf() < moment().valueOf();
                        } else {
                            $scope.timeError = false;
                        }
                    });
                    $scope.$watch('expDate', function(date) {
                        if(moment(date, 'MM/D/YYYY').isSame(moment(new Date(), 'MM/D/YYYY'),'date')) {
                            $scope.timeError = moment($scope.expTime).valueOf() < moment().valueOf();
                        } else {
                            $scope.timeError = false;
                        }
                    });
                    $scope.todayStart = moment().startOf('day');
                    $scope.expDateOrig = moment().format('ll');
                    $scope.expDate = moment();
                    $scope.$broadcast('date-changed');
                    $scope.expTime = moment().add(5,"minutes");
                    $scope.submitForm = function() {
                        if ($scope.form.userForm.$valid) {
                            var isLink = ($scope.s.options == "Link") ? true:false;
                            var info = {
                                emails: $scope.email,
                                isLink: isLink,
                                expDate: moment($scope.expDate).format("MM/DD/YYYY"),
                                expTime: moment($scope.expTime).format("HH:mm")
                            };
                            console.log(info);
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
                    <button type="button" class="close" ng-click="cancel()" aria-label="Close"><span aria-hidden="true">×</span></button>
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
                            <p ng-show="form.userForm.email.$invalid && !form.userForm.email.$pristine" class="help-block" style="color:darkred;">
                            Enter valid email ids
                            </p>
                        </div>
                        <div class="form-group">
                        <div class="btn-group choose-type">
                            <div><label>I want to send this report as:</label></div>
                            <label class="btn btn-option">
                              <input type="radio" data-ng-model="s.options" name="options" value="Attachment" />
                              <span>Attachment</span>
                            </label>
                            <label class="btn btn-option">
                              <input type="radio" data-ng-model="s.options" name="options" value="Link" />
                              <span>Link</span>
                            </label>
                          </div>
                          </div>
                        <div class="panel-group" ng-show="s.options == 'Link'">
                          <div class="panel panel-default">
                          <div class="panel-heading"><label>Set link expiry:</label></div>
                            <div class="panel-body">
                                <div class="form-group" >
                                        <div class="dropdown timepicker">
                                            <a class="dropdown-toggle" id="dropdownStart" role="button" data-toggle="dropdown" data-target="" href="">
                                                <label>Date:</label> <br>
                                                <span class=""><i style="font-size:1.5em;" class="glyphicon glyphicon-calendar"></i></span>
                                            </a> {{expDateOrig|| (expDate | date:"MMM dd, yyyy")}}
                                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                                <datetimepicker ng-model="expDate" min-date="todayStart" 
                                                 data-datetimepicker-config="{ startView:'day', minView:'day',
                                                 dropdownSelector: '#dropdownStart', renderOn: 'date-changed' }" 
                                                 data-on-set-time="onSetTime()" 
                                                 data-before-render="dateBeforeRender($view, $dates, $leftDate, $upDate, $rightDate)">
                                                 </datetimepicker>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="time-range form-group">
                                        <label>Time:</label><br/>
                                        <span uib-timepicker ng-model="expTime" class="timepicker"></span>
                                    </div>
                                    <div ng-if="timeError" style="color:darkred;">Please select future expiry time</div>
                                    </div>
                            </div>
                          </div>
                        </div>
                          
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="mail-submit btn" ng-disabled="form.userForm.$invalid || timeError">Send</button>
                        <button class="btn" ng-click="cancel()">Cancel</button>
                    </div>
                </form>`
            };
            return ModalService.showModal(custMod, {}).then(function(res) {
                var emails = res.emails.split(",").map(function(item) {
                    return item.trim();
                }),
                info = {
                    emails: emails,
                    isLink: res.isLink,
                    expDate: res.expDate,
                    expTime: res.expTime
                };
                return getPDF(info, graphElement, drilldownElement, expandAllElement, details);
            }, function(err) {
                console.log(err);
            });
        }
    }
}

export default EmailPdfService;