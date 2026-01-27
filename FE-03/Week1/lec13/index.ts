// ! interface and genrics

// ! main goal of this is to give shape to object data

interface Chaai{
falvour:string
milk?:string
}

const s:Chaai={falvour:"masala"}
// !  To define interface of a functions
interface AddFn {
  (a: number, b: number): number;
}

// Usage:
const add: AddFn = (a, b) => a + b;

interface TeaMachine{
    start():void
    stop():void
}

const machine:TeaMachine={
    start(){

    },
    stop(){

    }
}

interface ChaiRatings{
    [flavor:string]: number;
}

const rrating:ChaiRatings={
masalachai:4.5
}
//! Extending interface
interface A{
    name:string
}
interface B{
    name:string
}

interface C extends A,B {}