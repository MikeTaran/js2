// создание объекта из 3-х объектов
const rooms = Object.assign({}, Array.from({length:3},_ => Object.assign({}, [{n:'room'}, {d: 'square'}, {c: true}])));