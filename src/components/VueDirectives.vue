<script setup>
</script>

<template>
<h1>Vue Directives</h1>
<p>Vue Directives are special HTML attributes with prefix 'v-' for extra functionality</p>
<p>Types of Vue Directives: </p>
<ul>
    <li>
        <span style="font-weight: bold;color: blue;">v-bind:</span> shortcut <span style="color:blue;">:</span>, to connect HTML tag to the variable inside a vue instance. Eg: v-bind:class = "myClass"
    </li>
    <li>
     <span style="font-weight: bold;color: blue;"> v-if, v-else-if, v-else:</span> conditionals according to a boolean value (generally) conditional rendering
    </li>
    <li>
     <span style="font-weight: bold;color: blue;">v-show:</span> show or hide, generally according to the boolean value
    </li>
    <li>
     <span style="font-weight: bold;color: blue;">v-for:</span> generally for looping through an array/array of objects.
     <span style="font-weight: bold;color: blue;">key</span> attribute can be used with this to give elements of an array a unique value. 
    </li>
</ul>
</template>

<style scoped>
</style>