import {
    windowHash as basic_windowHash,
    id as basic_id,
    activeColor as basic_activeColor,
    defaultColor as basic_defaultColor,
    textColor as basic_textColor,
    hovered as basic_hovered,
    items as basic_items,
} from '../selectors'

import _ from 'underscore'


const basic_selectors = {
    windowHash: basic_windowHash,
    id: basic_id,
    activeColor: basic_activeColor,
    defaultColor: basic_defaultColor,
    textColor: basic_textColor,
    hovered: basic_hovered,
    items: basic_items,
}


const mock_props = {
    windowHash: '#some_hash',
    id: 'item_id',
    activeColor: '#eee',
    textColor: '#444',
    defaultColor: '#bbb',
    items: [
        {
            id: 'the',
            label: 'some_label',
            icon: 'some-svg-stub'
        },
        {
            id: 'other',
            label: 'other_label',
            icon: 'some-svg-stub'
        },
    ],
}

const mock_state = {
    hovered: true,
}

const mock_state_and_props = {
    ...mock_state,
    ...mock_props,
}

describe('basic selectors', () => {
    describe('given a state object', () => {

        _.map(basic_selectors, (selector, key) => {
            test(`selector for ${key}`, () => {
                expect(selector(mock_props, mock_state)).toEqual(mock_state_and_props[key])
            })
        })

    })
})
