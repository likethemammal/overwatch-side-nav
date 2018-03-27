import React, { Component } from 'react'

import css from './SideNav.less'

import Item from './Item'
import Scroll from './Scroll'

export default class SideNav extends Component {
    static defaultProps = {
        className: css.container,
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

        const { className, items, ids, ...rest } = this.props
        const { hash } = this.state
        const state = {
            hash,
            onHashChange: this.onHashChange,
        }

        return <div className={className}>
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