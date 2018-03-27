import React from 'react';
import {shallow} from 'enzyme';

import general_components from '@likethemammal/general-components'

const shared = general_components.__tests__._shared.tests

import CheckboxWithLabel from '../../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    test('changes the text after click', () => {

        expect(component.text()).toEqual('Off');

        component.find('input').simulate('change');

        expect(component.text()).toEqual('On');
    })
})