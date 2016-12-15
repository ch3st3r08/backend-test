module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
      }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "semi": ["warn", "never"],
    "quotes": ["warn", "single"],
    "no-console": ["off"],
    "no-unused-vars": ["off"]
  }
}
