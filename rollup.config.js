import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

const jsConfig = {
    input: 'src/index.ts',
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/material',
    ],
    plugins: [
        peerDepsExternal(),
        nodeResolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        babel({ babelHelpers: 'bundled' }),
        terser(),
    ],
    treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
    },
    // onwarn(warning, warn) {
    //     if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
    //     if (warning.plugin === 'preserve-directives' && warning.message.includes('preserveModules: true')) return;
    //     warn(warning);
    // },
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
};

const typeConfig = {
    input: 'src/index.ts',
    plugins: [dts()],
    output: [{ file: 'lib/types.d.ts', format: 'es' }],
};

export default [jsConfig, typeConfig];
