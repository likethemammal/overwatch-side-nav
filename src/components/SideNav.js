import React, { Component } from 'react'

import css from './SideNav.less'

import Item from './Item'
import Scroll from './Scroll'

import {
    ids as _ids,
} from '../selectors'

export default class SideNav extends Component {
    static defaultProps = {
        className: css.container,
        zIndex: 1000000,
    }

    state = {
        windowHash: window.location.hash,
    }

    onHashChange = (windowHash) => {
        this.setState({
            windowHash,
        })
    }

    render() {

        const { className, items, zIndex, ...rest } = this.props
        const { windowHash } = this.state
        const shared_state = {
            windowHash,
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
                {...{items}}
                {...shared_state}
            />
            {items.map((item, i) => <Item
                key={i}
                {...shared_state}
                {...rest}
                {...item}
            />)}
        </div>
    }
}