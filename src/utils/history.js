const MHistory = {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$routerHistory', {
            value: MHistory
        })
    },
    _history: [],
    push(path) {
        this._history.push(path)
        console.log(this._history)
    },
    pop() {
        this._history.pop()
    },
    canBack() {
        return this._history.length > 1
    }
}

export default MHistory