function compareJSON(obj1, obj2) {
    // Convert objects to JSON strings
    let jsonString1 = JSON.stringify(obj1);
    let jsonString2 = JSON.stringify(obj2);
  
    // Sort the JSON strings
    jsonString1 = jsonString1.split('').sort().join('');
    jsonString2 = jsonString2.split('').sort().join('');
  
    // Compare the sorted JSON strings
    return jsonString1 === jsonString2;
  }
  
  let obj1 = {name: "person 1", age: 5};
  let obj2 = {age: 5, name: "person 1"};
  
  let result = compareJSON(obj1, obj2);
  
  if (result) {
    console.log("The JSON objects are equal.");
  } else {
    console.log("The JSON objects are not equal.");
  }
  