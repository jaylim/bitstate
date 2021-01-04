exports = module.exports = {
    addState,
    removeState,
    hasState
};

const S = Symbol('state');

class State {
    constructor() {
        this[S] = 0;
    }

    get state() {
        return this[S];
    }

    add(s) {
        this[S] = addState(this[S], s);
        return this;
    }

    remove(s) {
        this[S] = removeState(this[S], s);
        return this;
    }

    has(s) {
        return hasState(this[S], s);
    }
}

function addState(context, state) {
    return context | state;
}

function removeState(context, state) {
    return (context | state) ^ state;
}

function hasState(context, state) {
    return (context & state) == state;
}

exports.State = State;
