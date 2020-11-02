let tajet = "Mastercard";
let status = true;
while (status) {
  if (
    tajet === "mastercard" ||
    tajet === "Mastercard" ||
    tajet === "MASTERCARD"
  ) {
    console.log("tenes hasta 6 cuotas s/interés");
    status = false;
  } else if (tajet === "visa" || tajet === "Visa" || tajet === "VISA") {
    console.log("tenes hasta 9 cuotas s/interés");
    status = false;
  } else if (tajet === "amex" || tajet === "Amex" || tajet === "AMEX") {
    console.log("tenes hasta 3 cuotas s/interés");
    status = false;
  } else {
    console.log("tenes hasta 1 cuotas s/interés");
    status = false;
  }
}
