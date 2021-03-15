<template>
  <the-header />
   <the-header></the-header>
   <div class="container pt-1">
     <div class="card">
       <h2>Новости {{now}}</h2>
     </div>
     <app-news title="This is title 1"> </app-news>
     <app-news
     v-for="item in news" 
     :key="item.id"
     :title="item.title"
     :id="item.id"
     :is-open="item.isOpen"> 

     </app-news>
   </div>
</template>


<script>
import AppNews from './components/AppNews';

export default {
data() {
  return {
    now: new Date().toLocaleDateString(),
    news: [
      {
        title:'Новость 1',
        id: 1,
        isOpen: false
      },
            {
        title:'Новость 2',
        id: 2,
        isOpen: false
      },
            {
        title:'Новость 3',
        id: 3,
        isOpen: false
      }

    ]
  }
},
  components:{
    'app-news' : AppNews
  }
}
</script>

<style>

</style>
