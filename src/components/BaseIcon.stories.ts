import type { Meta, StoryObj } from '@storybook/vue3';
import BaseIcon from './BaseIcon.vue';
import { icons } from 'feather-icons';

const meta: Meta<typeof BaseIcon> = {
    title: 'Atom/BaseIcon',
    component: BaseIcon,
    argTypes: {
      name: {
        control: 'select',
        options: Object.keys(icons)
      },
      size: {
        control: 'number'
      }
    }
};

export default meta;
type Story = StoryObj<typeof BaseIcon>;

export const Primary: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args };
    },
    template: `<BaseIcon v-bind="args"></BaseIcon>`,
  }),
  args: {
    name: 'cloud-rain',
    size: 24
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args };
    },
    template: `<BaseIcon v-bind="args"></BaseIcon>`,
  }),
  args: {
    name: 'check-square',
    size: 16
  },
};

export const AllIcons: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      const iconNames = Object.keys(icons);
      return { args, iconNames };
    },
    template: `
      <BaseIcon 
        v-for="iconName in iconNames" 
        :key="iconName" 
        :name="iconName"
        :size="args.size"
        class="m-6">
      </BaseIcon>`,
  }),
};