

function laskeArvosana() {
  let grade = document.getElementById('grade').value;
    if (grade < 0 || grade > 100)
         console.log(grade = 'Virheellinen numero, syötä numero 0-100');
    if (grade === 100) 
        console.log("erinomainen")
    else if(grade >= 90) 
        console.log(grade = 'erinomainen')
      else if(grade >= 80) 
        console.log(grade = 'hyvä');
        else if(grade >= 70) 
            console.log(grade = 'tyydyttävä')
          else if(grade >= 60) 
            console.log(grade = 'välttävä')
            else if(grade <= 60) 
                console.log(grade = 'hylätty')
              document.getElementById('tulos').innerHTML = `Tulos ${grade}`;
}

