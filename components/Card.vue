<template>
    <div class="card">
        <div class="card-img">
            <img  :src="img" />
        </div>
        <!-- <div class="card-title">
            <h1>{{ this.title }}</h1>
        </div> -->
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
        link: { default: "/title", type: String },
    },
};
</script>

<style lang="scss" scoped>
.card {
    width: 200px;
    height: 200px;
    background-color: white;
}

.card-title {
    position: absolute;
}

.card-img {
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>