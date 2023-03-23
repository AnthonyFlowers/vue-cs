import _ from "lodash";
import { Edge } from "./edge";
import { Graph, Result, Vertex } from "./graph";
import { Path } from "./path";

export class Prim extends Graph {
  private nextEdges: Edge[];
  constructor() {
    super();
    this.nextEdges = [];
  }
  public findPath(
    fromvertexId: number,
    tovertexId: number,
    path: Path = new Path([])
  ) {
    console.log(JSON.stringify(path, null, 2));
    const fromVertex = this.getvertex(fromvertexId);
    const toVertex = this.getvertex(tovertexId);
    this.updateNextEdges(fromvertexId);
    let edge = this.nextEdges.pop();
    while (edge) {
      const nextVertex = edge.other(fromVertex);
      if (!nextVertex.distance)
        nextVertex.distance = path.length + edge.distance;

      edge = this.nextEdges.pop();
      console.log(this.verticies, null, 2);
    }
    return _.cloneDeep(path);
  }
  private updateNextEdges(vertexId: number) {
    this.nextEdges.push(
      ...this.edges.filter(
        (edge) =>
          !this.path.contains(edge) &&
          !this.nextEdges.includes(edge) &&
          edge.contains(vertexId)
      )
    );
    this.nextEdges.sort((e1, e2) => e2.distance - e1.distance);
    console.log(JSON.stringify(this.nextEdges, null, 2));
  }
}
