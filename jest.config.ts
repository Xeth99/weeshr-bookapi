import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ["**/test/**/*routeTest.ts"],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};

export const moduleNameMapper = {
  '^supertest$': '<rootDir>/node_modules/supertest'
};

export default config;
