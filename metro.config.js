// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const {
  transformer,
  resolver: { sourceExts, assetExts },
} = config;

config.transformer = {
  ...transformer,
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
};

const defaultSourceExts = [...sourceExts, "svg", "mjs", "cjs"];

config.resolver = {
  assetExts: assetExts.filter((ext) => ext !== "svg"),
  sourceExts: process.env.TEST_REACT_NATIVE
    ? ["e2e.js"].concat(defaultSourceExts)
    : defaultSourceExts,
  extraNodeModules: {
    assert: require.resolve("empty-module"), // assert can be polyfilled here if needed
    http: require.resolve("empty-module"), // stream-http can be polyfilled here if needed
    https: require.resolve("empty-module"), // https-browserify can be polyfilled here if needed
    os: require.resolve("empty-module"), // os-browserify can be polyfilled here if needed
    url: require.resolve("empty-module"), // url can be polyfilled here if needed
    zlib: require.resolve("empty-module"), // browserify-zlib can be polyfilled here if needed
    crypto: require.resolve("crypto-browserify"), // Node.jsのcryptoモジュールのpolyfill
    stream: require.resolve("readable-stream"), // Node.jsのstreamモジュールのpolyfill
  },
};

module.exports = config;
