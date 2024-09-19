document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber =document.getElementById('pin-btn').value;
    if(pinNumber === '1234'){
        const addAmount = document.getElementById('add-amount').value;
        const currentAmount = document.getElementById('current-amount').innerText;
        const totalAmount = parseInt(addAmount)+ parseInt(currentAmount);
        console.log(totalAmount)
        
    }
});