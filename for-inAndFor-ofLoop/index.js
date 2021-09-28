const person = {
    name: `Abdulvoris`,
    age: 20
}
for ( let key in person )
console.log(key, person[key]);

const colors = [ 'qora', 'malla', 'yashil', 'oq'];
for ( let index in colors)
    console.log(index, colors[index]);

    for ( let color of colors)
    console.log(color);