<script setup lang="ts">
import { ref } from 'vue';
import { type TextareaProps } from './types';

const props = withDefaults(
    defineProps<TextareaProps>(),
    {
        required: false,
        placeholder: '',
        showPlaceholderInitially: false
    }
);
const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    emit('update:modelValue', value);
}

const placeholderValue = ref(props.showPlaceholderInitially ? props.placeholder : undefined);

const onFocusIn = () => {
    if (props.showPlaceholderInitially) {
        return;
    }
    placeholderValue.value = props.placeholder;
};
const onFocusOut = () => {
    if (props.showPlaceholderInitially) {
        return;
    }
    placeholderValue.value = undefined;
}
</script>

<template>
    <textarea
        :id="name"
        :name="name"
        :placeholder="placeholderValue"
        :aria-placeholder="placeholderValue"
        :value="modelValue"
        @input="onInput"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
        class="text-base font-normal placeholder-black focus:outline-none peer translate-y-2 w-full h-24 min-h-36 max-h-96"
        :class="modelValue ? 'has-value' : ''"></textarea>
</template>