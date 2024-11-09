<template>
  <div id="app">
    <Header />
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/common/Header.vue';
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  @import '@/assets/css/common/base.css';
</style>
