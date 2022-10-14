const express = require("express");
const router = express.Router();

const {
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

//get
router.get("/", getPerson);
//post
router.post("/", createPerson);
//POSTMAN
router.post("/postman", createPersonPostman);
//UPDATE
router.put("/:id", updatePerson);
//using postman for testing
//Delete
router.delete("/:id", deletePerson);

/* chain the methods and add the callback founctions
I set up each route separately, for example if you have mutiple urls
that match, you re able to set up router rout pass the url and then 
chain all the methods

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

*/

module.exports = router;
// exports.router = router;
