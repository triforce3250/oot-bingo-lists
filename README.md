# OoT Bingo Lists

![image](https://img.shields.io/npm/v/oot-bingo-lists)

Provides the bingo goal lists of various Ocarina of Time Bingo versions. Also contains a function to print all the
changes between two Bingo versions.

## Install

```
npm install --save oot-bingo-lists
```

## Supported bingo versions

* `v9.1`
* `v9.2`
* `v9.3`
* `v9.4`
* `v9.5`
* `v9.5.1`
* `v10.0`
* `v10.1`
* `v10.2`
* `v10.3`
* `v10.3.1`
* `v10.3.2`

## Usage

### Bingo lists

Use the `getBingoList()` function to retrieve the bingo list of a specific bingo version:

```ts
import { getBingoList } from "oot-bingo-lists";

const bingoList = getBingoList("v10.2");
```

### Latest version

Get the bingo list of the latest version:

```ts
import { getBingoList, latestBingoVersion } from "oot-bingo-lists";

const bingoList = getBingoList(latestBingoVersion);
```

### Generate boards

It's also possible to generate boards. The package will use the generator that actually belonged to your
specified version, so that the resulting boards are correct:

```ts
import { generateBingoBoardFromVersion } from "oot-bingo-lists";

const board = generateBingoBoardFromVersion("v9.3", "blackout", 654321);
```

### Changelog

Print the changes between an old and new version. The provided goal lists should be of a single mode (like normal or
short), not combined:

```ts
import { printChangeLog, getBingoList } from "oot-bingo-lists";

printChangeLog(getBingoList("v10.1").normal, getBingoList("v10.2").normal);
```

## Sandbox

If you're running this project directly instead of importing it in another project, you can run `npm start` to
execute `src/sandbox/main.ts`. This file:

* Contains an example of how to generate a changelog between two versions. Put
  your own proposed bingo list in `exampleBingoList.ts` to see which changes it has compared to an existing version.
* Demonstrates how to generate a board of a specific version and print the goal names.

Add your own code to this file to access bingo lists, and generate boards and changelogs.