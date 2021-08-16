// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(8);


function getInputValue() {
    const depositAmount = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositAmount.value);
    // clear the deposit input field 
    depositAmount.value = '';
    return newDepositAmount;
}



document.getElementById('deposit-button').addEventListener('click', function () {
    // Amount deposited 
    // const depositAmount = document.getElementById('deposit-input');
    // const newDepositAmount = parseFloat(depositAmount.value);
    const newDepositAmount = getInputValue();
    // deposit total 
    const depositTotal = document.getElementById('deposit-total')
    const currentDepositTotal = parseFloat(depositTotal.innerText);
    const newDeopsitTotal = currentDepositTotal + newDepositAmount;
    depositTotal.innerText = newDeopsitTotal;

    //update total balance when deposit
    const totalBalance = document.getElementById('total-balance');
    const currentTotalBalance = parseFloat(totalBalance.innerText);
    const newTotalBalance = currentTotalBalance + newDepositAmount;
    totalBalance.innerText = newTotalBalance;


})


// withdraw button use event handeler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // Amount withdraw 
    const withdrawAmount = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawAmount.value);

    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const currenWithdrawTotal = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = currenWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update total balance when withdra 
    const totalBalance = document.getElementById('total-balance');
    const currentTotalBalance = parseFloat(totalBalance.innerText);
    const newTotalBalance = currentTotalBalance - newWithdrawAmount;
    totalBalance.innerText = newTotalBalance;
    // clear the withdraw input field 
    withdrawAmount.value = '';
})