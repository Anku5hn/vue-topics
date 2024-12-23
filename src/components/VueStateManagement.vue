<script setup>
import {useTodoStore} from '../stores/todo.js'
import {ref} from 'vue'
const store = useTodoStore();
const todo = store.todo;
const userInput = ref('');
const del = () => {
    store.deleteLast();
};
const handleInput = () =>{
    store.addItem(userInput.value);
}
</script>

<template>
<h1>Vue State Management with Pinia &  List Rendering</h1>
<p>State Management In Vue can be done with <span style="color:blue;">Pinia</span> or <span style="color:blue;">VueX</span>.</p>
<p>Pinia allowes you to have multiple stores whereas VueX only allows you to have a single store.</p>
<h2>What a pinia store has:</h2>
<ul>
    <li>State</li>
    <li>Actions</li>
    <li>Getters</li>
</ul>
<h2>Step By Step guide for using Pinia</h2>
<ol>
    <li>Install pinia in project: <span style="color:blue;">npm i pinia</span></li>
    <li>Add import statement in  main.js: <span style="color:blue;">import {createPinia} from 'pinia';</span></li>
    <li>Add use statement in main.js: <span style="color:blue;">app.use(createPinia());</span></li>
    <li>Create a folder inside the src folder called <span style="color:blue;">stores</span>.</li>
    <li>Inside the store folder, create a <span style="color:blue;">.js</span> file which will be the store file, which will store the state</li>
    <li>Add an import statement in the .js file which you created: <span style="color:blue;">import {defineStore} from 'pinia'</span></li>
    <li>Add an export varible with store defined: <span style="color:blue;">export const useTodoStore = defineStore();</span> use[give name]Store</li>
    <li>The defineStore will take 2 arguements, one is a string, another is an object, <span style="color:blue;">defineStore("todo",{//state,//actions,//getters})</span></li>
    <li>State is an arrow function which returns the variable, actions are the actions on variables (can be async), getters accepts the states and does operations on the state</li>
    <li>Import the named useStore function from the .js file in the component you need that store in.</li>
    <li>Add a const in a function <span style="color:blue;">const store = useStore();</span></li>
</ol>
<h2>A simple Todo List with Pinia: </h2>


<ol>
    <li v-for="(todo,key) in todo" :key="key">{{ todo }}</li>
</ol>
<input v-model="userInput" placeholder="Todo List Item"/>
<br>
<br>
<button @click="handleInput">+</button>
<br>
<br>
<button @click="del">🗑️</button>
</template>

<style scoped>
</style>