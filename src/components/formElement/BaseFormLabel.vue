<script setup lang="ts">
import { type LabelProps } from './types';
defineProps<LabelProps>();
</script>

<template>
    <label :for="name" class="transition-all select-none absolute left-0 -translate-y-2 text-sm peer-empty:translate-y-0 peer-empty:text-base peer-placeholder-shown:!-translate-y-2 peer-placeholder-shown:!text-sm peer-[.has-value]:-translate-y-2 peer-[.has-value]:text-sm">
        <slot></slot>
        {{ required ? '*' : '' }}
    </label>
</template>
