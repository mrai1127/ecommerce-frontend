import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/Category/Admin.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct'
import EditCategory from '@/views/Category/EditCategory.vue'
import EditProduct from '@/views/Product/EditProduct.vue'
import ShowDetails from '@/views/Product/ShowDetails.vue'
import ListProducts from '@/views/Category/ListProducts.vue'
import Signup from '@/views/Signup.vue'
import Signin from '@/views/Signin.vue'
import WishList from '@/views/Product/WishList.vue'
import Cart from '@/views/Cart.vue'
import Success from '@/views/Payment/Success.vue'
import Failed from '@/views/Payment/Failed.vue'
import Checkout from '@/views/Checkout/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   //category detail page
  {
   path: '/category/show/:id',
   name:'ListProducts',
   component: ListProducts
  },
  {
    path:'/admin/category/add',
    name:'AddCategory',
    component:AddCategory
  },
  {
    path:'/admin/category',
    name:'Category',
    component:Category
  },
  //category edit 
  {
    path:'/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  //Admin home page
  {
    path:'/admin',
    name:'Admin',
    component:Admin
  },
  {
    path:'/admin/product',
    name:'AdminProduct',
    component:Product
  },
  //add product
  {
    path:'/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  //edit product
  {
    path:'/admin/product/:id',
    name:'EditProduct',
    component:EditProduct
  },
  //show details of product
  {
    path:'/product/show/:id',
    name:'ShowDetails',
    component:ShowDetails
  },
  //sign up and sign in
  {
    path:'/signup',
    name:'Signup',
    component: Signup
  },
  {
    path:'/signin',
    name:'Signin',
    component: Signin
  },
  {
    path:'/wishlist',
    name:'WishList',
    component: WishList
  },
  {
    path:'/cart',
    name:'Cart',
    component: Cart
  },
  //checkout
  {
    path:'/checkout',
    name:'Checkout',
    component: Checkout
  },

  //success abd fail pages
  {
    path:'/payment/success',
    name:'PaymentSuccess',
    component: Success
  },
  {
    path:'/payment/failed',
    name:'PaymentFail',
    component: Failed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
