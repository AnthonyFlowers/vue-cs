import { Edge } from "./edge";
import { Graph, Result, Vertex } from "./graph";
import { Path } from "./path";

export class Prim extends Graph {
  constructor() {
    super();
  }

  public findPath(fromVertexId: number, toVertexId: number): Path {
    const mst = this.generateMST(fromVertexId);
    const path = new Path();
    const verticies: number[] = [fromVertexId, toVertexId];
    let edge = mst.pop();
    while (
      (!path.containsVertex(fromVertexId) ||
        !path.containsVertex(toVertexId)) &&
      edge
    ) {
      if (
        verticies.some((v) => {
          if (edge?.contains(v)) {
            verticies.push(edge.other(v).id);
            return true;
          }
        })
      ) {
        path.addEdge(edge);
      }
      edge = mst.pop();
    }
    return path;
  }
  public generateMST(fromVertexId: number): Edge[] {
    const mst: Edge[] = [];
    let nextEdges: Edge[] = [];
    let fromVertex = this.getvertex(fromVertexId);

    // const generatedPath = this.generateTree(fromVertex, toVertex, path);
    fromVertex.distance = 0;
    nextEdges = this.updateNextEdges(fromVertexId, nextEdges, mst);
    let edge = nextEdges.pop();
    // console.log(exploreOrder);
    while (edge) {
      // edge.other(toVertexId).distance = path.length;
      // path.addEdge(edge);
      const nextVertex = edge.unexplored();
      if (nextVertex && !nextVertex.isExplored()) {
        fromVertex = edge.other(nextVertex.id);
        mst.push(edge);
        nextVertex.distance = fromVertex.distance + edge.distance;
        this.updateNextEdges(nextVertex.id, nextEdges, mst);
      }
      edge = nextEdges.pop();
    }
    return mst;
    // console.log(this.minSpanningTree);
  }

  private updateNextEdges(
    vertexId: number,
    nextEdges: Edge[],
    mst: Edge[]
  ): Edge[] {
    for (let edge of this.edges) {
      if (
        !nextEdges.includes(edge) &&
        edge.contains(vertexId) &&
        !edge.other(vertexId).isExplored() &&
        !mst.find((e) => e.equals(edge))
      ) {
        nextEdges.push(edge);
      }
    }
    return nextEdges.sort((e1, e2) => e2.distance - e1.distance);
  }
}
