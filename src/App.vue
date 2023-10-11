<template>
  <Navbar :cartCount="cartCount" @resetCartCount="resetCartCount" />
  <router-view v-if="categories && products" :baseURL="baseURL" :categories="categories" :products="products"
    @fetchData="fetchData">
  </router-view>
  <!--Footer-->
  <Footer />
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
export default {
  components: { Navbar, Footer },
  data() {
    return {
      baseURL: "https://backend-ecommerce-lje7.onrender.com",
      //baseURL: 'http://localhost:8085/',
      products: null,
      categories: null,
      cartCount: 0,
    }
  },
  methods: {
    async fetchData() {
      //api call to get all the categories
      await axios.get(`${this.baseURL}/category/`)
        .then(res => {
          this.categories = res.data
        }).catch((err) => console.log('err', err));

      //api call to get the products
      await axios.get(`${this.baseURL}/product/`)
        .then(res => {
          this.products = res.data
        }).catch((err) => console.log('err', err));

      //fetch cart item if token is present i.e logged in
      if (this.token) {
        axios.get(`${this.baseURL}/cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log('err', err));
      }
    },
    resetCartCount(){
      this.cartCount = 0;
    }
  },
  mounted() {
    this.fetchData();
    this.token = localStorage.getItem("token");
  }
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
