<template>
  <div id="app">
    <HeaderComponent/>
    <HomeView/>
    <toothSelection/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeView from './views/HomeView.vue'
import toothSelection from './views/ToothSelection.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'AppComponent',  // Change the name to something multi-word
  components: {
    HeaderComponent,
    HomeView,
    toothSelection,
    FooterComponent,
    
  }
}
</script>

<style>
/* You can add your styles here */
</style>
