<template>
  <div class="home">
    <img class="bg" src="../assets/images/drawing.svg" />
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item
          v-for="(route, index) in routes"
          :key="index"
          link
          :to="route.route"
        >
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="all_sections">
      <section class="section_one">
        <div class="section_one_content">
          <v-toolbar flat class="toolbar">
            <img class="img" src="../assets/images/logo-new.svg" />
            <v-toolbar-title class="ml-4 toolbar_title"
              >CODE IDEA</v-toolbar-title
            >

            <v-spacer />

            <div class="links">
              <div class="hrefs mr-5">
                <router-link class="mr-8" to="/">HOME</router-link>
                <router-link class="mr-8" to="/our_works"
                  >OUR WORKS</router-link
                >
                <router-link class="mr-8" to="/services">SERVICES</router-link>
                <router-link class="mr-8" to="/contact_us"
                  >CONTACT US</router-link
                >
              </div>
              <v-btn large shaped depressed class="btn px-10">HIRE US</v-btn>
            </div>

            <v-spacer class="space" />
            <v-btn @click="drawer = !drawer" class="menu_btn" fab icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card flat class="hero">
            <div class="left_side">
              <div class="left_content">
                <p class="p1">
                  <span>Building</span> your <span>ideas</span> to perfection
                </p>

                <p class="p2">
                  a community of senior developers looking forward to empowering
                  and building ideas that will bring solutions to world problems
                </p>

                <v-btn x-large shaped depressed class="btn px-12 mt-5"
                  >HIRE US</v-btn
                >
              </div>
            </div>
            <div class="right_side">
              <div class="right_content">
                <div class="card"></div>
                <img src="../assets/images/idea.svg" />
              </div>
            </div>
          </v-card>
        </div>
      </section>

      <div class="section_two">
        <div class="section_two_content">
          <p class="p1">ABOUT US</p>
          <p class="p2">We are a full-service Digital Agency</p>
          <p class="p3">
            We empower businesses and corporate entities with digitally
            transformative web solutions that produce strong brands, fulfil core
            business goals, and generate loyal customers.
          </p>
          <p class="p4">
            We aim to give your customers state-of-the-art experiences, making
            you a monopoly in your marketplace. From Website/App Development,
            Marketing Campaigns, Creative Design, High-quality Content, Social
            Media, and lots more, Code Idea has got you covered.
          </p>
        </div>
      </div>

      <div class="section_three">
        <div class="bg">
          <v-img src="../assets/images/drawing.svg"></v-img>
        </div>
        <div class="section_three_content">
          <div class="left_side">
            <img src="../assets/images/teamwork.jpg" alt="" />
          </div>
          <div class="right_side">
            <div class="images">
              <div class="img">
                <img src="../assets/images/believe.jpg" alt="" />
              </div>
              <div class="img">
                <img src="../assets/images/approach.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section_four">
        <div class="section_four_content">
          <div class="card">
            <div class="card_head">
              <p class="text">Who are we</p>
              <div class="shape"></div>
            </div>

            <div class="body">
              <p>
                a community of senior developers looking foward to empowering
                and building ideas that will bring solutions to world problems
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card_head">
              <p class="text">Our Believe</p>
              <div class="shape"></div>
            </div>

            <div class="body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, nostrum. Nostrum culpa vero voluptatem? Labore,
                expedita inventore quae, vel
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card_head">
              <p class="text">How we work</p>
              <div class="shape"></div>
            </div>

            <div class="body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, nostrum. Nostrum culpa vero voluptatem? Labore,
                expedita inventore quae, vel
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section_five">
        <div class="section_five_content">
          <div class="sides">
            <div class="left_part">
              <v-card flat class="card">
                <img class="img" src="../assets/images/182831.png" />
              </v-card>
            </div>
            <div class="right_part">
              <div class="right_part_content">
                <p class="p1">WHAT WE DO</p>
                <p class="p2">
                  We Help You Build and Bring Your Idea to Perfection
                </p>
                <p class="p3">
                  All the project management essentials you need. Design,
                  development, content creation. With COdeIdea everything is in
                  one central location.
                </p>
                <v-btn large shaped depressed class="btn px-10"
                  >Learn More</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section_six">
        <div class="section_six_content">
          <div class="head">
            <p class="p1">Our Services</p>
            <p class="p2">Manage multiple complex projects with ease</p>
          </div>

          <div class="cards">
            <div class="card">
              <div class="head">
                <img src="../assets/images/design.svg" alt="" />
                <p>Branding and Design</p>
              </div>

              <div class="body">
                <p>
                  Your brand is a tangible psychological personification of your
                  business, unique to you alone. CodeIdea transforms your ideas
                  into reality. We make brands that are not only visually
                  stunning but also able to make customers pause and stare
                </p>
              </div>
            </div>

            <div class="card">
              <div class="head">
                <img src="../assets/images/code.svg" alt="" />
                <p>Web and Mobile Development</p>
              </div>

              <div class="body">
                <p>
                  We offer a team of dexterous well-qualified and experienced
                  computer programmers who value transparency in the process and
                  always keep clients satisfied. We provide high-quality
                  Websites and Native App Development for iOS and Android.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="head">
                <img src="../assets/images/Icon-feather-activity.svg" alt="" />
                <p>Digital Marketing</p>
              </div>

              <div class="body">
                <p>
                  To stand out in today's dynamic marketplace businesses must
                  operate on highly competitive strategies. CodeIdea is a
                  compelling, unique full-service digital marketing agency. We
                  focus on campaigns established to Boost Leads, Sales, &
                  Revenue. Let us help you create online marketing operations
                  that support your business goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section_seven">
        <div class="section_seven_content">
          <div class="head">
            <p class="p1">OUR WORKS</p>
            <p class="p2">things we've made</p>
          </div>

          <div class="cards">
            <div class="card">
              <img src="../assets/images/205128.png" alt="" />
            </div>
            <div class="card">
              <img src="../assets/images/205302.png" alt="" />
            </div>
            <div class="card">
              <img src="../assets/images/205403.png" alt="" /> -->
            </div>
          </div>

          <div class="foot">
            <v-btn large shaped depressed class="btn px-10">View More</v-btn>
          </div>
        </div>
      </div>

      <div class="section_eight">
        <div class="bg">
          <v-img src="../assets/images/drawing.svg"></v-img>
        </div>
        <div class="section_eight_content">
          <div class="head">
            <p class="p1">OUR PARTNER</p>
            <p class="p2">Trusted by 10+ Customers</p>
          </div>

          <div class="cards">
            <div class="card">
              <p>Customer 1 logo</p>
            </div>
            <div class="card">
              <p>Customer 2 logo</p>
            </div>
            <div class="card">
              <p>Customer 3 logo</p>
            </div>
            <div class="card">
              <p>Customer 4 logo</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section_nine">
        <div class="section_nine_content">
          <div class="left_side">
            <img
              src="../assets/images/plan-more-efficiently-3__1__optimized.png"
              alt=""
            />
          </div>
          <div class="right_side">
            <p class="p1">What makes Code idea different?</p>

            <div class="p2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
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
import { mapGetters } from "vuex";
export default {
  name: "Home",

  data: () => ({
    drawer: false,
  }),

  components: {
    Footer,
  },

  computed: {
    ...mapGetters(["routes"]),
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/addons/icon/css/materialdesignicons.min.css);
@import url(../assets/style/home.css);
</style>