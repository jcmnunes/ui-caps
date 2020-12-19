import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';
import { ButtonProps } from '../src/Button/Button';
import { useTheme } from '@emotion/react';

export default {
  title: 'OPL/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Coise = () => {
  const theme = useTheme();

  console.log('theme', theme);

  return <div>Hello</div>;
};
