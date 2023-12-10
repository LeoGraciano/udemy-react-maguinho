module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    extraFileExtensions: [".css", ".svg"],
  },
  plugins: ["react-refresh"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
