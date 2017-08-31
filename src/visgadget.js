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
  // var nodes = new vis.DataSet([
  //   {id: 1, label: 'Node 1'},
  //   {id: 2, label: 'Node 2'},
  //   {id: 3, label: 'Node 3'},
  //   {id: 4, label: 'Node 4'},
  //   {id: 5, label: 'Node 5'}
  // ]);
  nodes_ = [];
  for (let i=0; i<nodes.length; ++i){
	  nodes_.push({id: i});
  }
  edges_ = [];
  for (let i=0; i<edges.length; ++i){
	  edges_.push({from: edges[i].source, to: edges[i].target});
  }

  // create an array with edges
  // var edges = new vis.DataSet([
  //   {from: 1, to: 3},
  //   {from: 1, to: 2},
  //   {from: 2, to: 4},
  //   {from: 2, to: 5},
  //   {from: 3, to: 3}
  // ]);

  // create a network
  var container = document.getElementById('bbody');
  var data = {
    nodes: nodes_,
    edges: edges_
  };
  var options = {layout: { improvedLayout: false} };
  var network = new vis.Network(container, data, options);
//	var g = {
//	      nodes: [],
//	      edges: []
//	    };
//	// Generate the graph:
//	for (let i = 0; i < nodes.length; i++) {
//	  g.nodes.push({
//	    id: nodes[i].label,
//	    // label: 'Node' + i,
//	    x: 100 * Math.random(),
//	    y: 100 * Math.random(),
//	    size: .01,
//	    color: "#50c781"
//	  });
//	}
//	for (let i = 0; i < edges.length; i++) {
//	  let n1 = nodes[edges[i].source];
//	  let n2 = nodes[edges[i].target];
//	  g.edges.push({
//	    id: n1.label+n2.label+Math.random(),
//	    source: n1.label,
//	    target: n2.label,
//	  });
//	}
//	s = new sigma({
//	  graph: g,
//	  container: 'body',
//	});
}
