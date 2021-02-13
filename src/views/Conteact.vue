<template>
  <div class="contact">
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

          <h1>HIRE US</h1>

          <div class="foot">
            <div class="foot_content">
              <v-btn icon x-small to="/">
                <v-icon class="icon">mdi-home-outline</v-icon>
              </v-btn>
              <span><v-icon class="icon">mdi-chevron-right</v-icon></span>
              <span>HIRE US</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section_two">
        <div class="section_two_content">
          <div class="text">
            <p>FOR ANY ENQUIRY OR JUST TO SAY HELLO REACH OUT HERE</p>
          </div>
        </div>
      </section>

      <div class="section_three">
        <div class="section_three_content">
          <div class="text">
            <p>info@codeidea.com Port Harcourt, Rivers State.</p>
          </div>
        </div>
      </div>

      <div class="section_four">
        <div class="section_four_content">
          <div class="card">
            <div class="left_side">
              <img src="../assets/images/220045.png" alt="" />
            </div>
            <div class="right_side">
              <v-form>
                <v-container>
                  <v-row>
                    <v-col class="my-0 py-0" cols="12" sm="6" md="6">
                      <v-text-field
                        dense
                        label="First Name"
                        style="border-radius: 15px"
                        outlined
                        color="pink lighten-1"
                      ></v-text-field>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="6" md="6">
                      <v-text-field
                        dense
                        label="Last Name"
                        style="border-radius: 15px"
                        outlined
                        color="pink lighten-1"
                      ></v-text-field>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="6" md="6">
                      <v-text-field
                        dense
                        label="Email"
                        type="email"
                        style="border-radius: 15px"
                        color="pink lighten-1"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="6" md="6">
                      <v-text-field
                        dense
                        label="Phone Number"
                        style="border-radius: 15px"
                        outlined
                        color="pink lighten-1"
                      ></v-text-field>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="6" md="12">
                      <v-text-field
                        dense
                        label="Enter your company name"
                        style="border-radius: 15px"
                        color="pink lighten-1"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="6" md="12">
                      <v-text-field
                        dense
                        label="How did you hear about us?"
                        style="border-radius: 15px"
                        color="pink lighten-1"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="6" md="12">
                      <v-textarea
                        outlined
                        name="input-7-4"
                        style="border-radius: 15px"
                        label="We're all ears"
                        color="pink lighten-1"
                      ></v-textarea>
                    </v-col>

                    <v-col class="my-0 py-0" cols="12" sm="4" md="4">
                      <v-btn block style="background: #fa4d68; color: #fff; height: 3em" depressed
                        >Submit</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
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
  name: "contact",

  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/addons/icon/css/materialdesignicons.min.css);
@import url(../assets/style/contact.css);
</style>