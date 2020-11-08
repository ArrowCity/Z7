import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputProps, Input } from '../Input';

export default {
    title: 'Z9/atoms/Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
