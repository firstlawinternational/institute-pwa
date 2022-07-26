<script setup>
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3'
import Bubble from '@tiptap/extension-bubble-menu'
import StarterKit from '@tiptap/starter-kit'
import { defineEmits, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    Bubble.configure({
      element: document.querySelector('.menu'),
    }),
    StarterKit,
  ],
  onUpdate: () => {
    emit('update:modelValue', editor.value.getHTML())
  },
})

onBeforeUnmount(() => editor.destroy())

watch(() => props.modelValue, (value) => {
  if (value === editor.value.getHTML()) return
  editor.value?.commands.setContent(value, false)
})

</script>

<template>
  <div>
    <bubble-menu v-if="editor" class="menu" :editor="editor" :tippy-options="{ duration: 100 }">
      <button :class="{ 'is-active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
        bold
      </button>
      <button :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
        italic
      </button>
      <button :class="{ 'is-active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()">
        strike
      </button>
    </bubble-menu>
    <editor-content :editor="editor" />
  </div>
</template>
