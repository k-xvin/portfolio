<template>
    <div>
        <div class="background" :style="{filter: randomFilter}"/>
        <div class="main-container">
            <Nuxt />
        </div>
        <!-- <div class="reroll-buttons" v-if="$route.name == 'index'"> -->
        <div class="reroll-buttons">
            <span class="reroll-button link-text" @click="this.clickReroll">[REROLL]</span>
            <span v-if="clickCount > 4" class="reroll-button link-text" @click="this.autoReroll">{{`[AUTO ${this.auto ? "ENABLED" : "DISABLED"}]`}}</span>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return {
            randomFilter: "blur(100px)",
            clickCount: 0,
            auto: null
        }
    },
    beforeMount() {
        this.randomizeFilter();
    },
    beforeDestroy() {
        clearInterval(this.auto)
    },
    methods: {
        clickReroll() {
            this.clickCount++;
            this.randomizeFilter();
        },

        autoReroll() {
            if(this.auto) {
                clearInterval(this.auto)
                this.auto = null
            } else {
                this.auto = setInterval(() => {
                    this.clickReroll()
                }, 1000)
            }
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

}

.reroll-buttons{
    position: absolute;
    bottom: 20px;
    // left: 50%;
    // transform: translate(-50%);
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 0.5rem;
}

.reroll-button{
    cursor: pointer;
    user-select: none;
}

.main-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>