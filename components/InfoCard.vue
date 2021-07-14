<template>
    <v-card
        elevation="2"
        width="325px"
        class="floating ma-2"
        :href="link"
        target="_blank"
    >
        <v-img :src="img" lazy-src="https://picsum.photos/id/11/10/6">
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

.floating/*:hover*/ {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    /*margin-left: 30px;
    margin-top: 5px;*/
}

@keyframes floating {
    0% {
        transform: translate(0, 0px);
    }
    50% {
        transform: translate(0, -10px);
    }
    100% {
        transform: translate(0, 0px);
    }
}
</style>