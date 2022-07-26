<script setup>
import { ref } from 'vue'

const content = ref('noice')
</script>

<template>
  <AppEditor v-model="content" />
</template>
