angular.module( 'ZootopiaApp' ).controller( 'mainCtrl', function ( $scope, mainServ, baseURL ) {

  $scope.zoo = [];

  //get all animals and put them on the scope
  var cPromise = mainServ.getAnimals();
  cPromise.then( function ( animals ) {
    $scope.animals = animals;
    console.log( $scope.animals );
  } )

  $scope.addAnimalToZoo = function (animal) {
    $scope.zoo.push( animal );
  }

  $scope.addAnimal = mainServ.addAnimal();

});
