import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./toast";
import { ToastProps } from "./toast.type";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "danger", "information", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    type: {
      control: "select",
      options: ["information", "notification"],
    },
  },
  args: {
    title: "Info Min",
    message: "Give short additional message here. Maximum 2 Line",
    variant: "information",
    size: "medium",
    type: "information",
    duration: 99999999999999,
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    message: "Give short additional message here. Maximum 2 Line",
    variant: "information",
    size: "medium",
    type: "information",
  },
};

export const Success: Story = {
  args: {
    title: "Sukses Min",
    message: "Give short additional message here. Maximum 2 Line",
    variant: "success",
    size: "medium",
    type: "notification",
  },
};

export const Danger: Story = {
  args: {
    title: "Error Min",
    message: "Give short additional message here. Maximum 2 Line",
    variant: "danger",
    size: "medium",
    type: "notification",
  },
};

export const Warning: Story = {
  args: {
    title: "Bahaya Min",
    message: "Give short additional message here. Maximum 2 Line",
    variant: "warning",
    size: "medium",
    type: "information",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
