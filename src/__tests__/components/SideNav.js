import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import SideNav from '../../components/'

const items = [
    {
        label: 'Label',
        id: 'some_id',
        icon: [],
        Component: <div>test</div>,
    },
    {
        label: 'Test',
        id: 'slug',
        icon: [],
        Component: <div>The fuck</div>,
    },
]


describe('SideNav', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        <SideNav
            items={items}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})