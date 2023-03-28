import { SentinelLinearSearch } from "../../components/searching/search";

describe("Sentinel search test suite", () => {
  test("should not find value in 0 length array", () => {
    const values = [] as string[];
    const search = new SentinelLinearSearch(values);

    const result = search.search("b");

    expect(result.found).toEqual(false);
  });

  test("should find value in 1 length array", () => {
    const values = ["a"];
    const search = new SentinelLinearSearch(values);

    const result = search.search("a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toContainEqual("a");
  });

  test("should not find value in 1 length array", () => {
    const values = ["a"];
    const search = new SentinelLinearSearch(values);

    const result = search.search("b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toContainEqual("a");
  });

  test("should find value in 5 length array", () => {
    const values = ["a", "1", "3", "b", "d"];
    const search = new SentinelLinearSearch(values);

    const result = search.search("b");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toContainEqual("a");
    expect(result.searchPath).toContainEqual("1");
    expect(result.searchPath).toContainEqual("3");
    expect(result.searchPath).toContainEqual("b");
    expect(result.searchPath).not.toContainEqual("d");
  });

  test("should not find value in 5 length array", () => {
    const values = ["a", "1", "3", "b", "d"];
    const search = new SentinelLinearSearch(values);

    const result = search.search("z");

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
