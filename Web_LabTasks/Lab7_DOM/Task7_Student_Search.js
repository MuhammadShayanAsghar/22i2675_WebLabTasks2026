const express = require("express");
const app = express();
const port = 3000;

const students = [
  { id: 1, name: "Ali", semester: 5 },
  { id: 2, name: "Shayan", semester: 8 },
  { id: 3, name: "Taha", semester: 7 },
  { id: 4, name: "Sami", semester: 2 }
];

app.get("/students", (req, res) => {

  const query = req.query.name;

  const result = students.filter(student =>
    student.name === query
  );

  if (result.length === 0) {
    return res.send("No student found");
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});