<template>
  <v-app>
    <v-navigation-drawer v-model="isSideNavShowing" color="grey darken-4" app>
      <div class="pa-6">
        <v-img src="/img/logo-hero-transparent.png" contain class=""></v-img>
      </div>
      <v-list>
        <v-list-item :dark="true" href="/#Home">
          <v-list-item-title class="styles-link-text"
            ><v-icon class="mr-2">mdi-home-circle</v-icon>
            Home</v-list-item-title
          >
        </v-list-item>
        <v-list-item :dark="true" href="/#ProjectWork">
          <v-list-item-title class="styles-link-text"
            ><v-icon class="mr-2">mdi-auto-fix</v-icon> Project
            Work</v-list-item-title
          >
        </v-list-item>
        <v-list-item :dark="true" href="/#DigPlanet">
          <v-list-item-title class="styles-link-text"
            ><v-icon class="mr-2">mdi-rotate-3d</v-icon>
            Dig-A-Planet</v-list-item-title
          >
        </v-list-item>
        <v-list-item :dark="true" href="/#DigitalAssets">
          <v-list-item-title class="styles-link-text"
            ><v-icon class="mr-2">mdi-palette</v-icon> Digital
            Assets</v-list-item-title
          >
        </v-list-item>
        <v-list-item :dark="true" href="/#Roadmap">
          <v-list-item-title class="styles-link-text"
            ><v-icon class="mr-2">mdi-road-variant</v-icon>
            Roadmap</v-list-item-title
          >
        </v-list-item>
        <v-list-item :dark="true" href="/#Team">
          <v-list-item-title class="styles-link-text"
            ><v-icon class="mr-2">mdi-account-group</v-icon>
            Team</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
        >
          <v-btn
            icon
            color="amber darken-3"
            href="https://twitter.com/dig_a_hash"
            target="_new"
            ><v-icon>mdi-twitter</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    isSideNavShowing: false,
  }),
};
</script>
