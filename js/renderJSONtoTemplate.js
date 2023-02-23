function renderJSONToTemplate(json, template, tree = "") {
  if (typeof json !== "object" || typeof template !== "string") {
    throw new Error("Invalid input");
  }

  Object.keys(json).forEach(function (key) {
    let value = json[key];
    if (typeof value === "object") {
      template = renderJSONToTemplate(value, template, tree + key + ".");
    } else {
      template = template.replace(
        new RegExp(`{{ ${tree}${key} }}`, "g"),
        value
      );
    }
  });

  return template;
}

let json = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: {
      num: 111,
    },
  },
};

let template =
  /*html*/
  `
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>Address: {{ address.street }}, {{ address.city }}, {{ address.state }}</p>
  <p>Zip: {{ address.zip.num }}</p>
`;

let renderedTemplate = renderJSONToTemplate(json, template);

console.log(renderedTemplate);
