#! /usr/bin/env node

// Importing the 'inquirer' package for creating CLI prompts

import inquirer from "inquirer";

// Welcome message

console.log(`welcome to the recipe maker\nlets make cooking easy together!`)

// Prompting the user to choose the type of recipes


let take1 = await inquirer.prompt([
{
    name:"choice",
    message:"what type of recipes you want?",
    type:"list",
    choices:["baking resipes","simple cooking","refreshment drinks"]
}
])

// Handling user's choice for 'Baking Recipes'


if(take1.choice === "baking resipes"){

    let eat= await inquirer.prompt({
    name:"choose",
    message:"choose the recipe..",
    type:"list",
    choices:["vanilla cake","chocolate cake","brownies","pudding"]
});

    // Displaying the selected baking recipe and its ingredients/instructions


console.log(`recipe is givin below:-`);

if (eat.choose === "vanilla cake"){
   
// Displaying ingredients and instructions for vanilla cake

    console.log("\n*** Vanilla Cake Recipe ***\n \n Ingredients: \n")

    console.log("-2 cups all-purpose flour.\n - 1 1/2 cups granulated sugar.\n - 1/2 cup unsalted butter, softened.\n - 2 large eggs.\n - 1 cup milk.\n - 2 teaspoons vanilla extract.\n - 2 teaspoons baking powder.\n - 1/2 teaspoon salt")
    
    console.log("\n Instructions: \n")
    
    console.log("1. Preheat your oven to 350°F (175°C). Grease and flour a 9x13 inch baking pan.\n2. In a large mixing bowl, cream together the softened butter and sugar until light and fluffy.\n3. Beat in the eggs, one at a time, then stir in the vanilla extract.\n4. Combine the flour, baking powder, and salt. Gradually add the dry ingredients to the creamed mixture, alternating with the milk.\n5. Pour the batter into the prepared baking pan and spread it out evenly.\n6. Bake in the preheated oven for 25 to 30 minutes, or until a toothpick inserted into the center of the cake comes out clean.\n7. Allow the cake to cool in the pan for 10 minutes before removing it to a wire rack to cool completely.\n8. Once cooled, you can frost the cake with your favorite frosting or serve it plain. Enjoy your delicious vanilla cake! \nRating: 4.8 (based on user reviews)    ")

//if you choose chocolate cake

}else if (eat.choose === "chocolate cake"){
   
// Displaying ingredients and instructions for chocolate cake


    console.log("\n*** chocolate Cake Recipe ***\n \n Ingredients: \n")

    console.log("- 1 3/4 cups all-purpose flour.\n- 2 cups granulated sugar.\n- 3/4 cup unsweetened cocoa powder\n- 1 1/2 teaspoons baking powder.\n- 1 1/2 teaspoons baking soda.\n- 1 teaspoon salt.\n- 2 large eggs.\n- 1 cup milk.\n- 1/2 cup vegetable oil.\n- 2 teaspoons vanilla extract.\n- 1 cup boiling water.")

    console.log("\n Instructions: \n")

    console.log("1. Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.\n2. In a large mixing bowl, combine the flour, sugar, cocoa powder, baking powder, baking soda, and salt.\n3. Add the eggs, milk, oil, and vanilla extract to the dry ingredients and beat on medium speed for 2 minutes.\n4. Stir in the boiling water until the batter is well combined (it will be thin).\n5. Pour the batter evenly into the prepared cake pans.\n6. Bake in the preheated oven for 30 to 35 minutes, or until a toothpick inserted into the center of the cakes comes out clean.\n7. Allow the cakes to cool in the pans for 10 minutes before removing them to wire racks to cool completely.\n8. Once cooled, you can frost the cakes with your favorite frosting or serve them plain. Enjoy your delicious chocolate cake! \n Rating: 4.9 (based on user reviews)")

//if you choose brownies

}else if (eat.choose === "brownies"){

// Displaying ingredients and instructions for brownies

    console.log("\n*** brownies ***\n \n Ingredients: \n")

    console.log("- 1 cup unsalted butter.\n- 2 cups granulated sugar.\n- 4 large eggs.\n- 1 teaspoon vanilla extract.\n- 1 cup all-purpose flour.\n- 3/4 cup unsweetened cocoa powder.\n- 1/2 teaspoon salt.\n- 1/2 teaspoon baking powder")
    
    console.log("\n Instructions: \n")

    console.log("1. Preheat your oven to 350°F (175°C). Grease and flour a 9x13 inch baking pan.\n2. In a microwave-safe bowl, melt the butter in the microwave.\n3. Stir in the sugar6. Pour the batter into the prepared baking pan and spread it out evenly.\n7. Bake in the preheated oven for 25 to 30 minutes, or until a toothpick inserted into the center of the brownies comes out with a few moist crumbs.\n8. Allow the brownies to cool in the pan for 10 minutes before cutting them into squares and serving.\nRating: 4.7 (based on user reviews)")

//if you choose pudding

}else if (eat.choose === "pudding"){

// Displaying ingredients and instructions for brownies

    console.log("\n*** Sweet Dish: pudding ***\n \n Ingredients: \n")

    console.log("- 1/2 cup granulated sugar.\n- 1/4 cup unsweetened cocoa powder.\n- 1/4 cup cornstarch.\n- 1/8 teaspoon salt.\n- 2 3/4 cups whole milk.\n- 1/2 cup heavy cream.\n- 4 large egg yolks.\n- 2 tablespoons unsalted butter.\n- 1 teaspoon vanilla extract")

    console.log("\n Instructions: \n")

    console.log("1. In a medium saucepan, whisk together the sugar, cocoa powder, cornstarch, and salt until well combined.\n2. Gradually whisk in the milk and heavy cream until smooth.\n3. Place the saucepan over medium heat and cook, stirring constantly, until the mixture thickens and comes to a gentle boil, about 8 to 10 minutes.\n4. In a small bowl, whisk the egg yolks. Gradually whisk in about 1 cup of the hot milk mixture to temper the eggs.\n5. Pour the egg mixture back into the saucepan with the remaining milk mixture, whisking constantly.\n6. Cook, stirring constantly, for an additional 2 minutes, until the pudding is thickened.\n7. Remove the saucepan from the heat and stir in the butter and vanilla extract until the butter is melted and the mixture is smooth.\n8. Transfer the pudding to serving bowls or a large serving dish. Cover with plastic wrap, pressing it directly onto the surface of the pudding to prevent a skin from forming.\n9. Refrigerate for at least 2 hours, or until chilled and set.\n10. Serve the pudding cold, optionally topped with whipped cream or chocolate shavings.\nRating: 4.8 (based on user reviews)\n")
}
}

