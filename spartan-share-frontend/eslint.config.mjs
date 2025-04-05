import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
    settings: {
      react: {
        version: "detect", 
      },
    },
    ignores: ["node_modules", ".next"], 
  },
];

export default eslintConfig;
