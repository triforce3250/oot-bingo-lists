import { getChangeLog } from "../changeLog";
import { getBingoList } from "../index";
import { exampleBingoList } from "./exampleBingoList";

const previousBingoList = getBingoList("v10.3.1").normal;
const proposedBingoList = exampleBingoList.normal;

// Print changelog between a previous and a proposed version
const logs = getChangeLog(previousBingoList, proposedBingoList);
console.log(logs.join("\n"));
