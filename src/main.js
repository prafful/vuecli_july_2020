import Vue from "vue"
import App from "./App.vue"


//import Friend from "./Friends.vue";

//register globally
//Vue.component('myfriends', Friend)

new Vue({
    el:'#app',
    render: h=>h(App)   //render root component here!!!!
})