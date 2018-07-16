<template>
    <div class="hello">
        Simple Application for Crime Data
        <b-table :items="getCrimeList">
            <template slot="case_number" slot-scope="data">
                <a :href="`#/${data.value}`">
                    {{data.value}}
                </a>
            </template>
        </b-table>
    </div>
</template>

<script>

    export default {
        name: 'HomePage',
        data() {
            return {
                crimeList: [],
                fields: [
                    {
                        // A column that needs custom formatting,
                        // calling formatter 'fullName' in this app
                        key: 'case_number',
                        label: 'Full Name'
                    }
                    ]
            }
        },
        mounted() {
            this.$store.dispatch('getCrimeData');
            this.$store.dispatch('getPrimaryTypeList');
        },
        components: {},
        computed: {
            getCrimeList() {
                return this.$store.getters.crimeList;
            },
            getCrimeFields() {
                return this.$store.getters.criminalListFields;
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
