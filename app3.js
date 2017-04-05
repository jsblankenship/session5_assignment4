// JavaScript Document

var employee = {	firstName:{
						fname: ["jeff" , "john" , "jim" ]},
					age:{
						age1:["42" , "41", "40"]},
					salary:{
						sal:["54000" , "52000" , "50000"]},
					address:{
						city:{
							cit:["Charleston" , "South Charleston" , "North Charleston"]},
						state:{
							sta:["West Virginia" , "WV" , "West VA"]},
						pincode:{
							pc:["25301", "25302" , "25303"]},
					},
}

console.log(employee.firstName.fname[0])
console.log(employee.age.age1[0])
console.log(employee.salary.sal[1])
console.log(employee.address.city.cit[2])
console.log(employee.address.state.sta[2])
console.log(employee.address.pincode.pc[0])