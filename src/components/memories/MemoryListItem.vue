<template>
  <router-link
    :to="`/memories/${memory.id}`"
  >
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-img :src="memory.image" :alt="memory.title"></ion-img>
      </ion-thumbnail>

      <ion-label>
        {{ memory.title }}
      </ion-label>
    </ion-item>
  </router-link>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
  props: ["memory"],
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
};
</script>