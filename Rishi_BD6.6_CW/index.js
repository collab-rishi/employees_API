const { getAllEmployees, getEmployeesById } = require("./controllers");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());





app.get("/employees", (req, res) => {

  const employees = getAllEmployees();
  res.json({ employees });

});


app.get("/employees/details/:id", async (req, res) => {

  let id = parseInt(req.params.id);
  let employee = getEmployeesById(id);

  res.json({ 
    employee,
  });

});


module.exports = { app };

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

