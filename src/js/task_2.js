const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
  }

export function showAttack (...obj) {
    let skillArr = [];
    obj.forEach((element) => {
        let {id, name, icon, description = "Описание недоступно"} = element;
        skillArr.push({id: id, name: name, icon: icon, description: description});
    })

    return skillArr;
}

