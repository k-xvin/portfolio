<template>
    <div class="main-container">
        <Nuxt />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .main-container {
        height: 100vh;
        display: flex;
        justify-content: center;

        align-items: center;

        background-image: url("../assets/beach2_compress.jpg");
        background-repeat: no-repeat;
        

        @media only screen and (max-height: 600px) {
            width: 100%;
            align-items: flex-start;
        }
    }
</style>