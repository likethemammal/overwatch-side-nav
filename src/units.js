import _ from 'underscore'
import general from '@likethemammal/overwatch-general'

const { validations } = general
export const idToHash = (id) => `#${id}`

import * as side_nav_validations from './validations'

//Item
export const isActive = (windowHash, itemHash) => {
    if (!itemHash) {
        throw 'Item must have itemHash defined'
    }

    return windowHash === itemHash
}

export const itemBackgroundColor = (isActive, hovered, activeColor, defaultColor) => {
    if (!activeColor) {
        throw 'No activeColor defined'
    }

    if (!defaultColor) {
        throw 'No defaultColor defined'
    }

    return isActive || hovered ? activeColor : defaultColor
}


//SideNav
export const ids = (items) => _.pluck(items, 'id').filter(v => v)

//Scroll
export const lastId = (ids) => {
    side_nav_validations.IDS_NOT_ARRAY(ids)

    return ids[ids.length - 1]
}

export const isLastId = (ids, i) => {
    side_nav_validations.IDS_NOT_ARRAY(ids)

    if (!_.isNumber(i)) {
        throw 'index is not a number'
    }

    return ids.length - 1 === i
}

export const hasHashChanged = (newId, newHash, windowHash) => newId && newHash !== windowHash
