const input = document.querySelector(`.user__name`);

const model = {
    _value: ``,
    get value() {
        return this._value;
    },
    set value(newValue) {
        this._value = newValue;
        input.value = newValue;
        console.log(`${this._value}`);
    }
}

const button = document.querySelector(`.user__random-name`);

button.addEventListener(
    `click`,
    () => model.value = `Пользователь №${Math.random().toFixed(3) * 1000}`
);

input.addEventListener(
    `input`,
    (evt) => model.value = evt.target.value
);