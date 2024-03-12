/*Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/


let materias1 = ['Math', 'English', 'Programming'];
let materias2 = ['Geography', 'Spanish', 'Programming'];

let materiasComunes = materias1.filter(course => materias2.includes(course));

if (materiasComunes.length > 0) {
  console.log('Materias Comunes:', materiasComunes);
} else {
  console.log('No hay materias en común');
}