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
  variant: 'btn-icon',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
};

export const ButtonIconText = Template.bind({});
ButtonIconText.args = {
    variant: 'btn-icon-text',
    linkIcon: Images.DashboardIcon,
    title: "Dashboard AI-TOEIC",
    onClick: action('on-click'),
    imageWidth: '22px',
    imageHeight: '22px'
};

export const ButtonSearch = Template.bind({});
ButtonSearch.args = {
  variant: 'btn-search',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
  imageWidth: '22px',
  imageHeight: '22px'
};

export const MailBox = Template.bind({});
MailBox.args = {
  variant: 'btn-mail',
  linkIcon: Images.MailIcon,
  title: "0",
  onClick: action('on-click'),
  imageWidth: '24px',
  imageHeight: '24px',
  textVariant: 'txt-mail'
};

export const NotificationBox = Template.bind({});
NotificationBox.args = {
  variant: 'btn-notify',
  linkIcon: Images.MessageIcon,
  title: "0",
  onClick: action('on-click'),
  imageWidth: '24px',
  imageHeight: '24px',
  textVariant: 'txt-notify',
};