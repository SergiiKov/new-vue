<template>
  <div class="card">
    <h3>{{ item }}</h3>
    <h3>{{ title }}</h3>
    <AppButton  @action="open">
      {{isNewsOpen ? 'Closed' : 'Open'}}
    </AppButton>
    <AppButton :color="'danger'" v-if="wasRead" @action="unmark">Not read</AppButton>
    <div v-if="isNewsOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        dolore?
      </p>
      <AppButton v-if="!wasRead" color="primary" @action="mark">Read news</AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton';

export default {
  // props: ['title'],
  props: {
    title: {
      type: String,
      required: true,
    },
    id: Number,
    // isOpen: Boolean
    wasRead: Boolean,
  },
  // emits: ['open-news'],
  emits: {
    "open-news": null,
    "read-news"(id) {
      if (id) {
        return true;
      }
      console.warn("No parametrs id for read-news");
      return false;
    },
    unmark: null,
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
      isNewsOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news");
      }
    },
    mark() {
      this.isNewsOpen = false;
      this.$emit("read-news", this.id);
    },
    unmark() {
      this.$emit("unmark", this.id);
    },
  },
  components: {
    AppButton
  }
};
</script>