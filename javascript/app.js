

let animal= prompt ("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda");

// sistema IF ELSE IF ELSE 

/*
if (animal == 1) {
    console.log ('choose the Dog');
}
else if (animal == 2) {
     console.log ('choose the Cat');
}
else if (animal == 3) {
    console.log ('choose the Goldfish');
}
else if (animal == 4) {
    console.log ('choose the Monkey');
}
else if (animal == 5) {
    console.log ('choose the Panda');
}
else {
    console.log ('Animal not found')
}
*/

// sistema switch
/*
switch (animal) {
case '1': 
       animal = "choose the Dog";
    break;
case '2':
       animal = "choose the Cat";
    break;
case '3':
    animal = "choose the Goldfish";
    break;
case '4':
    animal = "choose the Monkey";
    break;
case '5':
    animal = "choose the Panda";
    break;
default:
    animal = "animal not found";               
}
console.log (animal);
*/

// sistema ternario

puppies = animal == 1 ? "choose the Dog" : 
( animal == 2 ? "choose the Cat" : 
(animal == 3 ? "choose the Goldfish": 
(animal == 4 ? "choose the Monkey" : 
(animal == 5 ? "choose the Panda": "animal not found"))));
console.log (puppies);

