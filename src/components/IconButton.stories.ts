import type { Meta, StoryObj } from '@storybook/vue3';
import { icons } from 'feather-icons';

import IconButton from './IconButton.vue';

const meta: Meta<typeof IconButton> = {
    title: 'Molecule/IconButton',
    component: IconButton,
    argTypes: {
      size: {
        control: 'inline-radio',
        options: ['regular', 'small']
      },
      name: {
        control: 'select',
        options: Object.keys(icons)
      },
      state: {
        control: 'inline-radio',
        options: ['regular', 'inverted']
      },
      intent: {
        control: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: `<IconButton v-bind="args"></IconButton>`,
  }),
  args: {
    size: 'regular',
    name: 'settings'
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: `<IconButton v-bind="args"></IconButton>`,
  }),
  args: {
    size: 'small',
    name: 'settings'
  },
};