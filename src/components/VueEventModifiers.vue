<script setup></script>

<template>
<h1>Event Modifiers</h1>
<p>Event modifiers in JavaScript are used to change the default behavior of an event. In vue, the event modifiers can be applied with postfixes denoted by a dot after an event.</p>
<ul>
<li style="color:lightblue">.stop</li>
<li style="color:lightblue">.prevent</li>
<li style="color:lightblue">.self</li>
<li style="color:lightblue">.capture</li>
<li style="color:lightblue">.once</li>
<li style="color:lightblue">.passive</li>
</ul>
<h2>Keyboard Key Modifiers</h2>
<p>Syntax: <span style="color:lightblue;">@keyup.alt.enter="clear"</span> where alt + enter will call a function "clear"</p>
<p>Example with most used keys:</p>
<ul>
<li style="color:lightblue">.enter</li>
<li style="color:lightblue">.tab</li>
<li style="color:lightblue">.delete</li>
<li style="color:lightblue">.esc</li>
<li style="color:lightblue">.space</li>
<li style="color:lightblue">.up</li>
<li style="color:lightblue">.down</li>
<li style="color:lightblue">.left</li>
<li style="color:lightblue">.right</li>
</ul>
<p>System Modifiers:</p>
<ul>
<li style="color:lightblue">.ctrl</li>
<li style="color:lightblue">.alt</li>
<li style="color:lightblue">.shift</li>
<li style="color:lightblue">.meta</li>
</ul>
<h2>Click Modifiers</h2>
<p>Syntax: <span style="color:lightblue;">@click.right // @click.ctrl // @click.ctrl.exact</span>, .exact works if only ctrl key is press whereas previous one works with other keys are also pressed.</p>
<p>Just the mouse buttons:</p>
<ul>
<li style="color:lightblue">.left</li>
<li style="color:lightblue">.right</li>
<li style="color:lightblue">.middle</li>
</ul>
<p>Mouse butons with other buttons:</p>
<ul>
<li style="color:lightblue">.ctrl</li>
<li style="color:lightblue">.alt</li>
<li style="color:lightblue">.shift</li>
</ul>
</template>

<style scoped>
</style>