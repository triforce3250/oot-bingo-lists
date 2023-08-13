import { getChangeLog } from "../changeLog";
import { getBingoList } from "../index";

describe("changeLog", () => {
  it("generates the correct changelog", () => {
    const logs = getChangeLog(getBingoList("v10.2").normal, getBingoList("v10.3").normal);

    expect(logs).toMatchSnapshot();
  });

  it("does not display anything when there are no changes", () => {
    const logs = getChangeLog(getBingoList("v10.2").normal, getBingoList("v10.2").normal);

    expect(logs).toHaveLength(0);
  });
});
