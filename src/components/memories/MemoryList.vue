<template>
  <ion-list>
    <memory-list-item :memory="memory" v-for="memory in memories" :key="memory.id">
    </memory-list-item>
  </ion-list>
</template>

<script>
import MemoryListItem from "./MemoryListItem.vue";
export default {
  props: ["memories"],
  components: {
    MemoryListItem,
  },
};
</script>