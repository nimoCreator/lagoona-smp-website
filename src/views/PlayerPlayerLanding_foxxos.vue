<template>
    <PlayerLanding
    :playerData="playerData"
    />
  </template>


<script>
// import { apiPath } from '@/assets/js/consts.js';
import { displayAgo, getLocalStorage } from '@/assets/js/functions.js';
import { apiPath, mcmmoSkills } from '@/assets/js/consts.js';

import PlayerLanding from '@/components/player/PlayerLanding_foxxos.vue';

export default {
    name: 'PlayerView',
    components: {
        PlayerLanding
    },
    data() {
        return {
            player: "",
            playerData: {},
        };
    },
    methods: {
        async prepareData() {
            let ls = getLocalStorage();
            if (ls.playersStats && ls.playersStats[this.player]) {
                this.playerData = ls.playersStats[this.player];
            } else {
                await this.fetchPlayerStats();
            }
            console.log(mcmmoSkills);
        },
        async fetchPlayerStats() {
            try {
                const response = await fetch(`${apiPath}/playerStats.php?user=${this.player}`, {
                    method: 'GET',
                    credentials: 'include',
                    params: {
                        user: this.player
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.status === 'success') {
                    this.playerData = data.player;

                    const ls = getLocalStorage();
                    if (!ls.playersStats) ls.playersStats = {};
                    ls.playersStats[this.player] = data.player;
                    localStorage.setItem('[Lagoona]', JSON.stringify(ls));

                } else {
                    console.error('Error fetching:', data.message);
                }
            } catch (error) {
                console.error('Error:', error, 'Error message:', error.message,);
            }
        },
        playerAvatarUrl(username) {
            return `https://cravatar.eu/helmavatar/${username}.png`;
        },
        lastLoginAgo(date) {
            return displayAgo(date);
        },
    },
    beforeMount() {
        this.player = this.$route.params.player;
        this.prepareData();
    },
};
</script>

<style scoped>
/* Add any specific styles for PlayerView here */
</style>
