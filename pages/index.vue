<template>
    <div id="diagonal">
        <a id="art" href="/art"> [ ART ] </a>
        <a id="more" href="/more"> [ MORE ] </a>
    </div>
</template>

<script>
export default {
    layout: "default",
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
#diagonal {
    background: url("/diagonal.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    height: 100%;
    z-index: -15;
}

#art {
    position: fixed;
    top: 0;
    left: 0;
    padding: 5vw 8vw 5vw 8vw;
}

#more {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 5vw 8vw 5vw 8vw;
}
</style>