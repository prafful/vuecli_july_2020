<!-- template must always define one root view-->
<template>
    <div>
        <h1> {{ message }} </h1>
       
    </div>
</template>

<script>
export default {
        data: function(){
        return {
            message:'I am header!!!!'
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