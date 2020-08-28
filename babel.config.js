module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = [
      "transform-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-modules-commonjs"
  ];

  return {
    presets,
    plugins
  };
};
