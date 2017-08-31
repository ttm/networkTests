import networkx as x, numpy as n, percolation as pe, pylab as p
# g = x.scale_free_graph(100, create_using=x.Graph())
N = 100
# g = x.generators.grid_2d_graph(N, N//2)
g = x.generators.barabasi_albert_graph(N,N//3)
# N = N*(N//2)
m = pe.measures.topology.directMeasures.topologicalMeasures(g)
sec = pe.measures.topology.erdosSectors.getErdosSectors(m)

am = x.to_numpy_matrix(g)
foo=am.sum(0)
ii=n.identity(N)
diag = n.multiply(foo, ii)
eva, eve = n.linalg.eig(diag-am)
valid = eva > 10**-10
eva = eva[valid]
eve = eve[:, valid]
inds = n.argsort(eva)
eva = eva[inds]
eve = eve[:, inds]

pos = {}
nodes = g.nodes()
e1 = eve[:,0]
e2 = eve[:,1]
for i, node in enumerate(nodes):
    pos[node]=(float(e1[i]), float(e2[i]))

c = eve[:,3]
c = (c - c.min())/(c.max()-c.min())
c_ = p.cm.autumn(c)

cm = [i[0][:-1] for i in c_]
nodes = x.draw(g, pos, node_size=10, node_color = cm)
p.show()
