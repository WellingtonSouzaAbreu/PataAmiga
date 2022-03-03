const { app } = require('./../apiTestConfig/requires.js')
const { existsOrError, objectIsNull, isNumber } = app.api.validation

describe('Testing api/validation.js', () => {
    test('Should return undefined if exists or throw error if not exists', () => {
        const validPossibilities = ['string', 55, [1, 2], { name: 'test' }]
        const invalidPossibilities = ['', null, [], {}, undefined]

        expect(existsOrError(validPossibilities[0], 'err')).toEqual(undefined)
        expect(existsOrError(validPossibilities[1], 'err')).toEqual(undefined)
        expect(existsOrError(validPossibilities[2], 'err')).toEqual(undefined)
        expect(existsOrError(validPossibilities[3], 'err')).toEqual(undefined)

        /* expect(existsOrError(invalidPossibilities[0], 'err')).toThrow('err')
        expect(existsOrError(invalidPossibilities[1], 'err')).toThrow('err')
        expect(existsOrError(invalidPossibilities[2], 'err')).toThrow('err')
        expect(existsOrError(invalidPossibilities[3], 'err')).toThrow('err')
        expect(existsOrError(invalidPossibilities[4], 'err')).toThrow('err') */
    })

    test('Should return true to emtpy object', () => {
        expect(objectIsNull({})).toEqual(true)
        expect(objectIsNull([])).toEqual(true)
    })

    test('Should return false to not emtpy object', () => {
        expect(objectIsNull({ name: 'jonh' })).toEqual(false)
        expect(objectIsNull([1, 2, 3])).toEqual(false)
    })

    test('Should return true for a numbers and bolleans', () => {
        expect(isNumber(10)).toEqual(true)
        expect(isNumber('10')).toEqual(true)
        expect(isNumber(1.2)).toEqual(true)
        expect(isNumber(true)).toEqual(true)
        expect(isNumber(false)).toEqual(true)
    })

    test('Should return false for a not numbers', () => {
        expect(isNumber('1a')).toEqual(false)
        expect(isNumber('x')).toEqual(false)
    })
})