<!-- template must always define one root view-->
<template>
    <div id="friendslist">
        <h1 v-on:click="updateTitle"> {{ sendtitle }} </h1>
        <ul>
            <li v-for="(friend, index) in sendallfriends" v-bind:key="index" v-on:click="friend.display = !friend.display">
                <h2>{{friend.title}}</h2>
                <br>
                <span v-show="friend.display">{{ friend.body }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['sendallfriends', 'sendtitle'],
    /*
    props:{
        sendallfriends:{
            type:Array,
            required: true
        },
        sendtitle:{
            type: String,
            required: true
        }
    },
    */
    data: function(){
        return {
            message:'Friends Component!!!!'
           
        }
    },
    methods:{
        updateTitle: function(){
            console.log("titleChanged event will be emitted!")
            this.$emit('titleChanged', 'Props and Events!!!!')
        }
    }
}
</script>

<style scoped>

h1{
    color: purple;
}

#friendslist{
    width: 100%;
    box-sizing: border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 5px;

}

li{
    text-align: center;
    border: 1px solid red;
    flex-basis: 200px;
    padding:20px
}



</style>