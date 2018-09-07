import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";

const common = {
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript(),
    filesize(),
  ],
};

export default [{
  input: "src/web.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  ...common,
},
{
  input: "src/native.tsx",
  output: [
    {
      file: pkg["react-native"],
      format: "cjs",
    },
    {
      file: pkg["react-native-module"],
      format: "es",
    },
  ],
  ...common,
},
];
