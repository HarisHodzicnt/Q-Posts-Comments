export default {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "@root(.*)$": "<rootDir>/src/$1",
    "@components(.*)$": "<rootDir>/src/components/$1",
    "@utils(.*)$": "<rootDir>/src/utils/$1",
    "@assets(.*)$": "<rootDir>/src/assets/$1",
    "@hoc(.*)$": "<rootDir>/src/hoc/$1",
    "@constants(.*)$": "<rootDir>/src/constants/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testMatch: ["**/__tests__/**/*.{ts,tsx}", "**/?(*.)+(spec|test).{ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
};
