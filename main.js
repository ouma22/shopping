var like = document.querySelectorAll('.fa')
var plusbutton = document.querySelectorAll('.plus-btn')
var quantity = document.querySelectorAll('.Quant')
var minusbutton = document.querySelectorAll('.minus-btn')
var cancel = document.querySelectorAll('.delete')


for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function() {
        if (like[i].style.color === 'rgb(226, 192, 209)') {
            like[i].style.color = 'red'
        } else {
            like[i].style.color = 'rgb(226, 192, 209)'
        }
    })
}
for (let i = 0; i < plusbutton.length; i++) {
    plusbutton[i].addEventListener('click', function() {
        quantity[i].value = Number(quantity[i].value) + 1
        prixTotal()
    })
}
for (let i = 0; i < minusbutton.length; i++) {
    minusbutton[i].addEventListener('click', function() {
        if (quantity[i].value > 1) {
            quantity[i].value = Number(quantity[i].value) - 1
            prixTotal()
        }
    })
}
for (let i = 0; i < cancel.length; i++) {
    cancel[i].addEventListener('click', function() {
        cancel[i].parentNode.remove()
        prixTotal()
    })
}

function prixTotal() {
    var price = document.querySelectorAll('.price')
    var sum = 0
    for (let i = 0; i < price.length; i++) {
        sum += quantity[i].value * price[i].innerHTML
    }
    document.getElementById('finalPrice').value = sum
}