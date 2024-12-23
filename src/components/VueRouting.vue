<script setup>
</script>

<template>
<h1>Routing in vue js</h1>
<p>Vue.JS has an inbuilt router with dynamic components and hashchange event listener. You can use this method for simple routing.</p>
<h2>Here is a step-by-step guide on how to route in Vue.js</h2>
<p style="font-weight:bold;">For the script: </p>
<ol>
    <li>Import the component/page needed to be routed in App.vue file script, eg: <span style="color:blue;">import home from './pages/Home.vue'</span>
    </li>
    <li>Create an object called <span style="color:blue;">routes</span> eg: <span style="color:blue;">const routes = { '/': Home}</span>, the URL should be a 
        string and the value should be the component/page which is imported.
    </li>
    <li>Using ref, create a variable called <span style="color:blue;">currentPath</span> and it's value shoule be <span style="color:blue;">const currentPath = ref(window.location.hash)</span>
    </li>
    <li>
        Add a window event listener <span style="color:blue;">hashchange</span> which changes the value of currentPath to the current hash: 
        window.addEventListener('hashchange',()=>{
            currentPath.value = window.location.hash
        })
    </li>
    <li>
        Add a conditional variable called <span style="color:blue;">currentView</span>. It's value will be based on what <span style="color:blue;">computed</span> method returns from routes object.
        <span style="color:blue;">const currentView = computed(()=>{
        return routes[currentPath.value.slice(1)] || '/' || Not Found;   
        })</span> 
    </li>
</ol>
<p style="font-weight:bold;">For template</p>
<p>Inside the template of the App.vue file, add a dynamic component tag with the <span style="color:blue;">:is</span> directive with <span style="color:blue;">currentView</span> variable</p>
<p style="color:blue;">&ltcomponent :is="currentView" /&gt</p>
<p style="font-weight:bold">For a href tags:</p>
<p>Use the value as in routes object in the App.vue script to navigate to the pages.</p>
<p style="color:blue;">&lt a href="/" &gt Home &lt/a &gt</p>
</template>

<style scoped>
</style>