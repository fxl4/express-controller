const dogs = [
    { name: "Kora", color: "tan", lovesWalks: true },
    { name: "Freckles", color: "multi", lovesWalks: true },
    { name: "Lamar", color: "black", lovesWalks: false },
];
  
module.exports = {
     getAll: function() {
       return dogs;
     },
     getOne(id) {
        return cats.find((dog) => dog)
     }
   };