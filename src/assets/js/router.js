import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';

import Post from '@/views/Post.vue';
import Posts from '@/views/Posts.vue';
import Player from '@/views/Player.vue';
import Players from '@/views/Players.vue';
import Skill from '@/views/Skill.vue';
import Skills from '@/views/Skills.vue';

// Import your components here

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { navbarActivation: 'Home' }
    },

    {
        path: '/posts',
        name: 'we34sxd',
        component: Posts,
        meta: { navbarActivation: 'Posts' }
    },
    {
        path: '/post/:postid',
        name: 'ges54s3',
        component: Post
    },
    {
        path: '/players',
        name: 'asdasdasd',
        component: Players,
        meta: { navbarActivation: 'Players' }
    },
    {
        path: '/player/:player',
        name: 'sdfhyuser',
        component: Player
    },
    {
        path: '/skills',
        name: 'dfghdfg',
        component: Skills,
        meta: { navbarActivation: 'Skills' }
    },
    {
        path: '/skill/:skill',
        name: 'df',
        component: Skill,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;