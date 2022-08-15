const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function(){
    const depositAmount = parseFloat(document.getElementById('deposit-amount').innerText);
    const depositInput = parseFloat(document.getElementById('deposit-input').value);

    const depositTotal = depositAmount + depositInput;

    document.getElementById('deposit-amount').innerText = depositTotal;
    document.getElementById('deposit-input').value = '';

    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    const totalBalance = balance + depositInput;
    document.getElementById('balance-amount').innerText = totalBalance;
    
});

const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', () =>{
    const withdrawInput = parseFloat(document.getElementById('withdraw-input').value);
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').innerText);
    const totalWithdraw = withdrawAmount + withdrawInput;
    
    document.getElementById('withdraw-amount').innerText = totalWithdraw;
    document.getElementById('withdraw-input').value = '';

    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    const totalBalance = balance - withdrawInput;
    document.getElementById('balance-amount').innerText = totalBalance;
})
