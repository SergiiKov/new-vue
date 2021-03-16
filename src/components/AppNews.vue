<template>
    <div class="card">
       <h3>{{item}}</h3>
        <h3>{{title}}</h3>
       <button class="btn" @click="open">{{ isNewsOpen ? 'Closed' : 'Open'}}</button>
       <button class="btn danger" v-if="wasRead" @click="unmark">Not read</button>
      <div v-if="isNewsOpen"> 
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolore?</p>
        <button v-if="!wasRead" class="btn primary" @click="mark">Read news</button>
      </div> 
    </div>
</template>

<script>
export default {
// props: ['title'],
props: {
    title: {
        type: String,
        required: true
    },
    id: Number,
    // isOpen: Boolean
    wasRead:Boolean
},
// emits: ['open-news'],
emits:{
  'open-news': null,
  'read-news'(id) {
if (id) {
  return true 
  }
  console.warn('No parametrs id for read-news')
  return false
  },
  unmark: null
//   'open-news'(num) {
// if (num) {
//   return true
// }
// console.warn('no data in open news emit')
// return false
//   }
},
data() {
 return {
    isNewsOpen: this.isOpen
 }
},
methods: {
    open(){
        this.isNewsOpen= !this.isNewsOpen
         if (this.isNewsOpen) {
          this.$emit('open-news')   
         } 
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    unmark() {
      this.$emit('unmark', this.id)
    }
}
}
</script>