#!/usr/bin/env node
// Fails if index.html references a local file (src/href) that does not exist in the repo.
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const file = process.argv[2] ?? 'index.html';
const root = path.dirname(path.resolve(file));
const html = readFileSync(file, 'utf8');

const refs = new Set();
for (const [, ref] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  if (/^(?:[a-z]+:|\/\/|#|data:|\$\{)/i.test(ref)) continue; // external, anchor, data URI, template string
  refs.add(ref.split(/[?#]/)[0]);
}
for (const [, ref] of html.matchAll(/import\('(\.\/[^']+)'\)/g)) refs.add(ref);

const missing = [...refs].filter((ref) => !existsSync(path.join(root, decodeURIComponent(ref))));
if (missing.length) {
  console.error(`Missing local assets referenced by ${file}:`);
  for (const ref of missing) console.error(`  - ${ref}`);
  process.exit(1);
}
console.log(`Asset check passed: ${refs.size} local reference(s) resolved.`);
