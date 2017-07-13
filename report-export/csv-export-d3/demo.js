visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
        report = v.report({
            resource: "/public/Samples/Reports/Cascading_Report_2_Updated",
            success: exportCsv,
            error: errorHandler
        });
});

function exportCsv () {
    report.export({        
        outputFormat: "csv"
    }, function (link, request) {
        request()
        .done(parseData)
        .fail(errorHandler);
    }, errorHandler);
    document.getElementById("loader").style.display = "none";
}

function parseData(data) {
    data = d3.csv.parseRows(data, accessor);
    drawD3Chart(data);        
}

function accessor(row, index) {
    var cleaned = [];
    if (row[8][0] === "$") {
        cleaned.push(
            //row[0],
            //row[2],
            row[4],
            row[7],
            +row[8].slice(2),
            +row[9].slice(2)
        );
        return cleaned;
    } else if (row[6][0] === "$" && row[3] !== "") {
        cleaned.push(
            //row[0],
            //row[1],
            row[3],
            row[5],
            +row[6].slice(2),
            +row[7].slice(2)
        );
        return cleaned;
    } else {
        return null;
    }
}

function drawD3Chart (data) {
    var data = [ 
        {data:bP.partData(data,2), id:'Sales', header:["Channel","State", "Sales"]},
        {data:bP.partData(data,3), id:'Cost', header:["Channel","State", "Cost"]}
    ];
        
    bP.setOptions({
            colors: ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#0099C6"],
            labelColumn: [-195, 38],
            valueColumn: [-38, 149], //(count (%)) first value is left position x, second value is right position x
            barpercentColumn: [-3, 185], //Column positions of labels.
            headerX: 90,
            headerY: -20,
            transitionWidth: 130,
            height: 600,
            sortbyKey: false,
            barlabelFontSize: "12",
            barValueFontSize: "10",
            barPercentFontSize: "10",
            width : 1100,
            height : 610,
            margin : { b: 0, t: 40, l: 195, r: 50 }
        });
        bP.draw(data,'#container');
    
}

function errorHandler(error) {
    console.log(error);
}

