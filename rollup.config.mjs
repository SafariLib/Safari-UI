import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const config = {
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/material',
    ],
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), preserveDirectives()],
    treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
    },
    onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
        if (warning.plugin === 'preserve-directives' && warning.message.includes('preserveModules: true')) return;
        warn(warning);
    },
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            interop: 'default',
        },
        {
            dir: 'dist/module',
            format: 'esm',
            preserveModules: true,
        },
    ],
};

export default config;
