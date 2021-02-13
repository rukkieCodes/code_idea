<template>
  <div class="works">
    <div class="all_sections">
      <section class="section_one">
        <div class="backdrop"></div>
        <div class="section_one_content">
          <v-toolbar flat class="toolbar">
            <img class="img" src="../assets/images/logo-new.svg" />
            <v-toolbar-title class="ml-4 toolbar_title"
              >CODE IDEA</v-toolbar-title
            >

            <v-spacer />

            <div class="links">
              <v-btn large shaped depressed class="btn px-10">HIRE US</v-btn>
            </div>
          </v-toolbar>

          <h1>OUR WORKS</h1>

          <div class="foot">
            <div class="foot_content">
              <v-btn icon x-small to="/">
                <v-icon class="icon">mdi-home-outline</v-icon>
              </v-btn>
              <span><v-icon class="icon">mdi-chevron-right</v-icon></span>
              <span>OUR WORKS</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section_two">
        <div class="section_two_content">
          <div class="cards">
            <div class="card">
              <p>DESIGN & DEVELOPMENT</p>
            </div>
            <div class="card">
              <p>BRANDING & GRAPHIC DESIGN</p>
            </div>
            <div class="card">
              <p>MARKETING</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section_three">
        <div class="section_three_content">
          <div class="cards">
            <v-card
              v-for="(card, index) in cards"
              :key="index"
              tile
              class="card"
            >
              <div class="img">
                <div v-rainbow class="overlay"></div>
                <v-img src="../assets/images/220045.png"></v-img>
              </div>

              <v-card-actions class="card_action">
                <p>{{ card.company }}</p>
                <v-spacer />
                <p>{{ card.text }}</p>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "Works",

  data: () => ({
    cards: [
      { company: "N/A", text: "DESIGN & DEVELOPMENT" },
      { company: "N/A", text: "MARKETING" },
      { company: "N/A", text: "BRANDING" },
      { company: "N/A", text: "GRAPHIC DESIGN" },
      { company: "N/A", text: "DESIGN & DEVELOPMENT" },
      { company: "N/A", text: "MARKETING" },
    ],
  }),

  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/addons/icon/css/materialdesignicons.min.css);
@import url(../assets/style/works.css);
</style>