import { getChangeLog } from "../changeLog";
import { generateBingoBoardFromVersion, getBingoList } from "../index";
import { exampleBingoList } from "./exampleBingoList";

const previousBingoList = getBingoList("v10.3.1").normal;
const proposedBingoList = exampleBingoList.normal;

// Print changelog between a previous and a proposed version
const logs = getChangeLog(previousBingoList, proposedBingoList);
console.log(logs.join("\n"));

// Generate a board of a specific version (using the corresponding generator),
// and prints the goal names
const board = generateBingoBoardFromVersion("v10.3", "normal", 12345);
console.log(board.goalNames);
