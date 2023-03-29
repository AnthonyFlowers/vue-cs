export interface Result {
  algorithm: string;
  searchValue: string;
  searchPath: string[];
  found: boolean;
  index: number;
}

abstract class Search {
  static search: (values: string[], searchValue: string) => Result;
}

export class LinearSearch extends Search {
  static search(values: string[], searchValue: string): Result {
    const result = {
      algorithm: "Linear",
      found: false,
      searchPath: [] as string[],
      searchValue,
      index: -1,
    };
    for (let i = 0; i < values.length; i++) {
      result.searchPath.push(values[i]);
      if (values[i] === searchValue) {
        result.found = true;
        result.index = i;
        break;
      }
    }
    return result;
  }
}

export class SentinelLinearSearch extends Search {
  static search(values: string[], searchValue: string): Result {
    const result = {
      algorithm: "Sentinel",
      found: false,
      searchPath: [] as string[],
      searchValue,
      index: -1,
    };
    const n = values.length;
    values.push(searchValue);
    let i = 0;
    while (searchValue !== values[i]) {
      result.searchPath.push(values[i]);
      i++;
    }
    if (i < n) {
      result.found = i < n;
      result.searchPath.push(searchValue);
      result.index = i;
    }
    return result;
  }
}

export class BinarySearch extends Search {
  static search(values: string[], searchValue: string): Result {
    const result: Result = {
      algorithm: "Binary",
      found: false,
      searchPath: [],
      searchValue,
      index: -1,
    };
    // values.sort();
    return this.binarySearch(values, searchValue, 0, values.length - 1, result);
  }

  private static binarySearch(
    values: string[],
    searchValue: string,
    low: number,
    high: number,
    result: Result
  ): Result {
    if (low > high) return result;
    const mid = Math.floor((low + high) / 2);
    result.searchPath.push(values[mid]);
    if (searchValue === values[mid]) {
      result.found = true;
      result.index = mid;
      return result;
    } else if (searchValue > values[mid]) {
      return this.binarySearch(values, searchValue, mid + 1, high, result);
    } else {
      return this.binarySearch(values, searchValue, low, mid - 1, result);
    }
  }
}
