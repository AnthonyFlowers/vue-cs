import { LinearSearch } from "../../components/searching/search";

describe("Linear search test suite", () => {
  test("should not find value in 0 length array ", () => {
    const values = [] as string[];

    const result = LinearSearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual([]);
    expect(result.index).toBe(-1);
  });

  test("should find value in 1 length array", () => {
    const values = ["a"];

    const result = LinearSearch.search(values, "a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toStrictEqual(["a"]);
    expect(result.index).toBe(0);
  });

  test("should not find value in 1 length array ", () => {
    const values = ["a"];

    const result = LinearSearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["a"]);
    expect(result.index).toBe(-1);
  });

  test("should find value in 5 length array ", () => {
    const values = ["a", "b", "c", "d", "e"];

    const result = LinearSearch.search(values, "b");

    expect(result.found).toEqual(true);
    expect(result.searchPath).not.toContainEqual("c");
    expect(result.searchPath).not.toContainEqual("d");
    expect(result.searchPath).not.toContainEqual("e");
    expect(result.searchPath).toStrictEqual(["a", "b"]);
    expect(result.index).toBe(1);
  });

  test("should find value in 5 length array ", () => {
    const values = ["a", "b", "c", "d", "e"];

    const result = LinearSearch.search(values, "1");

    expect(result.found).toEqual(false);
    expect(result.searchPath).not.toContainEqual("1");
    expect(result.searchPath).toStrictEqual(["a", "b", "c", "d", "e"]);
    expect(result.index).toBe(-1);
  });
});

export {};
