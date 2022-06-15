<template>
    <div class="main-container">
        <div class="background" :style="{filter: randomFilter}"/>
        <Nuxt />
    </div>
</template>

<script>
export default {

    data(){
        return {
            randomFilter: "blur(25px) brightness(95%) contrast(95%) hue-rotate(315deg) invert(1) saturate(97%)",

            auto: null,

            clickCount: 0,
            speedEnabled: false,
            speedModeClickCount: 0,
        }
    },
    beforeDestroy() {
        clearInterval(this.auto)
    },
    mounted(){
        this.auto = setInterval(() => {
            this.clickReroll()
        }, 10000);
    },
    methods: {
        clickReroll() {
            this.clickCount++;
            this.randomizeFilter();
        },

        randomizeFilter(){
            this.randomFilter = 
            `
            blur(25px)
            brightness(${80 + Math.floor(Math.random() * 40)}%)
            contrast(${90 + Math.floor(Math.random() * 20)}%)
            hue-rotate(${Math.floor(Math.random() * 360)}deg)
            invert(${Math.random() > 0.5 ? "1" : "0"})
            saturate(${80 + Math.floor(Math.random() * 40)}%)
            `; 
        }
    }
};
</script>

<style lang="scss">
.background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background-image: url("../assets/beach2_compress.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    height: 100%;
    width: 100%;

    transition-property: filter;
    transition: ease 10s;
}

.main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>