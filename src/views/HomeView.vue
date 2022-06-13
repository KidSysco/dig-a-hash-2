<template>
  <div class="styles-dig-bg" id="Home">
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
        <v-col cols="12" md="6" class="px-12 text-center">
          Dig-A-Hash houses multiple brands from our launch-pad. We help our
          customers develop their tech, and we curate art for your enjoyment.
          <div class="text-center mt-6">
            <v-btn
              x-large
              outlined
              color="amber darken-3"
              href="https://twitter.com/dig_a_hash"
              target="_new"
              ><v-icon class="mr-2">mdi-twitter</v-icon> Join Our
              Community</v-btn
            >
          </div></v-col
        >
        <v-col cols="12" md="3"></v-col>
      </v-row>
      <div id="ProjectWork"></div>
      <v-row class="mt-16" dense>
        <v-col cols="12">
          <h3 class="light-green--text text--accent-4 text-center text-sm-left">
            Project Work
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
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
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://www.nftystays.com/"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-home-group</v-icon>
                Visit NFTy Stays
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/img/gc-type-fiendish.jpg"
            >
            </v-img>
            <v-card-title>Gorecats</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash Business Customer
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Cartoon/Comic Book NFT on Solana</div>
              <div>Web2, Web3, NFT Soft-Staking, and NFT Games</div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://www.gorecats.io/"
                target="_new"
                class="my-1"
                ><v-icon class="mr-2">mdi-knife</v-icon> Explore Gorecats
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/img/meta-tattoos-d-two.jpg"
            >
            </v-img>
            <v-card-title>Darkside Metaverse Tattoos</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash Business Customer
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Tattoo Art for Metaverse Avatars</div>
              <div>NFT collections created by real tattoo artists.</div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://exchange.art/collections/Darkside%20Tattoo%20Collection/nfts"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-skull</v-icon> Tattoo Shop
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
            <v-carousel
              cycle
              show-arrows-on-hover
              height="200"
              :show-arrows="false"
            >
              <v-carousel-item
                max-height="200"
                src="/img/mortuary.png"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
              <v-carousel-item
                max-height="200"
                src="/img/mortuary-minion.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
            </v-carousel>
            <v-card-title>NFT Mortuary</v-card-title>
            <v-card-subtitle class="pb-0">
              NFT Burning Services
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Burn Solana NFTs at our Mortuary and earn $ASH tokens as a
                reward. We offer 8 plots ready to serve, with the best returns
                in the business, and a Mortuary Minion boosting every burn to
                maximize your yield!
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://beta.mortuary-inc.io/commons/91X4rGu9n8t92obLZaig8NS2PAvB7pXrfG5YTgnb8W7o"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-grave-stone</v-icon> Mortuary Services
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-none d-md-flex align-center justify-center text-center blue--text indigo--text text--darken-3"
          >Project STOIC<br />Coming <br />
          Soon!</v-col
        >
        <v-col
          cols="12"
          md="4"
          class="d-none d-md-flex align-center justify-center text-center blue--text indigo--text text--darken-3"
          >Coming <br />
          Soon!</v-col
        >
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="mt-16 text-center orange--text text--lighten-1 px-12"
          ><h2>Metaverse Art Galleries</h2></v-col
        >
      </v-row>
      <v-row dense>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="6" class="px-12"
          >Dig-A-Hash Holdings shares our vaults of fine art with the world
          through our Metaverse Art Galleries. Explore our rotating art
          collections in 3D, all you need is a web browser. So step in to the
          metaverse with us, and have some fun!</v-col
        >
        <v-col cols="12" md="3"></v-col>
      </v-row>
      <div id="MetaGalleries"></div>
      <v-row class="mt-16" dense>
        <v-col cols="12">
          <h3 class="light-green--text text--accent-4 text-center text-sm-left">
            Meta Galleries
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-t-xl">
            <v-img
              class="white--text align-end"
              height="350px"
              src="/img/planet-hologram.jpg"
            >
            </v-img
            ><v-card-title>Planet Hologram-One</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash NFT Meta Gallery
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Explore the gallery in 3D below, or view the 2D Matrica Gallery.
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://www.desolate.space/planet/4993"
                target="_new"
                class="my-1"
              >
                Explore <v-icon class="mx-2">mdi-rotate-3d</v-icon> Gallery
              </v-btn>
              <v-btn
                color="orange"
                outlined
                href="https://map.desolate.space/?planet=4755"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-space-station</v-icon> Planetary Map
              </v-btn>
              <v-btn
                color="orange"
                href="https://matrica.io/hologramOne"
                target="_new"
                outlined
                class="my-1"
              >
                <v-icon class="mr-2">mdi-palette</v-icon> Matrica
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div id="NFTGalleries"></div>
      <v-row class="mt-16" dense>
        <v-col cols="12">
          <h3 class="light-green--text text--accent-4 text-center text-sm-left">
            NFT Galleries
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
            <v-carousel cycle show-arrows-on-hover>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
            </v-carousel>
            <v-card-title>Ethereum NFT Gallery</v-card-title>
            <v-card-subtitle class="pb-0"> OpenSea </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Ethereum Protocol</div>
              <div>The classic, and most prestigious protocol for NFTs.</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                outlined
                href="https://opensea.io/nftystays"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-palette</v-icon> Explore ETH Gallery
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
            <div class="rounded-t-xl">
              <v-carousel
              class="rounded-t-xl"
              cycle
              show-arrows-on-hover
              :show-arrows="false"
              interval="14000"
            >
              <v-carousel-item
                src="/img/tezos/Punky-and-Cat.png"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
              <v-carousel-item
                src="/img/tezos/The-Curse-Of-Procrastination.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
              <v-carousel-item
                src="/img/tezos/Some-Punky-Accessories.png"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
            </v-carousel>
            </div>
            <v-card-title class="mt-n3">Tezos NFT Gallery</v-card-title>
            <v-card-subtitle class="pb-0"> objkt.com </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Tezos Protocol</div>
              <div>
                Tezos (XTZ) is a newer Layer 1 Blockchain thriving with NFTs.
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://objkt.com/profile/tz1QawwNqyz223kjvxvGD1vVSAbbeF9j3DbJ/owned"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-palette</v-icon> Explore Tezos Gallery
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl">
            <v-carousel
              class="rounded-t-xl"
              cycle
              show-arrows-on-hover
              :show-arrows="false"
              interval="8000"
            >
              <v-carousel-item
                src="/img/near/astropup.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
              <v-carousel-item
                src="/img/near/street-kings.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
              <v-carousel-item
                src="/img/near/near-skull.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              ></v-carousel-item>
              <v-carousel-item
                src="/img/near/nearnaut.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              ></v-carousel-item>
              <v-carousel-item
                src="/img/near/street-kings2.jpg"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
              >
              </v-carousel-item>
              
              
            </v-carousel>
            <v-card-title>Near NFT Gallery</v-card-title>
            <v-card-subtitle class="pb-0"> Paras </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Near Protocol</div>
              <div>
                Near (NEAR) is a newer Layer 1 Blockchain thriving with NFTs.
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://paras.id/3906b79e054ada5113cfbec7acf07d52d16596f2e3da4ae5d8598ea35a445803/collectibles"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-palette</v-icon> Explore Near Gallery
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-t-xl">
            <v-img src="/img/falla-art-feature.png" max-height="250"></v-img>
            <v-card-title>MegaCity Gallery</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash Featured Artist NFT Gallery
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Explore our amazing MegaCity collection by FallaArt.</div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                outlined
                href="https://objkt.com/profile/tz1TkBfKocs4jYc7vXW8WXM8SqabMDGW5oRu/owned"
                target="_new"
                class="my-1"
              >
                <v-icon class="mr-2">mdi-city-variant</v-icon>
                Explore MegaCity Gallery
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row id="Roadmap">
        <v-col
          cols="12"
          class="mt-16 text-center orange--text text--lighten-1 px-12"
          ><h2>Roadmap</h2></v-col
        >
      </v-row>
      <v-row dense class="mfb-4">
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="6" class="px-12"
          >The roadmap is constantly evolving, <br class="d-none sm-block" />so
          we update it frequently. Stay tuned for more soon!</v-col
        >
        <v-col cols="12" md="3"></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item color="light-blue accent-4">
              <h3 class="mb-4">Phase One</h3>
              <div>
                <ul>
                  <li>Launch Socials</li>
                  <li>Launch Website</li>
                </ul>
              </div>
            </v-timeline-item>
            <v-timeline-item color="green accent-4">
              <div class="d-flex justify-md-end">
                <div>
                  <h3 class="mb-4 text-left text-sm-right">Phase Two</h3>
                  <ul>
                    <li>Build NFTy Stay Brand</li>
                    <li>Establish Collaborations</li>
                    <li>1st Monetization Project</li>
                  </ul>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="amber darken-3">
              <h3 class="mb-4">Phase Three</h3>
              <div>
                <ul>
                  <li>Back 1st NFT Project Launch</li>
                  <li>Build Out Infrastructure</li>
                </ul>
              </div>
            </v-timeline-item>
            <v-timeline-item color="purple accent-3">
              <div class="d-flex justify-md-end">
                <div>
                  <h3 class="mb-4 text-left text-sm-right">Phase Four</h3>
                  <ul>
                    <li>Update Roadmap to v 3.0</li>
                  </ul>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <div id="Team"></div>
      <v-row>
        <v-col
          cols="12"
          class="mt-16 text-center orange--text text--lighten-1 px-12"
          ><h2>Meet the Team</h2></v-col
        >
      </v-row>
      <v-row dense>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="6" class="px-12"
          >The teams has a wide breadth of experience in business, art, music,
          branding, software development, NFTs, and Crypto Currency.</v-col
        >
        <v-col cols="12" md="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl mx-auto" max-width="340">
            <div class="text-center">
              <v-avatar color="primary" size="256" class="mt-6">
                <v-img height="300px" src="/img/avatar-recon.jpg"> </v-img
              ></v-avatar>
            </div>
            <v-card-title>Recon Whispers</v-card-title>
            <v-card-subtitle class="pb-0">
              Dig-A-Hash Founder & CEO
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                <ul>
                  <li>Business Builder</li>
                  <li>Strategic Mastermind</li>
                  <li>Serial Entrepreneur</li>
                </ul>
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center justify-sm-start"
            >
              <v-btn
                color="orange"
                text
                href="https://twitter.com/reconwhispers"
                target="_new"
              >
                <v-icon class="mr-2">mdi-twitter</v-icon>
                Twitter
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl mx-auto" max-width="340">
            <div class="text-center">
              <v-avatar color="primary" size="256" class="mt-6">
                <v-img height="300px" src="/img/avatar-kid.jpg"> </v-img
              ></v-avatar>
            </div>
            <v-card-title>Dig-A-Hash Kid</v-card-title>
            <v-card-subtitle class="pb-0">
              FinTech Software Developer
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                25 Years in ...
                <ul>
                  <li>JavaScript UI</li>
                  <li>PhotoShop</li>
                </ul>
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex flex-wrap justify-center"
            >
            <!--
              <v-btn
                color="orange"
                text
                href="https://twitter.com/Dig_A_Hash_Kid"
                target="_new"
              >
                <v-icon class="mr-2">mdi-twitter</v-icon>
                Twitter
              </v-btn> -->
              <v-btn
                color="orange"
                text
                href="https://steemit.com/@kidsysco"
                target="_new"
              >
                <v-icon class="mr-2">mdi-post-outline</v-icon>
                Blog
              </v-btn>
              <v-btn
                color="orange"
                text
                href="https://github.com/KidSysco/"
                target="_new"
              >
                <v-icon class="mr-2">mdi-github</v-icon>
                GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-t-xl mx-auto" max-width="340">
            <div class="text-center">
              <v-avatar color="primary" size="256" class="mt-6">
                <v-img height="300px" src="/img/avatar-boris.png"> </v-img
              ></v-avatar>
            </div>
            <v-card-title>Boristotle</v-card-title>
            <v-card-subtitle class="pb-0"> Software Engineer </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                <ul>
                  <li>Real Estate Investor</li>
                  <li>Cinnamon bun enthusiast</li>
                </ul>
              </div>
            </v-card-text>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-16">
        <v-col>
          <hr class="purple darken-4" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <a href="https://dig-a-hash.medium.com/">Dig-A-Hash Medium Blog</a>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col class="d-flex justify-center flex-wrap">
          <v-img
            src="/img/logo-hero-transparent.png"
            contain
            max-height="80"
            class="my-2"
          ></v-img>
        </v-col>
      </v-row>
      <div class="text-center grey--text text--darken-1 mb-16">
        Dig-A-Hash Holdings <br />
        Copyright 2022
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home-view',
  data() {
    const fileNames = [
      'abstract1.png',
      'abstract2.png',
      'birds.jpg',
      'Chop SUey.jpg',
      'DimensionOfMind.png',
      'Hopeful.jpg',
      'mixed trash.jpg',
      'Native.jpg',
      'NFTWOMAN1221.jpg',
      'Reminiscing_Tcjsart.jpg',
      'scrying.jpg',
      'shalini_womenseries.png',
      'Space Monkey 43_Space Monkey Fight Club.png',
      'Trash street_ozgegulbakan.jpg',
      'trash2.jpg',
      'trash3.jpg',
    ];

    return {
      items: fileNames.map((f) => ({ src: `/img/ETH_NFTs/${f}` })),
    };
  },
  components: {},
};
</script>
