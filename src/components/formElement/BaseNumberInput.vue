<script setup lang="ts">
import { computed, ref } from 'vue';
import { cva, type VariantProps } from 'cva';
import BaseIcon from '../BaseIcon.vue';

type NumberInputProps = VariantProps<typeof numberInputStyle>

const numberInputStyle = cva({
    base: 'rounded-full inline-flex justify-center border focus-within:ring-1',
    variants: {
        intent: {
            regular: 'border-black focus-within:ring-black',
            invalid: 'border-[#F0003C] focus-within:ring-[#F0003C]'
        },
        size: {
            regular: 'px-6 py-4 gap-4',
            small: 'px-3 py-2'
        },
        state: {
            regular: '',
            disabled: 'border-[#38373499] pointer-events-none cursor-disallowed opacity-50'
        }
    }
});

const props = withDefaults(
    defineProps<{
        intent?: NumberInputProps['intent'],
        size?: NumberInputProps['size'],
        state?: NumberInputProps['state'],
        modelValue: number,
        min?: number,
        max?: number,
        steps?: number
    }>(), {
        intent: 'regular',
        size: 'regular',
        state: 'regular',
        min: 1,
        max: 100,
        steps: 1
    }
);

const emit = defineEmits(['update:modelValue']);
const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    let targetValue = parseFloat(target.value);

    if (targetValue < props.min) {
        targetValue = props.min;
    }

    if (targetValue > props.max) {
        targetValue = props.max;
    }

    value.value = targetValue;
    emit('update:modelValue', value.value);
}

const value = ref(props.modelValue);

const increasable = computed(() => {
    return isNaN(value.value) || value.value < props.max;
});

const decreasable = computed(() => {
    return isNaN(value.value) || value.value > props.min;
});

const onIncrease = () => {
    value.value = value.value + props.steps;
};

const onDecrease = () => {
    value.value = value.value - props.steps;
}
</script>

<template>
    <div :class="numberInputStyle({ intent, size, state })">
        <BaseIcon @click="onDecrease" :size="16" name="minus" class="transition relative top-1 cursor-pointer" :class="!decreasable ? 'opacity-50 pointer-events-none' : ''"></BaseIcon>
        <input type="number"
            class="hide-arrow outline-none w-8 text-center"
            :value="value"
            @change="onInput">
        <BaseIcon @click="onIncrease" :size="16" name="plus" class="transition relative top-1 cursor-pointer" :class="!increasable ? 'opacity-50 pointer-events-none' : ''"></BaseIcon>
    </div>
</template>

<style>
.hide-arrow[type="number"]::-webkit-inner-spin-button,
.hide-arrow[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>