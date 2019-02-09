import { assertPathNotDirectory } from "./lib";
import { homedir } from "os";
import { join } from "path";

describe("assertPathNotDirectory", () => {
  it("doesn't throw on valid non-existing file paths", async () =>
    expect(assertPathNotDirectory(join(homedir(), '.z'))).resolves.toBe(false));
});