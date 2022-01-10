<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input v-model="enteredTitle" type="text" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image Url</ion-label>
        <ion-input v-model="enteredImageUrl" type="url" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea v-model="enteredDescription" rows="5" />
      </ion-item>
      <ion-button type="submit" expand="block" fill="outline">Save</ion-button>
    </ion-list>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";

export default {
  data() {
    return {
      enteredTitle: "",
      enteredImageUrl: "",
      enteredDescription: "",
    };
  },
  emits: ["save-memory"],
  components: {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton},
  methods: {
    submitForm() {
      const memoryData = {
          title: this.enteredTitle,
          imageUrl: this.enteredImageUrl,
          description: this.enteredDescription
      };

      console.log("memoryData ", memoryData);
      this.$emit("save-memory", memoryData);
    },
    logData() {
        console.log(this.enteredTitle);
    }
  },
};
</script>