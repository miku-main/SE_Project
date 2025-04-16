export const listOfCountries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
export const listOfIngredients = [
    "Tomatoes",
    "Onions",
    "Garlic",
    "Olive oil",
    "Chicken breast",
    "Ground beef",
    "Salt",
    "Pepper",
    "Carrots",
    "Spinach",
    "Lettuce",
    "Cheddar cheese",
    "Mozzarella cheese",
    "Avocado",
    "Cucumber",
    "Rice",
    "Pasta",
    "Eggs",
    "Flour",
    "Baking powder",
    "Sugar",
    "Honey",
    "Lemon",
    "Lime",
    "Ginger",
    "Basil",
    "Cilantro",
    "Cumin",
    "Paprika",
    "Soy sauce",
    "Tomato paste",
    "Coconut milk",
    "Chili flakes",
    "Peas",
    "Mushrooms",
    "Zucchini",
    "Bell peppers",
    "Sweet potatoes",
    "Potatoes",
    "Almonds",
    "Cashews",
    "Walnuts",
    "Olives",
    "Parmesan cheese",
    "Yogurt",
    "Butter",
    "Milk",
    "Cream"
]

export const postData = [
  { 
    id: 1, 
    username: "randomUser1", 
    likes: 10, 
    description: "A classic Italian dish made with layers of pasta, meat sauce, and melted cheese.", 
    title: "Lasagna", 
    followed: true,
    ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Ricotta cheese", "Mozzarella cheese", "Parmesan cheese", "Egg", "Garlic", "Onion", "Olive oil"],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Cook lasagna noodles according to package instructions.",
      "In a pan, sauté garlic and onion in olive oil until softened.",
      "Add ground beef and cook until browned, then add tomato sauce.",
      "Layer lasagna noodles, beef sauce, and cheeses in a baking dish.",
      "Repeat layers and top with mozzarella and Parmesan.",
      "Cover with foil and bake for 25 minutes, uncover and bake for an additional 25 minutes."
    ],
    country: "Italy"
  },
  { 
    id: 2, 
    username: "tech_guy42", 
    likes: 25, 
    description: "A crispy, golden fried chicken served with a side of creamy mashed potatoes.", 
    title: "Fried Chicken", 
    followed: false,
    ingredients: ["Chicken pieces", "Flour", "Cornstarch", "Baking powder", "Salt", "Black pepper", "Garlic powder", "Onion powder", "Egg", "Buttermilk", "Vegetable oil"],
    steps: [
      "In a bowl, combine flour, cornstarch, baking powder, salt, pepper, garlic powder, and onion powder.",
      "Dip chicken pieces in buttermilk and then dredge in the flour mixture.",
      "Heat oil in a large pan over medium-high heat.",
      "Fry the chicken for 10-12 minutes, turning until golden brown and cooked through.",
      "Serve with mashed potatoes."
    ],
    country: "United States"
  },
  { 
    id: 3, 
    username: "bookworm99", 
    likes: 34, 
    description: "Thinly sliced raw fish served with soy sauce, wasabi, and pickled ginger.", 
    title: "Sushi", 
    followed: true,
    ingredients: ["Sushi rice", "Nori sheets", "Fresh fish (salmon, tuna, etc.)", "Soy sauce", "Wasabi", "Pickled ginger", "Rice vinegar", "Sugar", "Salt"],
    steps: [
      "Cook sushi rice and mix with rice vinegar, sugar, and salt.",
      "Slice fish into thin pieces.",
      "Place a nori sheet on a bamboo sushi mat.",
      "Spread a thin layer of rice on the nori, leaving an inch at the top.",
      "Place fish slices in the center of the rice.",
      "Roll the sushi tightly using the mat, then slice into bite-sized pieces.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    country: "Japan"
  },
  { 
    id: 4, 
    username: "coffee_lover", 
    likes: 50, 
    description: "Soft and fluffy bread rolls, often served with butter or jam.", 
    title: "Dinner Rolls", 
    followed: false,
    ingredients: ["Flour", "Yeast", "Sugar", "Butter", "Milk", "Egg", "Salt", "Water"],
    steps: [
      "Mix yeast, sugar, and warm water, then let sit for 5-10 minutes.",
      "In a separate bowl, combine flour, salt, and melted butter.",
      "Add the yeast mixture and knead until smooth.",
      "Cover and let rise for 1 hour or until doubled in size.",
      "Punch the dough down and form into small rolls.",
      "Place on a baking sheet and let rise again for 30 minutes.",
      "Bake at 375°F (190°C) for 15-20 minutes, until golden brown."
    ],
    country: "United States"
  },
  { 
    id: 5, 
    username: "guitarhero22", 
    likes: 12, 
    description: "A creamy soup made with pureed potatoes and leeks, served warm.", 
    title: "Potato Leek Soup", 
    followed: true,
    ingredients: ["Potatoes", "Leeks", "Onion", "Garlic", "Butter", "Vegetable broth", "Heavy cream", "Salt", "Pepper"],
    steps: [
      "In a large pot, sauté onions, leeks, and garlic in butter until softened.",
      "Add diced potatoes and vegetable broth, bring to a boil.",
      "Reduce heat and simmer for 20-25 minutes until potatoes are tender.",
      "Blend the soup with an immersion blender until smooth.",
      "Stir in heavy cream and season with salt and pepper.",
      "Serve warm."
    ],
    country: "France"
  },
  { 
    id: 6, 
    username: "nature_lover", 
    likes: 45, 
    description: "Juicy steak grilled to perfection, served with your choice of sides.", 
    title: "Grilled Steak", 
    followed: false,
    ingredients: ["Steak (ribeye, sirloin, etc.)", "Olive oil", "Salt", "Pepper", "Garlic", "Rosemary"],
    steps: [
      "Preheat your grill to high heat.",
      "Brush the steak with olive oil and season generously with salt and pepper.",
      "Grill the steak for 4-6 minutes per side, depending on desired doneness.",
      "Let the steak rest for 5 minutes before serving.",
      "Serve with your choice of sides, such as roasted vegetables or mashed potatoes."
    ],
    country: "Argentina"
  },
  { 
    id: 7, 
    username: "city_slicker", 
    likes: 18, 
    description: "A rich and creamy dessert made from chocolate, eggs, and cream, served chilled.", 
    title: "Chocolate Mousse", 
    followed: true,
    ingredients: ["Dark chocolate", "Eggs", "Heavy cream", "Sugar", "Vanilla extract"],
    steps: [
      "Melt dark chocolate in a heatproof bowl over simmering water.",
      "Whisk egg yolks and sugar together until pale.",
      "Fold the melted chocolate into the egg mixture.",
      "Whip the heavy cream to stiff peaks and fold into the chocolate mixture.",
      "Chill for at least 2 hours before serving."
    ],
    country: "France"
  },
  { 
    id: 8, 
    username: "running_man", 
    likes: 21, 
    description: "A fresh mix of lettuce, tomatoes, cucumbers, and a tangy vinaigrette dressing.", 
    title: "Caesar Salad", 
    followed: false,
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Olive oil", "Vinegar", "Garlic", "Salt", "Pepper", "Parmesan cheese", "Croutons"],
    steps: [
      "Chop lettuce, tomatoes, and cucumbers.",
      "In a bowl, whisk olive oil, vinegar, garlic, salt, and pepper to make the dressing.",
      "Toss the chopped vegetables with the dressing.",
      "Top with Parmesan cheese and croutons."
    ],
    country: "United States"
  },
  { 
    id: 9, 
    username: "art_fanatic", 
    likes: 27, 
    description: "A flavorful curry dish made with marinated chicken, spices, and a creamy sauce.", 
    title: "Butter Chicken", 
    followed: true,
    ingredients: ["Chicken", "Butter", "Cream", "Tomato puree", "Garlic", "Ginger", "Cumin", "Coriander", "Turmeric", "Cilantro"],
    steps: [
      "Marinate chicken with yogurt, garlic, ginger, and spices for 30 minutes.",
      "Cook the chicken in a pan with butter until browned.",
      "Add tomato puree, spices, and cream, and simmer for 20 minutes.",
      "Garnish with cilantro and serve with naan or rice."
    ],
    country: "India"
  },
  { 
    id: 10, 
    username: "traveller88", 
    likes: 32, 
    description: "Soft noodles stir-fried with vegetables, soy sauce, and your choice of protein.", 
    title: "Chow Mein", 
    followed: false,
    ingredients: ["Noodles", "Soy sauce", "Vegetables (carrots, bell peppers, cabbage, etc.)", "Ginger", "Garlic", "Tofu or chicken", "Vegetable oil"],
    steps: [
      "Cook noodles according to package instructions.",
      "Stir-fry vegetables, ginger, and garlic in vegetable oil.",
      "Add tofu or chicken and cook until done.",
      "Add cooked noodles and soy sauce, then stir-fry everything together for 2-3 minutes."
    ],
    country: "China"
  },
  { 
    id: 11, 
    username: "gamer_x", 
    likes: 13, 
    description: "Fluffy pancakes topped with syrup, butter, and a sprinkle of powdered sugar.", 
    title: "Pancakes", 
    followed: true,
    ingredients: ["Flour", "Baking powder", "Sugar", "Egg", "Milk", "Butter", "Vanilla extract", "Salt"],
    steps: [
      "In a bowl, mix flour, baking powder, sugar, and salt.",
      "Whisk in egg, milk, melted butter, and vanilla extract.",
      "Heat a griddle or pan over medium heat and grease with butter.",
      "Pour batter onto the griddle and cook until bubbles form, then flip and cook until golden brown."
    ],
    country: "United States"
  },
  { 
    id: 12, 
    username: "movie_buff", 
    likes: 40, 
    description: "Thinly sliced cured meats, cheeses, olives, and bread served as an appetizer.", 
    title: "Antipasto", 
    followed: false,
    ingredients: ["Cured meats", "Cheeses", "Olives", "Bread", "Olive oil", "Balsamic vinegar"],
    steps: [
      "Arrange cured meats, cheeses, olives, and bread on a platter.",
      "Drizzle with olive oil and balsamic vinegar.",
      "Serve as an appetizer."
    ],
    country: "Italy"
  }
];

  