function pizzaCalc() {

    var toppings = prompt("How many toppings on that bad boy?");
    var workers = prompt("How many people, homie?");

    var pizzaCost = (toppings * 1.25) + 15;
    var final = pizzaCost / workers;

    alert("Y'all owe " + final + "$ each, my guy.")
}