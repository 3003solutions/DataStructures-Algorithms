function reverse(str) {

 return str.split('').reduce((reversed, character) => {   // turning str in to an array and than condencing all values into a singlar one using array helper.

    return character + reversed                          // returning character plus reversed.
    
  }, '');   
  
}

reverse('Shawn')

