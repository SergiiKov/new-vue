<template>
         <div class="card">
       <h3>{{item}}</h3>
         <h3>{{title}}</h3>
       <button class="btn" @click="open">{{ isNewsOpen ? 'Closed' : 'Open'}}</button>
       <p v-if="isNewsOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolore?</p>
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
    id: Number
    // isOpen: Boolean
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
          this.$emit('open-news', 43)   
         } 
    }
}
}
</script>