let normal= new RegExp(/hi/);

let begin = new RegExp(/^hi/);

let end = new RegExp(/hi$/);

let beginEnd = new RegExp(/^hi$/);


console.log(normal.test('hi'));

console.log(normal.test('voiture'));

console.log(begin.test('hi w'));

console.log(begin.test('w hi'));

console.log(end.test('ersd hi'));

console.log(end.test('hi w'));

console.log(beginEnd.test('hi w'));

console.log(beginEnd.test('fcgv hi'));

console.log(beginEnd.test('vggvg hi sffe'));