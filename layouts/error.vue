<template>
    <div>
        <a v-if="error.statusCode === 404" href="/"> &lt; 404 &gt; </a>
        <a v-else href="/"> &lt; ERROR &gt; </a>
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

<style lang="scss" scoped>

a {
    font-family: "Courier New", Courier, monospace;
    font-size: 2.5em;
    padding: 5vw 8vw 5vw 8vw;
    text-decoration: none;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
