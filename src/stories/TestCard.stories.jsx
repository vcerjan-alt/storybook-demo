import React from 'react';

import { TestCard } from '../common/components/cards/TestCard';

export default {
  title: 'Components/TestCard',
  component: TestCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <TestCard {...args} />;

export const TestCardContributor = Template.bind({});
TestCardContributor.args = {
};
