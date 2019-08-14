import Vue from 'vue';
import MToast from '../components/MToast'

MToast.getInstance = () => {
    const mToastVm = new Vue({
        render(h) {
            return h(MToast)
        }
    }).$mount()

    document.body.appendChild(mToastVm.$el);

    const mToast = mToastVm.$children[0];
    console.log(mToastVm.$children[0])
    console.log( MToast )

    return mToast
}

// let msg = null;

// function getInstance() {
// msg = msg || MToast.getInstance();
//     return msg
// }

export default MToast.getInstance().add