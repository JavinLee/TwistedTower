import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

for (const file of [
  "package.json",
  "next.config.mjs",
  "tsconfig.json",
  "vitest.config.ts",
  "tests/setup.ts",
  ".gitignore",
]) {
  assert.ok(fs.existsSync(path.join(root, file)), `Missing ${file}`);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
assert.equal(packageJson.scripts.typecheck, "next typegen && tsc --noEmit --incremental false --skipLibCheck false");
assert.equal(
  packageJson.scripts.test,
  "npm run typecheck && vitest run --passWithNoTests && node tests/config-contract.test.mjs",
);
assert.ok(packageJson.dependencies["@next/mdx"]);
assert.ok(packageJson.devDependencies.vitest);

const tsconfig = JSON.parse(fs.readFileSync(path.join(root, "tsconfig.json"), "utf8"));
assert.deepEqual(tsconfig.compilerOptions.paths["@/*"], ["./src/*"]);

const nextConfig = fs.readFileSync(path.join(root, "next.config.mjs"), "utf8");
assert.match(nextConfig, /@next\/mdx/);

const vitestConfig = fs.readFileSync(path.join(root, "vitest.config.ts"), "utf8");
assert.match(vitestConfig, /environment:\s*["']jsdom["']/);
