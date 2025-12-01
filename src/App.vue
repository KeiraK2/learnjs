<script setup>
import { computed, ref } from 'vue';

let message = ref('Hello Vue');
let isDanger = ref(false);
let newItem = ref('Viin');
let i = 0;
let items = ref([
    {id: i++, name: 'Õlu', isDone: false},
    {id: i++, name: 'Monsu', isDone: false},
    {id: i++, name: 'Sai', isDone: false},
    {id: i++, name: 'Leib',isDone: false},
]);

function add() {
    if(newItem.value.trim() !== ''){
       items.value.push({id: i++, name: newItem.value, isDone: false});
    }
    newItem.value = '';
}

let doneItems = computed(() =>  items.value.filter(item => item.isDone));

</script>

<template>
    <div class="container mt-2">
        <div class="content">
            <button class="button is-primary" @click="message = 'Hello VM24'">Click Me!</button>
            <h1>{{ message }}</h1>
            <button class="button" :class="{ 'is-danger' : isDanger, 'is-warning': !isDanger }" 
            @click="isDanger = !isDanger">Cool button</button>


            <div class="field has-addons mt-2">
                <div class="control is-expanded">
                    <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Add Item">
                </div>
                <div class="control">
                    <button class="button is-info" @click="add">
                        Add Item
                    </button>
                </div>
            </div>
            <h1>{{ newItem.split(''),reverse(),join()}}</h1>


            <h1>All Items</h1>
            <ul>
                <li v-for="item in Doneitems">
                    {{ item.name }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>

            <h1>Done Items</h1>
            <ul>
                <li v-for="item in Doneitems">
                    {{ item.name }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>

            
        </div>
    </div>
</template>