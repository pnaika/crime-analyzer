<template>
    <div class="hello">
        <b-container class="bv-example-row">
            <b-row>
                <b-col sm="2">
                    <b-form-input v-model="year"
                                  type="text"
                                  placeholder="Enter 4 digit year"></b-form-input>
                </b-col>
                <b-col sm="8">
                    <b-dropdown id="ddown1" text="Select Primary Type" class="m-md-2">
                        <b-dropdown-item
                                className="drop-down-stuff"
                                v-for="(primaryType, index) in getPrimatyTypes"
                                :key="index"
                                @click="getCrimeList(primaryType)">
                            {{primaryType}}
                        </b-dropdown-item>
                    </b-dropdown>
                </b-col>
                <b-col sm="2">
                    <b-button variant="success" @click="getCrimeList(primaryType)">SUBMIT</b-button>
                </b-col>
            </b-row>
        </b-container>

        <div>
            Selected primaryType is {{primaryType || 'ALL'}} and year entered is {{year || 'N/A'}}
        </div>
    </div>
</template>

<script>

    export default {
        name: 'FilterSet',
        data() {
            return {
                primaryType: '',
                year: 2018
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
                this.primaryType = type;
                let resultant = {
                    primaryType: type,
                    year: this.year
                };

                this.$store.dispatch('getCrimeDataByType', resultant);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        .drop-down-stuff {
            float: left;
            top: -7px;
        }
    }
</style>
