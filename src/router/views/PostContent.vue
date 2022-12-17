<template>
    <Container>
        <div v-html="contents"></div>
    </Container>
</template>

<script>
import converter from "@/utils/htmlConverter";
import Container from '@/components/layout/Container.vue';

export default {
    components: { 
        Container 
    },
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
