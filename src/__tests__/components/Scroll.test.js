import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import Scroll from '../../components/Scroll'

const mock_onHashChange = jest.fn()

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


describe('Scroll', () => {

    const component = shallow(
        <Scroll
            items={items}
            onHashChange={mock_onHashChange}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})