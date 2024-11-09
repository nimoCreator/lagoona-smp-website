<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'PlayerPlaytime',
    data() {
        return {
            title: "PlayerPlaytime",
            description: "This is the header component for the player"
        };
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