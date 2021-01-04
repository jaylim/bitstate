# bitstate


```javascript
const { State } = require('bitstate');

let s = new State();

s.add(0x1);
s.add(0x2);

assert.equal(s.state, 3);
assert.equal(s.has(0x1), true);
assert.equal(s.has(0x2), true);
assert.equal(s.has(0x3), true);
assert.equal(s.has(0x4), false);

```

# installation

```
npm install bitstate --save
```
