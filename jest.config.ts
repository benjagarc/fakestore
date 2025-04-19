import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // transformIgnorePatterns: [
  //   '/node_modules/(?!react-bootstrap)/',
  //   '\\\\node_modules\\\\',
  // ],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  clearMocks: true,
};

export default createJestConfig(config);
