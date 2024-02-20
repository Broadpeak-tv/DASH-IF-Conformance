// import commonjs from 'rollup-plugin-commonjs'
// import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const pkg = require("./package.json")

export default {
  input: `src/DashParser.js`,
  output: [{
    file: pkg.main,
    format: "umd",
    sourcemap: true,
    exports: "auto",
    name: 'DashParser'
  }],
  plugins: [
    // Compile TypeScript files
    // typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    // commonjs({
    //   include: 'node_modules/**'
    // }),
    nodeResolve()
  ],
  external: [],
  watch: {
    include: 'src/**'
  }
}
