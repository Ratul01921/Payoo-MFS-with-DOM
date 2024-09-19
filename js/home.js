document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber =document.getElementById('pin-btn').value;
    if(pinNumber === '1234'){
        const addAmount = document.getElementById('add-amount').value;
        const currentAmount = document.getElementById('current-amount').innerText;
        const totalAmount = parseInt(addAmount)+ parseInt(currentAmount);
        console.log(totalAmount)
        document.getElementById('current-amount').innerText = totalAmount;
    }
    else{
        alert('Failed to add money! please try again. ')
    }
});

document.getElementById('cashOut-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;
    if(inputPin === '1234'){
        const currentAmount = document.getElementById('current-amount').innerText;
        const totalAmount = parseFloat(currentAmount) - parseFloat(inputAmount);
        document.getElementById('current-amount').innerText = totalAmount;
    }
    else{
        alert('Failed to add money! please try again.')
    }
})