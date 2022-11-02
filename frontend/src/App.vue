<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import AboutUsVue from './components/AboutUs.vue';
import HomeMain from './components/HomeMain.vue';
import { ref, computed } from 'vue';

const routes:any = {
    '/home': HomeMain,
    '/sobre-nos': AboutUsVue 
} as const;

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/home']

})

// dictionary with name key and component value
// load current component value, there is a spefic tag for html

</script>

<template>
    <component :is="currentView"/>
    <FooterComponent/> 
</template>

<style scoped>

@media screen and (min-width:0px) and (max-width:700px){

}
</style>
