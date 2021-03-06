import _ from 'lodash'
import moment from 'moment';

const getCrimeList = (list) => {
    console.log(list)
    const crimeList = [];

    _.forEach(list, data => {
        crimeList.push({
            date: moment(data.date).format('YYYY-MM-DD hh:MM:ss a') || '- - -',
            case_number: data.case_number || '- - -',
            community_area: data.community_area || '- - -',
            year: data.year || '- - -',
            location_description: data.location_description || '- - -',
            primary_type: data.primary_type || '- - -'
        })
    });

    return crimeList
};

const formatFieldData = () => {

    return [
        {
            key: 'date',
            label: 'Date'
        },
        {
            key: 'case_number',
            label: 'Case Number'
        },
        {
            key: 'community_area',
            label: 'Community Areas'
        }
    ]
};

export function crimeListTrans(list) {
    const formatedData = getCrimeList(list);
    return {
        data: formatedData,
        fields: formatFieldData()
    }
}