//Handling user's choice for 'simple cooking'

if(take1.choice === "simple cooking"){

    let eat= await inquirer.prompt({
    name:"choose",
    message:"choose the recipe..",
    type:"list",
    choices:["Tomato & Mozzarella Salad","Garlic Spaghetti","Simple Stir-Fry"]
});

// Displaying the selected simple cooking recipe and its ingredients/instructions

console.log(`recipe is givin below:-`);

//if you choose Tomato & Mozzarella Salad

if (eat.choose === "Tomato & Mozzarella Salad"){

    // Displaying ingredients and instructions for Tomato & Mozzarella Salad

    console.log("\n*** Tomato & Mozzarella Salad ***\n \n Ingredients: \n")

    console.log("Tomatoes.\nMozzarella cheese.\nFresh basil.\nOlive oil.\nBalsamic glaze (optional).\nSalt and pepper")

    console.log("\n Instructions: \n")

    console.log("1-Slice tomatoes and mozzarella cheese.s.\n2-Layer tomato and cheese slices on a plate.\n3-Add fresh basil leaves between the layers.-infused oil.\n4-Drizzle with olive oil and balsamic glaze (if using).\n5-Season with salt and pepper.\n6-Serve as a simple and refreshing salad.")

//if you choose Garlic Spaghetti

}else if (eat.choose === "Garlic Spaghetti"){

    // Displaying ingredients and instructions for Garlic Spaghetti

    console.log("\n*** Garlic Spaghetti ***\n \n Ingredients: \n")

    console.log("Spaghetti.\nGarlic.\nRed pepper flakes.\nOlive oil.\nParsley.\n.\nSalt and pepper")

    console.log("\n Instructions: \n")

    console.log("1-Cook spaghetti according to package instructions.\n2-Sauté minced garlic and red pepper flakes in olive oil until fragrant.\n3-Toss cooked spaghetti with garlic-infused oil.\n4-Season with salt, pepper, and chopped parsley.\n5-Serve hot, optionally topped with Parmesan cheese.")

//if you choose Simple Stir-Fry

}else if (eat.choose === "Simple Stir-Fry"){

    // Displaying ingredients and instructions for Simple Stir-Fry


    console.log("\n*** Garlic Spaghetti ***\n \n Ingredients: \n")

    console.log("Assorted vegetables.\nGarlic.\nSoy sauce.\nSesame oil.\nVegetable oil.\nSalt and pepper")

    console.log("\n Instructions: \n")

    console.log("1-Heat vegetable oil in a pan.\n2-Sauté minced garlic until fragrant.\n3-Add chopped vegetables and stir-fry until tender.\n4-Drizzle with soy sauce and sesame oil.\n5-Season with salt and pepper.\n6-Serve as a quick and nutritious stir-fry.")

}
}

