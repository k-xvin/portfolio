<template>
    <div>
        <a class= "errortext" v-if="error.statusCode === 404" href="/"> &lt; 404 &gt; </a>
        <a class= "errortext" v-else href="/"> &lt; ERROR &gt; </a>
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
.errortext {
    padding: 5vw 8vw 5vw 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
