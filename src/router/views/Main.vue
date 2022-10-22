<template>
  <Container>
    <post-list :posts="posts" />
  </Container>
</template>

<script>
import Container from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'
import { mapGetters } from 'vuex';

export default {
  components:{
    Container,
    PostList,
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  created() {
    this.$store.dispatch('GET_POSTS')
  },
}
</script>

<style scoped>

</style>
