<template>
    <div class="hello">
        <b-dropdown id="ddown1" text="Select Primary Type" class="m-md-2">
            <b-dropdown-item
                    v-for="(primaryType, index) in getPrimatyTypes"
                    :key="index"
            @click="getCrimeList(primaryType)">
                {{primaryType}}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>

    export default {
        name: 'FilterSet',
        data() {
            return {

            }
        },
        components: {},
        mounted() {
            this.$store.dispatch('getPrimaryTypeList');
        },
        computed: {
            getPrimatyTypes() {
                return this.$store.getters.primaryType;
            },
        },
        methods: {
            getCrimeList(type) {
                this.$store.dispatch('getCrimeDataByType', type);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
