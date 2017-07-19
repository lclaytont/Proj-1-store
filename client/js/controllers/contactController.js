
app.controller('contactController', function($scope,EmailFactory) {
    console.log("Contact Page Loaded")


    $scope.email = "CONTACT ME";

    $scope.getMessage = function() {
        var newEmail = {
            to: 'lclaytont@gmail.com',
            from: $scope.email,
            subject: $scope.subject,
            content: $scope.content
        }
        console.log(newEmail);

        var masterEmail = new EmailFactory(newEmail);
        masterEmail.$save(function (){
            console.log("sent email")
        }, function(){
            console.log("Error sending email")
        })
    }
})

 