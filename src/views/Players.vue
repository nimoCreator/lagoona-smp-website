<template>
    <SearchPlayer />
    <div class="section">
        <div class="header">
            See who's playing
        </div>
        <div class="content">
            Click on one of the player too inspect their profile and stats!
        </div>
    </div>
    <PlayersList />
</template>

<script>
import PlayersList from '@/components/players/PlayersList.vue';
import SearchPlayer from '@/components/players/SearchPlayer.vue';

export default {
    name: 'PlayersView',
    components: {
        PlayersList,
        SearchPlayer
    }
}
</script>

<style scoped>

</style>
