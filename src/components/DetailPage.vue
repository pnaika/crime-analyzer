<template>
    <div class="hello">
        <h1>Case Details</h1>
        <ring-loader v-show="isDataLoading" class="loading-spinner"></ring-loader>
        <b-card :title="getCrimeDetails.case_number">
            <b-row>
                <b-col>
                    <label>Community Area : </label>
                    <span>{{getCrimeDetails.community_area  || '- - -'}}</span>
                </b-col>
                <b-col>
                    <label>Date : </label>
                    <span>{{getCrimeDetails.date  || '- - -'}}</span>
                </b-col>
                <b-col>
                    <label>FBI Code : </label>
                    <span>{{getCrimeDetails.fbi_code  || '- - -'}}</span>
                </b-col>
                <b-col>
                    <label>District : </label>
                    <span>{{getCrimeDetails.district  || '- - -'}}</span>
                </b-col>
            </b-row>
        </b-card>

        <section class="more-info">
            <h4>More Information</h4>
            <b-container>
                <b-row class="row-section">
                    <b-col>
                        <h6>Is Arrested : </h6>
                        <span>{{getCrimeDetails.arrest || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Block : </h6>
                        <span>{{getCrimeDetails.block || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Location Description : </h6>
                        <span>{{getCrimeDetails.location_description || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Description : </h6>
                        <span>{{getCrimeDetails.description || '- - -'}}</span>
                    </b-col>
                </b-row>
                <b-row class="row-section">
                    <b-col>
                        <h6>Primary Type : </h6>
                        <span>{{getCrimeDetails.primary_type  || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Is domestic crime: </h6>
                        <span>{{getCrimeDetails.domestic || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>IUCR : </h6>
                        <span>{{getCrimeDetails.iucr || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>year : </h6>
                        <span>{{getCrimeDetails.year || '- - -'}}</span>
                    </b-col>
                </b-row>
                <b-row class="row-section">
                    <b-col>
                        <h6>Location Description : </h6>
                        <span>{{getCrimeDetails.location_description  || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Ward : </h6>
                        <span>{{getCrimeDetails.ward  || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Location Lat Long : </h6>
                        <span>{{getCrimeDetails.latitude  || '- - -'}}</span>/
                        <span>{{getCrimeDetails.longitude  || '- - -'}}</span>
                    </b-col>
                    <b-col>
                        <h6>Last Updated On : </h6>
                        <span>{{getCrimeDetails.updated_on || '- - -'}}</span>
                    </b-col>
                </b-row>
            </b-container>
        </section>

    </div>
</template>

<script>
    import RingLoader from 'vue-spinner/src/RingLoader.vue'

    export default {
        name: 'DetailPage',
        data() {
            return {
                crimeDetails: []
            }
        },
        components: {
            RingLoader
        },
        computed: {
            getCrimeDetails() {
                return this.$store.getters.caseDetails;
            },
            isDataLoading() {
                return this.$store.getters.isLoading;
            },
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .more-info {
        padding-top: 20px;
    }

    .row-section {
        padding-bottom: 35px;
    }

    .loading-spinner {
        position: fixed;
        top: 40%;
        display: inline-flex;
    }

</style>
