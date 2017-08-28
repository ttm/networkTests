
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
