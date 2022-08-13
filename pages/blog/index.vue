<template>
    <div>
        <h1>articles</h1>
        <div v-for="article of articles" :key="article.slug">
            <NuxtLink
                :to="{ name: 'blog-articles-slug', params: { slug: article.slug } }"
            >
                <img :src="article.img" />
                <div>
                    <h2>{{ article.title }}</h2>
                </div>
            </NuxtLink>
        </div>

        <h1>articles2</h1>
        <div v-for="article of articles2" :key="article.slug">
            <NuxtLink
                :to="{ name: 'blog-articles2-slug', params: { slug: article.slug } }"
            >
                <img :src="article.img" />
                <div>
                    <h2>{{ article.title }}</h2>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .only(["title", "description", "img", "slug", "author"])
            .sortBy("createdAt", "asc")
            .fetch();

        const articles2 = await $content("articles2")
            .only(["title", "description", "img", "slug", "author"])
            .sortBy("createdAt", "asc")
            .fetch();

        return {
            articles,
            articles2,
        };
    },
};
</script>