<template>
    <div id="player_card">
        <div id="legacy">
            <div class="banner"/>
            <div class="bannerblur"/>
            <div class="nickname">
                {{ playerData.user }}
            </div>
            <div class="details">
                {{ displayAgo(playerData.lastlogin) }}
            </div>
            <div class="legacy-circle" id="player-legacy">
            <svg class="circle_progress_bar" viewBox="0 0 100 100">
                <circle cx="45" cy="45" r="45"></circle>
                <circle cx="45" cy="45" r="45" :style="`stroke-dashoffset: ${ this.circleprogresspercent }`"></circle>
            </svg>
            <img :src="`https://skins.danielraybone.com/v1/render/body/${playerData.user}`" alt="Player's <?php echo $_GET['inspect'] ?> Minecraft skin" class="pixel_img" />
            <span class="level"> {{ legacylvl }} </span>
            </div>
        </div>
    </div>
</template>

<script>

import { displayAgo } from '@/assets/js/functions';

export default {
    name: 'PlayerHeader',
    data() {
        return {
            legacylvl: 0,
            circleprogresspercent: 0
        };
    },
    props: {
        playerData: {
            type: Object,
            required: true
        }
    },
    methods: {
        displayAgo,

        calculatecircleprogresspercent() {
            this.legacylvl = Math.floor(Math.sqrt(this.playerData.lvl_total));
            let expi = this.playerData.lvl_total - Math.pow(this.legacylvl, 2);
            let outofi = this.legacylvl * 2 + 1;
            let percenti = 100 * (expi / outofi);
            this.circleprogresspercent = 440 - percenti * 2.805;
        }
    },
    mounted() {
        console.log(this.playerData);
        this.calculatecircleprogresspercent();
    }
};
</script>

<style scoped>


/*#region PLAYER CARD */
#player_card {
    display: grid;
    gap: 1rem;

    width: var(--main_element_width);
}

#player_card span.nickname {
    font-family: Shaimus Clean;
}

#player_card div.header.playernickname {
    font-family: Shaimus Clean;
    font-size: 2rem;
    color: #fff;
    text-shadow:
        0px 2px 0 #374700,
        1px 1px 0 #374700,
        2px 0px 0 #374700,
        1px -1px 0 #374700,
        0px -2px 0 #374700,
        -1px -1px 0 #374700,
        -2px 0px 0 #374700,
        -1px 1px 0 #374700;
    background-color: #a4f110;
    background-image: linear-gradient(60deg, #79e50c, #a4f110, #beed12);
}

/*#endregion PLAYER CARD */

/*#region LEGACY + CRICLE */
#legacy .legacy-circle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #1a1a1a;
    border-radius: 100%;
    grid-area: 1 / 1 / 4 / 3;
}

#legacy svg.circle_progress_bar {
    transition: 0.3s;
    transform: rotate(90deg);
}

#legacy svg.circle_progress_bar circle {
    fill: none;
    stroke-width: 0.4rem;
    stroke: #000000;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
    transform: translate(5px, 5px);
}

#legacy svg.circle_progress_bar circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #8882;
}

#legacy svg.circle_progress_bar circle:nth-child(2) {
    stroke-dashoffset: 10000;
    stroke: #a4f110;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.170, 0.990);
    animation: circle-progress-bar-load 2s;
}

#legacy .legacy-circle img {
    position: absolute;
    height: 18rem;
    display: flex;
    transition: transform 0.4s, filter 0.4s;

    filter: drop-shadow(-0.05rem 0.1rem 0.2rem #000000);
}

#legacy .legacy-circle:hover img {
    transform: scale(1.1);
    filter: drop-shadow(-0.4rem 0.8rem 0.8rem #000000);
}

#legacy .legacy-circle .level {
    z-index: 2;
    font-size: 2rem;
    min-width: 2rem;
    position: absolute;
    background-color: #a4f110;
    background-image: linear-gradient(60deg, #79e50c, #a4f110, #beed12);
    color: #ffffff;
    text-shadow:
        0px 2px 0 #374700,
        1px 1px 0 #374700,
        2px 0px 0 #374700,
        1px -1px 0 #374700,
        0px -2px 0 #374700,
        -1px -1px 0 #374700,
        -2px 0px 0 #374700,
        -1px 1px 0 #374700;
    text-align: center;
    font-family: Shaimus Clean;
    padding: 1rem;
    border-radius: 100rem;
    bottom: 0;
    transition: opacity 0.2s;
    transform: translateY(1rem);
    filter: drop-shadow(-0.05rem 0.2rem 0.1rem #000000);
}

#legacy .legacy-circle:hover .level {
    opacity: 0;
}

#legacy .legacy-circle:hover svg {
    transform-origin: center;
    transform: scale(0.9) rotate(90deg);
}

