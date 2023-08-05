import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        options: {
            storySort: {
                order: [
                    // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
                    '*',
                ],
            },
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
};

export default preview;
