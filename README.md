# Payment Form Integration

Created a secure and responsive payment form utilizing HTML, CSS and JavaScript.

## Installation

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to view the form within the parent page.
3. Fill out the form to view client-side validation along with submission validation

## Tasks

### Task 1: Network Debugging

**Question**:
You are debugging a web application and need to investigate an issue where a form submission fails. How would you use the browser’s developer tools to identify the problem in network traffic?

**Answer**:

1. **Reload the Page**:

   - Start by reloading the page completely to capture all network activity from the beginning.

2. **Replicate the Issue**:

   - Fill out and submit the form to reproduce the problem.

3. **Analyze the Request in the Network Tab:**:

   - Open the Network tab and locate the form submission request.
   - Use the filter bar to identify whether the request is an AJAX request, an API call made using fetch(), or a full-page request.

4. **Check the Request Details**:

   - Verify that the HTTP method (e.g., POST) is correct in the Headers section
   - Ensure the Content-Type header matches what the server expects.
   - Confirm that the form data payload is populated correctly and matches the expected format.

5. **Check the Console for JavaScript Errors:**:

   - Navigate to the Console tab to see if any JavaScript errors occurred that might have prevented the form submission.

6. **Check the Sources tab for JavaScript Errors:**:
   - In the Sources tab, add breakpoints to the Javascript function that fires on form submission and run the debugger to see if the function is called or not.

### Task 2: Form Validation (JavaScript):

**Question**:
Implement JavaScript to validate the payment form data before submission.
What techniques would you use to ensure data integrity and security in
payment details?

**Answer**:

- **Use Regular Expressions for Pattern Matching:**

  - Validate the **credit card number** to ensure it is 13-16 digits long.
  - Validate the **CVV** to ensure it is 3-4 digits long.
  - Use a JavaScript function to confirm that the entered expiration date is in the correct format (e.g., `MM/YY`).

- **Client-Side Error Messaging:**

  - Display clear error messages for invalid inputs.
  - Highlight the specific field with the issue to guide the user in correcting it.

- **Prevent Submission for Invalid Data:**
  - Ensure the form does not proceed to submission if any validation checks fail.

**Example JavaScript Code**:

```javascript
function creditCardInputEventListener(event) {
  const cc = event.target.value.trim();

  if (cc === "" || CREDIT_CARD_REGEX.test(cc)) {
    ccError.classList.add("hidden");
  } else {
    ccError.classList.remove("hidden");
  }
}

function cvcInputEventListener(event) {
  const cvc = event.target.value.trim();

  if (cvc === "" || CVC_REGEX.test(cvc)) {
    cvcError.classList.add("hidden");
  } else {
    cvcError.classList.remove("hidden");
  }
}

function expiryInputEventListener(event) {
  const date = event.target.value.split("/").join("");

  if (date.length > 0 && date.length < 4) {
    const finalVal = date.match(YYMM_FORMAT_REGEX).join("/");
    expiryInput.value = finalVal;
  }

  if (EXPIRY_REGEX.test(expiryInput.value) || date === "") {
    expiryError.classList.add("hidden");
  } else {
    expiryError.classList.remove("hidden");
  }
}
```

### Task 3: Payment Form Creation

**Question**: How would you ensure the form is semantically correct and accessible, with clear labels and error messages to guide the user?

The form is semantically correct and accessible by applying id’s for specific elements along with clear class names to group specific elements (i.e. inputs). Another example is the pay now button within the form is of type ‘submit’, which will handle the form’s submission. SWAL, an external library was also utilized to display feedback when a user submits a valid or invalid form.

### Task 4: CSS Styling

**Question**: How would you apply CSS to improve the usability and appearance of the above form?

- **Improve Usability and Appearance with CSS:**

  - Ensure **form labels and inputs** are clearly contrasted for readability.
  - Make the **submit button** stand out with clear contrast against the form inputs.

- **Mobile-First, Responsive Design:**
  - Apply a **mobile-first approach** to ensure the form is responsive.
  - Ensure the form **maintains its structure** when resized, staying **centered**

### Task 5: Linux

**Question**: You need to change the permissions of a file to ensure that only the owner can read and write to it. How would you do that?

**Answer**: To change the permissions of a file to ensure that only the owner can read and write to it, the **chmod** operation would be used. The specific command I would use is

```bash
chmod 600 filename.
```
