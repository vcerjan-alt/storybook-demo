import React from 'react';

import { Title } from '../common/components/typography/Title';

export default {
  title: 'Components/Header',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Title {...args} />;

export const Normal = Template.bind({});
