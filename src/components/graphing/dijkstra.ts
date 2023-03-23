import _ from "lodash";
import { Edge } from "./edge";
import { Graph, Result, Vertex } from "./graph";
import { Path } from "./path";

export class Dijkstra extends Graph {
  public findPath(
    fromvertexId: number,
    tovertexId: number,
    path: Path = new Path([])
  ) {
    const fromVertex = this.getvertex(fromvertexId);
    const toVertex = this.getvertex(tovertexId);
    if (path.length === 0) {
      this.clearPath();
      fromVertex.distance = 0;
      if (fromVertex === toVertex) {
        return new Path([new Edge(fromVertex, toVertex, 0)]);
      }
    }
    if (fromVertex === toVertex) {
      if (this.path.length > path.length || this.path.length === 0) {
        this.path = path;
      }
    }
    let possible = this.findPossibleEdges(fromVertex.id, path.getEdges());
    const nextVerticies = [];
    for (let edge of possible) {
      const nextVert =
        edge.vertexOne === fromVertex ? edge.vertexTwo : edge.vertexOne;
      const nextDist = fromVertex.distance + edge.distance;
      if (nextVert.distance > nextDist) {
        nextVert.distance = nextDist;
        nextVerticies.push(nextVert);
      }
    }
    for (let next of this.findNextVerticies(nextVerticies)) {
      this.findPath(
        next.id,
        tovertexId,
        new Path([...path.getEdges(), this.getPathBetween(fromVertex, next)])
      );
    }
    return this.path;
  }
  private findPossibleEdges(vertexId: number, path: Edge[]): Edge[] {
    return this.edges
      .filter((edge) => {
        if (path.includes(edge)) {
          return false;
        } else {
          return path.includes(edge)
            ? false
            : edge.vertexOne.id === vertexId || edge.vertexTwo.id === vertexId;
        }
      })
      .sort((e1, e2) => e2.distance - e1.distance);
  }
  private findNextVerticies(nextVerticies: Vertex[]): Vertex[] {
    const unexploredVerticies = nextVerticies.filter(
      (v) => v.distance !== Number.MAX_SAFE_INTEGER
    );
    return unexploredVerticies.sort((a, b) => b.distance - a.distance);
  }
}
