<script setup>
import {reactive,ref} from 'vue'
const items = reactive({items: [
    {name : "Gökhan Çelebi",id:1},
    {name : "Emirhan Çelebi", id:2},
    {name: "Turhan Çelebi", id:3}
]})

let last_id = 3

const itemName = ref("")
const addNewItem = (e) => {
    last_id++
    items.items.unshift({
        name: itemName.value,
        id: last_id
    })
    itemName.value=""
}

const deleteItem = (itemId) => {
    items.items = items.items.filter(item => item.id != itemId)
}
</script>
<template>
    <div class="container mx-auto flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center gap-10 w-full mt-10">
            <input @keypress.enter="addNewItem" v-model="itemName" type="text" class="shadow-md w-1/4 p-2" placeholder="Enter Name">
            <ul class="flex flex-col gap-3 w-1/4 justify-center items-center relative">
                <TransitionGroup name="items">
                    <li v-for="item in items.items" :key="item.id" @click="deleteItem(item.id)" 
                    class="border shadow-md text-center rounded p-2 cursor-pointer w-full hover:bg-gray-50"
                    >{{ item.name }}</li>
                </TransitionGroup>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.items-enter-from{
    opacity: 0;
    transform: scale(0.5);
}
.items-enter-to{
    opacity: 1;
    transform: scale(1);
}
.items-enter-active{
    transition: all 0.5s ease;
}

.items-leave-from{
    opacity: 1;
    transform: scale(1);
}
.items-leave-to{
    opacity: 0;
    transform: scale(0.5);
}
.items-leave-active{
    transition: all 0.5s ease;
    position: absolute;
}

.items-move{
    transition: all 0.5s ease;
}

</style>