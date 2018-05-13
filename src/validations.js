import _ from 'underscore'

export const IDS_NOT_ARRAY = (ids) => {
    if (!_.isArray(ids)) {
        throw 'ids has to be an array'
    }
}