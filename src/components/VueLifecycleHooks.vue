<script setup>

</script>

<template>
<h1>Vue Lifecycle Hooks</h1>
<p>When a vue component is initialized, it needs to set up data, compile, and mount to the DOM, update the DOM when the data changes.</p>
<p>For example, when a user clicks on a shop component, for shirts, then the component fetches the latest shirts from the API, and views it to the user.</p>
<p>An example of lifecycle hooks is <span style="color:blue;">onMounted</span> hook.</p>
<p style="color:blue;">onMounted(()=>{<br>fetchShirts();<br>});</p>
<a href="https://vuejs.org/guide/essentials/lifecycle.html"><button>Lifecycle In-Depth</button></a>
</template>

<style scoped>
</style>