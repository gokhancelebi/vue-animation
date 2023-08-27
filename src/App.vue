 <template>
  <header class="mx-auto w-1/3 flex gap-5 mt-5">
    <router-link to="/home" class="rounded border p-2">Home</router-link>
    <router-link to="/about" class="rounded border p-2">About</router-link>
    <router-link to="/" class="rounded border p-2">Single Element Animation</router-link>
    <router-link to="/group" class="rounded border p-2">Group Element Animation</router-link>
  </header>
  <Transition name="route">
    <RouterView />
  </Transition>
</template>
<style scoped>
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-to{ 
  opacity: 1;
  transform: translateX(0);
}
.route-enter-active{
  transition: all 0.4s ease;
}
</style>