<template>
    <div id="navigation_bar">
        <div class="logo">
            <img src="@/assets/img/logo.svg" draggable="false">
            <span>
            Lagoona
            </span>
        </div>
        <nav id="navigation_grid">
            <router-link to="/" class="navigation" :class="{ active: isActiveRoute('Home') }">
                <img src="@/assets/img/nav/home.svg">
                <span>home</span>
            </router-link>
            <router-link to="/Posts"  class="navigation" :class="{ active: isActiveRoute('Posts') }">
                <img src="@/assets/img/nav/activity.svg">
                <span>posts</span>
            </router-link>
            <router-link to="/Players"  class="navigation" :class="{ active: isActiveRoute('Players') }">
                <img src="@/assets/img/nav/player.svg">
                <span>players</span>
            </router-link>
            <router-link to="/Skills"  class="navigation" :class="{ active: isActiveRoute('Skills') }">
                <img src="@/assets/img/nav/skills.svg">
                <span>skills</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name: 'MainNavbar',
    setup() {
        const route = useRoute();

        const isActiveRoute = (name) => {
            return route.meta.navbarActivation === name;
        };

        return { isActiveRoute };
    }
};
</script>

<style scoped>
    @import '@/assets/css/common/navigation.css';
</style>