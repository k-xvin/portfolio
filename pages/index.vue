<template>
    <div class="flex-col-center">
        <h1 class="neon pane title">Welcome</h1>
        <div class="pane">
            <p class="neon">I'm Kevin. I make all around creative tech stuff. Check out some of work below. </p>
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
}

.title {
    // clip-path: polygon(20% 0%, 100% 0, 100% 0, 100% 50%, 80% 100%, 0 100%, 0 100%, 0 50%);
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;

    width: 100%;
}





</style>