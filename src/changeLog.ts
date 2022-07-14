import { Goal, GoalList } from "oot-bingo-generator/build/types/goalList";

/**
 * Print the changes between two Bingo goal lists.
 * Example usage: printChangeLog(getBingoList("v10.1").normal, getBingoList("v10.2").normal);
 *
 * @param goalList1 Goal list of the old version (normal or short list, not combined)
 * @param goalList2 Goal list of the new version (normal or short list, not combined)
 */
export function printChangeLog(goalList1: GoalList, goalList2: GoalList) {
  const goals1 = getFlatGoals(goalList1);
  const goals2 = getFlatGoals(goalList2);

  const removedGoalLogs: string[] = [];
  const addedGoalLogs: string[] = [];

  // goals removed
  for (const goal1 of goals1) {
    const goal2 = goals2.find((goal2) => goal2.id === goal1.id);
    if (!goal2) {
      removedGoalLogs.push(`* Goal *${goal1.name}* was removed`);
      continue;
    }

    // changed props
    printChangedProps(goal1, goal2);
  }

  // goals added
  for (const goal2 of goals2) {
    const matchingGoal = goals1.find((goal1) => goal2.id === goal1.id);
    if (!matchingGoal) {
      addedGoalLogs.push(`* Goal *${goal2.name}* was added`);
    }
  }

  console.log("\n**Added goals:**");
  for (const log of addedGoalLogs) {
    console.log(log);
  }

  console.log("\n**Removed goals:**");
  for (const log of removedGoalLogs) {
    console.log(log);
  }
}

function printChangedProps(goal1: Goal, goal2: Goal) {
  const propsChanged: string[] = [];

  // props changed
  for (const prop of ["name", "jp", "skill", "time"]) {
    if (goal1[prop] !== goal2[prop]) {
      propsChanged.push(
        `* Changed **${prop}** from **${goal1[prop]}** to **${goal2[prop]}**`
      );
    }
  }

  // types/subtypes/rowtypes changed

  for (const synergyType of ["types", "subtypes", "rowtypes"]) {
    const synergies1 = goal1[synergyType];
    const synergies2 = goal2[synergyType];
    const synergyTypeStr = synergyType.slice(0, -1);
    for (const category in synergies1 || {}) {
      // synergy removed
      if (!(category in synergies2)) {
        propsChanged.push(
          `* Removed ${synergyTypeStr} **${category}** (was **${synergies1[category]}**)`
        );
        continue;
      }

      // synergy changed
      if (synergies1[category] !== synergies2[category]) {
        propsChanged.push(
          `* Changed ${synergyTypeStr} **${category}** from **${synergies1[category]}** to **${synergies2[category]}**`
        );
      }
    }

    // synergy added
    for (const category in synergies2 || {}) {
      if (!(category in synergies1)) {
        propsChanged.push(
          `* Added ${synergyTypeStr} **${category}** with value **${synergies2[category]}**`
        );
      }
    }
  }

  if (propsChanged.length > 0) {
    console.log(`\n**${goal2.name}**`);
    for (const log of propsChanged) {
      console.log(log);
    }
  }
}

function getFlatGoals(goalList: GoalList): Goal[] {
  const flatGoals: Goal[] = [];
  for (let diff = 0; diff < 50; diff++) {
    for (const goal of goalList[diff.toString()]) {
      flatGoals.push(goal);
    }
  }
  return flatGoals.sort((a, b) => b.difficulty - a.difficulty);
}
