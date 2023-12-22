import type { Meta, StoryObj } from '@storybook/vue3';
import BaseNumberInput from './BaseNumberInput.vue';

const meta: Meta<typeof BaseNumberInput> = {
  title: 'Atom/BaseNumberInput',
  component: BaseNumberInput
};

export default meta;
type Story = StoryObj<typeof BaseNumberInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { BaseNumberInput },
    data() {
      return { currentValue: 1 }
    },
    setup() {
      return { args };
    },
    template: `<BaseNumberInput v-bind="args" v-model="currentValue"></BaseNumberInput>`,
  }),
  args: {
    intent: 'regular',
    size: 'regular',
    state: 'regular'
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { BaseNumberInput },
    data() {
      return { currentValue: 12 }
    },
    setup() {
      return { args };
    },
    template: `<BaseNumberInput v-bind="args" v-model="currentValue"></BaseNumberInput>`,
  }),
  args: {
    intent: 'regular',
    size: 'small',
    state: 'regular'
  },
};

export const Invalid: Story = {
  render: (args) => ({
    components: { BaseNumberInput },
    data() {
      return { currentValue: 12 }
    },
    setup() {
      return { args };
    },
    template: `<BaseNumberInput v-bind="args" v-model="currentValue"></BaseNumberInput>`,
  }),
  args: {
    intent: 'invalid',
    size: 'regular',
    state: 'regular'
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { BaseNumberInput },
    data() {
      return { currentValue: 12 }
    },
    setup() {
      return { args };
    },
    template: `<BaseNumberInput v-bind="args" v-model="currentValue"></BaseNumberInput>`,
  }),
  args: {
    intent: 'regular',
    size: 'regular',
    state: 'disabled'
  },
};