<template>
    <div class="card">
        <div class="card-img">
            <img  :src="img" />
        </div>

        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div>
                <a :href="link" class="link-text neon">[ VIEW ]</a>
                <a :href="link" class="link-text neon">[ CODE ]</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { default: "title", type: String },
        img: {
            default:
                "https://cdn.discordapp.com/attachments/313820457256353794/853790365643702272/noisefield.gif",
            type: String,
        },
        desc: { default: "description goes here", type: String },
        link: { default: "https://github.com/k-xvin", type: String },
        code: { default: "https://github.com/k-xvin", type: String },
    },
};
</script>

<style lang="scss" scoped>
.card {
    width: 200px;
    margin: 1rem;
}

.card-title {
    position: absolute;
}

.card-img {
    width: 100%;
    height: 100%;

    width: 200px;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>