import React, { Component } from 'react'

import css from './Item.less'

import general from '@likethemammal/general-components'

const { SVG } = general.components

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
        const { id, onHashChange } = this.props

        onHashChange(`#${id}`)
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
            id,
            label,
            icon,
            hash,
            defaultColor,
            textColor,
            activeColor,
        } = this.props

        const {
            hovered
        } = this.state

        const active = hash === `#${id}`
        const colorStyle = {
            backgroundColor: active || hovered ? activeColor : defaultColor,
            color: textColor,
        }

        const iconStyle = {
            fill: textColor,
        }

        return <a
            href={`/#${id}`}
            className={className}
            onClick={this.onClick}
        >
            <div
                style={colorStyle}
                className={css.inner}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <div className={css.icon_container}>
                    <SVG
                        raw={icon}
                        className={css.icon}
                        style={iconStyle}
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