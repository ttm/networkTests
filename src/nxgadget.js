function transformData (nodes, edges) {
	adata = [];
	nodes.forEach(function(node){
		adata.push({
			data: { id : node.label}
		});
	});
	edges.forEach(function(edge){
		let s = nodes[edge.source].label;
		let t = nodes[edge.target].label;
		adata.push({
			data: {
				id : s+t,
				source : s,
				target : t
			}
		});
	});
	return adata;
}

function fooGraph (nodes, edges) {
nodes_ = [];
for (let i=0; i<nodes.length; ++i){
	//nodes_.push([nodes[i].label,
	//		{cx: Math.random()*300,
	//		 cy: Math.random()*300}]);
	nodes_.push([i,
			{cx: Math.random()*300,
			 cy: Math.random()*300}]);
}
edges_ = [];
for (let i = 0; i < edges.length; i++) {
	// let n1 = nodes[edges[i].source];
	// let n2 = nodes[edges[i].target];
	// edges_.push([
	// 	n1.label,
	// 	n2.label
	// ]);
	edges_.push([
		edges[i].source,
		edges[i].target
	]);
}


var G = new jsnx.DiGraph();
 
G.addNodesFrom(nodes_);
G.addEdgesFrom(edges_);
 
jsnx.draw(G, {
    element: '#bbody', 
    nodeAttr: {
        cx: function(n) { return n.data.cx;},
        cy: function(n) { return n.data.cy;}
    },
},
false);
}
