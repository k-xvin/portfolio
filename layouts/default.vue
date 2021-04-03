<template>
    <v-app dark>
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },
};
</script>

<style scoped>
/* Background image from https://3dtextures.me/2019/03/20/meat-raw-001/*/
#app {
    background: url("/MEAT_TILE_256_min.png");
    /*background-size: 512px 512px;*/
    background-repeat: repeat;
}
</style>
