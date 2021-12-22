module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.envSetup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  transform: { ".(ts|tsx|js|jsx)": "babel-jest" },
  testEnvironment: "jsdom",
  testURL: "http://localhost",
};