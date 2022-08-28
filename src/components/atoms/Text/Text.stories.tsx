import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    varient: '',
    children: 'Primary Text',
    fontSize: 14,
    fontWeight: 300,
    color: 'black',
};

export const Secondary = Template.bind({});
Secondary.args = {
    varient: '',
    children: 'Secondary Text',
    fontSize: 12,
    fontWeight: 300,
    color: 'gray',
    margin: '0'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    varient: '',
    children: 'Tertiary Text',
    fontSize: 10,
    fontWeight: 300,
    color: 'black',
    margin: '0'
};
