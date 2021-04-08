const inserted = document.getElementById('myInput')
inserted.addEventListener('input', function(event){
    let converted = event.target.value
    let rupeeValue = document.getElementById('rupeeId')
    rupeeValue.innerHTML = converted 
    let dollarsValue = document.getElementById('dollarId')
    dollarsValue.innerHTML = converted * 74.58
    let euroValue = document.getElementById("euroId")
    euroValue.innerHTML = converted * 88.80
    let poundValue = document.getElementById('poundId')
    poundValue.innerHTML = converted * 102.46
})
