/**
 * Run shell commands with Bun example
 *
 * Run with:
 * bun run bun-shell-commands.ts
 */

const { stdout, stderr } = Bun.spawn(["ls", "-l", ".."]);
const stdoutStr = await new Response(stdout).text();
const stderrStr = await new Response(stderr).text();
console.log("STDOUT:", stdoutStr, ", STDERR:", stderrStr);

export {};
