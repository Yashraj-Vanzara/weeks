// type and interface
type chaiorder = {
  type: string;
  sugar: number;
  strong: boolean;
};
function makechai(order: chaiorder) {
  console.log(order);
}
function serve(order: chaiorder) {
  console.log(order);
}

type tearecipe={
    water:number;
    milk:number
}

class masalachai implements tearecipe{
    water= 100;
    milk=50;
}

interface teatypee{
    type:'masala'|'ginger'
}

class tt implements teatypee{
    type:'masala'|'ginger'='masala'
}

// for class use interface

// type Responsee={ok:true}|{ok:false}

// class myres implements Responsee{
//     ok:boolean=true
// }

// union |

type teatpe="masala"|'ginger'

// intersection

type basechai={tealeaves:number}
type extraingi={masala:number}

type masalachi=basechai & extraingi

const cupss:masalachi={
    tealeaves:5,
    masala:5
}
 type config={
    readonly appname:string,
    version:number
 }

 const cfg:config={
    appname:'hello',
    version:1

 }