<!-- template must always define one root view-->
<template>
    <div>
        <h1> {{ title }} </h1>
        <p> {{welcome()}} </p>
        Friends:
        <app-header></app-header>
        <friends v-bind:sendallfriends="allfriends" 
                v-bind:sendtitle="title"
                v-on:titleChanged="changeTitle($event)">
        </friends>
        <app-footer  v-bind:sendtitle="title">
                

        </app-footer>
    </div>
</template>

<script>
import MyFriend from './components/Friends.vue'
import MyHeader from './components/Header.vue'
import MyFooter from './components/Footer.vue'

export default {
    components:{
        friends:MyFriend,
        'app-header':MyHeader,
        'app-footer':MyFooter
    },
    data: function(){
        return {
            title:'Vue CLI App!!!!',
            allfriends:[
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                "display":false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                "display":false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                "display":false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                "display":false
            }
        ]
        }
    },
    methods:{
        welcome: function(){
            return 'Welcome to Vue CLI!!!!'
        },
        changeTitle: function(e){
            console.log(e)
            this.title = e

        }

    }
}
</script>

<style scoped>

h1{
    color: red;
}

</style>