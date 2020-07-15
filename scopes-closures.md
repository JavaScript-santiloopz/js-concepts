# Scopes and Closures


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