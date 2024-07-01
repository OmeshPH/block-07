// Create a javascript vault program that returns a message and the vault codes to the user
// Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
// Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.
// Create a popup dialog box displaying the vault codes and the text.
// Push up your code to GitHub and submit the GitHub link.
function vaultCode() {
    // declaring code 1 as integer and calculation 10 (5 * 2)
    const code1 = 5 * 2;
  
    // Calculation 2: 40 (30 + 10)
    const code2 = 30 + 10;
  
    // Calculation 3: 39 (60 / 1.5 - 1)
    const code3 = (60 / 1.5) - 1;
  
    // Combine codes into a formatted string
    return `You have received this message because you have been chosen to open an important vault.'\n' Here is the secret combination:\n ${code1} - ${code2} - ${code3}`;
  }
  
  function openVault() {
    const combination = vaultCode();
  
    // Display the combination in an alert box
    alert(combination);
  }
  
  // Call openVault to trigger the alert box (once)
  openVault()


// Additional code to check for the correct combination.

    function checkCombination() {
    const userCode = document.getElementById("userCode").value;
    const actualCombination = vaultCode();

    if (userCode === "10-40-39") {
      alert("Congratulations! You may enter the vault!.");
    } else {
      alert("Sorry, the  vault code you entered is incorrect. Try again.");
    }
  }
