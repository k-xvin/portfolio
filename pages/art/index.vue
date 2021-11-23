<template>
    <div>
        <a id="back" href="/"> &lt; BACK &gt; </a>
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
    </div>
</template>

<script>
import cards from "../../info/cards.json";

export default {
    layout: "default",
    data() {
        return {
            info: cards.main,
        };
    },
};
</script>

<style lang="scss" scoped>
a {
    font-family: "Courier New", Courier, monospace;
    font-size: 2.5em;
    padding: 1vw 8vw 0vw 8vw;
    text-decoration: none;
    color: white;
}

#back {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
