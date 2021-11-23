<template>
    <v-card
        elevation="2"
        :width="200"
        :height="200"
        class="floating ma-2"
        tile
        :href="link"
        target="_blank"
    >
        <v-img :src="img" lazy-src="" min-width="200" min-height="200">
            <!-- <h3 class="title">{{ title }}</h3>
            <v-card-subtitle> {{ desc }} </v-card-subtitle> -->
        </v-img>
    </v-card>
</template>

<script>
export default {
    props: {
        title: { default: "Title of Piece", type: String },
        desc: { default: "", type: String },
        img: {
            default:
                "https://cdn.discordapp.com/attachments/313820457256353794/853790365643702272/noisefield.gif",
            type: String,
        },
        link: { default: "https://github.com/pisslake", type: String },
        size: {
            default: "200px",
            type: String,
        },
    },
    data() {
        return {};
    },
    method: {},
};
</script>

<style scoped>
.title {
    padding-left: 1vw;
    background-color: rgba(0, 0, 0, 0.5);
}

.floating:hover {
    animation-name: floating;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    /*margin-left: 30px;
    margin-top: 5px;*/
}

@keyframes floating {
    0% {
        transform: translate(0, -2px);
    }
    50% {
        transform: translate(0, -7px);
    }
    100% {
        transform: translate(0, -2px);
    }
}
</style>