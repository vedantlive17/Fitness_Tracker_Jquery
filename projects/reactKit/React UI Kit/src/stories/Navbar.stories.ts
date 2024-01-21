// Navbar.stories.ts
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

interface NavbarProps {
    style: 'navbar-1' | 'navbar-2' | 'navbar-3';
}

const meta: Meta = {
    title: 'Example/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Navbar1: StoryObj<NavbarProps> = {
    args: {
        style: 'navbar-1',
    },
};

export const Navbar2: StoryObj<NavbarProps> = {
    args: {
        style: 'navbar-2',
    },
};

export const Navbar3: StoryObj<NavbarProps> = {
    args: {
        style: 'navbar-3',
    },
};