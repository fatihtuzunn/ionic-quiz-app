<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Test</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Test</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <TestCo :test="questions" />
        
      </ion-content>
    </ion-page>
  </template>
  
  
  
  
  <script>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';


  import  * as test from "../data";
import TestCo from "../components/TestCo.vue";

  export default {
    name: 'HomePage',
    components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    TestCo
},
    data() {
      return {
        questions:null
  
  
      }
    },
    beforeMount(){
       if (this.$route.params.id==1) {
        this.questions=test.test1
       } 
       if (this.$route.params.id==2) {
        this.questions=test.test2
       } 
       if (this.$route.params.id==3) {
        this.questions=test.test3
       } 
       if (this.$route.params.id==4) {
        this.questions=test.test4
       } 
       if (this.$route.params.id==5) {
        this.questions=test.test5
       } 
       if (this.$route.params.id==6) {
        this.questions=test.test6
       } 
       if (this.$route.params.id==7) {
        this.questions=test.test7
       } 
       if (this.$route.params.id==8) {
        this.questions=test.test8
       } 
       if (this.$route.params.id==9) {
        this.questions=test.test9
       } 
    }
  
  };
  </script>
  
  <style scoped>
  
  </style>
  