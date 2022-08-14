<template>
    <div>
        <div class="container">
            <a v-for="article of articles" :key="article.slug" 
                class="card"
                :href="`blog/articles/${article.slug}`"
            >
                <img :src="article.img" />
                <div>
                    <h3>{{ article.title }}</h3>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .only(["title", "img", "slug"])
            .sortBy("createdAt", "desc")
            .fetch();

        return {
            articles,
        };
    },
};
</script>


<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0 10% 0 10%;
}

.card {
    width: max(10vw, 20vh);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 0rem;


    div {
        border-radius: 0 0 0.5rem 0.5rem;
        background: rgba(255, 255, 255, 0.5);
        padding: 1rem;
        mix-blend-mode: difference;
        
        h3 {
            margin: 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem 0.5rem 0 0;
        object-fit: contain;
    }

    cursor: pointer;
}

</style>

