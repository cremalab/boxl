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

export default [
  {
    input: "src/web.tsx",
    output: [
      {
        file: "dist/web.js",
        format: "cjs",
        name: 'Boxl',
      },
    ],
    ...common,
  }
];
