import '@fontsource/material-icons';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
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
