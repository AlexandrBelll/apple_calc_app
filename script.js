'use strict'
const calcApp = () => {

    let renderPlace = document.querySelector("#render-place");

    let clear = document.querySelector('#clear');
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let num3 = document.querySelector('#num3');
    let num4 = document.querySelector('#num4');
    let num5 = document.querySelector('#num5');
    let num6 = document.querySelector('#num6');
    let num7 = document.querySelector('#num7');
    let num8 = document.querySelector('#num8');
    let num9 = document.querySelector('#num9');
    let num0 = document.querySelector('#num0');
    let dot = document.querySelector('#dot');

    let multiply = document.querySelector('#multiply');
    let divide = document.querySelector('#divide');
    let plus = document.querySelector('#plus');
    let minus = document.querySelector('#minus');

    let sign = document.querySelector('#sign');
    let percent = document.querySelector('#percent')

    let equal = document.querySelector('#equal');

    const state = {
        a: '',
        b: '',
        operation: '',
        multiply() {
            return `${this.a * this.b}`;
        },
        divide() {
            return `${this.a / this.b}`;
        },
        plus() {
            return `${this.a - (-this.b)}`;
        },
        minus() {
            return `${this.a - this.b}`;
        },
    }

    clear.addEventListener('click', () => {
        renderPlace.value = '';
        state.a = '';
    });

    sign.addEventListener('click', () => {
        if (state.operation == '') {
            state.a *= -1
            renderPlace.value = state.a;
        } else {
            state.b *= -1
            renderPlace.value = state.b;
        }
    });

    percent.addEventListener('click', () => {
        if (state.operation == '') {
            state.a /= 100;
            renderPlace.value = state.a;
        } else {
            if (state.operation == 'x') {
                state.b /= 100;
                state.a = state.multiply();
            }
            if (state.operation == '/') {
                state.b /= 100;
                state.a = state.divide();
            }
            if (state.operation == '+') {
                state.b = state.a * state.b / 100;
                state.a = state.plus();
            }
            if (state.operation == '-') {
                state.b = state.a * state.b / 100;
                state.a = state.minus();
            }
            state.b = '',
            state.operation = '';
            renderPlace.value = state.a;
        }
    });

    [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0, dot].forEach(node => {
        node.addEventListener('click', event => {
            let arg = event.target.innerText;
            if (state.operation == '') {
                state.a += state.a.includes('.') ? (arg == '.' ? '' : arg) : arg;
                renderPlace.value = +state.a;
                console.log(renderPlace.value);
            } else {
                state.b += state.b.includes('.') ? (arg == '.' ? '' : arg) : arg;
                renderPlace.value = +state.b;
            }

            
        });

    });

    [multiply, divide, plus, minus].forEach(node => {
        node.addEventListener('click', event => {
                state.operation =  event.target.innerText;
        });

    });

    equal.addEventListener('click', () => {
        if (state.operation == 'x') state.a = state.multiply();
        if (state.operation == '/') state.a = state.divide();
        if (state.operation == '+') state.a = state.plus();
        if (state.operation == '-') state.a = state.minus();
        state.b = '',
        state.operation = '';
        renderPlace.value = state.a;
    });

}

calcApp();