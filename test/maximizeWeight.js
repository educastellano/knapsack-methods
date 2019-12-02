const test = require('tape')
const knapsack = require('../src/knapsack-01')

test('Maximize Weight Case 1', t => {
    const capacity = 10
    const items = [{ w: 5, b: 5 }, { w: 4, b: 4 }, { w: 3, b: 3 }, { w: 1, b: 1 }]

    const result = knapsack(items, capacity)

    t.deepEqual(result, { maxValue: 10, set: [ { w: 1, b: 1 }, { w: 4, b: 4 }, { w: 5, b: 5 } ] })
    t.end()
})

test('Maximize Weight Case 2', t => {
    const capacity = 10
    const items = [{ w: 5, b: 5 }, { w: 5, b: 5 }, { w: 1, b: 1 }, { w: 2, b: 2 }, { w: 2, b: 2 }, { w: 2, b: 2 }, { w: 2, b: 2 }]

    const result = knapsack(items, capacity)

    t.deepEqual(result, { maxValue: 10, set: [ { w: 5, b: 5 }, { w: 5, b: 5 } ]})
    t.end()
})

test('Maximize Weight Case 3', t => {
    const capacity = 10
    const items = [{ w: 5, b: 5 }, { w: 4, b: 4 }, { w: 2, b: 2 }, { w: 2, b: 2 }, { w: 2, b: 2 }, { w: 2, b: 2 }, { w: 2, b: 2 }]

    const result = knapsack(items, capacity)

    t.deepEqual(result, { maxValue: 10, set: [{ w: 2, b: 2 }, { w: 2, b: 2 }, { w: 2, b: 2 }, { w: 4, b: 4 }]})
    t.end()
})

test('Maximize Weight Case 4', t => {
    const capacity = 10
    const items = [{ w: 9, b: 9 }, { w: 3, b: 3 }, { w: 3, b: 3 }, { w: 2, b: 2 }]

    const result = knapsack(items, capacity)

    t.deepEqual(result, { maxValue: 9, set: [{ w: 9, b: 9 }]})
    t.end()
})

test('Maximize Weight Case 5', t => {
    const capacity = 10
    const items = [{ w: 8, b: 8 }, { w: 3, b: 3 }, { w: 3, b: 3 }, { w: 3, b: 3 }]

    const result = knapsack(items, capacity)

    t.deepEqual(result, { maxValue: 9, set: [{ w: 3, b: 3 }, { w: 3, b: 3 }, { w: 3, b: 3 }]})
    t.end()
})
