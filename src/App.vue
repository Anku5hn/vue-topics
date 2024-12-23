<script setup>
import {ref, computed} from 'vue'
import Home from './components/Home.vue'
import VueDirectives from './components/VueDirectives.vue'
import VueEvents from './components/VueEvents.vue'
import VueMethods from './components/VueMethods.vue'
import VueEventModifiers from './components/VueEventModifiers.vue'
import VueForms from './components/VueForms.vue'
import VueCSS from './components/VueCSS.vue'
import VueComputed from './components/VueComputed.vue'
import VueAPI from './components/VueAPI.vue'
import VueStateManagement from './components/VueStateManagement.vue'
import VueRouting from './components/VueRouting.vue'
import VueProps from './components/VueProps.vue'
import VueLifecycleHooks from './components/VueLifecycleHooks.vue'
import VueWatchers from './components/VueWatchers.vue'
const routes = {
'/': Home,
'/vue-directives': VueDirectives,
'/vue-events': VueEvents,
'/vue-event-modifiers': VueEventModifiers,
'/vue-methods': VueMethods,
'/vue-forms': VueForms,
'/vue-css': VueCSS,
'/vue-computed': VueComputed,
'/vue-api': VueAPI,
'/vue-state-management': VueStateManagement,
'/vue-routing': VueRouting,
'/vue-props': VueProps,
'/vue-lifecycle-hooks': VueLifecycleHooks,
'/vue-watchers': VueWatchers,
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
currentPath.value = window.location.hash;
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  
<a href="#/"><button>Home</button></a>
<component :is="currentView" />
</template>

<style scoped>

</style>
