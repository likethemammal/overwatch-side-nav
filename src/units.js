import _ from 'underscore'
import {
    BOTTOM_SCROLL_PADDING,
} from './constants'

export const idToHash = (id) => `#${id}`

//Item
export const isActive = (windowHash, itemHash) => {
    return windowHash === itemHash
}

export const itemBackgroundColor = (isActive, hovered, activeColor, defaultColor) => {
    return isActive || hovered ? activeColor : defaultColor
}


//SideNav
export const ids = (items) => _.pluck(items, 'id')


//Scroll
export const isAtBottomOfPage = () => document.body.scrollHeight <=
    document.body.scrollTop +
    window.innerHeight + BOTTOM_SCROLL_PADDING

export const lastId = (ids) => ids[ids.length - 1]

export const isLastId = (ids, i) => ids.length - 1 === i

export const newId = (ids) => {
    let prevId
    let newId

    ids.map((id, i) => {

        const el = document.getElementById(id)

        if (!el) {
            throw new Error(`There is no element with id of ${id}`)
        }

        const top = el.getBoundingClientRect().top
        const isLastId = isLastId(ids, i)


        if (top <= 1) {

            prevId = id

            if (isLastId) {
                newId = id
            }
        } else {
            newId = prevId
        }
    })

    return newId
}

export const hasHashChanged = (windowHash, newId, newHash) => newId && newHash !== windowHash