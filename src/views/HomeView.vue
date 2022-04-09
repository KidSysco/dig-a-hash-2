<template>
  <div class="styles-dig-bg">
    <v-container>
      <v-row class="mt-16">
        <v-col cols="12" sm="6" class="pa-16"
          ><v-img src="/img/logo-text-transparent.png"></v-img
        ></v-col>
        <v-col cols="12" sm="6" class="pa-16"
          ><v-img src="/img/logo-hero-transparent.png"></v-img
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center orange--text text--lighten-1 px-12"
          ><h2>Business Infrastructure for Web 3</h2></v-col
        >
      </v-row>
      <v-row dense>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="6" class="px-12"
          >Dig-A-Hash houses multiple brands from our launch-pad, and helps
          businesses define their own crypto strategy.</v-col
        >
        <v-col cols="12" md="3"></v-col>
      </v-row>
      <v-row class="mt-16" dense>
        <v-col cols="12">
          <h2 class="light-green--text text--accent-4">Project Work</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/img/NFTY-STAYS-retro.jpeg"
            >
            </v-img
            ><v-card-title>NFTy Stays</v-card-title>
            <v-card-subtitle class="pb-0"> Dig-A-Hash Brand </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Web 3 Ready Short-Term Rentals</div>
              <div>Jacksonville, FL</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>
              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/img/gc-type-ghastly.jpg"
            >
            </v-img>
            <v-card-title>Gorecats</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash Customer
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Cartoon/Comic Book NFT on Solana</div>
              <div>Web2, Web3, NFT Soft-Staking, and NFT Games</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>
              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/img/meta-tattoos-d-two.jpg"
            >
            </v-img>
            <v-card-title>Darkside Metaverse Tattoos</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash Customer
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Tattoo Art for Metaverse Avatars</div>
              <div>NFT collections created by real tattoo artists.</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>
              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home-view",
  data: () => ({}),
  components: {},
};
</script>
