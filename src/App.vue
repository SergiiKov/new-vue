<template>
  <the-header />
  <the-header></the-header>
  <div class="container pt-1">
    <div class="card">
      <h2>Новости {{ now }}</h2>
      <span>Open {{ openRate }} // Read {{ readRate }}</span>
    </div>
    <app-news title="This is title 1"> </app-news>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @open-news="openNews"
      @read-news="readNews"
      :was-read="item.wasRead"
      @unmark="unreadNews"
    >
    </app-news>
  </div>
</template>

<script>
import AppNews from "./components/AppNews";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: "Новость 1",
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: "Новость 2",
          id: 2,
          isOpen: false,
          wasRead: false,
        },
        {
          title: "Новость 3",
          id: 3,
          isOpen: false,
          wasRead: false,
        },
      ],
      openRate: 0,
      readRate: 0,
    };
  },
  methods: {
    openNews(data) {
      this.openRate++, console.log(data);
    },
    readNews(id) {
      const idx = this.news.findIndex((news) => news.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    unreadNews(id) {
      const news = this.news.find((news) => news.id === id);
      news.wasRead = false;
      this.readRate--;
    },
  },
  components: {
    "app-news": AppNews,
  },
};
</script>

<style>

</style>
