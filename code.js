function getCar(honda) {
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json`)
    .then(results => {
        const car = Results.data;

          
          const carModel = document.getElementById('carModel');
          // looping through object keys
          Object.keys(car.Model_Name).forEach(car => {
            console.log(car.carModel);
            carModel.appendChild("");
          }
          )
        return car
        //console.log(car);

    })
    .catch(err => {
      console.error("Coding in Progress", err.message);
    })
    }
    
    /**
     * This handles the onsubmit on the form.
     * @param {Object} event 
     */
    function handleSubmit(event) {
      event.preventDefault();
      // grabs the carname from the field
      const carName = document.getElementById('carName').value;
      // grabs the carModel list
      const carModel = document.getElementById('carModel');
      carModel.innerHTML = "";
      getCar(carName);
    }
 