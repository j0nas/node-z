import { homedir } from "os";
import { join } from "path";

const DATA_FILE_NAME = '.z';
export const DATA_FILE_PATH: string = process.env._Z_DATA || join(homedir(), DATA_FILE_NAME);
