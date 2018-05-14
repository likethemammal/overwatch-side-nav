import React from 'react'
import ReactDOM from 'react-dom'

import SVG_MATERIAL_LANDSCAPE from 'svg-icon/dist/svg/material/landscape.svg'
import SVG_MATERIAL_FITNESS_CENTER from 'svg-icon/dist/svg/material/fitness-center.svg'
import SVG_MATERIAL_WC from 'svg-icon/dist/svg/material/wc.svg'
import SVG_MATERIAL_FORMAT_ALIGN_RIGHT from 'svg-icon/dist/svg/material/format-align-right.svg'
import SVG_MATERIAL_STARS from 'svg-icon/dist/svg/material/stars.svg'
import SVG_MATERIAL_TUNE from 'svg-icon/dist/svg/material/tune.svg'

const items = [
    {
        label: 'Begin your watch',
        id: 'watch',
        icon: SVG_MATERIAL_LANDSCAPE,
    },
    {
        label: 'Get good',
        id: 'good',
        icon: SVG_MATERIAL_FITNESS_CENTER,
    },
    {
        label: 'Teamwork',
        id: 'teamwork',
        icon: SVG_MATERIAL_WC,
    },
    {
        label: 'Settings',
        id: 'settings',
        icon: SVG_MATERIAL_TUNE,
    },
    {
        label: 'Heroes',
        id: 'heroes',
        icon: SVG_MATERIAL_STARS,
    },
    {
        label: 'Credits',
        id: 'credits',
        icon: SVG_MATERIAL_FORMAT_ALIGN_RIGHT,
    },
]

import OverwatchSideNav from '../lib'

const Sections = () => <div>{[...Array(items.length)].map((_, index) =>
    <section id={items[index].id} key={index}>
        {`Section ${index + 1}`}
    </section>)
}</div>


ReactDOM.render(
    <div>
        <OverwatchSideNav
            items={items}
        />
        <Sections />
    </div>,
    document.getElementById('app')
)