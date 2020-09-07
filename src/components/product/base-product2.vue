<template>
  <!-- <div class="container">
  <div class="row">

  </div>
</div> -->
  <div class="col-12 col-sm-8 col-md-6 col-lg-4">
    <div class="card">
      <img
        class="card-img"
        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
        alt="Vans"
      />
      <div class="card-img-overlay d-flex justify-content-end">
        <!-- <a href="#" class="card-link text-danger like">
          <i class="fas fa-heart"></i>
        </a> -->
      </div>
      <div class="card-body">
        <h4 class="card-title">Vans Sk8-Hi MTE Shoes</h4>
        <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
        <p class="card-text">
          The Vans All-Weather MTE Collection features footwear and apparel
          designed to withstand the elements whilst still looking cool.
        </p>
        <div class="options d-flex flex-fill">
          <select class="custom-select mr-1">
            <option selected>Color</option>
            <option value="1">Green</option>
            <option value="2">Blue</option>
            <option value="3">Red</option>
          </select>
          <select class="custom-select ml-1">
            <option selected>Size</option>
            <option value="1">41</option>
            <option value="2">42</option>
            <option value="3">43</option>
          </select>
        </div>
        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success"><h5 class="mt-4">$125</h5></div>
          <b-button variant="btn btn-danger mt-3">
            <b-icon icon="cart-plus"></b-icon> Add to Cart
          </b-button>
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
                ><img src="@public/images/heart_2.svg" class="svg" alt="" /><div
                  >+</div
                ></div
              ></div
            >
          </div>
          <div
            class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
          >
            <div
              ><div
                ><img src="@public/images/cart.svg" class="svg" alt="" /><div
                  >+</div
                ></div
              ></div
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
