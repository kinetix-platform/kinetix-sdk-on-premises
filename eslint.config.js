import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { 
      globals: globals.node 
    },
    rules: {
      "no-useless-escape": "off",
      "no-unused-vars": ["error", { "ignoreRestSiblings": true }]
    }
  },
  pluginJs.configs.recommended,
];