# knapsack-methods

Different approaches to solve the [Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem#0.2F1_Knapsack_Problem)

## Install

    npm install knapsack-methods

## Usage

```js
import { k01 as knapsack } from 'knapsack-methods'

const items = [{ w: 5, b: 5 }, { w: 4, b: 4 }, { w: 3, b: 3 }]
const capacity = 10

knapsack(items, capacity)
// { maxValue: 9, set: [ { w: 4, b: 4 }, { w: 5, b: 5 } ] }
```

## License

[MIT License](http://opensource.org/licenses/MIT)