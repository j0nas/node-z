import { stat, exists } from "fs";
import { promisify } from "util";
import { DATA_FILE_PATH } from "./consts";

export async function assertPathNotDirectory(): Promise<boolean> {
  if (!(await promisify(exists)(DATA_FILE_PATH))) {
    return false;
  }

  const { isFile } = await promisify(stat)(DATA_FILE_PATH);
  if (!isFile()) {
    throw Error(`ERROR: node-z's datafile (${DATA_FILE_PATH}) is a directory.`);
  }

  return true;
}