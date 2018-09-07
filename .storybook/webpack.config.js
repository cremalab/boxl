const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    include: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../stories"),
    ],
    loader: require.resolve("ts-loader"),
    test: /\.(ts|tsx)$/,
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
