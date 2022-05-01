import React from 'react';

import { Title } from '../common/components/typography/Title';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    // layout: 'fullscreen',
  },
};

const Template = (args) => <Title {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'Title',
  size: 56,
}
