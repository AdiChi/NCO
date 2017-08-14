function c3ExportService(c3StyleService) {
    "ngInject";

    function createChartImages(element,config) {
        var chartEl = $(element);

        var svgEl = $(element.find('svg')).first()[0];
        var svgCopyEl = svgEl.outerHTML ? angular.element(svgEl.outerHTML)[0] : $(svgEl).clone()[0];
        var canvasEl = angular.element('<canvas id="canvasOriginal"></canvas>')[0];
        var emptySvgEl = angular.element('<svg id="emptysvg" xmlns="http://www.w3.org/2000/svg" version="1.1" height="2" />')[0];
        var emptyCanvasEl = angular.element('<canvas id="canvasComputed"></canvas>')[0];

        if(config.removeDefs) {
            $(svgCopyEl).find('defs').remove();
        }

        canvasEl.width = chartEl.width();
        emptyCanvasEl.width = chartEl.width();
        canvasEl.height = chartEl.height();
        emptyCanvasEl.height = chartEl.height();

        var container = angular.element('<div style="display: none;" class="c3"></div>');
        element.append(container);
        container.append(canvasEl);
        container.append(emptyCanvasEl);
        container.append(emptySvgEl);
        container.append(svgCopyEl);

        exportSvgToCanvas(svgCopyEl, canvasEl);

        var canvasComputed = c3StyleService.exportStyles(canvasEl, emptyCanvasEl, svgCopyEl, emptySvgEl);

        exportSvgToCanvas(svgCopyEl, canvasComputed);

        var image = exportCanvasToPng(canvasComputed);

        $(canvasEl).remove();
        $(emptyCanvasEl).remove();
        $(emptySvgEl).remove();
        $(svgCopyEl).remove();

        return image;
    }
    function exportSvgToCanvas(svg, canvas) {
        var svg_str;
        try {
            svg_str = new XMLSerializer().serializeToString(svg);
        } catch(e) {
            svg_str = svg.xml;
        }

        canvg(canvas, svg_str);
    }

    function exportCanvasToPng(canvasEl) {
        return canvasEl.toDataURL('png');
    }
    return {
        createChartImages: createChartImages
    }
}

export default c3ExportService;