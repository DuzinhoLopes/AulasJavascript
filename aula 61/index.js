//funções geradoras

function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); //identifica que já acabou os valores.

function* geradora2(){
    let i = 0;

    while(true) {
        yield i;
        i++;
    } //dessa maneira o gerador é infinito.
}

console.log('');

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3() //dessa maneira, delegamos uma parte do trabalho para geradora 3
    yield 3
    yield 4
    yield 5
}


console.log('');

const g4 = geradora4();
for (let valor of g4){
    console.log(valor)
}

console.log('');

function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    }

    //caso colocassemos um return no lugar do yield, ele finalizaria a função geradora e não passaria para a próxima yield.

    yield function(){
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1(); //chamando as funções dentro da func geradora.
func2();