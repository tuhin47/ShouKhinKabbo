<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
// import HomeSlider from '@components/home-slider.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <div class="super_container">
      <div class="super_container_inner">
        <div class="super_overlay"></div>

        <!-- Home -->
        <!-- <HomeSlider /> -->
        <!-- Products -->

        <div class="products">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section_title text-center"
                  >Popular on Little Closet</div
                >
              </div>
            </div>
            <div class="row page_nav_row">
              <div class="col">
                <div class="page_nav">
                  <ul
                    class="d-flex flex-row align-items-start justify-content-center"
                  >
                    <li class="active"><a href="category.html">Women</a></li>
                    <li><a href="category.html">Men</a></li>
                    <li><a href="category.html">Kids</a></li>
                    <li><a href="category.html">Home Deco</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row products_row">
              <!-- Product -->
              <div class="col-xl-4 col-md-6">
                <div class="product">
                  <div class="product_image"
                    ><img src="images/product_1.jpg" alt=""
                  /></div>
                  <div class="product_content">
                    <div
                      class="product_info d-flex flex-row align-items-start justify-content-start"
                    >
                      <div>
                        <div>
                          <div class="product_name"
                            ><a href="product.html"
                              >Cool Clothing with Brown Stripes</a
                            ></div
                          >
                          <div class="product_category"
                            >In <a href="category.html">Category</a></div
                          >
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"
                          ><i></i><i></i><i></i><i></i><i></i
                        ></div>
                        <div class="product_price text-right"
                          >$3<span>.99</span></div
                        >
                      </div>
                    </div>
                    <div class="product_buttons">
                      <div
                        class="text-right d-flex flex-row align-items-start justify-content-start"
                      >
                        <div
                          class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/heart_2.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                        <div
                          class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/cart.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Product -->
              <div class="col-xl-4 col-md-6">
                <div class="product">
                  <div class="product_image"
                    ><img src="images/product_2.jpg" alt=""
                  /></div>
                  <div class="product_content">
                    <div
                      class="product_info d-flex flex-row align-items-start justify-content-start"
                    >
                      <div>
                        <div>
                          <div class="product_name"
                            ><a href="product.html"
                              >Cool Clothing with Brown Stripes</a
                            ></div
                          >
                          <div class="product_category"
                            >In <a href="category.html">Category</a></div
                          >
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"
                          ><i></i><i></i><i></i><i></i><i></i
                        ></div>
                        <div class="product_price text-right"
                          >$3<span>.99</span></div
                        >
                      </div>
                    </div>
                    <div class="product_buttons">
                      <div
                        class="text-right d-flex flex-row align-items-start justify-content-start"
                      >
                        <div
                          class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/heart_2.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                        <div
                          class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/cart.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Product -->
              <div class="col-xl-4 col-md-6">
                <div class="product">
                  <div class="product_image"
                    ><img src="images/product_3.jpg" alt=""
                  /></div>
                  <div class="product_content">
                    <div
                      class="product_info d-flex flex-row align-items-start justify-content-start"
                    >
                      <div>
                        <div>
                          <div class="product_name"
                            ><a href="product.html"
                              >Cool Clothing with Brown Stripes</a
                            ></div
                          >
                          <div class="product_category"
                            >In <a href="category.html">Category</a></div
                          >
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"
                          ><i></i><i></i><i></i><i></i><i></i
                        ></div>
                        <div class="product_price text-right"
                          >$3<span>.99</span></div
                        >
                      </div>
                    </div>
                    <div class="product_buttons">
                      <div
                        class="text-right d-flex flex-row align-items-start justify-content-start"
                      >
                        <div
                          class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/heart_2.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                        <div
                          class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/cart.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Product -->
              <div class="col-xl-4 col-md-6">
                <div class="product">
                  <div class="product_image"
                    ><img src="images/product_4.jpg" alt=""
                  /></div>
                  <div class="product_content">
                    <div
                      class="product_info d-flex flex-row align-items-start justify-content-start"
                    >
                      <div>
                        <div>
                          <div class="product_name"
                            ><a href="product.html"
                              >Cool Clothing with Brown Stripes</a
                            ></div
                          >
                          <div class="product_category"
                            >In <a href="category.html">Category</a></div
                          >
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"
                          ><i></i><i></i><i></i><i></i><i></i
                        ></div>
                        <div class="product_price text-right"
                          >$3<span>.99</span></div
                        >
                      </div>
                    </div>
                    <div class="product_buttons">
                      <div
                        class="text-right d-flex flex-row align-items-start justify-content-start"
                      >
                        <div
                          class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/heart_2.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                        <div
                          class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/cart.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Product -->
              <div class="col-xl-4 col-md-6">
                <div class="product">
                  <div class="product_image"
                    ><img src="images/product_5.jpg" alt=""
                  /></div>
                  <div class="product_content">
                    <div
                      class="product_info d-flex flex-row align-items-start justify-content-start"
                    >
                      <div>
                        <div>
                          <div class="product_name"
                            ><a href="product.html"
                              >Cool Clothing with Brown Stripes</a
                            ></div
                          >
                          <div class="product_category"
                            >In <a href="category.html">Category</a></div
                          >
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"
                          ><i></i><i></i><i></i><i></i><i></i
                        ></div>
                        <div class="product_price text-right"
                          >$3<span>.99</span></div
                        >
                      </div>
                    </div>
                    <div class="product_buttons">
                      <div
                        class="text-right d-flex flex-row align-items-start justify-content-start"
                      >
                        <div
                          class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/heart_2.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                        <div
                          class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/cart.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Product -->
              <div class="col-xl-4 col-md-6">
                <div class="product">
                  <div class="product_image"
                    ><img src="images/product_6.jpg" alt=""
                  /></div>
                  <div class="product_content">
                    <div
                      class="product_info d-flex flex-row align-items-start justify-content-start"
                    >
                      <div>
                        <div>
                          <div class="product_name"
                            ><a href="product.html"
                              >Cool Clothing with Brown Stripes</a
                            ></div
                          >
                          <div class="product_category"
                            >In <a href="category.html">Category</a></div
                          >
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"
                          ><i></i><i></i><i></i><i></i><i></i
                        ></div>
                        <div class="product_price text-right"
                          >$3<span>.99</span></div
                        >
                      </div>
                    </div>
                    <div class="product_buttons">
                      <div
                        class="text-right d-flex flex-row align-items-start justify-content-start"
                      >
                        <div
                          class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/heart_2.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                        <div
                          class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                        >
                          <div
                            ><div
                              ><img
                                src="images/cart.svg"
                                class="svg"
                                alt=""
                              /><div>+</div></div
                            ></div
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row load_more_row">
              <div class="col">
                <div class="button load_more ml-auto mr-auto"
                  ><a href="#">load more</a></div
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Boxes -->

        <div class="boxes">
          <div class="container">
            <div class="row">
              <div class="col">
                <div
                  class="boxes_container d-flex flex-row align-items-start justify-content-between flex-wrap"
                >
                  <!-- Box -->
                  <div class="box">
                    <div
                      class="background_image"
                      style="background-image:url(images/box_1.jpg)"
                    ></div>
                    <div
                      class="box_content d-flex flex-row align-items-center justify-content-start"
                    >
                      <div class="box_left">
                        <div class="box_image">
                          <a href="category.html">
                            <div
                              class="background_image"
                              style="background-image:url(images/box_1_img.jpg)"
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div class="box_right text-center">
                        <div class="box_title">Trendsetter Collection</div>
                      </div>
                    </div>
                  </div>

                  <!-- Box -->
                  <div class="box">
                    <div
                      class="background_image"
                      style="background-image:url(images/box_2.jpg)"
                    ></div>
                    <div
                      class="box_content d-flex flex-row align-items-center justify-content-start"
                    >
                      <div class="box_left">
                        <div class="box_image">
                          <a href="category.html">
                            <div
                              class="background_image"
                              style="background-image:url(images/box_2_img.jpg)"
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div class="box_right text-center">
                        <div class="box_title">Popular Choice</div>
                      </div>
                    </div>
                  </div>

                  <!-- Box -->
                  <div class="box">
                    <div
                      class="background_image"
                      style="background-image:url(images/box_3.jpg)"
                    ></div>
                    <div
                      class="box_content d-flex flex-row align-items-center justify-content-start"
                    >
                      <div class="box_left">
                        <div class="box_image">
                          <a href="category.html">
                            <div
                              class="background_image"
                              style="background-image:url(images/box_3_img.jpg)"
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div class="box_right text-center">
                        <div class="box_title">Popular Choice</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->

        <div class="features">
          <div class="container">
            <div class="row">
              <!-- Feature -->
              <div class="col-lg-4 feature_col">
                <div
                  class="feature d-flex flex-row align-items-start justify-content-start"
                >
                  <div class="feature_left">
                    <div class="feature_icon"
                      ><img src="images/icon_1.svg" alt=""
                    /></div>
                  </div>
                  <div
                    class="feature_right d-flex flex-column align-items-start justify-content-center"
                  >
                    <div class="feature_title">Fast Secure Payments</div>
                  </div>
                </div>
              </div>

              <!-- Feature -->
              <div class="col-lg-4 feature_col">
                <div
                  class="feature d-flex flex-row align-items-start justify-content-start"
                >
                  <div class="feature_left">
                    <div class="feature_icon ml-auto mr-auto"
                      ><img src="images/icon_2.svg" alt=""
                    /></div>
                  </div>
                  <div
                    class="feature_right d-flex flex-column align-items-start justify-content-center"
                  >
                    <div class="feature_title">Premium Products</div>
                  </div>
                </div>
              </div>

              <!-- Feature -->
              <div class="col-lg-4 feature_col">
                <div
                  class="feature d-flex flex-row align-items-start justify-content-start"
                >
                  <div class="feature_left">
                    <div class="feature_icon"
                      ><img src="images/icon_3.svg" alt=""
                    /></div>
                  </div>
                  <div
                    class="feature_right d-flex flex-column align-items-start justify-content-center"
                  >
                    <div class="feature_title">Free Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
