import React, { Component } from 'react'

import _ from 'underscore'

import {
    isAtBottomOfPage,
} from '../units'

import {
    lastHash as _lastHash,
    newHash as _newHash,
    hasHashChanged as _hasHashChanged,
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

        const { onHashChange, bottomPadding } = this.props

        const lastHash = _lastHash(this.props)
        const isAtBottom = isAtBottomOfPage(bottomPadding)

        if (isAtBottom) {
            onHashChange(lastHash)
            return
        }

        const newHash = _newHash(this.props)
        const hasHashChanged = _hasHashChanged(this.props)

        if (hasHashChanged) {
            onHashChange(newHash)
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