<template>
    <div class="card">
        <div class="card-img">
            <!-- prioritize native over cdn -->
            <img v-if="img!=null" :src="require(`~/assets/art/${img}`)" />
            <img v-else :src="cdn" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { default: "title", type: String },
        img: { default: null, type: String },
        cdn: { default: null, type: String },
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

    // border: 3px solid #ccc;

    cursor: pointer;
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