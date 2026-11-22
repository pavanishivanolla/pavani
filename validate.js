function orderPizza() {

    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;

    if (name == "" || quantity < 1) {
        alert("Enter valid details");
        return false;
    }

    alert("Pizza Ordered Successfully");
    return false;
}
