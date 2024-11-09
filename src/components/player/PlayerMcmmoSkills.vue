<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
    <div>
        <h2>McMMO Skills</h2>
        <div v-for="skill in skills" :key="skill.name">
            <p>{{ skill.name }}: {{ skill.level }}</p>
            <p>Exp: {{ skill.exp }}</p>
            <p>Rank: {{ skill.rank }}</p>
        </div>
    </div>
</template>

<script>

import { mcmmoSkills } from '@/assets/js/consts.js';

export default {
    name: 'PlayerMcmmoSkills',
    data() {
        return {
            title: "PlayerMcmmoSkills",
            description: "This is the header component for the player",

            skills: {},
            mcmmoSkills: mcmmoSkills
        };
    },
    methods: {
        isolateSkills() {
            for (const skill of Object.entries(this.mcmmoSkills)) 
            {
                this.skills[skill[0]] = 
                    {
                        name: skill[0],
                        level: this.playerData[`lvl_${skill[0]}`],
                        exp: this.playerData[`exp_${skill[0]}`],
                        rank: this.playerData[`rank_${skill[0]}`]
                    };
            }
        }
    },
    props: {
        playerData: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.isolateSkills();
    }
};
</script>

<style scoped>
h1 {
    color: #333;
}

p {
    color: #666;
}
</style>