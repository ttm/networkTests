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
	var g = {
	      nodes: [],
	      edges: []
	    };
	// Generate the graph:
	for (let i = 0; i < nodes.length; i++) {
	  g.nodes.push({
	    id: nodes[i].label,
	    // label: 'Node' + i,
	    x: 100 * Math.random(),
	    y: 100 * Math.random(),
	    size: .01,
	    color: "#50c781"
	  });
	}

	for (let i = 0; i < edges.length; i++) {
	  let n1 = nodes[edges[i].source];
	  let n2 = nodes[edges[i].target];
	  g.edges.push({
	    id: n1.label+n2.label+Math.random(),
	    source: n1.label,
	    target: n2.label,
	  });
	}

	s = new sigma({
	  graph: g,
	  container: 'body',
	});
}

