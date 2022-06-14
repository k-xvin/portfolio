<template>
    <div>
        <h1 class="neon pane title">it's the place with the things</h1>
        <div class="pane">
            <p class="neon">I'm Kevin. I make some stuff.</p>
            <a href="/art">
                <h1 class="link-text neon">[ ART ]</h1>
            </a>
            <a href="/music">
                <h1 class="link-text neon">[ MUSIC ]</h1>
            </a>
            <a href="/tech">
                <h1 class="link-text neon">[ TECH ]</h1>
            </a>
            <a href="/other">
                <h1 class="link-text neon">[ OTHER ]</h1>
            </a>
        </div>
    </div>
</template>

<script>
export default {

    
};
</script>

<style lang="scss" scoped>

.pane {
    padding: 1.5rem;
    max-width: 300px;
    text-align: center;

    background-color: rgba(0, 0, 0, 0.75);
}

.title {
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;

    width: 100%;
}

</style>