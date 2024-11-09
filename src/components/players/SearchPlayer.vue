<template>
    <div id="searchPlayer">
        <div id="searchbar">
            <div class="searchHead">
                <img 
                    :src=playerAvatarUrl(search) 
                    class="face_img pixel_img" 
                    :alt="`face-${search}`" 
                />
            </div>
            <input 
                type="text" 
                v-model="search" 
                @keyup.enter="goToPlayerProfile" 
                v-on:input="searchPlayers"
                placeholder="Search for a player..." 
            />
            <button @click="goToPlayerProfile">
                <img src="@/assets/svg/right.svg" alt="Search"/>
            </button>
        </div>
        <div class="divider" 
        v-if="this.search.length > 0 && results.length > 0">
            <hr>
            <span>Did you mean:</span>
            <hr>
        </div>
        <div 
            class="divider"
            v-if="results.length == 0 && this.search.length > 0">
            <hr>
            <span>Haven't seen anybody like this around</span>
            <hr>
        </div>
        <div 
            class="searchResults"
            v-if="results.length > 0"
        >
            <router-link 
                v-for="player in results" 
                :key="player.id" 
                :to="playerProfileLink(player.user)"
                class="player"
            >
                    <img :src="playerAvatarUrl(player.user)" class="face_img pixel_img" height="100%" width="auto" :alt="`face-${player.user}`" />
                    <span class="nickname">{{ player.user }}</span>
                    <div class="extras">
                        <span class="last_seen">{{ lastLoginAgo(player.lastlogin) }}</span>
                        <span class="power_level">Power level: {{ player.total }}</span>
                    </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { displayAgo, fetchPlayersData } from '@/assets/js/functions.js';

export default {
    name: 'SearchPlayer',
    data() {
        return {
            search: '',
            players: [],
            results: [],
        };
    },
    methods: {
        goToPlayerProfile() {
            if (this.search.trim()) {
                this.$router.push(`/player/${this.search.trim()}`);
            }
        },
        async searchPlayers() {
            if(this.search.length == 0)
            {
                this.results = [];
                return;
            }
            if(!this.players.length)
            {
                let ls = localStorage.getItem('[Lagoona]');
                if(!ls.playerData)
                {
                    await fetchPlayersData();
                    ls = localStorage.getItem('[Lagoona]');
                }
                this.players = JSON.parse(ls).playerData;
            }
            this.results = this.players.filter(player => player.user.toLowerCase().includes(this.search.toLowerCase()));
        },
        playerAvatarUrl(username) {
            if (!username) {
                return require('@/assets/img/noskin.png');
            }
            return `https://cravatar.eu/helmavatar/${username}.png`;
        },
        lastLoginAgo(date) {
            return displayAgo(date);
        },
        playerProfileLink(username) {
            return `../player/${username}`;
        },
    },
    computed: {
    }
};
</script>

<style scoped>
    @import '@/assets/css/components/players/SearchPlayer.css';
</style>
