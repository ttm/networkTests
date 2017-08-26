// very simple gadget to plot graphs in d3
// should be able to load the graphs in the format used by:
// ccNetViz/examples/data/*

function d3graph (nodes, edges) {
	let w = 500;
	let h = 500;
        var svg = d3.select("#body").append("svg")
                    .attr("width", w)
                    .attr("height", h);

            svg.selectAll("line")
               .data(edges)
               .enter().append("line")
               .style("stroke-width", 1)
               .style("stroke", "black")
               .attr("class", "link")
               .attr("x1", function(d) { return nodes[d.source].x; })
               .attr("y1", function(d) { return nodes[d.source].y; })
               .attr("x2", function(d) { return nodes[d.target].x; })
               .attr("y2", function(d) { return nodes[d.target].y; });

            svg.append("svg:g")
               .selectAll("circle")
               .data(nodes)
               .enter().append("svg:circle")
               .attr("class", "node")
               .attr("cx", function(d) { return d.x; })
               .attr("cy", function(d) { return d.y; })
               .attr("r", 2);

         return svg;
}

function mkLayout (nodes, edges) {
	let w = 500;
	let h = 500;
	nodes.forEach(function(node){
		node.x = Math.random()*h;
		node.y = Math.random()*w;
	});
}
