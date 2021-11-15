<template>
    <v-app dark class="scanlines">
        <v-main id="main">
            <v-container fluid>
                <nuxt />
            </v-container>
        </v-main>
        <video autoplay muted loop id="backgroundVideo">
            <source src="centerwave_compressed4.mp4" type="video/mp4"/>
        </video>
    </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">

// Prevents the scroll bar from flashing in on load
// can't be scoped mode css
#app {

    overflow: hidden;
    // z-index: -1;
}


// centering: https://stackoverflow.com/a/32551968
#backgroundVideo {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
}
</style>
