import { Vertex } from "./graph";

export class Edge {
  constructor(
    public vertexOne: Vertex,
    public vertexTwo: Vertex,
    public distance: number = Number.MAX_SAFE_INTEGER
  ) {
    this.vertexOne = vertexOne;
    this.vertexTwo = vertexTwo;
    this.distance = distance;
  }
  contains(vertexId: number) {
    return this.vertexOne.id === vertexId || this.vertexTwo.id === vertexId;
  }
  midPoint(): { x: number; y: number } {
    return {
      x: (this.vertexOne.position.x + this.vertexTwo.position.x) / 2,
      y: (this.vertexOne.position.y + this.vertexTwo.position.y) / 2,
    };
  }
  diffs(): { xDiff: number; yDiff: number } {
    return {
      xDiff: Math.abs(this.vertexOne.position.x - this.vertexTwo.position.x),
      yDiff: Math.abs(this.vertexOne.position.y - this.vertexTwo.position.y),
    };
  }
  other(vertex: Vertex) {
    return vertex.id === this.vertexOne.id ? this.vertexTwo : this.vertexOne;
  }
  equals(o: Edge): boolean {
    return (
      (this.vertexOne.id === o.vertexOne.id &&
        this.vertexTwo.id === o.vertexTwo.id) ||
      (this.vertexOne.id == o.vertexTwo.id &&
        this.vertexTwo.id === o.vertexOne.id)
    );
  }
}
