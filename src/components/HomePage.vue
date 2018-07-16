<template>
    <div class="hello">
        Simple Application for Crime Data
        <b-button>I am a Button</b-button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'HomePage',
        data() {
            return {}
        },
        mounted() {
            this.$store.dispatch('getCrimeData');
            this.$store.dispatch('getPrimaryTypeList');
        },
        components: {},
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
