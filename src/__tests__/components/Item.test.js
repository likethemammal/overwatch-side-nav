import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import Item from '../../components/Item'

const mock_onHashChange = jest.fn()


describe('Item', () => {

    const component = shallow(
        <Item
            icon={'text-file-stub'}
            id={'item_id'}
            label={'item_label'}
            onHashChange={mock_onHashChange}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    //handle hovered state changes

})