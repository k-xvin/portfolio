<template>
    <div>
        <a href="/">
            <h1 v-bind:style="{animationDuration: randomDur}" class="welcome-text flicker">[ WELCOME ]</h1>
        </a>
    </div>
</template>

<script>
export default {
    computed: {
        randomDur() {
            return `${Math.random() * 2}s`;
        }
    }
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}

.welcome-text {
    font-size: 3rem;
    color: white;
    filter: drop-shadow(0 0 3px);
}

.flicker {
    animation: opacity 1s steps(2) infinite;
}

@keyframes opacity {
    0% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}
</style>