<script setup>
import BlogPostPreviewComponent from "@/components/BlogPostPreviewComponent.vue"
import { ref, onMounted } from 'vue';
import { blogBackendHost } from '@/main.js';
import { getAllBlogPosts } from '@/api.js';

const json = ref(null);

onMounted(async () => {
  json.value = await getAllBlogPosts();
});
</script>


<template>
  <div class="container" v-if="json">
    <div v-for="property in json" :key="property">
      <BlogPostPreviewComponent
        :title="property['title']"
        :postUrl="property['post-url']"
        :tags="property['tags']"
        :dateOfPosting="property['date-of-posting']"
        :dateOfLastEdit="property['date-of-last-edit']"
        :description="property['description']"
        :prevImgUrl="blogBackendHost + property['preview-img-url']"
      />
    </div>
  </div>
  <div v-else>
    <h3>loading posts...</h3>
  </div>
</template>


<style scoped>
div.container {
  display: grid;
  grid-template-rows: repeat(auto);
  row-gap: 1px;
  max-width: 900px;
  padding: 0;
  background-color: hsl(186 50% 90% / 0.5);
}
</style>
