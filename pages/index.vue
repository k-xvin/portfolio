<template>
    <div>
        <a id="art" href="/art"> &lt; ART &gt; </a>
        <a id="more" href="/more"> &lt; MORE &gt; </a>
    </div>
</template>

<script>
export default {
    layout: "landing",
};
</script>

<style lang="scss" scoped>
a {
    font-family: "Courier New", Courier, monospace;
    font-size: 2.5em;
    padding: 5vw 8vw 5vw 8vw;
    text-decoration: none;
    color: white;
}

#art {
    position: fixed;
    top: 0;
    left: 0;
}

#more {
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>