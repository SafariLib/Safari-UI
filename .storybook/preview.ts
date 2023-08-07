import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

import '@fontsource/material-icons';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
