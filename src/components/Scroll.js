import React, { Component } from 'react'

import _ from 'underscore'

import {
    isAtBottomOfPage,
    newId,
} from '../units.web'

import {
    idToHash,
    hasHashChanged,
} from '../units'

import {
    lastHash as _lastHash,
    ids as _ids,
} from '../selectors'

const BOTTOM_SCROLL_PADDING = 150

class Scroll extends Component {

    static defaultProps = {
        bottomPadding: BOTTOM_SCROLL_PADDING,
    }

    constructor() {
        super()

        this.onScroll = _.throttle(this._onScroll, 100)
    }

    _onScroll = () => {

        const { onHashChange, bottomPadding, windowHash } = this.props

        const ids = _ids(this.props)
        const lastHash = _lastHash(this.props)
        const isAtBottom = isAtBottomOfPage(bottomPadding)


        if (isAtBottom) {
            onHashChange(lastHash)
            return
        }

        const _newId = newId(ids)
        const _newHash = idToHash(_newId)
        const _hasHashChanged = hasHashChanged(_newId, _newHash, windowHash)

        if (_hasHashChanged) {
            onHashChange(_newHash)
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return <div/>
    }
}

export default Scroll