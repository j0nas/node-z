import { assertPathNotDirectory } from "./lib";

describe("assertPathNotDirectory", () => {
  it("doesn't throw on valid non-existing file paths", async () => {
    expect(assertPathNotDirectory()).resolves.toBe(false);
  });
});