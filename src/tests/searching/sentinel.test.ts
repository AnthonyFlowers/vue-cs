import { SentinelLinearSearch } from "../../components/searching/search";

describe("Sentinel search test suite", () => {
  test("should not find value in 0 length array", () => {
    const values = [] as string[];

    const result = SentinelLinearSearch.search(values, "b");

    expect(result.found).toEqual(false);
  });

  test("should find value in 1 length array", () => {
    const values = ["a"];

    const result = SentinelLinearSearch.search(values, "a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toContainEqual("a");
  });

  test("should not find value in 1 length array", () => {
    const values = ["a"];

    const result = SentinelLinearSearch.search(values, "b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toContainEqual("a");
  });

  test("should find value in 5 length array", () => {
    const values = ["a", "1", "3", "b", "d"];

    const result = SentinelLinearSearch.search(values, "b");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toContainEqual("a");
    expect(result.searchPath).toContainEqual("1");
    expect(result.searchPath).toContainEqual("3");
    expect(result.searchPath).toContainEqual("b");
    expect(result.searchPath).not.toContainEqual("d");
  });

  test("should not find value in 5 length array", () => {
    const values = ["a", "1", "3", "b", "d"];

    const result = SentinelLinearSearch.search(values, "z");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toContainEqual("a");
    expect(result.searchPath).toContainEqual("1");
    expect(result.searchPath).toContainEqual("3");
    expect(result.searchPath).toContainEqual("b");
    expect(result.searchPath).toContainEqual("d");
    expect(result.searchPath).not.toContainEqual("z");
  });
});

export {};
