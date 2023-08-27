<script setup>
import {ref} from 'vue'
const showGreed = ref(true)
</script>

<template>
  <main class="p-10 w-1/3 mx-auto">
    <div class="relative h-10">
      <Transition name="fade" mode="out-in">
        <h1 class="absolute" v-if="showGreed">Hello World <br> 2121</h1>
        <h1 class="absolute" v-else="showGreed">Goodby World</h1>
      </Transition>
      <button class="mt-20 border rounded p-2" @click="showGreed = !showGreed">
        toggle
      </button>
    </div>
  </main>
</template>
<style scoped>
.fade-enter-from,.fade-leave-to{
  opacity: 0; 
 
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
}

.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease;
}
 
</style>