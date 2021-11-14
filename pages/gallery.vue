<template>
    <v-container class="mt-4" fluid>
        <v-row no-gutters justify="center">
            <info-card
                v-for="(item, index) in info"
                :key="index"
                :title="item.title"
                :img="item.image"
                :link="item.link"
            >
            </info-card>
        </v-row>
    </v-container>
</template>

<script>
import cards from "../info/cards.json";

export default {
    data() {
        return {
            info: cards.main,
        };
    },
};
</script>

<style scoped>
</style>
