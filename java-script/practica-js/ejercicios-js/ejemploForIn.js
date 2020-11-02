let courseitObjeto = {
  name: "courseit",
  direction: "25 de mayo",
  age: 2,
  cofounders: [
    { name: "juani", localidad: "caba" },
    { name: "bel", localidad: "caba" }
  ],
  studentsCount: 100
};

for (let key in courseitObjeto) {
  console.log(courseitObjeto[key]);
}
