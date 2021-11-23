<template>
    <v-app dark class="scanlines">
        <v-main id="main">
            <nuxt />
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
@import "../assets/variables.scss";
.neon {
    font-size: x-large;
    color: #fff;
    text-shadow: 0 0 3px #fff, 0 0 6px #ff4da6, 0 0 6px #ff4da6, 0 0 6px #ff4da6;
}
</style>
