import { LinearSearch } from "../../components/searching/search";

describe("Linear search test suite", () => {
  test("should not find value in 0 length array ", () => {
    const values = [] as string[];
    const search = new LinearSearch(values);

    const result = search.search("b");

    expect(result.found).toEqual(false);
  });

  test("should find value in 1 length array", () => {
    const values = ["a"];
    const search = new LinearSearch(values);

    const result = search.search("a");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toContainEqual("a");
  });

  test("should not find value in 1 length array ", () => {
    const values = ["a"];
    const search = new LinearSearch(values);

    const result = search.search("b");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toContainEqual("a");
  });

  test("should find value in 5 length array ", () => {
    const values = ["a", "b", "c", "d", "e"];
    const search = new LinearSearch(values);

    const result = search.search("b");

    expect(result.found).toEqual(true);
    expect(result.searchPath).toContainEqual("a");
    expect(result.searchPath).toContainEqual("b");
    expect(result.searchPath).not.toContainEqual("c");
    expect(result.searchPath).not.toContainEqual("d");
    expect(result.searchPath).not.toContainEqual("e");
  });

  test("should find value in 5 length array ", () => {
    const values = ["a", "b", "c", "d", "e"];
    const search = new LinearSearch(values);

    const result = search.search("1");

    expect(result.found).toEqual(false);
    expect(result.searchPath).toContainEqual("a");
    expect(result.searchPath).toContainEqual("b");
    expect(result.searchPath).toContainEqual("c");
    expect(result.searchPath).toContainEqual("d");
    expect(result.searchPath).toContainEqual("e");
  });
});

export {};
