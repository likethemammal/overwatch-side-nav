import {
    createSelector,
} from 'reselect'

import {
    isActive as _isActive,
    idToHash as _idToHash,
    itemBackgroundColor as _itemBackgroundColor,

    ids as _ids,
    lastId as _lastId,
    newId as _newId,
    hasHashChanged as _hasHashChanged,
} from './units'

export const windowHash = props => props.windowHash

//Item
export const id = props => props.id
export const activeColor = props => props.activeColor
export const defaultColor = props => props.defaultColor
export const textColor = props => props.textColor
export const hovered = (props, state) => state.hovered

export const currentHash = createSelector(
    id,
    _idToHash,
)

export const isActive = createSelector(
    windowHash,
    currentHash,
    _isActive,
)

export const itemBackgroundColor = createSelector(
    isActive,
    hovered,
    activeColor,
    defaultColor,
    _itemBackgroundColor,
)


//SideNav
export const items = props => props.items


//Scroll
export const ids = createSelector(
    items,
    _ids,
)

export const lastId = createSelector(
    ids,
    _lastId,
)

export const lastHash = createSelector(
    lastId,
    _idToHash,
)

export const newId = createSelector(
    ids,
    _newId,
)

export const newHash = createSelector(
    newId,
    _idToHash,
)

export const hasHashChanged = createSelector(
    windowHash,
    newId,
    newHash,
    _hasHashChanged,
)
