<template>
    <div class="error-page scanlines">
        <a v-if="error.statusCode === 404" class="errortext" href="/">
            [ 404 ]
        </a>
        <a v-else class="errortext" href="/"> [ ERROR ] </a>

        <a href="/">
            <h1 class="link-text neon flicker">[ BACK ]</h1>
        </a>
    </div>
</template>

<script>
export default {
    props: ["error"],
};
</script>

<style lang="scss" scoped>
@import "../assets/css/scanlines.scss";

.error-page {
    background-image: url("~assets/error.jpg");
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.errortext {
    font-size: 3rem;
    text-decoration: none;
    color: white;
    background-color: blue;
    padding: 1rem;
    margin-top: 5%;
}
</style>