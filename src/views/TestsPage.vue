<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tests</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tests</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="list">
        <ion-list v-for="id in 10" :key="id">
          <ion-item>
            <router-link :to="{ name: 'test', params: { id: id }}">as</router-link>
          </ion-item>
        </ion-list>

      </div>

    </ion-content>
  </ion-page>
</template>




<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/vue';
export default {
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem

  },
  data() {
    return {


    }
  },

};
</script>

<style scoped>

</style>
