<script setup lang="ts">
import VueFeather from 'vue-feather';



withDefaults(
    defineProps<{ name: string, size: number }>(),
    {
        size: 24
    }
)
</script>

<template>
    <VueFeather :type="(name as string)" :size="size" outline="currentColor"></VueFeather>
</template>