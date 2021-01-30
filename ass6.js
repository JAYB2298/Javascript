class student{
    constructor(name,mass,height){
   this.fullname=name;
   this.Mass=mass;
   this.height=height;
}
  chkbmi(){
   this.bmi=this.Mass/this.height **2;
   console.log(`BMI of student ${this.fullname} is ${this.bmi}`);
  }
}

MArk = new student('Mark Miller',78,1.69);
console.log(MArk.chkbmi());
JOhn = new student('JOhn Smith',92,1.95)
console.log(JOhn.chkbmi());



