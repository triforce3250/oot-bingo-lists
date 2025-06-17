import { BingoList } from "oot-bingo-generator/build/types/goalList";
import { Mode, Profile } from "oot-bingo-generator/build/types/settings";
import { BingoBoard } from "oot-bingo-generator/build/bingoBoard";
import { Generator } from "./types/GeneratorTypes";
import { Generator_V1 } from "./generators/generator_v1";
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
import { bingoList_v10_3_2 } from "./bingoLists/v10_3_2";
import { bingoList_v10_4 } from "./bingoLists/v10_4";
import { bingoList_v10_5 } from "./bingoLists/v10_5";
import { bingoList_v10_5_1 } from "./bingoLists/v10_5_1";

const bingoListPerVersion = {
  "v9.1": { bingoList: bingoList_v9_1, generator: Generator_V1 },
  "v9.2": { bingoList: bingoList_v9_2, generator: Generator_V1 },
  "v9.3": { bingoList: bingoList_v9_3, generator: Generator_V1 },
  "v9.4": { bingoList: bingoList_v9_4, generator: Generator_V1 },
  "v9.5": { bingoList: bingoList_v9_5, generator: Generator_V1 },
  "v9.5.1": { bingoList: bingoList_v9_5_1, generator: Generator_V1 },
  "v10.0": { bingoList: bingoList_v10_0, generator: Generator_V1 },
  "v10.1": { bingoList: bingoList_v10_1, generator: Generator_V1 },
  "v10.2": { bingoList: bingoList_v10_2, generator: Generator_V1 },
  "v10.3": { bingoList: bingoList_v10_3, generator: Generator_V1 },
  "v10.3.1": { bingoList: bingoList_v10_3_1, generator: Generator_V1 },
  "v10.3.2": { bingoList: bingoList_v10_3_2, generator: Generator_V1 },
  "v10.4": { bingoList: bingoList_v10_4, generator: Generator_V1 },
  "v10.5": { bingoList: bingoList_v10_5, generator: Generator_V1 },
  "v10.5.1": { bingoList: bingoList_v10_5_1, generator: Generator_V1 },
} as const;

export type BingoVersion = keyof typeof bingoListPerVersion;
export const latestBingoVersion: BingoVersion = "v10.5.1";

export const isBingoVersion = (str: string): str is BingoVersion => {
  return str in bingoListPerVersion;
};

/**
 * Get bingo goal list of a specific bingo version
 * @param version
 * @return An object with the (combined) goal list for normal and short bingo
 */
export function getBingoList(version: BingoVersion): BingoList {
  return bingoListPerVersion[version].bingoList;
}

/**
 * Get the generator that belongs to a specific bingo version
 * @param version
 * @return An object containing the generator functions
 */
export function getGenerator(version: BingoVersion): Generator {
  return bingoListPerVersion[version].generator;
}

/**
 * Generate a board of a specific version (using the generator that belonged to that version)
 * @param version
 * @param mode
 * @param seed
 * @param profile
 * @return An object of class BingoBoard: contains the squares with the goals, and the number of iterations
 */
export function generateBingoBoardFromVersion(
  version: BingoVersion,
  mode: Mode,
  seed: number,
  profile?: Profile
): BingoBoard | undefined {
  const bingoList = getBingoList(version);
  const generator = getGenerator(version);
  return generator.generateBingoBoard(bingoList, mode, seed, profile);
}
