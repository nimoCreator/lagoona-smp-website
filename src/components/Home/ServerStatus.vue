<template>
    <div class="section" id="status">
        <div class="header">
            Status
        </div>
        <div v-if="status.online" class="content">
            <div class="minecraftserver">
                <div class="icon">
                </div>
                <div class="name">Lagoona</div>
                <div class="players">
                    <span>{{ status.players.online }}</span>
                    <span>/</span>
                    <span>{{ status.players.max }}</span>
                </div>
                <div class="motd">
                    <span v-if="status.motd && status.motd.html" v-html="status.motd.html[0]"></span>
                    <span v-if="status.motd && status.motd.html.length > 1" v-html="status.motd.html[1]"></span>
                </div>
            </div>
            <div class="online_players">
                <router-link v-for="player in status.players.list" :key="player.uuid" class="player" :to="playerProfileLink(player.name)">
                    <img :src="playerAvatarUrl(player.uuid)" class="face_img pixel_img" height="100%" width="auto" :alt="`face-${player.name}`" />
                    <span class="nickname">{{ player.name }}</span>
                    <div class="extras">
                        <span>Click to open {{player.name}}'s profile</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else class="content">
            <div class="minecraftserver">
                <div class="icon">
                </div>
                <div class="name mode--offline">Lagoona</div>
                <div class="players">
                    <span class="mode--offline">OFFLINE</span>
                </div>
                <div class="motd">
                    <span>The server is currently down.</span>
                    <span>Contact the admins for more info.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { displayAgo } from '@/assets/js/functions.js';

export default {
data() {
    return {
    status: {online: null},
    serverIp: 'lagoona.ddns.net' // 'simplesmp.net'
    };
},
methods:
{
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
async mounted() {
    try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${this.serverIp}`);
    if (response.ok) {
        this.status = await response.json();
        console.log(this.status);
    } else {
        console.error('Failed to fetch server status');
        this.status = { online: false };
    }
    } catch (error) {
    console.error('Error fetching server status:', error);
    this.status = { online: false };
    }
}
};
</script>

<style scoped>
@import "@/assets/css/home/ServerStatus.css";
</style>
