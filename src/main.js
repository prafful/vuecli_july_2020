import Vue from "vue"
import App from "./App.vue"
import VueResource from "vue-resource";


//import Friend from "./Friends.vue";

//register globally
//Vue.component('myfriends', Friend)

//use vue-resource package
Vue.use(VueResource)


new Vue({
    el:'#app',
    render: h=>h(App)   //render root component here!!!!
})