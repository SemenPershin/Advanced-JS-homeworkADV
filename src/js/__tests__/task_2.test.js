import { showAttack } from "../task_2"

test("Массив из объектов коректный", () => {
    const skill1 = {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    }

    const skill2 = {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
    }

    const skillArr = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: "Описание недоступно"
        }
    ]

    expect(showAttack(skill1, skill2)).toEqual(skillArr);
})