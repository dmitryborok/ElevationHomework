// Exercise 1, 2

let recipe = {
  "name": "Mashed Potatoes",
  "serves": 4,
  "calories": 250,
  "healthy": true, 
  "ingredients": [
    {
      "name": "water"
    },
    {
      "name": "potatoes",
      "count": 2
    },
    {
      "name": "butter",
      "count": 2,
      "unit": "tablespoons"
    },
    {
      "name": "salt",
      "count": 0.5,
      "unit": "teaspoon"
    },
    {
      "name": "pepper",
      "count": 0.25,
      "unit": "teaspoons"
    },
    {
      "name": "garlic powder",
      "count": 2,
      "unit": "teaspoons"
    }
  ],
  "directions": [
    "Cut potatoes into half inch thick slices",
    "Add potatoes to a pot and cover with an inch of water.",
    "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
    "Simmer for 20 minutes or until potatoes are fork tender.",
    "Drain water from potatoes, leaving the potatoes in the original pot.",
    "Add remaining ingredients to the pot with the potatoes.",
    "Mash potatoes until they reach the desired consistency.",
    "Serve immediately, or cover and refrigerate."
  ]
}

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"

// name
// weight: {Number, unit}
// lives: 
// endangered: true/false
// eats: []
// eaten_by: []
// appraisal: int

let animals = {
  "cow": {
      "science_name": "Bos taurus",
      "weight": {
          "figure": 500,
          "units": "kg",
      },
      "lives": ["Europe", "Asia", "America", "Australia", "Africa"],
      "endangered": false,
      "eats": [{"food": "grass", "percentage": 50 },
                {"food": "hay", "percentage": 50 }],
      "eaten_by": ["wolf", "man"],
      "appraisal": 5
  }, 

  "elephant": {
    "science_name": "Elephas maximus",
    "weight": {
        "figure": 5,
        "units": "tons",
    },
    "lives": ["Asia", "Africa"],
    "endangered": true,
    "eats": [{"food": "grass", "percentage": 25 },
             {"food": "hay", "percentage": 25 },
             {"food": "fruit", "percentage": 50 }],
    "eaten_by": [],
    "appraisal": 5
    }, 

    "wolf": {
        "science_name": "Canis lupus",
        "weight": {
            "figure": 100,
            "units": "kg",
        },
        "lives": ["Europe", "Asia", "America"],
        "endangered": false,
        "eats": [{"food": "cow", "percentage": 10 },
                {"food": "hare", "percentage": 50 },
                {"food": "goat", "percentage": 10 },
                {"food": "none", "percentage": 30 }],
        "eaten_by": [],
        "appraisal": 3
    }, 
        
    "squirrel":  {
        "science_name": "Sciuro sciuro",
        "weight": {
            "figure": 1,
            "units": "kg",
        },
        "lives": ["Europe", "Asia", "America"],
        "endangered": false,
        "eats": [{"food": "nuts", "percentage": 30 },
                {"food": "cones", "percentage": 40 },
                {"food": "berries", "percentage": 30 }],
        "eaten_by": ["owl"],
        "appraisal": 4
    },  
}
