const dotenv = require("dotenv");
const { readFileSync } = require("fs");
const pkg = require("./package.json");
const parseEnvVariables = (filepath) => {
  const envVars = Object.entries(dotenv.parse(readFileSync(filepath))).reduce(
    (env, [key, value]) => {
      env[key] = JSON.stringify(value);
      return env;
    },
    {},
  );
  envVars.VITE_PKG_NAME = '"@excalidraw/excalidraw"';
  envVars.VITE_PKG_VERSION = '"0.17.3"';
  envVars.VITE_IS_EXCALIDRAW_NPM_PACKAGE = JSON.stringify(true);
  return envVars;
};

module.exports = { parseEnvVariables };
