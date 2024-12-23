<script setup></script>

<template>
<h1>Vue Forms</h1>
<p>Vue uses the <span style="color:lightblue;">v-model</span> directive to add extra functionality to form inputs. It's a two way binding.</p>
<br>
<p>Steps:</p>
<ol>
<li>Inside the <span style="color:lightblue;">input</span> html tag in a form tag, add <span style="color:lightblue;">v-model="text"</span> directive. //use the required keyword inside the input tag if needed and the type tag also</li>
<li>Add event listener and a binding <span style="color:lightblue;">:value="text"</span> (not necessary if v-model exists.) in the same input tag: <span style="color:lightblue;">@input="event => text = event.target.value"</span> </li>
<li>Add a variable <span style="color:lightblue;">text: null,</span> in the return object of the data() property.</li>
<li>Create an array of objects inside return <span style="color:lightblue;">itemList: [{text: "hello world", value: 1},{...(same)}]</span> in the return object of the data() property.</li>
<li>Create addItem() function in the <span style="color:lightblue">methods:</span> property.</li>
<li>In the function create a variable <span style="color:lightblue">let item = {text: this.text}</span>.</li>
<li>Push the item in the list created in the return function <span style="color:lightblue">this.itemList.push(item)</span>. (methods: property, addItem() function).</li>
<li>Null the item to store the next one: <span style="color:lightblue;">this.text = null,</span></li>
<p>Links for Vue Forms:</p>
<a href='https://www.w3schools.com/vue/vue_forms.php'>W3 Schools</a>
<br>
<a href="https://vuejs.org/guide/essentials/forms.html">Vue Docs</a>
</ol>
</template>

<style scoped></style>