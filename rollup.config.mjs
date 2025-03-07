import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import { dts } from "rollup-plugin-dts";

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'esm',
                sourcemap: true,
            },
            {
                file: 'dist/index.cjs',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/index.umd.js',
                format: 'umd',
                name: 'ReactConfirmy',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@popperjs/core': 'Popper'
                },
                sourcemap: true,
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: './dist/types',
                rootDir: './src',
                exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx']
            }),
            postcss({
                extract: 'dist/styles.css',
                modules: true,
                minimize: true
            }),
            terser()
        ],
        external: ['react', 'react-dom', '@popperjs/core']
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/]
    }
];

export default config;