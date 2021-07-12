<template>
    <div>
        <v-row align="center" justify="center" class="mt-2">
            <v-col>
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
