import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import SideNav from '../../'

const items = [
    {
        label: 'Label',
        id: 'some_id',
        icon: 'svg-file-stub',
    },
    {
        label: 'Test',
        id: 'slug',
        icon: 'svg-file-stub',
    },
]


describe('SideNav', () => {

    const component = shallow(
        <SideNav
            items={items}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    test('if onHashChange is called, windowHash state should be set to new hash', () => {
        component.instance().onHashChange('new_hash')

        expect(
            component.state().windowHash
        ).toEqual('new_hash')
    })

})