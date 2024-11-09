<template>
    <div class="orderToggle hasTooltip" @click="toggleSortOrder">
        <img :src="currentImage" :alt="currentText" class="orderIcon" />
        <div class="tooltip tooltipUp">{{ currentText }}</div>
    </div>
</template>

<script>
export default {
    name: 'SortToggle',
    props: {
        isAscending: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        currentText() {
            return this.isAscending ? 'Ascending Order' : 'Descending Order';
        },
        currentImage() {
            return this.isAscending ? require('@/assets/svg/asc.svg') : require('@/assets/svg/desc.svg');
        },
    },
    methods: {
        toggleSortOrder() {
            this.$emit('orderToggled');
        },
    },
};
</script>

<style scoped>
    @import '@/assets/css/elements/nimoOrder.css';
    @import '@/assets/css/common/basicTooltip.css';
</style>
