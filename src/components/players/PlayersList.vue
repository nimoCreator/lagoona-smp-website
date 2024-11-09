<template>
    <div class="playersList" id="players_list_section">
        <div class="header">
            <span>Players</span>
            <div class="sorting">
                <nimoSelect 
                    :options="sortingOptions" 
                    :selected="sortingOption"
                    @optionSelected="updateOrder" 
                />
                <nimoOrder 
                    :isAscending="isAscending" 
                    @orderToggled="toggleOrder" 
                />
                <button class="hasTooltip">
                    <img src="@/assets/svg/refresh.svg" alt="refresh" @click="fetchData" />
                    <div class="tooltip tooltipUp">Refresh</div>
                </button>
            </div>
        </div>
        <div class="content">
            <div class="playersListContainer" id="players_list">
                <router-link v-for="player in visiblePlayers" :key="player.user" class="player" :to="playerProfileLink(player.user)">
                    <img :src="playerAvatarUrl(player.user)" class="face_img pixel_img" height="100%" width="auto" :alt="`face-${player.user}`" />
                    <span class="nickname">{{ player.user }}</span>
                    <div class="extras">
                        <span class="last_seen">{{ lastLoginAgo(player.lastlogin) }}</span>
                        <span class="power_level">{{ playerLevel(player) }}</span>
                    </div>
                </router-link>
            </div>
            <button class="loadMore" v-if="hasMorePlayers" @click="loadMorePlayers">
                Show More
                <span class="dot" style="--delay: 1;"/>
                <span class="dot" style="--delay: 2;"/>
                <span class="dot" style="--delay: 3;"/>
            </button>
        </div>
    </div>
</template>

<script>
import nimoSelect from '@/components/elements/nimoSelect.vue';
import nimoOrder from '@/components/elements/nimoOrder.vue';
import { displayAgo, getLocalStorage } from '@/assets/js/functions.js';
import { apiPath, mcmmoSkillsFull } from '@/assets/js/consts.js';

export default {
    name: 'PlayersList',
    components: {
        nimoSelect,
        nimoOrder,
    },
    data() {
        return {
            database: [],
            isAscending: false,
            sortingOptions: mcmmoSkillsFull,
            sortingOption: { id: 'lastlogin', text: 'Last Login', imgSrc: 'LastLogin.png' },
            playersPerPage: 6, 
            currentPage: 1,   
        };
    },
    computed: {
        sortedPlayers() {
            if (!this.database.length) return [];
            const field = ['Legacy', 'Total', undefined].includes(this.sortingOption.id) ? 'total' : this.sortingOption.id;
            const sorted = [...this.database].sort((a, b) => a[field] - b[field]);
            return this.isAscending ? sorted : sorted.reverse();
        },
        visiblePlayers() {
            // Calculate which players to show based on current page
            const startIndex = (this.currentPage - 1) * this.playersPerPage;
            return this.sortedPlayers.slice(0, startIndex + this.playersPerPage);
        },
        hasMorePlayers() {
            // Check if there are more players to load
            return this.visiblePlayers.length < this.sortedPlayers.length;
        },
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch(`${apiPath}playersList.php`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.status === 'success') {
                    this.database = data.players;
                    this.saveToLocalStorage();
                } else {
                    console.error('Error fetching:', data.message);
                }
            } catch (error) {
                console.error('Error:', error, 'Error message:', error.message,);
            }
        },
        updateOrder(option) {
            this.sortingOption = option;
            this.saveToLocalStorage();
        },
        toggleOrder() {
            this.isAscending = !this.isAscending;
            this.saveToLocalStorage();
        },
        loadMorePlayers() {
            this.currentPage += 1;
        },
        saveToLocalStorage() {
            const ls = getLocalStorage();
            ls.playersList = {
                selectedOrder: this.sortingOption,
                order: this.isAscending ? 'asc' : 'desc',
            };
            ls.playerData = this.database;
            localStorage.setItem('[Lagoona]', JSON.stringify(ls));
        },
        playerLevel(player) {
            const choice = this.sortingOption.id;
            if (choice === 'Legacy') {
                const LegacyLvl = Math.floor(Math.sqrt(player.total));
                return `Legacy Lvl: ${LegacyLvl}`;
            } else if (choice === 'Total' || choice === 'lastlogin') {
                return `Lvl: ${player.total}`;
            } else {
                return `${choice.charAt(0).toUpperCase() + choice.slice(1)} Lvl: ${player[choice]}`;
            }
        },
        playerAvatarUrl(username) {
            return `https://cravatar.eu/helmavatar/${username}.png`;
        },
        playerProfileLink(username) {
            return `../player/${username}`;
        },
        lastLoginAgo(date) {
            return displayAgo(date);
        },
    },
    mounted() {
        const ls = getLocalStorage();
        if (ls.playersList) {
            this.sortingOption = ls.playersList.selectedOrder || { id: 'lastlogin', text: 'Last Login', imgSrc: 'LastLogin.png' };
            this.isAscending = ls.playersList.order === 'asc';
            this.database = ls.playerData || [];
        }
        else {
            this.fetchData();
        }
    },
};

</script>

<style scoped>
    @import '@/assets/css/components/PlayersList.css';
</style>
