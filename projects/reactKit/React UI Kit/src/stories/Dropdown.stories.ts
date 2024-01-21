// Dropdown.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

interface DropdownProps {
  options: string[];
  styleType: 'style1' | 'style2';
  label: string;
}

const meta: Meta<DropdownProps> = {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    styleType: {
      control: { type: 'select', options: ['style1', 'style2'] },
    },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

export const Style1: StoryObj<DropdownProps> = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    styleType: 'style1',
    label: 'Primary Dropdown',
  },
};

export const Style2: StoryObj<DropdownProps> = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    styleType: 'style2',
    label: 'Secondary Dropdown',
  },
};
