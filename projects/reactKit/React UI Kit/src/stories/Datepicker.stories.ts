import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from './datepicker';

const meta: Meta = {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<typeof DatePicker> = {
  args: {
    disabled: false,
  },
};

export const Disabled: StoryObj<typeof DatePicker> = {
  args: {
    disabled: true,
  },
};
