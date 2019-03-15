function groupAnimals(animals) {
    var strcmp = new Intl.Collator(undefined, {numeric:true, sensitivity:'base'}).compare;
    for (var i=0; i<animals.length; i++) {
        for (var j=i+1; j<animals.length; j++) {
            check=strcmp(animals[i], animals[j]);;
            if (check==1) {
                var temp=animals[i];
                animals[i]=animals[j];
                animals[j]=temp;
            }
        }
    }
    
    var newAnimals=[];
    
    for (var i=0; i<animals.length; i++){
        
        var temp=[];
        var charHewan= animals[i][0];
        var hewan=animals[i];
             
        for(var j=animals.length-1; j>i; j--){
          if(charHewan===animals[j][0]){
            hewan=hewan+', '+animals[j]
            animals.splice(j,1);
          }
        }
        
        temp.push(hewan)
        newAnimals.push(temp)              
    }
    return newAnimals;                    
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
