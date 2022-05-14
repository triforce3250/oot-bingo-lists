# OoT Bingo Lists

## Install

```
npm install oot-bingo-lists
```

## Supported bingo versions

* `v9.4`
* `v10.0`
* `v10.1`

## Usage

Use the `getBingoList()` function to retrieve the bingo list of a specific bingo version:

```ts
import { getBingoList } from "oot-bingo-lists";

const bingoList = getBingoList("v10.1");
```

With the [OoT Bingo Generator](https://github.com/xwmtp/oot-bingo-generator) installed as
well (`npm install oot-bingo-generator`), you can use these bingo lists to generate a board:

```ts
import { getBingoList } from "oot-bingo-lists";
import { generateBoard } from "oot-bingo-generator";

const bingoList = getBingoList("v10.1");
const board = generateBoard(bingoList, "blackout", 654321);
```

### Latest version

Get the latest bingo list:

```ts
import { getBingoList } from "oot-bingo-lists";
import { latestBingoVersion } from "oot-bingo-lists";

const bingoList = getBingoList(latestBingoVersion);
```
