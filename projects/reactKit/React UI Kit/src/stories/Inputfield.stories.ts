import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from './inputfield';

const meta: Meta = {
  title: 'Example/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;

export const Default: StoryObj<typeof InputField> = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Disabled: StoryObj<typeof InputField> = {
  args: {
    disabled: true,
    placeholder: 'Disabled Input',
  },
};

export const WithError: StoryObj<typeof InputField> = {
  args: {
    error: true,
    placeholder: 'Input with Error',
  },
};

export const Small: StoryObj<typeof InputField> = {
  args: {
    size: 'small',
    placeholder: 'Small Input',
  },
};

export const Large: StoryObj<typeof InputField> = {
  args: {
    size: 'large',
    placeholder: 'Large Input',
  },
};
