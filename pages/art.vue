<template>
    <div class="container">
        <a href="/">
            <h1 class="link-text neon flicker">[ BACK ]</h1>
        </a>
        <h1 style="text-align: center"> work in progress :)</h1>
        

        <div class="gallery">
            <card 
                v-for="(item, index) in cards"
                :key="index"
                :title="item.title"
                :img="item.image"
                :link="item.link"
            />
        </div>

    </div>
</template>

<script>
import cards from "../assets/cards.json";
import Card from '../components/Card.vue'
export default {
    components: { Card },
    data() {
        return {
            cards: cards.cards
        }
    }

}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;

    padding: 0 10% 0 10%;

    background-color: black;
    background-image: none;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 5%;
}

</style>