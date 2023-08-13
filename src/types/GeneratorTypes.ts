import { BingoList } from "oot-bingo-generator/build/types/goalList";
import { Mode, Profile } from "oot-bingo-generator/build/types/settings";
import {
  bingoGenerator,
  generateBingoBoard,
  ootBingoGenerator,
} from "oot-bingo-generator";

export interface Generator {
  ootBingoGenerator: (
    bingoList: BingoList,
    options: BingoOptions
  ) => ReturnType<typeof ootBingoGenerator>;
  bingoGenerator: (
    bingoList: BingoList,
    options: BingoOptions
  ) => ReturnType<typeof bingoGenerator>;
  generateBingoBoard: (
    bingoList: BingoList,
    mode: Mode,
    seed: number,
    profile?: Profile
  ) => ReturnType<typeof generateBingoBoard>;
}

interface BingoOptions {
  mode: Mode;
  seed: number;
}
