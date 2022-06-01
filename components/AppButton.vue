<template>
  <button :type="type" :class="classes">
    <span>
      {{ props.text }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ' ',
  },
  type: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'submit'].includes(value)
    },
  },
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value)
    },
  },
})

const classes = computed(() => {
  switch (props.variant) {
    case 'primary':
    default:
      return 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
  }
})
</script>
