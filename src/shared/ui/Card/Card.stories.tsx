import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import ThemeDecorator from 'shared/lib/decorators/theme.decorator';
import { Theme } from 'app/providers/ThemeProvider';
import Card from './Card';
import Text, { TextAligin } from '../Text/Text';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
   
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const PrimaryDark: Story = {
  args: {
    children: <Text aligin={TextAligin.CENTRE} title='TITLE' text='TEXT'/>,
  },
  decorators:[ThemeDecorator(Theme.DARK)]
}
export const PrimaryLight: Story = {
  args: {
    children: <Text aligin={TextAligin.CENTRE} title='TITLE' text='TEXT'/>,
  },
 decorators:[ThemeDecorator(Theme.LIGHT)]
};

