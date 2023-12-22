import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';

const buttonArgTypes: ArgTypes = {
  intent: {
    control: 'inline-radio',
    options: ['primary', 'secondary'],
  },
  size: {
    control: 'inline-radio',
    options: ['regular', 'small'],
  },
  state: {
    control: 'inline-radio',
    options: ['regular', 'inverted'],
  },
  type: {
    control: 'inline-radio',
    options: ['regular', 'rounded'],
  },
};

const meta: Meta<typeof BaseButton> = {
  title: 'Atom/BaseButton',
  component: BaseButton,
  argTypes: buttonArgTypes,
  parameters: {
    slots: {
      default: 'Buy awesome product'
    }
  }
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `
    <BaseButton v-bind="args">
      {{ args.default ? args.default : 'Default slot' }}
    </BaseButton>`,
  }),
  args: {
    intent: 'primary',
    size: 'regular'
  },
};

export const Secondary: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `
    <BaseButton v-bind="args">
      {{ args.default ? args.default : 'Default slot' }}
    </BaseButton>`,
  }),
  args: {
    intent: 'secondary',
    size: 'regular'
  },
};

export const Inverted: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `<BaseButton v-bind="args">{{ args.default ? args.default : 'Default slot' }}</BaseButton>`,
  }),
  args: {
    intent: 'primary',
    state: 'inverted'
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `
    <BaseButton v-bind="args">
      {{ args.default ? args.default : 'Default slot' }}
    </BaseButton>`,
  }),
  args: {
    intent: 'primary',
    size: 'small'
  },
};

export const ButtonWithIcon: Story = {
  render: (args) => ({
    components: { BaseButton, BaseIcon },
    setup() {
      return { args };
    },
    template: `
    <BaseButton v-bind="args">
      <BaseIcon name="check-circle" :size="(args.size === 'regular' ? 24 : 16)"></BaseIcon>
      {{ args.default ? args.default : 'Default slot' }}
      <BaseIcon name="arrow-right" :size="(args.size === 'regular' ? 24 : 16)"></BaseIcon>
    </BaseButton>`,
  }),
  args: {
    intent: 'primary',
    size: 'regular'
  },
};