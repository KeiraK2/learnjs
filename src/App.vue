<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';


let modal1Active = ref(false);
let modal2Active = ref(false);
</script>

<template>
    <div class="container mt-2">
        <div class="content">
        <button class="button is-primary" @click="modal1Active = true">Open Modal 1</button>
        <button class="button is-link" @click="modal2Active = true">Open Modal 2</button>

            <Modal :active="modal1Active" @close="modal1Active = false" url="https://picsum.photos/1280/960?random=1"></Modal>
            <Modal :active="modal2Active" @close="modal2Active = false" url="https://picsum.photos/1280/960?random=2"></Modal>
        </div>
    </div>
</template>