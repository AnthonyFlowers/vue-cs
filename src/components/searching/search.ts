export interface Result {
  searchValue: string;
  searchPath: string[];
  found: boolean;
}

abstract class Search {
  static search: (values: string[], searchValue: string) => Result;
}

export class LinearSearch extends Search {
  static search(values: string[], searchValue: string): Result {
    const result = {
      found: false,
      searchPath: [] as string[],
      searchValue,
    };
    for (const value of values) {
      result.searchPath.push(value);
      if (value === searchValue) {
        result.found = true;
        break;
      }
    }
    return result;
  }
}

export class SentinelLinearSearch extends Search {
  static search(values: string[], searchValue: string): Result {
    const result = {
      found: false,
      searchPath: [] as string[],
      searchValue,
    };
    const n = values.length;
    values.push(searchValue);
    let i = 0;
    result.searchPath.push(values[0]);
    while (searchValue !== values[i]) {
      result.searchPath.push(values[i]);
      i++;
    }
    if (i < n) {
      result.found = i < n;
      result.searchPath.push(searchValue);
    }
    return result;
  }
}
