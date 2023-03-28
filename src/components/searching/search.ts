export interface Result {
  searchValue: string;
  searchPath: string[];
  found: boolean;
}

abstract class Search {
  constructor(protected values: string[]) {}

  abstract search(searchValue: string): Result;
}

export class LinearSearch extends Search {
  search(searchValue: string): Result {
    const result = {
      found: false,
      searchPath: [] as string[],
      searchValue,
    };
    for (const value of this.values) {
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
  search(searchValue: string): Result {
    const result = {
      found: false,
      searchPath: [] as string[],
      searchValue,
    };
    const n = this.values.length;
    this.values.push(searchValue);
    let i = 0;
    result.searchPath.push(this.values[0]);
    while (searchValue !== this.values[i]) {
      result.searchPath.push(this.values[i]);
      i++;
    }
    if (i < n) {
      result.found = i < n;
      result.searchPath.push(searchValue);
    }
    return result;
  }
}
