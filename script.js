function checkLoanWorthiness() {
    let score = 0;
    let isValid = true;

    const accountAmount = parseFloat(document.getElementById("accountAmount").value);
    const creditHistory = document.getElementById("creditHistory").value;
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const lastDepositDate = new Date(document.getElementById("lastDepositDate").value);
    const lastLoanCollectionDate = new Date(document.getElementById("lastLoanCollectionDate").value);
    const loanDate = new Date(document.getElementById("loanDate").value);
    const repaymentDate = new Date(document.getElementById("repaymentDate").value);
    const accountType = document.getElementById("accountType").value;

    // // Check current amount in account
    // if (accountAmount > 5000) {
    //     score += 10;
    // } else {
    //     score -= 10;
    //     document.getElementById("accountAmountError").innerHTML = "Account amount must be greater than 5000";
    //     isValid = false;
    // }
        // Check if account amount is greater than or equal to loan amount
        if (accountAmount >= loanAmount) {
            score += 10;
        } else {
            score -= 10;
        }

    // Check 6 months credit history
    if (creditHistory === "yes") {
        score += 10;
    }

    // Check last deposit date
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
    if (lastDepositDate > oneMonthAgo) {
        score += 5;
    } else {
        document.getElementById("lastDepositDateError").innerHTML = "Last deposit date must be within the last month";
        isValid = false;
    }

    // Check last loan collection date
    const sixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());
    if (lastLoanCollectionDate < sixMonthsAgo) {
        score += 10;
    } else {
        document.getElementById("lastLoanCollectionDateError").innerHTML = "Last loan collection date must be more than 6 months ago";
        isValid = false;
    }

    // Check loan repayment period
    const daysDifference = Math.floor((repaymentDate - loanDate) / (1000 * 60 * 60 * 24));
    if (daysDifference <= 180) {
        score += 5;
    } else {
        document.getElementById("repaymentDateError").innerHTML = "Loan repayment period must be within 180 days";
        isValid = false;
    }

    // Check account operated type
    if (accountType === "current") {
        score += 10;
    } else if (accountType === "savings") {
        score += 5;
    } else {
        document.getElementById("accountTypeError").innerHTML = "Please select an account type";
        isValid = false;
    }

    // Display result
    if (isValid) {
        if (score >= 30) {
            // document.getElementById("result").innerHTML = "<p>Congratulations! You are eligible for a loan.</p>";
            alert("Congratulations you are eligible for a loan")
        } else {
            // document.getElementById("result").innerHTML = "<p>Sorry, you are not eligible for a loan at the moment.</p>";
            alert("Sorry you are not eligbile for a loan")
        }
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
