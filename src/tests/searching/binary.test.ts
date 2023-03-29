import { BinarySearch } from "../../components/searching/search";

describe("Binary search test suite", () => {
  test("should not find value in 0 length array", () => {
    const values = [] as string[];

    const result = BinarySearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual([]);
  });

  test("should find value in 1 length array", () => {
    const values = ["a"];

    const result = BinarySearch.search(values, "a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toStrictEqual(["a"]);
    expect(result.index).toBe(0);
  });

  test("should not find value in 1 length array", () => {
    const values = ["a"];

    const result = BinarySearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["a"]);
    expect(result.index).toBe(-1);
  });

  test("should find value in 5 length array", () => {
    const values = ["1", "3", "a", "b", "d"];

    const result = BinarySearch.search(values, "b");

    expect(result.found).toEqual(true);
    expect(result.searchPath).not.toContainEqual("1");
    expect(result.searchPath).not.toContainEqual("3");
    expect(result.searchPath).not.toContainEqual("d");
    expect(result.searchPath).toStrictEqual(["a", "b"]);
    expect(result.index).toBe(3);
  });

  test("should not find value in 5 length array", () => {
    const values = ["1", "3", "a", "b", "d"];

    const result = BinarySearch.search(values, "z");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["a", "b", "d"]);
    expect(result.index).toBe(-1);
  });

  test("should find value in 3 length array", () => {
    const values = ["3", "5", "a"];

    const result = BinarySearch.search(values, "a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toStrictEqual(["5", "a"]);
    expect(result.index).toBe(2);
  });

  test("should not find value in 3 length array", () => {
    const values = ["3", "5", "a"];

    const result = BinarySearch.search(values, "1");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["5", "3"]);
    expect(result.index).toBe(-1);
  });
});
