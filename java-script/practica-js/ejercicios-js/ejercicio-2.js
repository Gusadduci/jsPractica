var month = "February";

if (
  month === "January" ||
  month === "March" ||
  month === "December" ||
  month === "October" ||
  month === "May" ||
  month === "July" ||
  month === "August"
) {
  console.log("Este mes tiene 31 dias");
} else if (
  month === "April" ||
  month === "June" ||
  month === "September" ||
  month === "November"
) {
  console.log("Este mes tiene 30 dias");
} else if (month === "February") {
  console.log("Este mes tiene 28 dias, si el año es bisiesto tendra 29 dias");
} else {
    console.log("Este no es un mes, ingrese nuevamente el mes que quiere saber");
}
