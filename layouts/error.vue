<template>
    <div id="error">
        <div class="errortext">
            <a v-if="error.statusCode === 404" href="/"> [ 404 ] </a>
            <a v-else href="/"> [ ERROR ] </a>
        </div>
    </div>
</template>

<script>
export default {
    layout: "empty",
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: "404",
            otherError: "ERROR",
        };
    },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";
#error {
    background: url("/beach_phaser_echo_compress.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    height: 100%;
    z-index: -15;
}

.errortext{
    padding: 5vw 8vw 5vw 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.errortext a {
    background-color: blue;
}
</style>
