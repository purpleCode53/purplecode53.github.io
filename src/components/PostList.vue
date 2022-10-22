<template>
    <div>
        <div
            v-for="(post, i) in posts"
            :key="`post${i}`"
        >
            <router-link :to="post.name">
                {{ post.title }}
                {{ post.date }}
                {{ post.description }}
            </router-link>
            <ul>
                <li
                    v-for="(tag, i) in post.tag"
                    :key="`tag${i}`"
                >
                    {{ tag }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import posts from '@/utils/postInfo'

export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        this.posts = JSON.parse(posts)
    },
}
</script>

