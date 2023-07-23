// const tailwindSort = require("")

/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 120,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    // "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    // "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    // "^@/app/(.*)$",
    // "",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    "@ianvs/prettier-plugin-sort-imports",
  ],
}