// code from https://github.com/NPashaP/BiPartite
(function(){
    var bP = {};
    var mainRectWidth = 30, buffMargin = 1, minHeight = 14;

    var me = this;
    this.options = {
        colors: ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#0099C6"],
        labelColumn: [-130, 40], //Column positions of labels.
        valueColumn: [-50, 100],
        barpercentColumn: [-10, 160],// x distance from left of main rect
        headerX: 108,
        headerY: -20,
        transitionWidth: 250,
        height: 300,
        sortbyKey: false
    };

    /**
     *  sets Options
     * @param {object} options an object containing options
     */
    bP.setOptions = function (options) {
        me.options = options;
    };

    /**
   *  partData
   * @public
   * From t he original data set, creates two opposing arrays containing the counts of each corresponding record on each side.
   */
    bP.partData = function (data, p) {
        var sData = {};

        // gets unique columns names (first element in array) - In Bipartite Parlance this is the U-Set
        var v1 = d3.set(data.map(function (d) { return d[0]; })).values();

        if (me.options.sortbyKey) {
            v1 = v1.sort();
        }
        // gets unique destination column name (second element in array) - In Bipartite Parlance this is the V-Set
        var v2 = d3.set(data.map(function (d) { return d[1]; })).values();

        if (me.options.sortbyKey) {
            v2 = v2.sort(d3.descending());
        }
        sData.keys = [v1, v2];

        // creates an array of arrays with all values set to 0
        sData.data = [sData.keys[0].map(function () { return sData.keys[1].map(function () { return 0; }); }),
					  sData.keys[1].map(function () { return sData.keys[0].map(function () { return 0; }); })
        ];

        data.forEach(function (d) {
            sData.data[0][sData.keys[0].indexOf(d[0])][sData.keys[1].indexOf(d[1])] = d[p];
            sData.data[1][sData.keys[1].indexOf(d[1])][sData.keys[0].indexOf(d[0])] = d[p];
        });

        return sData;
    };

    function round10 (n) {
        return Math.round(n*100)/100;
    }
    function visualize(data) {
        var vis = {};
        function calculatePosition(a, s, e, b, m) {
            var total = round10(d3.sum(a));
            var sum = 0, neededHeight = 0, leftoverHeight = e - s - 2 * b * a.length;
            var ret = [];

            a.forEach(
				function (d) {
				    var v = {};
				    v.percent = (total == 0 ? 0 : d / total);
				    v.value = d;
				    v.height = Math.max(v.percent * (e - s - 2 * b * a.length), m);
				    (v.height == m ? leftoverHeight -= m : neededHeight += v.height);
				    ret.push(v);
				}
			);

            var scaleFact = leftoverHeight / Math.max(neededHeight, 1), sum = 0;

            ret.forEach(
				function (d) {
				    d.percent = scaleFact * d.percent;
				    d.height = (d.height == m ? m : d.height * scaleFact);
				    d.middle = sum + b + d.height / 2;
				    d.y = s + d.middle - d.percent * (e - s - 2 * b * a.length) / 2;
				    d.h = d.percent * (e - s - 2 * b * a.length);
				    d.percent = (total == 0 ? 0 : d.value / total);
				    sum += 2 * b + d.height;
				}
			);
            return ret;
        }

        vis.mainBars = [calculatePosition(data.data[0].map(function (d) { return round10(d3.sum(d)); }), 0, me.options.height, buffMargin, minHeight),
						 calculatePosition(data.data[1].map(function (d) { return round10(d3.sum(d)); }), 0, me.options.height, buffMargin, minHeight)];

        vis.subBars = [[], []];
        vis.mainBars.forEach(function (pos, p) {
            pos.forEach(function (bar, i) {
                calculatePosition(data.data[p][i], bar.y, bar.y + bar.h, 0, 0).forEach(function (sBar, j) {
                    sBar.key1 = (p == 0 ? i : j);
                    sBar.key2 = (p == 0 ? j : i);
                    vis.subBars[p].push(sBar);
                });
            });
        });
        vis.subBars.forEach(function (sBar) {
            sBar.sort(function (a, b) { return (a.key1 < b.key1 ? -1 : a.key1 > b.key1 ? 1 : a.key2 < b.key2 ? -1 : a.key2 > b.key2 ? 1 : 0); });
        });

        vis.edges = vis.subBars[0].map(function (p, i) {
            return {
                key1: p.key1,
                key2: p.key2,
                y1: p.y,
                y2: vis.subBars[1][i].y,
                h1: p.h,
                h2: vis.subBars[1][i].h
            };
        });
        vis.keys = data.keys;
        return vis;
    }

    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);//https://github.com/damiangreen/EnvoyCustomerRegistration
        return function (t) {
            return edgePolygon(i(t));
        };
    }

    function drawPart(data, id, p) {
        d3.select("#" + id).append("g").attr("class", "part" + p).attr("transform", "translate(" + (p * (me.options.transitionWidth 
                                                                                                         + mainRectWidth)) + ",0)");
        var el = d3.select("#" + id).select(".part" + p);
        el.append("g").attr("class", "subbars");
        el.append("g").attr("class", "mainbars");

        var mainbar = d3.select("#" + id).select(".part" + p).select(".mainbars").selectAll(".mainbar").data(data.mainBars[p])
			.enter().append("g").attr("class", "mainbar");

        mainbar.append("rect").attr("class", "mainrect")
			.attr("x", 0).attr("y", function (d) { return d.middle - d.height / 2; })
			.attr("width", mainRectWidth).attr("height", function (d) { return d.height; })

        //draw bar label
        mainbar.append("text").attr("class", "barlabel")
			.attr("x", me.options.labelColumn[p]).attr("y", function (d) { return d.middle + 5; })
			.text(function (d, i) { return data.keys[p][i]; })
			.attr("text-anchor", "start");

        //draw count label
        mainbar.append("text").attr("class", "barvalue")
			.attr("x", me.options.valueColumn[p]).attr("y", function (d) { return d.middle + 5; })
			.text(function (d, i) { return round10(d.value); })
			.attr("text-anchor", "end");

        //draw percentage label
        mainbar.append("text").attr("class", "barpercent")
			.attr("x", me.options.barpercentColumn[p]).attr("y", function (d) { return d.middle + 5; })
			.text(function (d, i) { return "( " + Math.round(100 * d.percent) + "%)"; })
			.attr("text-anchor", "end");

        d3.select("#" + id).select(".part" + p).select(".subbars")
			.selectAll(".subbar").data(data.subBars[p]).enter()
			.append("rect").attr("class", "subbar")
			.attr("x", 0).attr("y", function (d) { return d.y; }).attr("width", mainRectWidth).attr("height", function (d) { return d.h; })
			.style("fill", function (d) { return me.options.colors[d.key1]; });
    }

    function drawEdges(data, id) {
        d3.select("#" + id).append("g").attr("class", "edges").attr("transform", "translate(" + mainRectWidth + ",0)");

        d3.select("#" + id).select(".edges").selectAll(".edge").data(data.edges).enter().append("polygon").attr("class", "edge")
			.attr("points", edgePolygon).style("fill", function (d) { return me.options.colors[d.key1]; }).style("opacity", 0.5)
			.each(function (d) { this._current = d; });
    }

    function drawHeader(header, id) {
        d3.select("#" + id).append("g").attr("class", "header").append("text").text(header[2])
			.attr("x", me.options.headerX).attr("y", me.options.headerY);

        [0, 1].forEach(function (d) {
            var h = d3.select("#" + id).select(".part" + d).append("g").attr("class", "header");

            h.append("text").text(header[d]).attr("x", (me.options.labelColumn[d] + 35)).attr("y", -5);
            h.append("text").text("Count").attr("x", (me.options.valueColumn[d] - 10)).attr("y", -5);

            h.append("line").attr("x1", me.options.labelColumn[d] ).attr("y1", -2).attr("x2", me.options.barpercentColumn[d] ).attr("y2", -2)
				.style("stroke", "black").style("stroke-width", "1").style("shape-rendering", "crispEdges");
        });
    }

    function edgePolygon(d) {
        return [0, d.y1, me.options.transitionWidth, d.y2, me.options.transitionWidth, d.y2 + d.h2, 0, d.y1 + d.h1].join(" ");
    }

    function transitionPart(data, id, p) {
        var mainbar = d3.select("#" + id).select(".part" + p).select(".mainbars").selectAll(".mainbar").data(data.mainBars[p]);

        mainbar.select(".mainrect").transition().duration(500)
			.attr("y", function (d) { return d.middle - d.height / 2; }).attr("height", function (d) { return d.height; });

        mainbar.select(".barlabel").transition().duration(500).attr("y", function (d) { return d.middle + 5; });
        mainbar.select(".barvalue").transition().duration(500).attr("y", function (d) { return d.middle + 5; }).text(function (d, i) { return d.value; });
        mainbar.select(".barpercent").transition().duration(500)
			.attr("y", function (d) { return d.middle + 5; })
			.text(function (d, i) { return "( " + Math.round(100 * d.percent) + "%)"; });

        d3.select("#" + id).select(".part" + p).select(".subbars").selectAll(".subbar").data(data.subBars[p])
			.transition().duration(500)
			.attr("y", function (d) { return d.y; }).attr("height", function (d) { return d.h; });
    }

    function transitionEdges(data, id) {
        d3.select("#" + id).append("g").attr("class", "edges").attr("transform", "translate(" + mainRectWidth + ",0)");

        d3.select("#" + id).select(".edges").selectAll(".edge").data(data.edges)
			.transition().duration(500)
			.attrTween("points", arcTween).style("opacity", function (d) { return (d.h1 == 0 || d.h2 == 0 ? 0 : 0.5); });
    }

    function transition(data, id) {
        transitionPart(data, id, 0);
        transitionPart(data, id, 1);
        transitionEdges(data, id);
    }

    bP.draw = function (data, containerEl) {

        var svg = d3.select(containerEl)
           .append("svg")
           .attr('width', me.options.width)
           .attr('height', (me.options.height + me.options.margin.b + me.options.margin.t))
           .append("g")
           .attr("transform", "translate(" + me.options.margin.l + "," + me.options.margin.t + ")");

        data.forEach(function (biP, s) {
            svg.append("g")
				.attr("id", biP.id)
				.attr("transform", "translate(" + (550 * s) + ",0)");

            var visData = visualize(biP.data);
            drawPart(visData, biP.id, 0);
            drawPart(visData, biP.id, 1);
            drawEdges(visData, biP.id);
            drawHeader(biP.header, biP.id);

            [0, 1].forEach(function (p) {
                d3.select("#" + biP.id)
					.select(".part" + p)
					.select(".mainbars")
					.selectAll(".mainbar")
					.on("mouseover", function (d, i) { return bP.selectSegment(data, p, i); })
					.on("mouseout", function (d, i) { return bP.deSelectSegment(data, p, i); });
            });
        });
    };

    bP.selectSegment = function (data, m, s) {
        data.forEach(function (k) {
            var newdata = { keys: [], data: [] };

            newdata.keys = k.data.keys.map(function (d) { return d; });
            newdata.data[m] = k.data.data[m].map(function (d) { return d; });
            newdata.data[1 - m] = k.data.data[1 - m].map(function (v) { return v.map(function (d, i) { return (s == i ? d : 0); }); });

            transition(visualize(newdata), k.id);

            var selectedBar = d3.select("#" + k.id).select(".part" + m).select(".mainbars").selectAll(".mainbar").filter(function (d, i) { return (i == s); });

            selectedBar.selectAll('.mainrect, .barlabel, .barvalue, .barpercent').classed("selected", true);
        });
    };

    bP.deSelectSegment = function (data, m, s) {
        data.forEach(function (k) {
            transition(visualize(k.data), k.id);
            var selectedBar = d3.select("#" + k.id).select(".part" + m).select(".mainbars").selectAll(".mainbar").filter(function (d, i) { return (i == s); });
            selectedBar.selectAll(".mainrect, .barlabel, .barvalue, .barpercent").classed("selected", false);
        });
    };
    this.bP = bP;
})();
