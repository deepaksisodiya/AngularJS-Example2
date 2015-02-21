/**
 * Created by Deepak Sisodiya on 21/02/15.
 */

app.controller("myNoteController", function($scope) {
  $scope.message = "";
  $scope.save = function() {
    alert("Note Saved");
  };
  $scope.clear = function() {
    $scope.message = "";
  };
  $scope.left = function() {
    return 100 - $scope.message.length;
  };
})