<script setup lang="ts">
import { ref } from 'vue';
import BaseNumberInput from './components/formElement/BaseNumberInput.vue';

const value = ref(42);
const value1 = ref(2);
</script>

<template>
  <BaseNumberInput v-model="value" class="m-4" size="small"></BaseNumberInput>
  <BaseNumberInput v-model="value1" class="m-4"></BaseNumberInput>
</template>