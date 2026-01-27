// ! OOPS concepts in TypeScript

class Chaii {
    flavour: string;
    price: number
    constructor(flavour?: string, price?: number) {
        this.flavour = flavour || "masala"
        this.price = price || 20
    }
}
const masalachai = new Chaii()
masalachai.flavour = "masala"
masalachai.price = 20



// ! Access Modifiers
class TeaA {
   public flavour: string="masala"  // default is public
   private price: number=20;
    protected size: string="medium"
}

class Cupp{
    readonly material:string="ceramic"
    constructor(material:string){
        this.material=material
    }
}

class ModernChai{
    private _flavour:string="masala"
    get flavour():string{
        return this._flavour
    }  
    set flavour(flavour:string){
        this._flavour=flavour
    } 
}
