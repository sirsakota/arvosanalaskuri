
let grade = 0

function laskeArvosana(grade) {
    if (grade < 0 || grade > 100)
         return('Virheellinen numero, syötä numero 0-100');
    if (grade === 100) 
        return("erinomainen")
    else if(grade >= 90) 
        return(grade = 'erinomainen')
      else if(grade >= 80) 
        return(grade = 'hyvä');
        else if(grade >= 70) 
            return(grade = 'tyydyttävä')
          else if(grade >= 60) 
            return(grade = 'välttävä')
            else if(grade <= 60) 
                return(grade = 'hylätty')
}
