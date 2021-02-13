<template>
  <div class="footer" padless>
    <div class="footer_content">
      <div class="section_one">
        <div class="card_one">
          <div class="logo">
            <img src="../assets/images/logo-light.svg" alt="" />
            <p>CODE IDEA</p>
          </div>

          <div class="body">
            <p>Building your ideas to perfection</p>
          </div>
        </div>
        <div class="card_two">
          <div class="card">
            <div class="head">
              <p>OUR WORKS</p>
            </div>
            <div class="body">
              <p>Design Development Branding Marketing</p>
            </div>
          </div>
          <div class="card">
            <div class="head">
              <p>SERVICES</p>
            </div>
            <div class="body">
              <p>Design Development Branding Marketing</p>
            </div>
          </div>
          <div class="card">
            <div class="head">
              <p>SUBSCRIBE</p>
            </div>
            <div class="body">
              <v-text-field
                label="Email"
                color="white"
                outlined
                dense
              ></v-text-field>
              <v-btn small depressed class="btn px-5 mt-n3">SUBMIT</v-btn>
            </div>
          </div>
        </div>
        <div class="card_three">
          <p>
            <v-icon class="icon">mdi-map-marker</v-icon> Port Harcourt, Rivers
            State, nigeria
          </p>
          <p><v-icon class="icon">mdi-email</v-icon> info@codeidea.com</p>

          <div class="buttons">
            <v-btn
              class="btn mr-4 pink--text text--lighten-1"
              fab
              x-small
              depressed
            >
              <v-icon size="20">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              class="btn mr-4 pink--text text--lighten-1"
              fab
              x-small
              depressed
            >
              <v-icon size="20">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              class="btn mr-4 pink--text text--lighten-1"
              fab
              x-small
              depressed
            >
              <v-icon size="20">mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              class="btn mr-4 pink--text text--lighten-1"
              fab
              x-small
              depressed
            >
              <v-icon size="20">mdi-youtube</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="section_two">
        <p>Terms and Conditions</p>
        <p>5479 Clients</p>
        <p>Copyright © 2021 Code Idea All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "../assets/addons/icon/css/materialdesignicons.min.css";
@import "../assets/style/footer.scss";
</style>