<template>
    <CopyIp />
    <ServerStatus />
    <DiscordChat />
    <PlayersList />
</template>

<script>
import CopyIp from '@/components/Home/IpSnippet.vue';
import ServerStatus from '@/components/Home/ServerStatus.vue';
import DiscordChat from '@/components/Home/DiscordChat.vue';
import PlayersList from '@/components/players/PlayersList.vue';

export default {
    name: 'LandingHome',
    components: {
        CopyIp,
        ServerStatus,
        DiscordChat,
        PlayersList,
    }
}
</script>

<style scoped>

</style>