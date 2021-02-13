<template>
  <div class="services">
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

          <h1>OUR SERVICES</h1>

          <div class="foot">
            <div class="foot_content">
              <v-btn icon x-small to="/">
                <v-icon class="icon">mdi-home-outline</v-icon>
              </v-btn>
              <span><v-icon class="icon">mdi-chevron-right</v-icon></span>
              <span>OUR SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      <div class="section_two">
        <div class="section_two_content">
          <div class="cards">
            <v-card @click="goto_design_graphic_design" class="card">
              <v-card-text class="card_text">
                <v-img class="img mb-12" src="../assets/images/design.svg"></v-img>
                <p>BRANDING & GRAPHIC DESIGN</p>
              </v-card-text>
            </v-card>
            <v-card class="card">
              <v-card-text class="card_text">
                <v-img class="img mb-12" src="../assets/images/Icon-feather-activity.svg"></v-img>
                <p>DIGITAL MARKETING</p>
              </v-card-text>
            </v-card>
            <v-card class="card">
              <v-card-text class="card_text">
                <v-img class="img mb-12" src="../assets/images/code.svg"></v-img>
                <p>DESIGN & DEVELOPMENT</p>
              </v-card-text>
            </v-card>
            <v-card class="card">
              <v-card-text class="card_text">
                <v-img class="img mb-12" src="../assets/images/design.svg"></v-img>
                <p>BRANDING & GRAPHIC DESIGN</p>
              </v-card-text>
            </v-card>
            <v-card class="card">
              <v-card-text class="card_text">
                <v-img class="img mb-12" src="../assets/images/Icon-feather-activity.svg"></v-img>
                <p>DIGITAL MARKETING</p>
              </v-card-text>
            </v-card>
            <v-card class="card">
              <v-card-text class="card_text">
                <v-img class="img mb-12" src="../assets/images/code.svg"></v-img>
                <p>DESIGN & DEVELOPMENT</p>
              </v-card-text>
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
  name: "our_services",

  data: () => ({}),

  components: {
    Footer,
  },

  methods: {
    goto_design_graphic_design() {
      this.$router.replace("/services/design_graphic_design");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(../assets/addons/icon/css/materialdesignicons.min.css);
@import url(../assets/style/services.css);
</style>