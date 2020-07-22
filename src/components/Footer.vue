<!-- template must always define one root view-->
<template>
    <div>
        <h1> {{ message }} @{{sendtitle}} </h1>
       
    </div>
</template>

<script>
export default {
    props:['sendtitle'],
    data: function(){
        
        return {
            message:'I am footer!!!!'
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>

h1{
    color: purple;
}

</style>