const paymentForm = document.querySelector(".payment-form");
const expiryInput = document.getElementById("expiry");

const CREDIT_CARD_REGEX = /^\d{16,19}$/;
const CVC_REGEX = /^\d{3,4}$/;
const EXPIRY_REGEX = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
const YYMM_FORMAT_REGEX = /.{1,2}/g;

const inputValidationRegex = {
  cc: CREDIT_CARD_REGEX,
  cvc: CVC_REGEX, 
  expiry: EXPIRY_REGEX
}

function isValid(input) {
  const selectedInputRegex = inputValidationRegex[input.id]
  return selectedInputRegex.test(input.value.trim())
}

function inputEventListener(input) {
  const errorTargetId = input.dataset.errorTarget;
  const errorElement = document.getElementById(errorTargetId);

  input.addEventListener("input", () => {
    if (isValid(input)) {
      errorElement.classList.add("hidden");
    } else {
      errorElement.classList.remove("hidden");
    }
  });
}

function expiryInputEventListener(event) {
  const date = event.target.value.split("/").join("");

  if (date.length > 0 && date.length < 4) {
    const finalVal = date.match(YYMM_FORMAT_REGEX).join("/");
    expiryInput.value = finalVal;
  }
}

function paymentFormSubmitEventListener(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const cc = document.getElementById("cc").value;
  const cvc = document.getElementById("cvc").value;
  const expiry = expiryInput.value;

  if (
    !CREDIT_CARD_REGEX.test(cc) ||
    !CVC_REGEX.test(cvc) ||
    !EXPIRY_REGEX.test(expiry)
  ) {
    Swal.fire({
      title: "Error!",
      text: "Invalid information!",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Successfully submitted form!",
      icon: "success",
    });

    const paymentFormData = {
      name,
      cc,
      cvc,
      expiry,
    };
  }
}

expiryInput.addEventListener("input", expiryInputEventListener);
document.querySelectorAll("input").forEach((input) => {
  inputEventListener(input);
});
paymentForm.addEventListener("submit", paymentFormSubmitEventListener);

// //sample function to validate form submission on server
// const validateFormAPI = async (formData) => {
//         try {
//             const validateFormPromise = await fetch('https://fake-url.com/${formData}');
//             const response = await validateFormPromise.json;
//             return response
//         }
//         catch(error){ //prep error message to populate under div with class error message
//             console.error(error)
//         }
// }

// return formValidation
