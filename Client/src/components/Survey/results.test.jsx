import { formatJobList, formatQueryParams } from "./results";

describe("Page Results : formatJobList", () => {
  it("should add + to non-last items of the list", () => {
    const expectedState = "item2 + ";
    expect(formatJobList("item2", 3, 1)).toEqual(expectedState);
  });
  it("should not add + to last item of the list", () => {
    const expectedState = "itemLast";
    expect(formatJobList("itemLast", 3, 2)).toEqual(expectedState);
  });
});

describe("Page Results : formatQueryParams", () => {
  it("should format correctly a single param", () => {
    const expectedState = "a1=8";
    expect(formatQueryParams({ 1: 8 })).toEqual(expectedState);
  });
  it("should concatenate multiple params with &", () => {
    const expectedState = "a1=1&a2=2&a3=0";
    expect(formatQueryParams({ 1: 1, 2: 2, 3: 0 })).toEqual(expectedState);
  });
  it("should return an empty string if no params", () => {
    const expectedState = "";
    expect(formatQueryParams({})).toEqual(expectedState);
  });
});
