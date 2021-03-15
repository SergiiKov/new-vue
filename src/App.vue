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
     :key="item"
     :title="item"> 

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
      'Новость 1',
      'Новость 2',
      'Новость 3'
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
