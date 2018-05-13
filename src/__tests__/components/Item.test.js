import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import Item from '../../components/Item'

const mock_onHashChange = jest.fn()

let changable_hash

const onHashChange = (hash) => {

    mock_onHashChange()

    changable_hash = hash
}


describe('Item', () => {

    const component = shallow(
        <Item
            icon={'text-file-stub'}
            id={'item_id'}
            label={'item_label'}
            onHashChange={onHashChange}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    test('if onMouseEnter is called, hovered state should be set to true', () => {
        component.instance().onMouseEnter()

        expect(
            component.state().hovered
        ).toBeTruthy()
    })

    test('if onMouseLeave is called, hovered state should be set to false', () => {
        component.instance().onMouseLeave()

        expect(
            component.state().hovered
        ).toBeFalsy()
    })

    test('if onClick is called mock should be called and should return id plus hashtag', () => {
        component.instance().onClick()

        expect(
            mock_onHashChange.mock.calls.length
        ).toEqual(1)

        expect(
            changable_hash
        ).toEqual('#item_id')

    })

})