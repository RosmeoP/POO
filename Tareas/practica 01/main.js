  
class Animal {
            
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.vaccineList=[]
    }
  

    vaccine(){
        let vaccinem2={
            name: "m2"
        }
        if(this.vaccineList.length>0){
            if(this.vaccineList=="m2"){
                this.vaccineList.push("m3")
            }else{
                this.vaccineList.push(vaccinem2)
            }
        }else{
            this.vaccineList.push(vaccinem2)
        }
    }

    allvacine(){
       if(this.vaccineList.length>0){
        this.vaccineList.forEach((vaccinei=>{
            console.log(vaccinei)
        }))
       }
    }

    getName(){
      return this.name;
    }
    setName(name){
      return this.name=name;
    }
  
  }
  
  const animal1 = new Animal('Dog', 3);
  const animal2 = new Animal('Cat', 5);
            
  animal1.getName();
  animal2.getName(); 