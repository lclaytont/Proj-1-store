
app.controller('contactController', function($scope) {
    console.log("Contact Page Loaded")
})

.controller("contactController", ['$scope','EmailFactory', function($scope, EmailFactory){
    $scope.contact = "CONTACT ME";

    $scope.getMessage = function() {
        var newEmail = {
            to: 'lclaytont@gmail.com',
            from: $scope.email,
            subject: $scope.subject,
            content: $scope.content
        }
        console.log(newEmail);

        var materEmail = new EmailFactory(newEmail);
        masterEmail.$save(function (){
            console.log("sent email")
        }, function(){
            console.log("Error sending email")
        })
    }
}])

