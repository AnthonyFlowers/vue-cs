import { Edge } from "./edge";
import { Vertex } from "./graph";

export class Path {
  constructor(private edges: Edge[] = [], public length: number = 0) {
    this.edges = edges;
    this.length = edges.length
      ? edges.reduce((sum, e) => sum + e.distance, 0)
      : 0;
  }
  public addEdge(edge: Edge) {
    this.edges.push(edge);
    this.length += edge.distance;
  }
  public contains(edge: Edge) {
    return this.edges.find((e) => {
      return e.equals(edge);
    });
  }
  public getEdges() {
    return this.edges;
  }
  public clear() {
    this.edges = [];
    this.length = 0;
  }
}
