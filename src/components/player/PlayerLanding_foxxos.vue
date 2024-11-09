<template>
<div class="player_landing_container">
    
    <h1>{{ playerData.user ? playerData.user : "NimoCreator"}}</h1>
    <div class="player_landing_avatar">
        <img :src="avatar()" class="avatar" alt="avatar">
    </div>
</div>
</template>


<style scoped>

@font-face {
    font-family: 'Highrise';
    src: url("@/assets/fonts/Highrise.otf");
}

.player_landing_container {
    height: 30rem;
    background: #000;
    width: 100%;
    background-image: radial-gradient(ellipse at center bottom, #474747, #000 60%, #000 50%);
    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.player_landing_container h1 {
    color: #fff;
    text-align: center;
    /* padding-top: 1rem; */
    margin: 0;
    font-size: 10rem;
    letter-spacing: 0.2rem;
    font-family: 'Highrise';
    margin-top: 3rem;
}

.player_landing_container .player_landing_avatar img.avatar {
    width: 18rem;
    object-fit: cover;
    margin-top: -5rem;
    z-index: 100;
    filter: drop-shadow(0 0 0.75rem #ffffff67);
    mask-image: linear-gradient(0deg, transparent 30%, white 80% );

}


    
</style>

<script>
export default {
    name: 'PlayerLanding',
    props: {
        playerData: {
            type: Object,
            required: true
        }
    },
    methods: {
        avatar() {
            return `https://skins.danielraybone.com/v1/render/body/${this.playerData.user}`;
        }
    }
};
</script>