import React, { Component } from 'react'

import _ from 'underscore'

const BOTTOM_SCROLL_PADDING = 150

class Scroll extends Component {

    constructor() {
        super()

        this.onScroll = _.throttle(this._onScroll, 100)
    }

    _onScroll = () => {

        const { onHashChange, hash, ids } = this.props

        const isAtBottom = document.body.scrollHeight <=
            document.body.scrollTop +
            window.innerHeight + BOTTOM_SCROLL_PADDING

        let prevId
        let newId

        if (isAtBottom) {
            onHashChange(`#${ids[ids.length - 1]}`)
            return
        }

        ids.map((id, i) => {

            const el = document.getElementById(id)

            if (!el) {
                throw new Error(`There is no element with id of ${id}`)
            }

            const top = el.getBoundingClientRect().top
            const isLastId = ids.length - 1 === i


            if (top <= 1) {

                prevId = id

                if (isLastId) {
                    newId = id
                }
            } else {
                newId = prevId
            }
        })

        if (!newId || `#${newId}` === hash) {
            return
        }

        onHashChange(`#${newId}`)

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