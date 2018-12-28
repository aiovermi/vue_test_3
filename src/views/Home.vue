<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BottomNav />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BottomNav from '@/components/BottomNav'

export default {
  name: 'home',
  components: {
    HelloWorld,
      BottomNav
  }
}
</script>
