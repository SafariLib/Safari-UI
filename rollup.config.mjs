import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
            },
        ],
        plugins: [
            typescript({
                useTsconfigDeclarationDir: true,
            }), // Should always come first
            postcss(),
            commonjs({
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }),
            resolve(),
            external(),
        ],
        external: ['react', 'react-dom'],
    },
];
