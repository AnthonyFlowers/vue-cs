import { SentinelLinearSearch } from "../../components/arrays/search";

describe("Sentinel search test suite", () => {
  test("should not find value in 0 length array", () => {
    const values = [] as string[];

    const result = SentinelLinearSearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual([]);
  });

  test("should find value in 1 length array", () => {
    const values = ["a"];

    const result = SentinelLinearSearch.search(values, "a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toStrictEqual(["a"]);
    expect(result.index).toBe(0);
  });

  test("should not find value in 1 length array", () => {
    const values = ["a"];

    const result = SentinelLinearSearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["a"]);
    expect(result.index).toBe(-1);
  });

  test("should find value in 5 length array", () => {
    const values = ["a", "1", "3", "b", "d"];

    const result = SentinelLinearSearch.search(values, "b");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toStrictEqual(["a", "1", "3", "b"]);
    expect(result.searchPath).not.toContainEqual("d");
    expect(result.index).toBe(3);
  });

  test("should not find value in 5 length array", () => {
    const values = ["a", "1", "3", "b", "d"];

    const result = SentinelLinearSearch.search(values, "z");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["a", "1", "3", "b", "d"]);
    expect(result.searchPath).not.toContainEqual("z");
    expect(result.index).toBe(-1);
  });

  test("should find value in 3 length array", () => {
    const values = ["3", "a", "5"];

    const result = SentinelLinearSearch.search(values, "a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toStrictEqual(["3", "a"]);
    expect(result.index).toBe(1);
  });

  test("should not find value in 3 length array", () => {
    const values = ["3", "a", "5"];

    const result = SentinelLinearSearch.search(values, "2");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toStrictEqual(["3", "a", "5"]);
    expect(result.index).toBe(-1);
  });
});

export {};
