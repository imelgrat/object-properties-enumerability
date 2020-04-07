# Object properties enumerability

ECMAScript 5 introduced a new mechanism for managing and configuring what can be done to an object's properties. New **.defineProperty()** and **.defineProperties()** methods were implemented. These methods let you control the behavior of each property.

As you can most certainly guess, they define new object properties, just like the dot-notation property definition with one big difference: these methods let you control the behavior of each property.

By "behavior" I mean the ability to change the value of the property after it's been created (_writable_), the ability to control the available features of the property once defined (_configurable_). Last, but most relevant to this article, ES5 added the ability to determine whether the property will be _enumerable_ (shown in the `for..in` loop).

Read more at: https://imelgrat.me/javascript/object-properties-iteration-in-javascript/
