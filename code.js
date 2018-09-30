// Make a request for a user with a given ID

axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')       // Use axios .get() to retrieve some data
  .then( res => {                                 // Use the .then() to pass in a function with a response parameter
    
    console.log(res);                             // Console log 'object' being returned,
    console.log(res.data);                        // Console log the object data key
    console.log(res.data.Results)                 // Console log Results arrays
    console.log(res.data.Results[0])              // Console log the rirst index in the array, which returns an object
    console.log(res.data.Results[0].Make_ID)      // Console the property of those objects
    console.log(res.data.Results[0].Make_Name);   // ...
    console.log(res.data.Results[0].Model_ID);    // ...
    console.log(res.data.Results[0].Model_Name);  // ...

    // Now we can put that data in an HTML element
    document.getElementById('make-id').innerHTML = res.data.Results[0].Make_ID;

    document.getElementById('make-name').innerHTML = res.data.Results[0].Make_Name;

    document.getElementById("model-id").innerHTML = res.data.Results[0].Model_ID;

    document.getElementById("model-name").innerHTML = res.data.Results[0].Model_Name;

  })
  .catch( error => {
    console.log(error);
  });

 