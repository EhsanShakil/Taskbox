import React from "react";
import InboxScreen from "../Components/InboxScreen";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  component: InboxScreen,
  title: "InboxScreen",
} as Meta;

const Template: Story<any> = (args) => <InboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something Went Wrong",
};