<template>
  <div>
    {{ count }}
    <button @click="increment">Increment</button>
    <div class="p-4 bg-gray-300">
    <h1 class="text-2xl font-bold text-center">My Vue App</h1>
  </div>
  </div>
</template>

<script>
export default {
    name: "TestPage",
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>
