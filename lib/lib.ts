import { stat, exists } from "fs";
import { promisify } from "util";

export async function assertPathNotDirectory(path: string) {
  if (!(await promisify(exists)(path))) {
    return false;
  }

  const { isFile } = await promisify(stat)(path);
  if (!isFile()) {
    throw Error(`ERROR: node-z's datafile (${path}) is a directory.`);
  }

  return true;
}