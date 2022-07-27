<script setup lang="ts">
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from '@tiptap/vue-3'
import Bubble from '@tiptap/extension-bubble-menu'
import Floating from '@tiptap/extension-floating-menu'
import StarterKit from '@tiptap/starter-kit'
import { onBeforeUnmount, watch } from 'vue'

const bubbleId = Math.random().toString(36).slice(2, 7)
const floatingId = Math.random().toString(36).slice(2, 7)

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const bubbleItems = computed(() => {
  return [
    {
      key: 'bold',
      icon: 'fa-solid fa-bold',
      click: () => editor?.value?.chain().focus().toggleBold().run(),
      active: editor?.value?.isActive('bold'),
    },
    {
      key: 'italic',
      icon: 'fa-solid fa-italic',
      click: () => editor?.value?.chain().focus().toggleItalic().run(),
      active: editor?.value?.isActive('italic'),
    },
    {
      key: 'strike',
      icon: 'fa-solid fa-strikethrough',
      click: () => editor?.value?.chain().focus().toggleStrike().run(),
      active: editor?.value?.isActive('strike'),
    },
  ]
})

const floatingItems = computed(() => {
  return [
    {
      key: 'heading',
      icon: 'fa-solid fa-heading',
      click: () => editor?.value?.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor?.value?.isActive('heading', { level: 2 }),
    },
    {
      key: 'heading',
      icon: 'fa-solid fa-list',
      click: () => editor?.value?.chain().focus().toggleBulletList().run(),
      active: editor?.value?.isActive('bulletList'),
    },
  ]
})

const editor = useEditor({
  content: props.modelValue,
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl m-5 focus:outline-none',
    },
  },
  extensions: [
    Bubble.configure({
      element: document.getElementById(bubbleId),
    }),
    Floating.configure({
      element: document.getElementById(floatingId),
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
      :id="bubbleId"
      class="flex bg-white border border-black rounded-md shadow"
      :editor="editor"
      :tippy-options="{ duration: 100 }"
    >
      <button
        v-for="item in bubbleItems"
        :key="item.key"
        class="px-2 py-1 first:rounded-l last:rounded-r"
        :class="{
          'bg-primary text-white hover:bg-primary hover:bg-opacity-90': item.active,
          'hover:bg-gray-100': !item.active,
        }"
        @click="item.click"
      >
        <fa-icon :icon="item.icon" />
      </button>
    </bubble-menu>
    <floating-menu
      v-if="editor"
      class="flex bg-white border border-black rounded-md shadow"
      :editor="editor"
      :tippy-options="{ duration: 100 }"
    >
      <button
        v-for="item in floatingItems"
        :key="item.key"
        class="px-2 py-1 first:rounded-l last:rounded-r"
        :class="{
          'bg-primary text-white hover:bg-primary hover:bg-opacity-90': item.active,
          'hover:bg-gray-100': !item.active,
        }"
        @click="item.click"
      >
        <fa-icon :icon="item.icon" />
      </button>
    </floating-menu>
    <editor-content :editor="editor" />
  </div>
</template>
