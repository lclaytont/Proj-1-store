

app.controller('welcomeController', ['$scope' ,function($scope) {
        console.log("Welcome Page Loaded")
        localStorage.getItem('cart') ? console.log(localStorage) : localStorage.setItem('cart', JSON.stringify([])); 
    }])