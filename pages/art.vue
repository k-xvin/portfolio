<template>
    <div class="container">
        <a href="/">
            <h1 class="link-text neon">[ BACK ]</h1>
        </a>
        <!-- <h1 style="text-align: center"> work in progress :)</h1> -->
        <div class="gallery">
            <card 
                v-for="(item, index) in cards"
                :key="index"
                :title="item.title"
                :img="item.image"
                :link="item.link"
                @click.native="openModal(item)"
            >
                 
            </card>
        </div>

    <div class="modal" v-if="showModal" @click="closeModal">
        <h1>{{ modalTitle }}</h1>
        <div class="preview">
            <img :src="modalImage" />
        </div>
        <div class="desc">
            <a :href="modalImage" target="_blank"><h2 class="link-text neon">  [ SOURCE ] </h2></a> 
            <a :href="modalLink" target="_blank"><h2 class="link-text neon">  [ CODE ] </h2></a> 
        </div>
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
            cards: cards.cards,
            modalImage: "https://cdn.discordapp.com/attachments/668689406617583646/865118126647803945/perlinfield.gif",
            modalTitle: "",
            modalLink: "",
            showModal: false,
        }
    },
    methods: {
        openModal(item){
            this.showModal = true;
            this.modalImage = item.image;
            this.modalTitle = item.title;
            this.modalLink = item.link;
            console.log("hello", item);
        },
        closeModal() {
            this.showModal = false;
        }
    }

}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;

    padding: 0 10% 0 10%;

    background-color: rgba(0, 0, 0, 0.5);
    background-image: none;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    // gap: 5%;
}

.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);

    .preview {
        max-width: 75vw;
        max-height: 75vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}

</style>