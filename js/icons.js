
window.onload = function(){

    let button=  document.getElementById("generate-btn");
    let main= document.getElementById("main");
    let newCharacter= new Character();
    console.log(newCharacter);
    button.addEventListener("click", ()=>{
        location.reload();
    })


// let hero = document.getElementsByClassName("hero");
// console.log('hero', hero)
// let i=0;
// for(element of hero){


//     let values=element.querySelectorAll("p");
//     values[0].innerHTML=newCharacter.attributes[i].name;
//     values[1].innerHTML=newCharacter.attributes[i].level;
//     i++;
// }

let infos=document.getElementById('infos');

function display(object){

    for (const [key, value] of Object.entries(object)) {
     
        if(typeof value=== 'object') {
        //     display(value)
        //    infos.innerHTML += `<p>${value.name}: ${value.level}</p>`
        }
       else if(typeof value==='string'|| typeof value ==='number'){
          infos.innerHTML += `<p>${key}: ${value}</p>`
       }
    
   
    
        // console.log(`${key}: ${value}`);
      }
}
display(newCharacter)
infos.innerHTML+="<h3>attributs</h3>"
newCharacter.attributes.forEach(value=>infos.innerHTML += `<p>${value.name}: ${value.level}</p>`)
infos.innerHTML+= "<h3>Pouvoirs</h3>"
newCharacter.powers.forEach(value=>infos.innerHTML += `<p>${value.name}: ${value.level}</p>`)
infos.innerHTML += "<h3>origine:</h3>"
display(newCharacter.origin)
infos.innerHTML += "<h3>Spécialités:</h3>"

newCharacter.specialities.forEach(value=>infos.innerHTML += `<p>${value}</p>`)


}