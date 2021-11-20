import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlayButton from './PlayButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/PlayButton',
  component: PlayButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PlayButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PlayButton> = (args) => <PlayButton {...args} />;

export const Detault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Detault.args = {
  playing: false,
  label: 'PlayButton',
};

