// Footer.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

interface FooterProps {
  style: "footer-1" | "footer-2" | "footer-3";
}

const meta: Meta = {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Footer1: StoryObj<FooterProps> = {
  args: {
    style: "footer-1",
  },
};

export const Footer2: StoryObj<FooterProps> = {
  args: {
    style: "footer-2",
  },
};

export const Footer3: StoryObj<FooterProps> = {
  args: {
    style: "footer-3",
  },
};
