import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';
import { action } from '@storybook/addon-actions';
import {Images} from '../../../configs/images';


export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  variant: 'only-icon',
  width: '48px',
  height: '48px',
  padding: '16px 9px',
  margin: '0',
  backgroundColor: '#e7eaf3',
  border: 'none',
  borderRadius: 'none',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
};

export const ButtonIconText = Template.bind({});
ButtonIconText.args = {
  variant: 'btn-style',
  width: '232px',
  height: '38px',
  padding: '0px 24px 0px 45px',
  margin:'0 0',
  backgroundColor: '#fff',
  border: '1px solid #e0f3ff',
  borderRadius: '4px',
  linkIcon: Images.DashboardIcon,
  title: "Dashboard AI-TOEIC",
  onClick: action('on-click'),
};

export const ButtonSearch = Template.bind({});
ButtonSearch.args = {
  variant: 'btn-search',
  width: '42px',
  height: '42px',
  padding: '0 0',
  margin: '0',
  backgroundColor: 'rgba(0,0,0,.06)',
  border: '1px solid #e9ecef',
  borderRadius: '50%',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
};
