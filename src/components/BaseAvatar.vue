<script setup lang="ts">
import { cva, type VariantProps } from 'cva';

type AvatarProps = VariantProps<typeof avatarStyle>;
const avatarStyle = cva({
    base: 'rounded-full flex content-center justify-center items-center bg-[#3837341A] text-center',
    variants: {
        size: {
            small: 'size-2',
            medium: 'size-5',
            large: 'size-7',
            extralarge: 'size-10'
        }
    }
});

withDefaults(
    defineProps<{
        size: AvatarProps['size']
    }>(),
    {
        size: 'medium'
    }
);
</script>

<template>
    <span :class="avatarStyle({ size })">
        <slot></slot>
    </span>
</template>