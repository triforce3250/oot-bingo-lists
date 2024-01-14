# OoT Bingo Lists

![image](https://img.shields.io/npm/v/oot-bingo-lists)

Provides the **bingo goal lists** and **generators** of various Ocarina of Time Bingo versions.

Related packages:

* [oot-bingo-generator](https://www.npmjs.com/package/oot-bingo-generator) Latest version of the generator, and lots of
  documentation
* [oot-bingo-tools](https://www.npmjs.com/package/oot-bingo-tools) Handy helper functions like frequency analysis and
  changelog generation

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
* `v10.4`

## Usage

### Bingo lists and generators

Use the `getBingoList()` function to retrieve the bingo list of a specific bingo version:

```ts
import { getBingoList } from "oot-bingo-lists";

const bingoList = getBingoList("v10.2");
```

Note that the latest version of the [oot-bingo-generator](https://www.npmjs.com/package/oot-bingo-generator) might not
match with the generator that was used for a specific bingo version.
Get a version specific generator with `getGenerator()`:

```ts
import { getGenerator } from "oot-bingo-lists";

const generator = getGenerator("v10.2");
```

#### Latest version

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

## Run source code directly

If you would like to work with the source code directly rather than installing this as a package, you can clone the repo
and
install the dependencies:

```sh
npm run install
```

### Build

Create a build of the package outputted in the folder `build`:

```sh
npm run build
```

### Publish

Publish the package to NPM:

```
npm run prepare
npm publish
```