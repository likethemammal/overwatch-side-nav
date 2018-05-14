import * as side_nav_validations from './validations'

import {
    isLastId,
} from './units'

export const isAtBottomOfPage = (bottomPadding) => document.body.scrollHeight <=
    document.body.scrollTop +
    window.innerHeight + bottomPadding

export const newId = (ids) => {
    side_nav_validations.IDS_NOT_ARRAY(ids)

    let prevId
    let newId

    ids.map((id, i) => {

        const el = document.getElementById(id)

        if (!el) {
            throw new Error(`There is no element with id of ${id}`)
        }

        const top = el.getBoundingClientRect().top
        const _isLastId = isLastId(ids, i)

        if (top <= 1) {

            prevId = id

            if (_isLastId) {
                newId = id
            }

            return
        }

        newId = prevId
    })

    return newId
}
