import React from 'react';
import { Home } from '../pages/home/Home';
import styles from '../pages/home/home.module.css'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    testColor: { control: 'color' },
  },
}
const Template = (args) => <Home {...args} />

export const SkyblueHome = Template.bind({})
SkyblueHome.args = {
  bg: styles.skyblueBg,
  font: styles.font1,
  btn: 'red',
}

export const CoralHome = Template.bind({})
CoralHome.args = {
  bg: styles.coralBg,
  font: styles.font2,
}