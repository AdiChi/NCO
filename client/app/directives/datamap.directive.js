function DataMap() {
    "ngInject"

    return {
        restrict: 'A',
        scope: {
            data: '=',
            showHeatMap: '='
        },
        link: function (scope, element, attrs) {
            var containerid = document.getElementById('world-map-container');
            var margin = 20,
                padding = 60;
            var map;
            var minValue = 0, maxValue = 0, delta = 10;
            var colorScale, color;
            scope.$watch('data', function (newVal, oldVal) {
                if (newVal.length > 0) {
                    minValue = Math.min.apply(Math, newVal.map(function (o) { return o['Total Sales']; }))
                    maxValue = Math.max.apply(Math, newVal.map(function (o) { return o['Total Sales']; }))
                    newVal.sort(function (a, b) { return (a['Total Sales'] > b['Total Sales']) ? 1 : ((b['Total Sales'] > a['Total Sales']) ? -1 : 0); });
                }
                color = d3.scale.linear().domain([1, delta])
                    .interpolate(d3.interpolateHcl)
                    .range([d3.rgb("#0474DC"), d3.rgb('#022A50')]);

                colorScale = d3.scale.linear().domain([minValue, maxValue])
                    .interpolate(d3.interpolateHcl)
                    .range([d3.rgb("#0474DC"), d3.rgb('#022A50')]);
                // colorScale = d3.scale.ordinal()
                //     .domain(newVal)
                //     .range(d3.range(newVal.length).map(d3.scale.linear()
                //         .domain([0, newVal.length - 1])
                //         .range(["#0075B4", "#70B5DC"])
                //         .interpolate(d3.interpolateLab)));

                var Fills = { defaultFill: '#ddd' };
                var Data = {};
                var countries = Datamap.prototype.worldTopo.objects.world.geometries;
                for (var i = 0; i < newVal.length; i++) {
                    for (var j = 0; j < countries.length; j++) {
                        if (countries[j].properties.name == newVal[i].Country) {
                            Fills[countries[j].id] = colorScale(newVal[i]['Total Sales']);
                            Data[countries[j].id] = { fillKey: countries[j].id, sales: newVal[i]['Total Sales'], territory: newVal[i].Country };
                        }
                    }
                }

                if (map) {
                    d3.select('#world-map-container svg').remove();
                    d3.select('.legend').remove();
                }

                if (scope.showHeatMap) {
                    map = new Datamap({
                        element: containerid,
                        responsive: true,
                        projection: 'mercator',
                        setProjection: function (element) {
                            var projection = d3.geo.mercator()
                                .center([0, padding])
                                .translate([element.offsetWidth / 2, element.offsetHeight /2])
                                .scale(130)
                            var path = d3.geo.path()
                                .projection(projection);
                            return { path: path, projection: projection };
                        },
                        fills: Fills,
                        data: Data,
                        geographyConfig: {
                            popupTemplate: function (geography, data) {
                                if (data) {
                                    return '<div class="hoverinfo"><strong>Territory:</strong> ' + geography.properties.name + '<br/><strong>Total Sales:</strong> ' + data.sales + '</div>';
                                }
                            },
                            highlightBorderWidth: 1
                        },
                        done: function () {
                            d3.select('#world-map-container').call(d3.behavior.zoom().on("zoom", redraw));

                            function redraw() {
                                d3.select('#world-map-container').selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                            }
                        }
                    });

                    function addLegend2(layer, data, options) {
                        let fill = []
                        data = data || {};
                        if (!this.options.fills) {
                            return;
                        }

                        var html = '<ul class="list-inline">';
                        var label = '';
                        if (data.legendTitle) {
                            html = '<h4>' + data.legendTitle + '</h4>' + html;
                        }
                        for (var i = 0; i < delta; i++) {
                            fill.push(color(i));
                            if (i == 0) {
                                label = minValue;
                            }
                            else if (i == (delta - 1)) {
                                label = maxValue;
                            }
                            else {
                                label = "";
                            }
                            html += '<li class="key" style="border-top-width:10px;border-top-style: solid; width: 35px; border-top-color:' + fill[i] + '"><span style="font-size: .75em;display:inline-block; min-height:15px;">' + label + '</span></li>'
                        }
                        html += '</ul>';

                        var hoverover = d3.select(this.options.element).append('div')
                            .attr('class', 'legend')
                            .html(html);
                    }

                    map.addPlugin("mylegend", addLegend2);

                    map.mylegend({ legendTitle: "Total Sales" })
                }

                d3.select(window).on('resize', function () {
                    map.resize();
                });

            })

        }
    }
}

export default DataMap;