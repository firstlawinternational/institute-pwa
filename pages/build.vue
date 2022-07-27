<script setup>
import { ref } from 'vue'

const content = ref(`<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>`)
</script>

<template>
  <div>
    <AppEditor v-model="content" />
  </div>
</template>
