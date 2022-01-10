<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading'" page-default-back-link="/memories">

      <h3 v-if="!loadedMemory">Memory Not Found</h3>
      <memory-overview v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
      >
      </memory-overview>

  </base-layout>
</template>
 
<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue'

export default {
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    components: {
        MemoryOverview
    },
    // watch: {
    //     $route(currentRoute) {
    //         this.memoryId = currentRoute.params.id
    //     }
    // },
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    }
}
</script>
