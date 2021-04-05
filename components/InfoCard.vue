<template>
    <v-card elevation="2" width="300px" height="200px" class="floating">
        <v-card-title> title</v-card-title>
        <v-card-subtitle> subtext </v-card-subtitle>
        <v-card-text> i am a sentence </v-card-text>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
};
</script>

<style scoped>
    
.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}
  
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }    
}
</style>