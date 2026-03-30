import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/** @type {import("eslint").Linter.Config[]} */
const nextConfigs = require("eslint-config-next/core-web-vitals");

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**"] },
  ...nextConfigs,
];

export default eslintConfig;
