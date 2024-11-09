<template>
    <div id="serverip_container">
        <span class="header"> Join the fun on LagoonaSMP </span>
        <div class="content">
            <span> Minecraft Java 1.21 Vanilla </span>
            <span> Copy IP Adress Below: </span>
            <div id="serverip" @click="copyToClipboard" @mouseleave="resetTooltip">
                <span id="clipboardserverid">
                    <span>lagoona.ddns.net</span>
                    <span id="clipboardserveridtooltip">{{ tooltipText }}</span>
                    <img src="@/assets/svg/copy.svg" alt="Copy Icon"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CopyIp',
    data() {
        return {
            tooltipText: 'Click to copy to clipboard',
        };
    },
    
    methods: {
        copyToClipboard() {
            const copyText = 'lagoona.ddns.net';

            navigator.clipboard.writeText(copyText).then(() => {
                this.tooltipText = 'Copied!';
                this.$nextTick(() => {
                    const tooltip = document.getElementById('clipboardserveridtooltip');
                    tooltip.classList.add('copied');
                });
            });
        },

        resetTooltip() {
            this.tooltipText = 'Click to copy to clipboard';

            this.$nextTick(() => {
                const tooltip = document.getElementById('clipboardserveridtooltip');
                tooltip.classList.remove('copied');
            });
        },
    },
};
</script>

<style scoped>
    @import '@/assets/css/home/CopyIp.css';
</style>
