class User {
    constructor(email,password) {
       
        this.email = email;
        this.password = password;
    }
}

class Customer {
    constructor(firstname, lastname, birthdate, phone, address, city) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.phone = phone;
        this.address = address;
        this.city = city
    }
}

class Orders {
    constructor(order_date,status,comments,shipped_date,shipper_id) {
        this.order_date = order_date,
        this.status = status,
        this.comments = comments,
        this.shipped_date = shipped_date,
        this.shipped_id = shipper_id
    }
}



module.exports = {
    Customer,
    User,
    Orders
}