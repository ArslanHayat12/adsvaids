import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src';
import { NavBar } from '../src/components/Navbar';
import 'antd/dist/antd.css';

const meta: Meta = {
  title: 'Welcome',
  component: NavBar,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<Props> = args => (
  <NavBar selectedPage="item1">Test</NavBar>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const NavBarStory = Template.bind({});

NavBarStory.args = {};
