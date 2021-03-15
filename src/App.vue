<template>
  <the-header />
   <the-header></the-header>
   <div class="container pt-1">
     <div class="card">
       <h2>Новости {{now}}</h2>
     </div>
     <div class="card" v-for="item in news" :key="item">
       <h3>{{item}}</h3>
       <button class="btn" @click="isOpen = !isOpen">Open</button>
       <p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolore?</p>
     </div>
   </div>
</template>

<script>
export default {
data() {
 return {
   now: new Date().toLocaleDateString(),
   isOpen: false,
   news: [
     'Новость 1',
     'Новость 2',
     'Новость 3'
   ]
 }
}
}
</script>

<style>

</style>
