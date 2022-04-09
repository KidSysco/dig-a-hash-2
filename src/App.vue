<template>
  <v-app>
    <v-navigation-drawer v-model="isSideNavShowing" app> </v-navigation-drawer>
    <v-app-bar app color="black" outlined flat>
      <v-row dense>
        <v-col cols="12" sm="6" class="d-flex justify-center justify-sm-start"
          ><v-btn
            @click="isSideNavShowing = !isSideNavShowing"
            icon
            color="amber accent-3"
            class="ml-2 mr-4"
            ><v-icon>mdi-menu</v-icon></v-btn
          ><v-img
            alt="Dig-A-Hash"
            class="shrink"
            contain
            src="/img/logo-text-tiny-transparent.png"
            transition="scale-transition"
            width="160"
        /></v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-none d-sm-flex justify-end align-center"
          ><div>
            <a href="https://twitter.com/dig_a_hash" target="_new">
              <v-img
                :src="twitterSrc"
                contain
                max-height="30"
                alt="Twitter"
                @mouseover="twitterSrc = twitterStates.on"
                @mouseout="twitterSrc = twitterStates.off"
              ></v-img
            ></a></div
        ></v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    isSideNavShowing: false,
    twitterStates: {
      off: "/img/twitter-off.gif",
      on: "/img/twitter.gif",
    },
    twitterSrc: "/img/twitter-off.gif",
  }),
};
</script>
