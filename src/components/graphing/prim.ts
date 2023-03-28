import { Edge } from "./edge";
import { Graph, Result, Vertex } from "./graph";
import { Path } from "./path";

export class Prim extends Graph {
  constructor() {
    super();
  }

  public findPath(fromVertexId: number, toVertexId: number): Path | null {
    const mst = this.generateMST(fromVertexId);
    if (fromVertexId === toVertexId) {
      const vertex = this.getvertex(fromVertexId);
      return new Path([new Edge(vertex, vertex, 0)]);
    }
    return this.pathFromMST(fromVertexId, toVertexId, mst);
  }

  private pathFromMST(
    fromVertexID: number,
    toVertexId: number,
    mst: Edge[],
    path = new Path(),
    searched: Vertex[] = []
  ): Path | null {
    if (path.containsVertex(toVertexId)) return path;
    const edges = mst.filter((e) => {
      const otherVertex = e.other(fromVertexID);
      if (e.contains(fromVertexID) && !path.contains(e)) {
        searched.push(otherVertex);
        return true;
      }
      return false;
    });
    for (let edge of edges) {
      const otherVertexId = edge.other(fromVertexID).id;
      const p = this.pathFromMST(
        otherVertexId,
        toVertexId,
        mst.filter((e) => !edges.find((ed) => ed.equals(e))),
        new Path([...path.edges, edge]),
        searched
      );
      if (p) return p;
    }
    return null;
  }

  private generateMST(fromVertexId: number): Edge[] {
    const mst: Edge[] = [];
    let nextEdges: Edge[] = [];
    let fromVertex = this.getvertex(fromVertexId);

    fromVertex.distance = 0;
    nextEdges = this.updateNextEdges(fromVertexId, nextEdges, mst);
    let edge = nextEdges.pop();
    while (edge) {
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
