<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="col-xl-4 col-md-6">
    <div class="product">
      <div class="product_image"><img :src="product.image_url" alt=""/></div>
      <div class="product_content">
        <div
          class="product_info d-flex flex-row align-items-start justify-content-start"
        >
          <div>
            <div>
              <div class="product_name"
                ><a href="product.html">{{ product.details }}</a></div
              >
              <div class="product_category"
                >In <a href="category.html">Category</a></div
              >
            </div>
          </div>
          <div class="ml-auto text-right">
            <!-- <div class="rating_r rating_r_4 home_item_rating"
              ><i></i><i></i><i></i><i></i><i></i
            ></div> -->
            <div class="product_price text-right" style="line-height: 0;"
              >{{ product.price }}<span>টাকা</span></div
            >
          </div>
        </div>
        <div class="product_buttons">
          <div
            class="text-right d-flex flex-row align-items-end justify-content-end"
          >
            <select style="margin: 12px 31px;" class="col-md-2 custom-select">
              <option selected value="0">0</option>
              <option v-for="index in 6" :key="index" :value="index">{{
                index
              }}</option>
            </select>
            <div
              style="border-top: 0"
              class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
            >
              <div
                ><div
                  ><img src="images/cart.svg" class="svg" alt="" /><div
                    >+</div
                  ></div
                ></div
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
