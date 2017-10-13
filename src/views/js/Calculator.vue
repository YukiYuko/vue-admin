<template>
    <div class="calculator">
        <button @click="changeModeEvent" class="toggle-button">
            <p v-if="changeMode">Show Advanced Mode &nbsp; &nbsp; &#9864;</p>
            <p v-else>Show Basic Mode &nbsp; &nbsp; &#9862;</p>
        </button>
        <div class="results">
            <input class="input" v-model="current" />
        </div>
        <div class="mode" v-if="changeMode">
            <button class="button" @click="press">7</button>
            <button class="button" @click="press">8</button>
            <button class="button" @click="press">9</button>
            <button class="button" @click="press">*</button>
            <button class="button" @click="press">&#60;=</button>
            <button class="button" @click="press">C</button>
            <button class="button" @click="press">4</button>
            <button class="button" @click="press($event)">5</button>
            <button class="button" @click="press">6</button>
            <button class="button" @click="press">/</button>
            <button class="button" @click="press">(</button>
            <button class="button" @click="press">)</button>
            <button class="button" @click="press">1</button>
            <button class="button" @click="press">2</button>
            <button class="button" @click="press">3</button>
            <button class="button" @click="press">-</button>
            <button class="button" @click="press">x ²</button>
            <button class="button" @click="press">±</button>
            <button class="button" @click="press">0</button>
            <button class="button" @click="press">.</button>
            <button class="button" @click="press">%</button>
            <button class="button" @click="press">+</button>
            <button class="button equal-sign" @click="press">=</button>
        </div>
        <div class="mode" v-else>
            <button class="button" @click="press">sin</button>
            <button class="button" @click="press">cos</button>
            <button class="button" @click="press">tan</button>
            <button class="button" @click="press">x^</button>
            <button class="button" @click="press">&#60;=</button>
            <button class="button" @click="press">C</button>
            <button class="button" @click="press">log</button>
            <button class="button" @click="press">ln</button>
            <button class="button" @click="press">e</button>
            <button class="button" @click="press">∘</button>
            <button class="button" @click="press">rad</button>
            <button class="button" @click="press">√</button>
            <button class="button" @click="press">7</button>
            <button class="button" @click="press">8 </button>
            <button class="button" @click="press">9</button>
            <button class="button" @click="press">/</button>
            <button class="button" @click="press">x ²</button>
            <button class="button" @click="press">x !</button>
            <button class="button" @click="press">4</button>
            <button class="button" @click="press">5</button>
            <button class="button" @click="press">6</button>
            <button class="button" @click="press">*</button>
            <button class="button" @click="press">(</button>
            <button class="button" @click="press">)</button>
            <button class="button" @click="press">1</button>
            <button class="button" @click="press">2</button>
            <button class="button" @click="press">3</button>
            <button class="button" @click="press">-</button>
            <button class="button" @click="press">%</button>
            <button class="button" @click="press">±</button>
            <button class="button" @click="press">0</button>
            <button class="button" @click="press">.</button>
            <button class="button" @click="press">&#x003C0;</button>
            <button class="button" @click="press">+</button>
            <button class="button equal-sign" @click="press">=</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            changeMode: true
        }
    },
    components: {

    },
    computed: {

    },
    methods: {
        press(event) {
            // button点击事件对应的代码
            let me = this;
            let key = event.target.textContent;
            console.log(key);

            switch (key) {
                case '=':
                    if ((me.current).indexOf('^') > -1) {
                        let base = (me.current).slice(0, (me.current).indexOf('^'))
                        let exponent = (me.current).slice((me.current).indexOf('^') + 1)
                        me.current = eval('Math.pow(' + base + ',' + exponent + ')')
                    } else {
                        me.current = eval(me.current)
                    }
                    break;
                case 'C':
                    me.current = '';
                    break;
                case '*':
                    me.current += '*';
                    break;

                case '/':
                    me.current += '/';
                    break;

                case '+':
                    me.current += '+';
                    break;

                case '-':
                    me.current += '-';
                    break;

                case '±':
                    if ((me.current).charAt(0) === '-') {
                        me.current = (me.current).slice(1)
                    } else {
                        me.current = '-' + me.current
                    }
                    break;

                case '<=':
                    me.current = me.current.substring(0, me.current.length - 1);
                    break;

                case '%':
                    me.current = me.current / 100;
                    break;
                case 'π':
                    me.current = me.current * Math.PI;
                    break;
                case 'x ²':
                    me.current = eval(me.current * me.current);
                    break;
                case '√':
                    me.current = Math.sqrt(me.current);
                    break;
                case 'sin':
                    me.current = Math.sin(me.current);
                    break;
                case 'cos':
                    me.current = Math.cos(me.current);
                    break;
                case 'tan':
                    me.current = Math.tan(me.current);
                    break;
                case 'log':
                    me.current = Math.log10(me.current);
                    break;
                case 'ln':
                    me.current = Math.log(me.current);
                    break;
                case 'x^':
                    me.current += 'x^';
                    break;
                case 'x !':
                    let number = 1
                    if (me.current === 0) {
                        me.current = '1'
                    } else if (me.current < 0) {
                        me.current = NaN
                    } else {
                        let number = 1
                        for (let i = me.current; i > 0; i--) {
                            number *= i
                        }
                        me.current = number
                    }
                    break;
                case 'e':
                    me.current = Math.exp(me.current);
                    break;
                case 'rad':
                    me.current = me.current * (Math.PI / 180);
                    break;
                case '∘':
                    me.current = me.current * (180 / Math.PI);
                    break;
                case 'e':
                    me.current = Math.exp(me.current);
                    break;
                default:
                    me.current += key;
                    break;
            }
        },
        changeModeEvent() {
            // 改变changeMode对应的代码
            this.changeMode = !this.changeMode;
        }
    }
}
</script>
<style lang="less" scoped>
.calculator {
    width: 440px;
    padding: 20px;
    border-radius: 5px;
    margin: 20px auto;
    font-size: 16px;
    background-color: hsl(0, 0%, 20%);
}

.input {
    width: 420px;
    height: 50px;
    border-radius: 0px;
    border: 1px solid hsl(0, 0%, 0%);
    background-color: #333333;
    color: #d9d9d9;
    padding: 0 5px 0 5px;
    margin: 0 0px 10px 0px;
    font-size: 30px;
}

.input:focus,
.input:active {
    border-color: #03a9f4;
    box-shadow: 0 0 4px #03A9F4;
    outline: none 0;
}

.button {
    margin: 3px;
    width: 63px;
    border: 1px solid hsl(0, 0%, 5%);
    height: 30px;
    border-radius: 4px;
    color: hsl(0, 0%, 85%);
    background-color: hsl(0, 0%, 10%);
    cursor: pointer;
    outline: none;
}

.mode {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.equal-sign {
    background-color: hsl(120, 100%, 25%);
    width: 133px;
}

.toggle-button {
    border: none;
    background-color: hsl(0, 0%, 20%);
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    color: #fff;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, .35);
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
}

p {
    margin-top: 0;
}

button::-moz-focus-inner {
    border-color: transparent;
}
</style>
