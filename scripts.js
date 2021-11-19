  /* Display Date and Time */
  //ES6 function definition
    //const displayDate = (id) =>
    // vanilla function definition
    function displayDate(id)

    
    {
      //First, declare a new instance of the built-in Date() object.
      let today = new Date();

      /* Now we have access to all the methods of Date(), so we set our year, month, day, and hours variables
         using the dot notation */

      let year = today.getFullYear();

      //let month = today.getMonth() + 1;

      /*The method getMonth() returns the index values, so January is at index 0 to December at index 11. 
        If you want to display the month as a number, you have to add 1*/   

      // To display the month in as a word, you can use an array.

       let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
       let month = months[today.getMonth()];
      
      let day = today.getDate();

      let hours = today.getHours();

      // getHours() returns 24 hour (military) time, so we need to find out if it's AM or PM

      //There are 2 ways to do this. First is the longer, step-by-step method:

      // Declare the ampm variable, but don't initialize with a value because we don't know it yet.
      // Then check to see if the hours returned are greater or equal to 12 and assign the value based on the results.
      
      // let ampm;

      // if (hours >= 12) {
      //   ampm = 'PM';
      // } else {
      //   ampm = 'AM';
      // }

      // If it's a simple if or if/else statement, you can use a ternary operator as a shortcut 
      //and write it all on one line:

      let ampm = hours >= 12 ? 'PM' : 'AM';

      // Next, we want to convert 24-hour hour display to 12-hour display

      // Find the remainder of hours divided by itself
      hours = hours % 12;

      // If the remainder is 0, then hours should be 12.
      
      // The step-by-step way
      // if (hours === 0) {
      //   hours = 12;
      // }

      // Using a ternery operator
      hours = hours ? hours : 12; 
            
      let minutes = today.getMinutes();

      // if (minutes === 00) {
      //   minutes = '00';
      // }

      // Get the element id that was passed into the function when it was called when the body loaded
      let display_board = document.getElementById(id);

      // Concatenate the date and time into a string to display inside that element
      display_board.innerHTML =month+" " + day + ", " + year + "<br/>" + hours + ":" + minutes+" " + ampm ;
      
      setTimeout('displayDate(\''+ id +'\')', '1000' );
    }

    