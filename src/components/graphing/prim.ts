import { Edge } from "./edge";
import { Graph, Result, Vertex } from "./graph";
import { Path } from "./path";

export class Prim extends Graph {
  private nextEdges: Edge[];
  exploreOrder: number[];
  constructor() {
    super();
    this.nextEdges = [];
    this.exploreOrder = [];
  }
  public findPath(
    fromVertexId: number,
    toVertexId: number,
    path: Path = new Path(),
    exploreOrder: number[] = []
  ): Path | null {
    const fromVertex = this.getvertex(fromVertexId);
    const toVertex = this.getvertex(toVertexId);

    if (path.length === 0) {
      this.clearPath();
      fromVertex.distance = 0;
      if (fromVertex === toVertex) {
        this.exploreOrder = [fromVertexId];
        return new Path([new Edge(fromVertex, toVertex, 0)]);
      }
    }

    // const generatedPath = this.generateTree(fromVertex, toVertex, path);
    if (fromVertexId === toVertexId) {
      exploreOrder.push(toVertexId);
      toVertex.distance = path.length;
      this.exploreOrder = exploreOrder;
      return path;
    }
    this.updateNextEdges(fromVertexId, path);
    let edge = this.nextEdges.pop();
    // console.log(exploreOrder);
    if (edge) {
      // edge.other(toVertexId).distance = path.length;
      // path.addEdge(edge);
      const nextVertex = edge.other(fromVertexId);
      if (!nextVertex.isExplored() && !toVertex.isExplored()) {
        nextVertex.distance = fromVertex.distance + edge.distance;
        exploreOrder.push(fromVertexId);
        // if (fromVertex.id !== toVertexId) this.nextEdges.pop();
        this.updateNextEdges(nextVertex.id, path);
        const found = this.findPath(
          nextVertex.id,
          toVertexId,
          new Path([...path.getEdges(), edge]),
          exploreOrder
        );
        if (toVertex.isExplored() && found)
          return this.findPath(toVertexId, toVertexId, found);
      }
      // if (edge.other(fromVertex.id).id !== toVertexId) this.nextEdges.pop();
      edge = this.nextEdges.pop();
    }
    console.log(this.path);
    return null;
  }

  private updateNextEdges(vertexId: number, path: Path) {
    for (let edge of this.edges) {
      if (
        !path.contains(edge) &&
        !this.nextEdges.includes(edge) &&
        edge.contains(vertexId) &&
        !edge.other(vertexId).isExplored()
      ) {
        this.nextEdges.push(edge);
      }
    }
    this.nextEdges.sort((e1, e2) => e2.distance - e1.distance);
    // console.log(JSON.stringify(this.nextEdges, null, 2));
  }
}
