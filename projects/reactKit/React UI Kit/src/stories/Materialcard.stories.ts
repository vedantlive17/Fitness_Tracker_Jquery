// MaterialCard.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MaterialCard from './MaterialCard';

interface MaterialCardProps {
  cardType: 'card 1' | 'card 2';
  title: string;
  duration: string;
  items: string[];
}

const meta: Meta<MaterialCardProps> = {
  title: 'Example/MaterialCard',
  component: MaterialCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    duration: { control: 'text' },
    items: { control: 'array' },
  },
};

export default meta;

export const DefaultCard: StoryObj<MaterialCardProps> = {
  args: {
    cardType: 'Card 1',
    title: "Card Title",
    duration: "Duration",
    items: ["Item 1", "Item 2", "Item 3"],
  },
};

export const TechCard: StoryObj<MaterialCardProps> = {
  args: {
    cardType: 'card 2',
    title: "Title",
    category: "Header",
    description: "Description",
    date: "Today",
    time: "Now",
  },
};