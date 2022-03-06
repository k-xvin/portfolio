<template>
    <div class="flex-col-center error-page scanlines">
        <a v-if="error.statusCode === 404" class="errortext" href="/">
           <h1>[ 404 ]</h1>
        </a>
        <a v-else class="errortext" href="/"><h1>[ ERROR ]</h1></a>

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
    // font-size: 3rem;
    text-decoration: none;
    color: white;
    background-color: blue;
    // padding: 1rem;
    // margin-top: 5%;
}
</style>