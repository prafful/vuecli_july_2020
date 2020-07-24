<!-- template must always define one root view-->
<template>
    <div>
        <h1 v-on:click="check"> {{ message }} </h1>
       
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
        check: function(){
            this.message =  "BeforeUpdate is fired"
        }
        
    },
    //lifecycle
    beforeCreate: function(){
        console.log("in beforecreate life cycle hook!")
        //alert("in beforecreate life cycle hook!")
    },
    created: function(){
        console.log("in created life cycle hook")
        //alert("in created life cycle hook")
    },
    beforeMount: function(){
        console.log("in beforemount life cycle hook!")
        //alert("in beforemount life cycle hook!")
    },
    mounted: function(){
        console.log("in mounted life cycle hook")
        //alert("in mounted life cycle hook")
    },
    beforeUpdate: function(){
        console.log("in beforeUpdate life cycle hook!")
        //alert("in beforeUpdate life cycle hook!")
    },
    updated: function(){
        console.log("in updated life cycle hook")
        //alert("in updated life cycle hook")
    }

}
</script>

<style scoped>

h1{
    color: purple;
}

</style>