const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const fs = require('fs');

/* GET home page. */
// GET - Request Resource
// POST - Submit Resource

// '/' -> Default/Home Page
router.get('/', (request, respond) => {
  respond.render('index',
  {
    title: "CSS Framework"
  });
});


// '/components/:component' -> Component under Components
// GET (request for a resource) an 'component' document under 'components' group
// ':component' is a request (req) parameter
// Eg: GET: domain.com/components/buttons => :component == "buttons"
// Eg: GET: domain.com/components/tables => :component == "tables"
router.get('/components/:component', (req, res,) => {
  // 1. Destructors request parameters to get the 'component'
  // NOTE: component:string
  const { component } = req.params;

  // 2. Define the path of the component documentation
  const path = `views/components/${component}.ejs`

  // 3. Check if the documentation file exists under the defined path
  // NOTE: fs.access if a async file access function which checks 
  // if the file exits without opening the file
  fs.access(path, fs.F_OK, (err) => {
    // Handle error if the document is not found or doesn't exists
    // Render the error 404 page with error details
    if (err) {
      return res.render('error-404', {
        title: 'CSS Framework - Error 404',
        error: `No documentation found for ${component}, ${err}`
      });
    }
    // Else if the file exists
    // Render the documentation for the component
    res.render(`components/${component}`, {
      title: `CSS Framework - ${component}`,
    });
  })
});

module.exports = router;
