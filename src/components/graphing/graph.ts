import _ from "lodash";
import { Edge } from "./edge";
import { Path } from "./path";

export type Position = {
  x: number;
  y: number;
};

export class Vertex {
  constructor(
    readonly id: number,
    public position: Position,
    public distance: number = Number.MAX_SAFE_INTEGER
  ) {}
  public isExplored() {
    return this.distance !== Number.MAX_SAFE_INTEGER;
  }
  toString() {
    return `${this.id}`;
  }
}

export type Result = {
  path: Edge[];
  distance: number;
};

export abstract class Graph {
  protected path: Path;
  protected verticies: Vertex[];
  protected edges: Edge[];
  protected minPointDistance: number;
  constructor(readonly algorithm: string) {
    this.path = new Path([]);
    this.verticies = [];
    this.edges = [];
    this.minPointDistance = 60;
  }
  abstract findPath(fromvertexId: number, tovertexId: number): Path | null;
  public addVertex(position: Position): Vertex {
    const newVertex = new Vertex(this.verticies.length, position);

    this.verticies.push(newVertex);
    return newVertex;
  }
  public addEdge(vertexOneId: number, vertexTwoId: number, distance: number) {
    const vertexOne = this.getvertex(vertexOneId);
    const vertexTwo = this.getvertex(vertexTwoId);

    const newEdge = new Edge(vertexOne, vertexTwo, distance);
    this.edges.push(newEdge);
    return newEdge;
  }
  public removeEdge(edge: Edge) {
    this.edges = this.edges.filter((e) => !e.equals(edge));
  }
  public getPath(): Edge[] {
    return this.path.getEdges();
  }
  public getvertex(vertexId: number): Vertex {
    const foundvertex = this.verticies.find((v) => v.id === vertexId);
    if (foundvertex) {
      return foundvertex;
    } else {
      this.path = new Path([]);
      throw Error(`Could not find a vertex with the id: ${vertexId}`);
    }
  }
  public getVerticies(): Vertex[] {
    return this.verticies;
  }
  public getEdges(): Edge[] {
    return this.edges;
  }

  public pointExists(position: { x: number; y: number }): Vertex | undefined {
    return this.verticies.find(
      (v) =>
        Math.abs(v.position.x - position.x) <= this.minPointDistance &&
        Math.abs(v.position.y - position.y) <= this.minPointDistance
    );
  }
  public edgeExists(
    vertexOneId: number,
    vertexTwoId: number
  ): Edge | undefined {
    return this.edges.find(
      (e) =>
        (e.vertexOne.id === vertexOneId && e.vertexTwo.id === vertexTwoId) ||
        (e.vertexOne.id === vertexTwoId && e.vertexTwo.id === vertexOneId)
    );
  }
  public clearPath() {
    this.path.clear();
    this.verticies.forEach((v) => {
      v.distance = Number.MAX_SAFE_INTEGER;
    });
  }
  protected getPathBetween(vertexOne: Vertex, vertexTwo: Vertex): Edge {
    return this.edges.filter(
      (e) =>
        (e.vertexOne.id == vertexOne.id && e.vertexTwo.id == vertexTwo.id) ||
        (e.vertexOne.id == vertexTwo.id && e.vertexTwo.id == vertexOne.id)
    )[0];
  }
}
