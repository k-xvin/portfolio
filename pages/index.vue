<template>
    <div>
        <h1 class="pane title">it's the place with the things</h1>
        <div class="pane nav">
            <p>im kevin. i make some stuff.</p>
            <a href="/art">
                <h1 class="link-text">[ART]</h1>
            </a>
            <a href="/music">
                <h1 class="link-text">[MUSIC]</h1>
            </a>
            <a href="/tech">
                <h1 class="link-text">[TECH]</h1>
            </a>
            <a href="/other">
                <h1 class="link-text">[OTHER]</h1>
            </a>
            <div class="social-icons">
                <a href="https://github.com/k-xvin" target="_blank" class="link-text">
                    <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-s-xu/" target="_blank" class="link-text">
                    <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
                </a>
                <a href="https://www.youtube.com/channel/UCIQCQvnR4iwj72MhhLw4fqg" target="_blank" class="link-text">
                    <font-awesome-icon :icon="['fab', 'youtube-square']" size="2x"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 2rem;
    margin: 2rem 0 1rem 0;
}

</style>