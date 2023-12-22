import type { Meta, StoryObj } from '@storybook/vue3';

import BaseFormElement from './BaseFormElement.vue';
import BaseFormLabel from './BaseFormLabel.vue';
import BaseFormInput from './BaseFormInput.vue';
import BaseIcon from '../BaseIcon.vue';
import BaseButton from '../BaseButton.vue';

const meta: Meta<typeof BaseFormInput> = {
  title: 'Molecule/BaseFormInput',
  component: BaseFormInput
};

export default meta;
type Story = StoryObj<typeof BaseFormInput>;

export const Primary: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const Invalid: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement intent="invalid">
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement intent="regular" state="disabled">
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};


export const WithPlaceholder: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" :show-placeholder-initially="true" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
    </BaseFormElement>
    `,
  })
};

export const WithPrefixIcon: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput, BaseIcon },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" :show-placeholder-initially="true" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
        <template #prefix>
            <BaseIcon name="calendar" class="absolute -left-6 top-0.5" :size="16"></BaseIcon>
        </template>
    </BaseFormElement>
    `,
  })
};

export const WithSuffixIcon: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput, BaseIcon },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" :show-placeholder-initially="true" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
        <template #suffix>
            <BaseIcon name="calendar" class="relative top-0.5" :size="16"></BaseIcon>
        </template>
    </BaseFormElement>
    `,
  })
};

export const WithButton: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput, BaseButton },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" :show-placeholder-initially="true" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
        <template #suffix>
            <BaseButton size="small" intent="primary" type="regular" state="regular">Check availability</BaseButton>
        </template>
    </BaseFormElement>
    `,
  })
};

export const WithHelptext: Story = {
  render: () => ({
    components: { BaseFormElement, BaseFormLabel, BaseFormInput, BaseButton },
    data() {
      return { currentValue: '' }
    },
    template: `
    <BaseFormElement>
        <BaseFormInput placeholder="Placeholder" name="test" type="text" :required="false" :show-placeholder-initially="true" v-model="currentValue"></BaseFormInput>
        <BaseFormLabel name="test">
            Foobar
        </BaseFormLabel>
        <template #suffix>
            <BaseButton size="small" intent="primary" type="regular" state="regular">Check availability</BaseButton>
        </template>
        <template #additional>
          <span class="text-xs text-black">Help text</span>
        </template>
    </BaseFormElement>
    `,
  })
};