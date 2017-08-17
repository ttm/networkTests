// very simple gadget to plot graphs in d3
// should be able to load the graphs in the format used by:
// ccNetViz/examples/data/*

function d3graph (nodes, edges) {
        var svg = d3.select("body").append("svg")
                    .attr("width", w)
                    .attr("weight", h);

            svg.selectAll("line")
               .data(edges)
               .enter().append("line")
               .attr("class", "link")
               .attr("x1", function(d) { return d.source.x; })
               .attr("y1", function(d) { return d.source.y; })
               .attr("x2", function(d) { return d.target.x; })
               .attr("y2", function(d) { return d.target.y; });

            svg.append("svg:g")
               .selectAll("circle")
               .data(nodes)
               .enter().append("svg:circle")
               .attr("class", "node")
               .attr("cx", function(d) { return d.x; })
               .attr("cy", function(d) { return d.y; })
               .attr("r", 2);
}
