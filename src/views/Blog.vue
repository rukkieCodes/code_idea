<template>
  <div class="blog">
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

          <h1>BLOG</h1>

          <div class="foot">
            <div class="foot_content">
              <v-btn icon x-small to="/">
                <v-icon class="icon">mdi-home-outline</v-icon>
              </v-btn>
              <span><v-icon class="icon">mdi-chevron-right</v-icon></span>
              <span>OUR BLOG</span>
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
              v-for="(blog, index) in blogs"
              :key="index"
              tile
              class="card"
            >
              <v-toolbar class="toolbar" flat color="white" dense>
                <v-toolbar-title class="toolbar_title">{{
                  blog.title
                }}</v-toolbar-title>

                <v-spacer />

                <v-toolbar-title class="toolbar_title">
                  <v-icon class="icon mr-2">mdi-clock</v-icon>{{ blog.time }}
                </v-toolbar-title>
              </v-toolbar>
              <v-img :src="blog.image" class="img"></v-img>

              <v-card-text class="card_text">
                <p>
                  {{ blog.heading }}
                </p>
                <p>
                  {{ blog.body }}
                </p>
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
  name: "blog",

  data: () => ({
    blogs: [
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
      {
        title: "DESIGN",
        time: "1h ago",
        heading:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim.",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.",
        image: require("../assets/images/000750.png"),
      },
    ],
  }),

  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/addons/icon/css/materialdesignicons.min.css);
@import url(../assets/style/blog.css);
</style>