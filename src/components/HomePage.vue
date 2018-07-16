<template>
  <div class="hello">
    Simple Application for Crime Data
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('getCrimeData')
  },
  components: {

  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
