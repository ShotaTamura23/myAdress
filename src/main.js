import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDhPC7ZMquyx8kvTfkuGM2pTAqsk8euTRM",
  authDomain: "my-address-pj-c14a6.firebaseapp.com",
  databaseURL: "https://my-address-pj-c14a6.firebaseio.com",
  projectId: "my-address-pj-c14a6",
  storageBucket: "my-address-pj-c14a6.appspot.com",
  messagingSenderId: "683579253938",
  appId: "1:683579253938:web:d981894db431338281d5ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
