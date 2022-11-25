<template>
  <h3>Counter</h3>

  <h3>{{counter}} x2 = {{times2}}</h3>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState, mapGetters } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['times2'])
  },
  methods: {
    ...mapMutations(['setCounter']),
    increment() {
      // TODO: Call the setCounter mutation from store
      this.setCounter(this.counter +1)
    }
  }
})
</script>