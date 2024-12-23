<script >
import axios from 'axios';
export default{
    data(){
        return{
            quote: "",
            author: "",
            category: "",
            loading: false,
        }
    },
    methods:{
        async getQuote(){
            try{
                this.loading = true;
                const gottenQuote = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
                    headers: {
                        'X-Api-Key': 'WKI9Jc/LEwHI6t8FKz9fZg==fzPCkPWNm736T9uu',
                    }
                });
                this.quote = gottenQuote.data[0].quote;
                this.author = gottenQuote.data[0].author;
                this.category = gottenQuote.data[0].category;
                this.loading = false;
            }catch(err){
                console.log(err);
        }
    }

}
}
</script>
<template>
<h1>Vue API and async function with axios</h1>
<p>API in vuejs can be used with <span style="color:blue;">axios</span> and <span style="color:blue;">ajax</span>.</p>
<h2>Example with API ninjas quote API: </h2>
<button @click="getQuote">Click for quote of the day</button>
<p v-if="loading" style="color:blue;">loading...</p>
<p v-else>Here's the quote:</p>
<p>Quote: "{{ quote }}"</p>
<p>Author: {{ author }}</p>
<p>Category: {{ category }}</p>
<p>This example is using vue 2, however, in vue 3 you can use an async arrow function and a variable with ref to store the response.</p>
</template>
<style scoped>
</style>