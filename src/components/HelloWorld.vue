<template>
  <h3>Counter</h3>

  <h3>{{counter}} x2 = {{times2}}</h3>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  computed: {
    counter() {
      // TODO: Read the counter from store
      return this.$store.state.counter
    },
    times2() {
      // TODO: Read the times2 from store
      return this.$store.getters.times2
    }
  },
  methods: {
    increment() {
      // TODO: Call the setCounter mutation from store
      this.$store.commit('setCounter', this.counter +1)
    }
  }
})
</script>