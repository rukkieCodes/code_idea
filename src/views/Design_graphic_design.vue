<template>
  <div class="design_graphic_design">
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

          <div class="texts">
            <p>SERVICES</p>
            <h1>BRANDING & GRAPHIC DESIGN</h1>
          </div>

          <div class="foot">
            <div class="foot_content">
              <v-btn icon x-small to="/">
                <v-icon class="icon">mdi-home-outline</v-icon>
              </v-btn>
              <span><v-icon class="icon">mdi-chevron-right</v-icon></span>
              <span>OUR SERVICES</span>
              <span><v-icon class="icon">mdi-chevron-right</v-icon></span>
              <span>BRANDING & GRAPHIC DESIGN</span>
            </div>
          </div>
        </div>
      </section>

      <div class="section_two">
        <div class="section_two_content">
          <div class="cards">
            <div class="card_one">
              <div class="left_side">
                <div class="left_content">
                  <p>WHAT ABOUT IT?</p>
                </div>
              </div>
              <div class="right_side">
                <div class="right_content">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore doloribus eligendi, neque nemo harum possimus,
                    debitis sapiente impedit ratione eum dolorem minima vero
                    porro exercitationem maiores odit vitae et reiciendis.
                    Tempore doloribus eligendi, neque nemo harum possimus,
                    debitis sapiente impedit ratione eum dolorem minima vero
                    porro exercitationem maiores odit vitae et reiciendis.
                  </p>
                </div>
              </div>
            </div>
            <div class="join"></div>
            <div class="card_two">
              <div class="left_side">
                <div class="left_content">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore doloribus eligendi, neque nemo harum possimus,
                    debitis sapiente impedit ratione eum dolorem minima vero
                    porro exercitationem maiores odit vitae et reiciendis.
                    Tempore doloribus eligendi, neque nemo harum possimus,
                    debitis sapiente impedit ratione eum dolorem minima vero
                    porro exercitationem maiores odit vitae et reiciendis.
                  </p>
                </div>
              </div>

              <div class="right_side">
                <div class="right_content">
                  <p>OUR PROCESS</p>
                </div>
              </div>
            </div>
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
  name: "our_design_graphic_design",

  data: () => ({}),

  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/addons/icon/css/materialdesignicons.min.css);
@import url(../assets/style/design_graphic_design.css);
</style>