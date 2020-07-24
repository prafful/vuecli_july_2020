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
        <div>
           <ol>
               <li v-for="(user, index) in users" v-bind:key="index" >
                   {{ user.name  }} from {{ user.address.geo.lat }}, {{user.address.geo.lng}}
               </li>
           </ol>
        </div>
         <div>
           <ol>
               <li v-for="(user, index) in friends" v-bind:key="index" >
                   {{ user.name  }} from {{ user.location }}
               </li>
           </ol>
        </div>
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
            message:'Friends Component!!!!',
            users:[],
            friends:[]
           
        }
    },
    methods:{
        updateTitle: function(){
            console.log("titleChanged event will be emitted!")
            this.$emit('titleChanged', 'Props and Events!!!!')
        }
    },
    mounted: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
                        .then(function(response){
                            console.log(response)
                            this.users = response.body
                        })

        this.$http.get('http://localhost:3000/friends')
        .then(function(response){
            console.log(response)
            this.friends = response.body
        })

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