//Handling user's choice for 'refreshment drinks'

if(take1.choice === "refreshment drinks"){

    let eat= await inquirer.prompt({
    name:"choose",
    message:"choose the recipe..",
    type:"list",
    choices:["Tropical Fruit Punch","Peanut Butter Banana Shake","Banana Berry Blast"]
});

// Displaying the selected simple cooking recipe and its ingredients/instructions

console.log(`recipe is givin below:-`);

//if you choose Tropical Fruit Punch

if (eat.choose === "Tropical Fruit Punch"){

// Displaying ingredients and instructions for Tropical Fruit Punch

    console.log("\n*** Juice: Tropical Fruit Punch ***\n \n Ingredients: \n")

    console.log("1 cup pineapple chunks.\n1 ripe mango, peeled and chopped.\n1 ripe banana.\n1 orange, peeled and segmented.\n1/2 cup coconut water.\n1/2 cup pineapple juice.\nIce cubes")

    console.log("\n Instructions: \n")

    console.log("1-In a blender, combine pineapple chunks, chopped mango, banana, orange segments, coconut water, and pineapple juice.\n2-Add a handful of ice cubes to the blender.\n3-Blend until smooth and well combined.\n4-Pour the juice into glasses and serve immediately. Enjoy your refreshing tropical fruit punch!")

//if you choose Peanut Butter Banana Shake

}else if (eat.choose === "Peanut Butter Banana Shake"){

// Displaying ingredients and instructions for Peanut Butter Banana Shake

    console.log("\n*** Shake: Peanut Butter Banana Shake ***\n \n Ingredients: \n")

    console.log("2 ripe bananas.\n2 tablespoons peanut butter.\n1 cup milk (or almond milk).\n1/2 cup vanilla yogurt.\n1 tablespoon honey (optional).\nIce cubes")

    console.log("\n Instructions: \n")

    console.log("1-Peel the bananas and slice them into chunks.\n2-In a blender, combine bananas, peanut butter, milk, yogurt, and honey.\n3-Add a handful of ice cubes to the blender.\n4-Blend until smooth and creamy.\n5-Pour the shake into glasses and serve immediately. Enjoy!")

//if you choose Banana Berry Blast
}else if (eat.choose === "Banana Berry Blast"){

    // Displaying ingredients and instructions for Banana Berry Blast

    console.log("\n*** cuisine: Banana Berry Blast ***\n \n Ingredients: \n")

    console.log("1 ripe banana\n1/2 cup mixed berries (such as strawberries, blueberries, raspberries)\n1/2 cup vanilla yogurt\n1/2 cup milk\n1 tablespoon honey or maple syrup (optional)\nIce cubes")
    
    console.log("\n Instructions: \n")

    console.log("1-Peel the banana and break it into chunks.\n2-In a blender, combine banana chunks, mixed berries, vanilla yogurt, milk, and honey or maple syrup if using.\n3-Add a handful of ice cubes to the blender.\n4-Blend until smooth and creamy.\n5-Pour the smoothie into glasses and serve immediately. Enjoy your refreshing Banana Berry Blast!")

}
}

console.log("\n HOPE YOU LIKE THIS RECIPE MAKER \n")

//code ends...