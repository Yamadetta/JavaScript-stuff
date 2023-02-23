let obj = {
  a: 1,
  b: 2,
  c: () => {
    console.log("123");
  },
  d: {
    item: "john",
    item2: () => {
      console.log("300");
    },
    arr: [
      () => {
        console.log("Круто");
      },
    ],
  },
};

// call the main function
let newObj = returnObjCopy(obj);

// testing
obj.d.item2 = "123";

console.log(newObj);
newObj.d.item2();

// Main function
function returnObjCopy(obj) {
  let object = {};
  for (const key in obj) {
    const value = obj[key];
    object[key] = controller(value);
  }

  return object;
}

function controller(value) {
  if (typeof value == "object") {
    if (Array.isArray(value)) {
      return returnArrayCopy(value);
    } else {
      return returnObjCopy(value);
    }
  } else {
    return value;
  }
}

function returnArrayCopy(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    array[i] = controller(item);
  }

  return array;
}
