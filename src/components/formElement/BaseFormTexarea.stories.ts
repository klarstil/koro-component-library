import type { Meta, StoryObj } from '@storybook/vue3';

import BaseFormElement from './BaseFormElement.vue';
import BaseFormLabel from './BaseFormLabel.vue';
import BaseFormTextarea from './BaseFormTextarea.vue';

const meta: Meta<typeof BaseFormTextarea> = {
  title: 'Molecule/BaseFormTextarea',
  component: BaseFormTextarea
};

export default meta;
type Story = StoryObj<typeof BaseFormTextarea>;

export const Primary: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormTextarea },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormTextarea placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue"></BaseFormTextarea>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const Invalid: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormTextarea },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement intent="invalid">
        <BaseFormTextarea placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue"></BaseFormTextarea>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormTextarea },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement state="disabled">
        <BaseFormTextarea placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue"></BaseFormTextarea>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const WithPlaceholder: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormTextarea },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormTextarea placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue" :show-placeholder-initially="true"></BaseFormTextarea>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const WithHelptext: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormTextarea },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormTextarea placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue" :show-placeholder-initially="true"></BaseFormTextarea>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
        <template #additional>
          <span class="text-xs text-black">Help text</span>
        </template>
    </BaseFormElement>
    `,
  })
};