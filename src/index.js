const appID = document.getElementById("appID");
const appNonEnumerable = document.getElementById("appNonEnumerable");
const appPropertyList = document.getElementById("appPropertyList");

// Create an object with a, "id" property
const example = {
  id: 1,
  foo: "bar"
};
// Show property descriptor -> enumerable = true
appID.insertAdjacentHTML(
  "beforeend",
  JSON.stringify(Object.getOwnPropertyDescriptor(example, "id")) + "<br>"
);

// Add a property and set the enumerable flag to false
Object.defineProperty(example, "hidden", {
  value: "This will not show in loops",
  configurable: true,
  writable: false,
  enumerable: false
});

// Show property descriptor  -> enumerable = false
appNonEnumerable.insertAdjacentHTML(
  "beforeend",
  JSON.stringify(Object.getOwnPropertyDescriptor(example, "hidden"))
);

for (var property in example) {
  appPropertyList.insertAdjacentHTML(
    "beforeend",
    "Property: " + property + "<br>"
  );
}
