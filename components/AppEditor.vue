<script setup lang="ts">
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3'
import Bubble from '@tiptap/extension-bubble-menu'
import StarterKit from '@tiptap/starter-kit'
import { onBeforeUnmount, watch } from 'vue'

const id = Math.random().toString(36).slice(2, 7)

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const bubbleItems = [
  {
    key: 'bold',
    icon: 'fa-solid fa-bold',
    click: () => editor?.value?.chain().focus().toggleBold().run(),
  },
  {
    key: 'italic',
    icon: 'fa-solid fa-italic',
    click: () => editor?.value?.chain().focus().toggleItalic().run(),
  },
  {
    key: 'strike',
    icon: 'fa-solid fa-strikethrough',
    click: () => editor?.value?.chain().focus().toggleStrike().run(),
  },
]

const editor = useEditor({
  content: props.modelValue,
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl m-5 focus:outline-none',
    },
  },
  extensions: [
    Bubble.configure({
      element: document.getElementById(id),
    }),
    StarterKit,
  ],
  onUpdate: () => {
    emit('update:modelValue', editor?.value?.getHTML())
  },
})

onBeforeUnmount(() => editor?.value?.destroy())

watch(() => props.modelValue, (value) => {
  if (value === editor?.value?.getHTML()) return
  editor?.value?.commands.setContent(value, false)
})

</script>

<template>
  <div>
    <bubble-menu
      v-if="editor"
      :id="id"
      class="flex bg-white border border-black rounded-md shadow"
      :editor="editor"
      :tippy-options="{ duration: 100 }"
    >
      <button
        v-for="item in bubbleItems"
        :key="item.key"
        class="px-2 py-1 first:rounded-l last:rounded-r"
        :class="{
          'bg-primary text-white hover:bg-primary hover:bg-opacity-90': editor?.isActive(item.key),
          'hover:bg-gray-100': !editor?.isActive(item.key),
        }"
        @click="item.click"
      >
        <fa-icon :icon="item.icon" />
      </button>
    </bubble-menu>
    <editor-content :editor="editor" />
  </div>
</template>
