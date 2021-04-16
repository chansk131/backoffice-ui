import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, Props } from '../src/Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    children: {
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<Props> = args => (
  <>
    <Radio {...args} />
    <Radio {...args} label="Two" description="description" />
    <Radio {...args} label="Three" />
    <Radio {...args} label="Four" disabled />
    <Radio {...args} label="Five" checked disabled />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  label: 'Primary',
  name: 'Button',
};

export const ContainedPrimaryDense = Template.bind({});
ContainedPrimaryDense.args = {
  color: 'primary',
  dense: true,
};

export const ContainedError = Template.bind({});
ContainedError.args = {
  color: 'error',
};

export const OutlinedDefault = Template.bind({});
OutlinedDefault.args = {
  variant: 'outlined',
  color: 'default',
};

export const OutlinedDefaultDense = Template.bind({});
OutlinedDefaultDense.args = {
  variant: 'outlined',
  color: 'default',
  dense: true,
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
};

export const OutlinedError = Template.bind({});
OutlinedError.args = {
  variant: 'outlined',
  color: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
