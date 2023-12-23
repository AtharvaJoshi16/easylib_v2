import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import scss from 'rollup-plugin-scss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');


export default [{
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        postcss({
            extensions: ['.scss']
        }),
        scss({
            output: 'main.css',
            processor: () => postcss([autoprefixer()])
        }),
        copy({
            targets: [
                { src: 'stories/globals/fonts', dest: 'build/lib/esm' },
                { src: 'stories/globals/fonts', dest: 'build/lib/ejs' },
            ]
        })
    ]
}, {
    input: 'build/lib/index.d.ts',
    output: [{ file: 'build/lib/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/]
}];