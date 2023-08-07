/**
 * Storybook API Builder configuration
 * @see https://storybook.js.org/docs/react/builders/vite
 */
export default {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['./stories/**/*.stories.@(js|jsx)', './stories/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        '@storybook/addon-styling',
        '@storybook/addon-actions',
    ],
};
