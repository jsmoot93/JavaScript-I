const parent = {
  "name": "Susan",
  "age": 70,
  speak: "My name is Susan",
  child: {
    "name": "George",
    "age": 50,
    speak: "My name is George",
    grandchild: {
      "name": "Sam",
      "age": 30,
      speak: "My name is Sam"
        }
    }
}

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.child.age);

// Log the name and age of the grandchild
console.log(parent.child.grandchild.age);

// Have the parent speak
console.log(parent.speak);

// Have the child speak
console.log(parent.child.speak);

// Have the grandchild speak
console.log(parent.child.grandchild.speak);