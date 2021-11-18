
let ageCal=(name, old, profession=student, skill, fName, mName, member, hobby, color, dream)=>{
    let identitty = (`This is ${name}. i am ${old}  years old. I am a ${profession}. I love ${skill} My father name ${fName}. My mother name is ${mName}. There are ${member} member's in my family. My hobby is ${hobby}. My favorite color ${color}. I wanna be ${dream} person. every people pray for me.`);
    return identitty
}
 let shamim= ageCal('shamim', 26, 'government job holder', 'Javascript', 'Late Nur Mahmud hossain', 'Laily Begum', 'Three', 'traveling', 'Black', 'honnest' )
 console.log(shamim);