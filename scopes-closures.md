# Scopes and Closures


### Closures
They are functions with 'memory' about the environment where they were created, simply known as: a Closure.  
This is because the function inspects it's environment and closes over the variables that it needs to remember for future use. The references to the variables are closed in a special data structure that can only be accessed by the Javascript runtime itself.

### Modules and encapsulation
Take a look at this ES5 code:
```javascript
function createHero(heroName) {
 
    var name = heroName;
 
    return  {
        fly: function(destination) {
          console.log(name + ' flying to ' + destination);
        }
    }; 
}
```
When the `createHero` function returns, noone else will ever be able to directly access `name`, except via fly.  
The function `createHero` is said to a be a Javascript **encapsulated module**, with closed 'private' member variables and a 'public' interface returned as an object with functions.