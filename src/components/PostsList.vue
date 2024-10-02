<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </li>
    </ul>
    <p v-else>Loading posts...</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  async created() {
    await this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3001/posts')
        this.posts = response.data
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
}
</script>
