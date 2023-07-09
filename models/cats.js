const cats = [
    { name: "Salem", color: "black", lovesLasagna: false },
    { name: "Garfield", color: "orange", lovesLasagna: true },
    { name: "Heathcliff", color: "orange", lovesLasagna: false },
];
  
module.exports = {
     getAll: function() {
       return cats;
     },
     getOne(id) {
        return cats.find((cat) => cat)
     }
   };