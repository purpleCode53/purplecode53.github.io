<template>
    <div>
        <div
            v-for="(post, i) in posts"
            :key="`post${i}`"
            class="post_info"
        >
            <router-link :to="post.name">
                <h2>{{ post.title }}</h2>
            </router-link>
            <router-link :to="post.name">
                <p class="post_desc">{{ post.description }}</p>
            </router-link>
            <ul>
                <li
                    v-for="(tag, i) in post.tag"
                    :key="`tag${i}`"
                    class="post_tag"
                >
                    <router-link :to="{path:'/tags/' + tag}">{{ tag }}</router-link>
                </li>
            </ul>
            <div class="post_rst">
                <p>{{ post.date }}</p>
            </div>
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

<style>
.post_info {
    padding-top: 1.5rem;
    margin-bottom: 40px;
}

.post_info h2 {
    padding-left: var(--info-padding-left);
    font-size: 1.5rem;
    margin: 0px;
    color: #000000;
    word-break: keep-all;
}

.post_info .post_desc {
    padding-left: var(--info-padding-left);
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #656565;
    word-break: keep-all;
    overflow-wrap: break-word;
}

.post_info p {
    padding-left: var(--info-padding-left);
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #787878;
    word-break: keep-all;
    overflow-wrap: break-word;
}

.post_info + .post_info {
    border-top: 1px solid #F1F3F5;
}

.post_info ul {
    padding-left: var(--info-padding-left);
}

.post_tag {
    display: inline-block;
    margin-bottom: 0.875rem;
    background: #F5F7F8;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    color: #12B888;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
}

.post_tag a{
    color:#aa10dd;
}

body {
    --info-padding-left:1.5rem;
}
</style>

