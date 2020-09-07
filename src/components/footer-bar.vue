<script>
import { mapGetters } from 'vuex'
import appConfig from '@src/app.config'
export default {
  data() {
    return {
      appConfig,
    }
  },
  computed: {
    ...mapGetters('menus', ['getMenuBars']),
  },
}
</script>

<template>
  <!-- Footer -->
  <footer class="footer ">
    <div class="footer_content">
      <div class="container">
        <div class="row">
          <!-- About -->
          <div class="col-lg-4 footer_col">
            <div class="footer_about">
              <div class="footer_logo">
                <a href="#">
                  <div
                    class="d-flex flex-row align-items-center justify-content-start"
                  >
                    <div class="footer_logo_icon"
                      ><img width="60" src="@public/images/logo.png" alt=""
                    /></div>
                    <div>{{ appConfig.title }}</div>
                  </div>
                </a>
              </div>
              <div class="footer_about_text">
                <p
                  ><strong>{{ appConfig.description }}</strong></p
                >
              </div>
            </div>
          </div>

          <div class="col-lg-4 footer_col">
            <div class="footer_menu">
              <!-- <div class="footer_title">Stay in Touch</div>
              <div class="newsletter">
                <form id="newsletter_form" action="#" class="newsletter_form">
                  <input
                    type="email"
                    class="newsletter_input"
                    placeholder="Subscribe to our Newsletter"
                    required="required"
                  />
                  <button class="newsletter_button">+</button>
                </form>
              </div> -->
              <div>
                <div class="footer_title">Social</div>
                <ul
                  class="footer_social_list d-flex flex-row align-items-start justify-content-start"
                >
                  <li
                    ><a href="#"
                      ><i class="fa fa-facebook" aria-hidden="true"></i></a
                  ></li>
                  <li
                    ><a href="#"
                      ><i class="fa fa-youtube-play" aria-hidden="true"></i></a
                  ></li>
                  <li
                    ><a href="#"
                      ><i class="fa fa-google-plus" aria-hidden="true"></i></a
                  ></li>
                  <li
                    ><a href="#"
                      ><i class="fa fa-instagram" aria-hidden="true"></i></a
                  ></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Footer Links -->
          <div class="col-lg-4 footer_col">
            <div class="footer_menu">
              <div class="footer_title">সহযোগিতা</div>
              <ul class="footer_list">
                <li>
                  <a
                    href="https://www.facebook.com/shoukhinkabbo"
                    target="_blank"
                    ><div
                      >facebook page<div class="footer_tag_1">now</div></div
                    ></a
                  >
                </li>
                <li>
                  <a href="#policy"><div>Policy</div></a>
                </li>
                <li>
                  <a href="#guide"
                    ><div
                      >Guide<div class="footer_tag_2">recommended</div></div
                    ></a
                  >
                </li>
                <li>
                  <a href="#terms"><div>Terms and Conditions</div></a>
                </li>
                <li>
                  <a href="#contact"><div>Contact</div></a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Footer Contact -->
        </div>
      </div>
    </div>
    <div class="footer_bar">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start"
            >
              <div class="copyright order-md-1 order-2"
                ><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;{{ new Date().getFullYear() }}
                <i class="fa fa-heart-o" aria-hidden="true"></i> by
                <a
                  href="https://www.facebook.com/shoukhinkabbo/"
                  target="_blank"
                  >{{ appConfig.title }}</a
                >
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div
              >
              <nav class="footer_nav ml-md-auto order-md-2 order-1">
                <ul
                  class="d-flex flex-row align-items-center justify-content-start"
                >
                  <li v-for="(menu, index) in getMenuBars" :key="index"
                    ><a href="#">{{ menu.title }}</a></li
                  >
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style type="scss" scoped>
/* stylelint-disable */
.footer_logo {
  margin-left: 0;
}
</style>
