import { orderByProps } from "../task_1"



test ("Сортровка массива выполнена правильно", () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const props = ["name", "level"];
    const arrOfKeys = [
        {key: "name", value: "мечник"}, 
        {key: "level", value: 2}, 
        {key: "attack", value: 80}, 
        {key: "defence", value: 40}, 
        {key: "health", value: 10} 
      ]

    expect(orderByProps(obj, props)).toEqual(arrOfKeys);
})