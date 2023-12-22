<script setup lang="ts">
import { cva, type VariantProps } from 'cva';
import { useSlots } from 'vue';

type FormElementProps = VariantProps<typeof formElementStyle>;
const formElementStyle = cva({
    base: 'border rounded-lg p-4 focus-within:ring-1 transition bg-white',
    variants: {
        intent: {
            regular: 'border-[#38373499] focus-within:ring-black focus-within:border-black',
            invalid: 'border-[#F0003C] focus-within:ring-[#F0003C] focus-within:border-[#F0003C]'
        },
        state: {
            regular: '',
            disabled: 'opacity-50 pointer-events-none cursor-not-allowed'
        },
        prefix: {
            regular: '',
            hasPrefix: 'pl-10'
        }
    }
});

withDefaults(
    defineProps<{
        intent: FormElementProps['intent'],
        state: FormElementProps['state']
    }>(), {
        intent: 'regular',
        state: 'regular',
        prefix: 'regular'
    },
);

const slots = useSlots();
const hasSlot = (slotKey: string): boolean => {
    return Object.keys(slots).includes(slotKey);
}
</script>

<template>
    <div class="form-element">
        <div :class="formElementStyle({ intent, state, prefix: hasSlot('prefix') ? 'hasPrefix' : 'regular' })">
            <div class="flex flex-row relative z-0 space-between">
                <slot name="prefix"></slot>
                <slot></slot>
                <slot name="suffix"></slot>
            </div>
        </div>
        <slot name="additional"></slot>
    </div>
</template>