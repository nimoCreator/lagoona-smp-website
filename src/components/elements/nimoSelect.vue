<template>
    <div class="nimoSelect">
        <div class="selected-option hasTooltip" @click="toggleMenu">
            <img 
                :src="selectedImgSrc" 
                :alt="selected ? selected.text : 'Select an Option'" 
                class="pixelArt" 
            />
            <div class="tooltip tooltipUp">
                {{ selected ? selected.text : 'Select an option' }}
            </div>
        </div>
        <div v-if="isMenuOpen" class="optionsMenuContainer" @click="closeMenu">
            <ul class="optionsMenu">
                <li v-for="option in options" :key="option.id" @click="selectOption(option)">
                    <img :src="optionImgSrc(option.imgSrc)" :alt="option.text" class="pixelArt"/>
                    <span>{{ option.text }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nimoSelect',
    props: {
        options: {
            type: Object,
            required: true,
        },
        selected: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    computed: {
        selectedImgSrc() {
            return this.selected ? require(`@/assets/img/mcmmo_icons/${this.selected.imgSrc}`) : '';
        },
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        selectOption(option) {
            this.$emit('optionSelected', option);
            this.isMenuOpen = false;
        },
        optionImgSrc(imgSrc) {
            return require(`@/assets/img/mcmmo_icons/${imgSrc}`);
        },
    },
};
</script>

<style scoped>
    @import '@/assets/css/elements/nimoSelect.css';
    @import '@/assets/css/common/basicTooltip.css';
    @import '@/assets/css/common/pixelArt.css';
</style>
