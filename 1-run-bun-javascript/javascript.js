/**
 * Vanilla JavaScript Example
 *
 * Run with:
 * bun run javascript.js
 */

const string = "running bun...";

for (let i = 1; i < string.length; i++) {
  const toPrint = string.substring(0, i);
  console.log(toPrint);
}
