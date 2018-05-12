import React, { Component } from 'react'

import css from './SideNav.less'

import Item from './Item'
import Scroll from './Scroll'

import _ from 'underscore'

export default class SideNav extends Component {
    static defaultProps = {
        className: css.container,
        zIndex: 1000000,
    }

    state = {
        hash: window.location.hash,
    }

    onHashChange = (hash) => {
        this.setState({
            hash,
        })
    }

    render() {

        const { className, items, zIndex, ...rest } = this.props
        const ids = _.pluck(items, 'id')
        const { hash } = this.state
        const state = {
            hash,
            onHashChange: this.onHashChange,
        }
        const containerStyles = {
            zIndex,
        }

        return <div
            className={className}
            style={containerStyles}
        >
            <Scroll
                {...{ids}}
                {...state}
            />
            {items.map((item, i) => <Item
                key={i}
                {...state}
                {...rest}
                {...item}
            />)}
        </div>
    }
}