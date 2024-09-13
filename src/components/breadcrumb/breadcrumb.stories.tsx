import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./breadcrumb";
import { BreadcrumbsProps } from "./breadcrumbs.type";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumb",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    variant: "medium",
    datas: [
      { title: "Home", path: "/" },
      { title: "Menu", path: "/menu" },
      { title: "Menu", path: "/menu" },
      { title: "Menu", path: "/menu" },
      { title: "Menu", path: "/menu" },
    ],
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {
  args: {
    variant: "medium",
    datas: [
      { title: "Home", path: "/" },
      { title: "Menu", path: "/menu" },
      { title: "Menu", path: "/menu" },
      { title: "Menu", path: "/menu" },
      { title: "Menu", path: "/menu" },
    ],
  },
};

export const small: Story = {
  args: {
    variant: "small",
  },
};

export const large: Story = {
  args: {
    variant: "large",
  },
};
