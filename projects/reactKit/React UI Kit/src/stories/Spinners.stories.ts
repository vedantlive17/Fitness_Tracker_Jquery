// Spinners.stories.ts
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinners';

interface SpinnerProps {
  type: '1' | '2' | '3' | '4' | '5' | '6';
}

const meta: Meta = {
  title: 'Example/Spinners',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Spinner1: StoryObj<SpinnerProps> = {
    args: {
      type: "1",
    },
  };
  
  export const Spinner2: StoryObj<SpinnerProps> = {
    args: {
      type: "2",
    },
  };
  
  export const Spinner3: StoryObj<SpinnerProps> = {
    args: {
      type: "3",
    },
  };
