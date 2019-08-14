import Vue from 'vue'

function create(component, props) {
    console.log(props)
    const vm = new Vue({
        render(h) {
            return h(component, {
                props
            })
        }
    }).$mount();

    document.body.appendChild(vm.$el)

    const instance = vm.$children[0];
    instance.remove = function () {
        // console.log(a.$parent.$el)
        vm.$el.remove()
        vm.$destroy();
    }
    return instance
}

export default create