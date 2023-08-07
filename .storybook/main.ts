import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Storybook API Builder configuration
 * @see https://storybook.js.org/docs/react/builders/vite
 */
const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['./stories/**/*.stories.@(js|tsx)', './stories/**/*.stories.mdx'],

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        '@storybook/addon-styling',
        '@storybook/addon-actions',
    ],
    typescript: {
        reactDocgen: 'react-docgen',
    },
};

export default config;
