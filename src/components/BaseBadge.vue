<script setup lang="ts">
import { cva, type VariantProps } from 'cva';

type BadgeProps = VariantProps<typeof badgeStyle>
const badgeStyle = cva({
    base: 'px-2 py-1 font-bold text-xs text-white leading-normal inline-block rounded',
    variants: {
        intent: {
            regular: 'bg-black',
            red: 'bg-[#F0003C]',
            green: 'bg-[#00B259]',
            purple: 'bg-[#745BBB]'
        }
    }
});

withDefaults(
    defineProps<{
        intent: BadgeProps['intent']
    }>(),
    {
        intent: 'regular'
    }
)
</script>

<template>
    <span :class="badgeStyle({ intent })"><slot></slot></span>
</template>