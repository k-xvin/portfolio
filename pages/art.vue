<template>
    <div class="container">

        <a href="/">
            <h1 class="link-text">[BACK]</h1>
        </a>

        <div class="gallery">
            <card 
                v-for="(item, index) in cards"
                :key="index"
                :title="item.title"
                :img="item.image"
                :cdn="item.cdn"
                :link="item.link"
                @click.native="openModal(item)"
            />
        </div>

        <div class="modal" v-if="showModal" @click="closeModal">
            <h1>{{ modalTitle }}</h1>
            <div class="preview">
                 <!-- embed -->
                <iframe v-if="modalEmbed != null" :src="modalEmbed"></iframe>
                 <!-- native -->                      
                <img v-else-if="modalImage != null" :src="require(`~/assets/art/${modalImage}`)" />
                <!-- cdn -->       
                <img v-else :src="modalCdn" />                                                      
            </div>
            <div class="desc">
                <!-- <a :href="modalImage" target="_blank"><h2 class="link-text">  [SOURCE IMAGE] </h2></a>  -->
                <a :href="modalLink" target="_blank"><h2 class="link-text">  [CODE] </h2></a> 
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
            modalImage: null,
            modalTitle: null,
            modalLink: null,
            modalCdn: "https://cdn.discordapp.com/attachments/668689406617583646/865118126647803945/perlinfield.gif",
            modalEmbed: null,
            showModal: false,
        }
    },
    methods: {
        openModal(item){
            this.showModal = true;
            this.modalImage = item.image;
            this.modalTitle = item.title;
            this.modalLink = item.link;
            this.modalCdn = item.cdn;
            this.modalEmbed = item.embed;
        },
        closeModal() {
            this.showModal = false;
        }
    }

}
</script>

<style lang="scss" scoped>

.container {
    min-height: 100vh;
    overflow: auto;

    padding: 0 10% 0 10%;

    background-color: rgba(0, 0, 0, 0.5);
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
        iframe {
            min-width: 70vw;
            min-height: 70vh;
        }
    }

}

</style>