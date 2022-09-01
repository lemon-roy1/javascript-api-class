const student = {
    name: 'kadom ali',
    manay : 50000,
    study : 'math',
    subjects: ['calculus', 'algeber','geonetry'],
    exam:function(){
         return this.name +'is participating in an exam'

    },
    // const output =student.exam()
    // console.log(output)

    improveExem :function (subject){
        this.exam();
        return `${this.name} is taking improvenent exam on ${subject}`

    },
    // const reExem = student.improveExem('alom caca');
    // console.log(reExem)      
    teratDay: function(amont,tipes){
        this.manay=this.manay - amont -tipes ;
        return this.manay
    }
    
}
 const reming =student.teratDay(500,100);
//  console.log(reming)
 const dolareming =student.teratDay(1000,300);
 console.log(dolareming)
 