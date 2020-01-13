<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon
        v-show="$store.state.login_user"
        @click="toggleSideMenue"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>アドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-item>
    </v-toolbar>
    <SideNav />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user); //ログイン時
        this.fetchAddresses();
        if (this.$router.currentRoute.name === "home")
          this.$router.push({
            name: "addresses"
          });
      } else {
        this.deleteLoginUser(); //ログアウト時
        this.$router.push({
          name: "home"
        });
      }
    });
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapActions([
      "toggleSideMenue",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
      "fetchAddresses"
    ])
  }
};
</script>
