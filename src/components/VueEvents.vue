<script setup>
</script>

<template>
<h1>Events in Vue</h1>
<p>In vue, events are handled with the <span style='color:blue;'>v-on:</span> directive. Like v-on:click, v-on:mouseover, v-on:mouseleave</p>
<p>It is shortened to the <span style="color:blue">@</span> symbol in recent vue versions, example, <span style="color:blue">@click @mouseover @mouseleave, etc.</span></p>
<p style="color:blue;">@click="clickHandler"</p>
<p>For inline arrow functions:</p>
<p style="color:blue;">@click="(event)=> //code"</p>
</template>

<style>
</style>