<template>
    <div class="section" id="discord">
      <div class="header">Discord Server</div>
      <div class="content">
        <div class="description">
          <span>Join our <a target="_blank" href="https://discord.gg/jdE4VAD7tS">Discord Server</a> to follow on the MinecraftSMP, play other games, or simply have fun!</span>
          <span>Take a peek here, but for the best experience, join our <a target="_blank" href="https://discord.gg/jdE4VAD7tS">Discord Server</a>!</span>
        </div>
        <div class="discord-widget">
          <iframe 
            src="https://discord.com/widget?id=933387524582289508&theme=dark" 
            allowtransparency="true" 
            frameborder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            class="discord-iframe">
          </iframe>
          <widgetbot server="933387524582289508" channel="934404231312572416"></widgetbot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DiscordWidget',
    mounted() {
      // Load WidgetBot script asynchronously when the component is mounted
      const widgetBotScript1 = document.createElement('script');
      widgetBotScript1.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
      widgetBotScript1.async = true;
      widgetBotScript1.defer = true;
      widgetBotScript1.onload = () => {
        // eslint-disable-next-line no-undef
        new Crate({
          server: '933387524582289508',
          channel: '1110121708918161458'
        });
      };
      document.body.appendChild(widgetBotScript1);
  
      const widgetBotScript2 = document.createElement('script');
      widgetBotScript2.src = "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed";
      widgetBotScript2.async = true;
      widgetBotScript2.defer = true;
      document.body.appendChild(widgetBotScript2);
    }
  };
  </script>
  
  
<style scoped>
    @import '@/assets/css/home/DiscordChat.css';
</style>
  