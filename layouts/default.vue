<template>
    <div>
        <div class="background" :style="{filter: randomFilter}"/>
        <div class="main-container">
            <Nuxt />
        </div>
        <!-- <div class="reroll-buttons" v-if="$route.name == 'index'"> -->
        <div class="reroll-buttons pane">
            <span class="reroll-button link-text" @click="this.clickReroll">[REROLL] <span v-if="clickCount > 4">{{clickCount}}</span> </span>
            <span v-if="clickCount > 100" class="reroll-button link-text" @click="this.reset">[RESET]</span>
            <span v-if="clickCount > 4" class="reroll-button link-text" @click="this.autoReroll">{{autoModeText}}</span>
            <span v-if="clickCount > 20" class="reroll-button link-text" @click="this.speedReroll">{{ speedModeText }}</span>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return {
            randomFilter: "blur(100px)",

            auto: null,
            clickCount: 0,
            speedEnabled: false,
            speedModeClickCount: 0,
        }
    },
    beforeMount() {
        this.randomizeFilter();
    },
    beforeDestroy() {
        clearInterval(this.auto)
    },
    computed: {
        autoModeText() {
            return `[AUTO ${this.auto ? "ENABLED" : "DISABLED"}]`
        },
        speedModeText() {
            switch(this.speedModeClickCount){
                case 0: 
                    return "[SPEED MODE]"
                case 1: 
                    return "[ARE YOU SURE?]"
                case 2: 
                    return "[FLASHING LIGHTS WARNING]"
                case 3: 
                    return "[SERIOUSLY, ]"
                case 4: 
                    return "[I WARNED YOU]"
                default: 
                    return `[SPEED ${this.auto && this.speedEnabled ? "ENABLED" : "DISABLED"}]`
            }
        }
    },
    methods: {
        clickReroll() {
            this.clickCount++;
            this.randomizeFilter();
        },

        stopAuto(){
            clearInterval(this.auto)
            this.auto = null
            this.speedEnabled = false;
        },

        autoReroll() {
            if(this.auto) {
                this.stopAuto();
            } else {
                this.speedEnabled = false;
                this.auto = setInterval(() => {
                    this.clickReroll()
                }, 1000);
            }
        },

        speedReroll() {
            this.speedModeClickCount++;

            if(this.speedModeClickCount > 5 && !this.speedEnabled){
                this.stopAuto();
                this.speedEnabled = true;
                this.auto = setInterval(() => {
                    this.clickReroll()
                }, 100);
            }
            else if(this.auto) {
                this.stopAuto();
            } 
        },

        reset(){
            this.clickCount = 0;
            this.speedModeClickCount = 0;
            this.stopAuto();
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
    bottom: 5px;
    left: 50%;
    transform: translate(-50%);
    padding: 0.25rem 0.25rem 0.3rem;
    line-height: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 3px;
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