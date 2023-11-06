const apiKey = '1738191134fae3bfdf63b016caa4d9c3';
const appId = '479211e1';





function searchRecipes(query) {
    const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
        console.log(data.hits);
        const imageElement = document.createElement('img');
        const containerElement = document.getElementById('container'); // Replace 'container' with the ID of the element where you want to append the img

        data.hits.forEach(imageRecipe => {
            const imageElement = document.createElement('img');
            imageElement.src = imageRecipe.recipe.image;
            containerElement.appendChild(imageElement);

            const textElement = document.createElement('div');
            // textElement.innerText = `Calories: ${imageRecipe.recipe.calories.toFixed(2)} Cautions: ${imageRecipe.recipe.cautions}`;
            // containerElement.appendChild(textElement);

            // imageRecipe.forEach(data => {
            //     // textElement.innerText = data;
            //     // containerElement.appendChild(textElement);
            //     console.log(data);

            // })
        });

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  
//   console.log(searchRecipes('chicken'));

searchRecipes('beef')


