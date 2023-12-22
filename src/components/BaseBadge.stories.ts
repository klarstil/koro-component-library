import type { Meta, StoryObj } from '@storybook/vue3';
import BaseBadge from './BaseBadge.vue';

const meta: Meta<typeof BaseBadge> = {
    title: 'Atom/BaseBadge',
    component: BaseBadge,
    argTypes: {
        intent: {
            control: 'inline-radio',
            options: ['regular', 'red', 'green', 'purple']
        }
    },
    parameters: {
        slots: {
            default: 'Buy awesome product'
        }
    }
};

export default meta;
type Story = StoryObj<typeof BaseBadge>;

export const Primary: Story = {
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args };
    },
    template: `<BaseBadge v-bind="args">{{args.default ? args.default : 'In progress'}}</BaseBadge>`,
  }),
  args: {
    intent: 'green',
  },
};