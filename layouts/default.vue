<template>
    <v-app dark class="scanlines">
        <v-main id="main">
            <!-- <v-app-bar dense color="rgb(155, 255, 255, 0.5)">
                <a href="/" style="text-decoration: none">
                    <p class="neon my-auto">CRABB.CLUB</p>
                </a>
                <v-spacer />
                <v-btn icon @click="overlay = !overlay">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-app-bar> -->
            <!-- <v-overlay dark :value="overlay"> :) </v-overlay> -->
            <v-container fluid>
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            overlay: false,
        };
    },
    watch: {
        overlay(val) {
            val &&
                setTimeout(() => {
                    this.overlay = false;
                }, 500);
        },
    },
};
</script>

<style lang="scss">
.neon {
    font-size: x-large;
    color: #fff;
    text-shadow: 0 0 3px #fff, 0 0 6px #ff4da6, 0 0 6px #ff4da6, 0 0 6px #ff4da6;
}

#app {
    background: url("/beach2_compress.jpg");
    background-position: center top;
    background-repeat: no-repeat;
    overflow: hidden;
    // z-index: -1;
}

#main {
    // get everything else above the scanlines
    z-index: 10;
    overflow: hidden;
}


</style>
