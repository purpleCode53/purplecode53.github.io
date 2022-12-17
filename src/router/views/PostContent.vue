<template>
    <div class="postContainer">
        <div v-html="contents"></div>
    </div>
</template>

<script>
import converter from "@/utils/htmlConverter";

export default {
    data() {
        return {
            contents: null
        };
    },
    async created() {
        try {
            const param = this.$route.params.title;
            const post = await import(`@/contents/${param}.md`);
            //console.log(post.default)
            this.contents = converter.htmlConverter(post.default);
        }
        catch (e) {
            console.log(e);
        }
    }
}

</script>

<style lang="scss">
    @import '@/assets/style/markdown.scss';
</style>
