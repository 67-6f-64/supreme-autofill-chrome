var BILLING_INFO = {
    "name": "First Last",
    "email": "test@gmail.com",
    "tel": "714-123-4567",
    "address": "12345 Test St.",
    "address 2": "",
    "zip": "90024",
    "city": "Los Angeles",
    "state": "CA", // 2 character abbreviation
    "country": "USA", // USA or CANADA
    "number": "4242 4242 4242 4242",
    "exp_month": "11", // 2 digits
    "exp_year": "2018", // 4 digits
    "cvv": "123"
}

autofillOnClick('`', BILLING_INFO);