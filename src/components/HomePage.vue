<template>
    <div class="hello">
        <h2>Simple Application for Crime Data</h2>
        <filter-set></filter-set>
        <ring-loader v-show="isDataLoading" class="loading-spinner"></ring-loader>
        <b-table :items="getCrimeList">
            <template slot="case_number" slot-scope="data">
                <a :href="`#/${data.value}`" @click="getDetails(data.value)">
                    {{data.value}}
                </a>
            </template>
        </b-table>
    </div>
</template>

<script>

    import FilterSet from './FilterSet.vue';
    import RingLoader from 'vue-spinner/src/RingLoader.vue'

    export default {
        name: 'HomePage',
        data() {
            return {
                crimeList: []
            }
        },
        mounted() {
            this.$store.dispatch('getCrimeData');
        },
        components: {
            FilterSet,
            RingLoader
        },
        computed: {
            getCrimeList() {
                return this.$store.getters.crimeList;
            },
            isDataLoading() {
                return this.$store.getters.isLoading;
            },
            getCrimeFields() {
                return this.$store.getters.criminalListFields;
            }
        },
        methods: {
            getDetails(case_number) {
                this.$store.dispatch('getCrimeDataByCaseNumber', case_number);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading-spinner {
        position: fixed;
        top: 40%;
        display: inline-flex;
    }
</style>
