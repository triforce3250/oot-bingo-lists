import bingoList_v9_4 from "./bingoLists/v9_4";
import bingoList_v10_0 from "./bingoLists/v10_0";
import bingoList_v10_1 from "./bingoLists/v10_1";
import { BingoList } from "oot-bingo-generator/build/types/goalList";

export type BingoVersion = "v9.4" | "v10.0" | "v10.1";
export const latestBingoVersion: BingoVersion = "v10.1";

export const isBingoVersion = (str: string): str is BingoVersion => {
  return ["v9.4", "v10.0", "v10.1"].includes(str);
};

/**
 * Get bingo goal list of a specific bingo version
 * @param version
 * @return An object with the (combined) goal list for normal and short bingo
 */
export function getBingoList(version: BingoVersion): BingoList | undefined {
  switch (version) {
    case "v9.4":
      return bingoList_v9_4;
    case "v10.0":
      return bingoList_v10_0;
    case "v10.1":
      return bingoList_v10_1;
    default:
      return undefined;
  }
}
