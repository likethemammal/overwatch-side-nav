import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import Scroll from '../../components/Scroll'

const mock_onHashChange = jest.fn()

let changable_hash

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

const onHashChange = (hash) => {
    mock_onHashChange()

    changable_hash = hash
}


describe('Scroll', () => {

    const component = shallow(
        <Scroll
            items={items}
            windowHash={'window_hash'}
            onHashChange={onHashChange}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    shared.SHOULD_CALL_MOCK_FROM_FUNCTION(
        component.instance()._onScroll,
        mock_onHashChange,
    )

    test('Scroll should have empty single <div/>', () => {
        expect(
            component.children().length
        ).toEqual(0)
    })

    test('if _onScroll is called, onHashChange should be called and set the new hash', () => {
        component.instance()._onScroll()

        expect(
            changable_hash
        ).toEqual('#slug')
    })

})