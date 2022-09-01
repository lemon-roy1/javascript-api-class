// ueas player
const player =  {};
player.name ='Lemon Roy';
player.specilty ='batsman'
player.bat = function(){
    console.log('swring your bat');
}

// console.log(player);
// player.bat()
// and not uesr
const atal = Object.create(player);
console.log(atal.name)


class parson{
    name = 'shuvo roy';
    address = 'kocu bare';
    constructor(age){
        this.age = age;
    }
}
const parson1 = new parson(54);
console.log(parson1);