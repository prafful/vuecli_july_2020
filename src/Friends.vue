<!-- template must always define one root view-->
<template>
    <div>
        <h1> {{ title }} </h1>
       
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            title:'Friends Component!!!!'
        }
    },
    methods:{
        
    }
}
</script>

<style>

h1{
    color: purple;
}

</style>