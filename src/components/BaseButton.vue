<script setup lang="ts">
import { cva, type VariantProps } from 'cva';

type ButtonProps = VariantProps<typeof buttonStyle>;

const buttonStyle = cva({
    base: 'rounded-full appearance-none flex flex-row gap-2 justify-center transition cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-black',
    variants: {
        intent: {
            primary: '',
            secondary: '',
        },
        size: {
            regular: 'text-lg',
            small: 'text-xs',
        },
        type: {
            regular: '',
            rounded: ''
        },
        state: {
            regular: '',
            inverted: ''
        }
    },
    compoundVariants: [
        // Inverted variants
        {
            intent: 'primary',
            state: 'regular',
            class: 'bg-black text-white hover:bg-[#333230] active:bg-black',
        },
        {
            intent: 'primary',
            state: 'inverted',
            class: 'bg-white text-black hover:bg-[#FAF6F1] active:bg-white',
        },
        {
            intent: 'secondary',
            state: 'regular',
            class: 'bg-[#3837340D] text-black hover:bg-[#3837341A] active:bg-[#3837340D]',
        },
        {
            intent: 'secondary',
            state: 'inverted',
            class: 'bg-[#FFFFFF1A] text-white hover:bg-[#FFFFFF0D] active-bg[#FFFFFF1A]',
        },


        // Sizes variants
        {
            type: 'regular',
            size: 'regular',
            class: 'py-4 px-6'
        }, {
            type: 'regular',
            size: 'small',
            class: 'py-2 px-3'
        },

        // Rounded
        {
            type: 'rounded',
            size: 'regular',
            class: 'p-4'
        }, {
            type: 'rounded',
            size: 'small',
            class: 'p-2'
        }
    ]
});

withDefaults(
    defineProps<{
        intent: ButtonProps['intent'],
        size: ButtonProps['size'],
        type: ButtonProps['type'],
        state: ButtonProps['state']
    }>(), {
        intent: 'primary',
        size: 'regular',
        type: 'regular',
        state: 'regular'
    },
);
</script>

<template>
    <button :class="buttonStyle({ intent, size, type, state })">
        <slot></slot>
    </button>
</template>