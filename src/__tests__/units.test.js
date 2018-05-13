

import general from '@likethemammal/general-components'

const validation_tests = general.__tests__._shared.validations

import {
    idToHash,
    isActive,
    itemBackgroundColor,
    ids,
    lastId,
    isLastId,
    hasHashChanged,
} from '../units'

describe('idToHash', () => {
    describe('given an id', () => {

        test('if id string is empty, return # ', () => {
            expect(
                idToHash('')
            ).toEqual('#')
        })


        test('if id, return # plus id', () => {
            expect(
                idToHash('some_id')
            ).toEqual('#some_id')
        })

    })
})

describe('isActive', () => {
    describe('given a windowHash and an itemHash', () => {

        validation_tests.NO_VALUE(
            isActive
        )

        test('if windowHash is falsey and itemHash is string, return false', () => {
            expect(
                isActive(void(0), 'some_test')
            ).toBeFalsy()
        })

        test('if windowHash is truthy and itemHash is string, but they\'re not equal, return false', () => {
            expect(
                isActive(true, 'some_test')
            ).toBeFalsy()
        })

        test('if windowHash is a string and itemHash is string, but they\'re not equal, return false', () => {
            expect(
                isActive('some_window_hash', 'some_test')
            ).toBeFalsy()
        })

        test('if windowHash is a string and itemHash is string, and they\'re equal, return true', () => {
            expect(
                isActive('some_test', 'some_test')
            ).toBeTruthy()
        })

    })
})

describe('itemBackgroundColor', () => {
    describe('given isActive, hovered, activeColor, and defaultColor', () => {

        validation_tests.NO_VALUE(
            itemBackgroundColor.bind(null, false, false)
        )

        validation_tests.NO_VALUE(
            itemBackgroundColor.bind(null, false, false, true)
        )

        test('if isActive, return activeColor', () => {
            expect(
                itemBackgroundColor(true, false, 'active_color', 'default_color')
            ).toEqual('active_color')
        })

        test('if isActive is false, but hovered is true, return activeColor', () => {
            expect(
                itemBackgroundColor(false, true, 'active_color', 'default_color')
            ).toEqual('active_color')
        })

        test('if isActive is true and hovered is true, return activeColor', () => {
            expect(
                itemBackgroundColor(true, true, 'active_color', 'default_color')
            ).toEqual('active_color')
        })

        test('if isActive is false and hovered is false, return defaultColor', () => {
            expect(
                itemBackgroundColor(false, false, 'active_color', 'default_color')
            ).toEqual('default_color')
        })

    })
})

describe('ids', () => {
    describe('given items', () => {

        test('if no items, return empty array', () => {
            expect(
                ids()
            ).toEqual([])
        })

        test('if items, but none have a key of `id`, return empty array', () => {
            expect(
                ids(['test'])
            ).toEqual([])

            expect(
                ids([
                    {
                        some_key: 'test',
                    }
                ])
            ).toEqual([])
        })

        test('if items, and some have a key of `id`, return an array of them', () => {
            expect(
                ids([
                    {
                        id: 'test',
                    },
                    {
                        id: 'some_label',
                    },
                ])
            ).toEqual(['test', 'some_label'])
        })

    })
})

describe('lastId', () => {
    describe('given ids', () => {

        validation_tests.NO_VALUE(
            lastId
        )

        validation_tests.NOT_ARRAY(
            lastId
        )

        test('if ids, return the last id', () => {
            expect(
                lastId(['test'])
            ).toEqual('test')

            expect(
                lastId([false, true])
            ).toEqual(true)
        })

        test('if ids, return the last id, even if its falsy', () => {
            expect(
                lastId(['some_test', true, false])
            ).toEqual(false)
        })

    })
})

describe('isLastId', () => {
    describe('given ids and an index', () => {

        validation_tests.NO_VALUE(
            isLastId
        )

        validation_tests.NOT_ARRAY(
            isLastId
        )

        validation_tests.NOT_NUMBER(
            isLastId.bind(null, [])
        )

        test('if ids is empty, return false', () => {
            expect(
                isLastId([], 1)
            ).toBeFalsy()
        })

        test('if ids, but index is not the last possible index, return false', () => {
            expect(
                isLastId(['some id'], 1)
            ).toBeFalsy()

            expect(
                isLastId(['some id', 'some other id', 'some extra id'], 1)
            ).toBeFalsy()
        })

        test('if ids and index is the last id, return true', () => {
            expect(
                isLastId(['some id'], 0)
            ).toBeTruthy()

            expect(
                isLastId(['some id', 'some other id', 'some extra id'], 2)
            ).toBeTruthy()
        })

    })
})

describe('hasHashChanged', () => {
    describe('given newId, newHash, and windowHash', () => {

        test('if no newId, return false', () => {
            expect(
                hasHashChanged()
            ).toBeFalsy()

            expect(
                hasHashChanged(null, 'window_hash')
            ).toBeFalsy()
        })

        test('if newId is truthy, newHash equals windowHash, return false', () => {
            expect(
                hasHashChanged(true, 'window_hash', 'window_hash')
            ).toBeFalsy()
        })

        test('if newId is truthy, newHash does not equal windowHash, return true', () => {
            expect(
                hasHashChanged(true, 'window_hash', 'new_hash')
            ).toBeTruthy()
        })

        test('if newId is string, newHash does not equal windowHash, return true', () => {
            expect(
                hasHashChanged('new_id', 'window_hash', 'new_hash')
            ).toBeTruthy()
        })
    })
})

