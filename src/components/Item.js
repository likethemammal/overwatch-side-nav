import React, { Component } from 'react'

import css from './Item.less'

import general from '@likethemammal/general-components'

const { SVG } = general.components

import {
    itemBackgroundColor as _itemBackgroundColor,
    currentHash as _currentHash,
} from '../selectors'

class Item extends Component {
    static defaultProps = {
        className: css.container,
        defaultColor: '#323c50',
        textColor: 'white',
        activeColor: '#00c3ff'
    }

    state = {
        hovered: false,
    }

    onClick = () => {
        const { onHashChange } = this.props
        const currentHash = _currentHash(this.props)

        onHashChange(currentHash)
    }

    onMouseEnter = () => {
        this.setState({
            hovered: true,
        })
    }

    onMouseLeave = () => {
        this.setState({
            hovered: false,
        })
    }

    render() {

        const {
            className,
            label,
            icon,
            textColor,
        } = this.props

        const currentHash = _currentHash(this.props, this.state)
        const itemBackgroundColor = _itemBackgroundColor(this.props, this.state)
        const itemStyles = {
            backgroundColor: itemBackgroundColor,
            color: textColor,
        }

        const iconStyles = {
            fill: textColor,
        }

        return <a
            href={`/${currentHash}`}
            className={className}
            onClick={this.onClick}
        >
            <div
                style={itemStyles}
                className={css.inner}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <div className={css.icon_container}>
                    <SVG
                        raw={icon}
                        className={css.icon}
                        style={iconStyles}
                    />
                </div>
                <div className={css.label}>
                    {label}
                </div>
            </div>
        </a>
    }
}

export default Item