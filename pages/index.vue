<template>
    <div>
        <v-row align="center" justify="center" class="mt-2">
            <v-col>
                <p class="neon">CRABB.CLUB</p>
                <v-row class="mt-5">
                    <div v-for="(item, index) in info" :key="index">
                        <info-card
                        :title="item.title"
                        :img="item.image"
                        :link="item.link"
                        > </info-card>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import cards from "../static/cards.json";

export default {
    data() {
        return {
            info: cards.main,
        };
    },
};
</script>

<style scoped>
.neon {
    font-size: 3vw;
    color: #fff;
    text-shadow: 0 0 0.8vw #fff, 0 0 1.6vw #ff4da6, 0 0 1.2vw #ff4da6,
        0 0 1.4vw #ff4da6, 0 0 1.6vw #ff4da6, 0 0 1.8vw #ff4da6, 0 0 2vw #ff4da6;
}
</style>