#legacy {
    display: grid;
    grid-template-rows:
        6rem 8rem 6rem;
    grid-template-columns:
        10rem 10rem 1fr;
}

#legacy .nickname {

    grid-area: 2 / 2 / 3 / 4;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 10rem;
    overflow: hidden;

    font-size: min(6rem, 0.12 * calc(100vw - 22rem - min(8rem, 20 * var(--minunit))));
    font-family: Shaimus Clean;
    color: #fafafa;

    background-color: #202020;
}

#legacy .details {

    grid-area: 3 / 2 / 4 / 4;

    display: flex;
    justify-content: right;
    align-items: center;
    text-align: right;

    padding: 0 2rem 0 10rem;

    font-size: 1.5rem;
    font-family: Shaimus Clean;

    background-color: #151515;
    border-radius: 0 0 0.5rem 0;
}

#legacy .banner {

    grid-area: 1 / 2 / 2 / 4;
    border-radius: 0 1000rem 0 0;

    background-color: #000;
    /* Used if the image is unavailable */
    background-image: url(@/assets/img/minecraft-textures/block/smithing_table_top.png);
    background-position: center right;
    /* Center the image */
    background-repeat: repeat-x;
    /* Do not repeat the image */
    background-size: contain;
    /* Resize the background image to cover the entire container */
}

#legacy .bannerblur {

    grid-area: 1 / 2 / 2 / 4;
    border-radius: 0 1000rem 0 0;

    background-color: #0000;
    backdrop-filter: blur(0rem);

    box-shadow:
        inset #fff2 -1rem
        /* offset-x */
        1rem
        /* offset-y */
        1rem
        /* blur-radius */
        0
        /* spread-radius */
        ,
        inset #000 10rem
        /* offset-x */
        -1rem
        /* offset-y */
        4rem
        /* blur-radius */
        0
        /* spread-radius */
    ;
}


/*#endregion LEGACY + CRICLE */

/* #region LEGACY MEDIAS */
@media (max-aspect-ratio: 1/2),
(max-width: 40rem) {
    #legacy .legacy-circle {
        place-self: center;
        width: calc(100vw - min(8rem, 20*var(--minunit)));
        height: calc(100vw - min(8rem, 20*var(--minunit)));
        grid-area: 1 / 1 / 3 / 2;
    }

    #legacy svg.circle_progress_bar circle {
        width: calc(100vw - min(8rem, 20*var(--minunit)));
        height: calc(100vw - min(8rem, 20*var(--minunit)));
    }

    #legacy svg.circle_progress_bar circle:nth-child(1) {
        width: calc(100vw - min(8rem, 20*var(--minunit)));
        height: calc(100vw - min(8rem, 20*var(--minunit)));
    }

    #legacy svg.circle_progress_bar circle:nth-child(2) {
        width: calc(100vw - min(8rem, 20*var(--minunit)));
        height: calc(100vw - min(8rem, 20*var(--minunit)));
    }

    #legacy .legacy-circle img {
        height: calc(90vw - min(7.2rem, 18*var(--minunit)));
    }

    #legacy .legacy-circle .level {
        font-size: min(6rem, 0.12 * calc(100vw - min(8rem, 20 * var(--minunit))));
        min-width: min(6rem, 0.12 * calc(100vw - min(8rem, 20 * var(--minunit))));
        padding: min(1rem, 0.04 * calc(100vw - min(8rem, 20 * var(--minunit))));
        transform: translateY(min(3rem, 0.06 * calc(100vw - min(8rem, 20 * var(--minunit)))));
    }

    #legacy {
        display: grid;
        grid-template-rows:
            calc(100vw - min(8rem, 20 * var(--minunit))) 4rem 6rem 1fr;
        grid-template-columns:
            1fr;
    }

    #legacy .nickname {

        grid-area: 3 / 1 / 4 / 2;

        padding: 0;
        font-size: min(6rem, 0.12 * calc(100vw - min(8rem, 20 * var(--minunit))));
        font-family: Shaimus Clean;
    }

    #legacy .details {

        grid-area: 4 / 1 / 5 / 2;

        padding: 1rem 1rem 1rem 0;

        font-size: 1rem;
        font-family: Shaimus Clean;

        background-color: #151515;
        border-radius: 0 0 0.5rem 0;
    }

    #legacy .banner {

        grid-area: 2 / 1 / 3 / 2;
        border-radius: 2rem 2rem 0 0;

    }

    #legacy .bannerblur {

        grid-area: 2 / 1 / 3 / 2;
        border-radius: 2rem 2rem 0 0;

        box-shadow:
            inset #fff4 -0.6rem 0.6rem 0.6rem 0,
            inset #0008 0.6rem -0.6rem 0.6rem 0;
    }
}

@keyframes circle-progress-bar-load {
    0% {
        stroke-dashoffset: 440;
    }

    100% {}
}

/* #endregion LEGACY MEDIAS */

</style>