<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';

type ButtonSize = 'regular' | 'small';
type Intent = 'primary' | 'secondary';
type State = 'regular' | 'inverted';

const props = withDefaults(
    defineProps<{ name: string, size: ButtonSize, intent: Intent, state: State }>(),
    {
        size: 'regular',
        intent: 'primary',
        state: 'regular'
    }
);

const iconSize = computed(() => {
    return props.size === 'regular' ? 24 : 16;
});
</script>

<template>
    <BaseButton type="rounded" :size="size" :intent="intent" :state="state">
        <BaseIcon :name="name" :size="iconSize"></BaseIcon>
    </BaseButton>
</template>