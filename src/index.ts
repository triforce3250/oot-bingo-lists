import { BingoList } from "oot-bingo-generator/build/types/goalList";
import { bingoList_v9_1 } from "./bingoLists/v9_1";
import { bingoList_v9_2 } from "./bingoLists/v9_2";
import { bingoList_v9_3 } from "./bingoLists/v9_3";
import { bingoList_v9_4 } from "./bingoLists/v9_4";
import { bingoList_v9_5 } from "./bingoLists/v9_5";
import { bingoList_v9_5_1 } from "./bingoLists/v9_5_1";
import { bingoList_v10_0 } from "./bingoLists/v10_0";
import { bingoList_v10_1 } from "./bingoLists/v10_1";
import { bingoList_v10_2 } from "./bingoLists/v10_2";
import { bingoList_v10_3 } from "./bingoLists/v10_3";
import { bingoList_v10_3_1 } from "./bingoLists/v10_3_1";

const bingoListPerVersion = {
  "v9.1": bingoList_v9_1,
  "v9.2": bingoList_v9_2,
  "v9.3": bingoList_v9_3,
  "v9.4": bingoList_v9_4,
  "v9.5": bingoList_v9_5,
  "v9.5.1": bingoList_v9_5_1,
  "v10.0": bingoList_v10_0,
  "v10.1": bingoList_v10_1,
  "v10.2": bingoList_v10_2,
  "v10.3": bingoList_v10_3,
  "v10.3.1": bingoList_v10_3_1,
} as const;

export type BingoVersion = keyof typeof bingoListPerVersion;
export const latestBingoVersion: BingoVersion = "v10.3";

export const isBingoVersion = (str: string): str is BingoVersion => {
  return str in bingoListPerVersion;
};

/**
 * Get bingo goal list of a specific bingo version
 * @param version
 * @return An object with the (combined) goal list for normal and short bingo
 */
export function getBingoList(version: BingoVersion): BingoList {
  return bingoListPerVersion[version];
}
