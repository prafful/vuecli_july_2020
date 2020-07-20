<!-- template must always define one root view-->
<template>
    <div>
        <h1> {{ title }} </h1>
        <p> {{welcome()}} </p>
        Friends:
        <friends></friends>
    </div>
</template>

<script>
import Friend from './Friends.vue'

export default {
    components:{
        friends:Friend
    },
    data: function(){
        return {
            title:'Vue CLI App!!!!'
        }
    },
    methods:{
        welcome: function(){
            return 'Welcome to Vue CLI!!!!'
        }
    }
}
</script>

<style>

h1{
    color: red;
}

</style>