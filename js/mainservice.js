angular.module( 'ZootopiaApp' ).service( 'mainServ', function( baseURL, $http ) {

//Call the API for animals, return them to the controller
  this.getAnimals = function () {
    var promise = $http.get( baseURL ).then( function ( response ) {
      //Two properties on a response: status (e.g. 200) and data
      if ( response.status === 200 ) {
        return response.data;
      }
      return "Error: " + response.status;
    } )
    return promise;
  }

  this.addAnimal = function ( animalObj ) {
    return $http( {
      method: 'POST'
      , url: baseURL
      , data: animalObj
    } )
    .then( function (response) {
        console.log("animalObjInput", response)
      if (response === 200) {
        return
      }
    })

    }

    this.feedAnimal = function ( animalName) {
      $http.put(baseURL + animalName + '?status=full')
    }

  // this.getAnimals = function ( baseURL ) {
  //     return $http( {
  //       method: 'GET'
  //       , url: baseURL +
  //     }).then( function ( response ) {
  //
  //     }
  // }


//JEREMY'S CODE
  // angular.module('zooApp').service('zooService', function($http){
  //
     // var baseUrl = //'http://practiceapi.devmounta.in/api/animals/';
  //
  //     //Make a getAnimals function
  //     this.getAnimals = function(){
  //         //Call the api to get all animals
  //         var promise = $http.get(baseUrl)
  //              .then(function(response){
  //                     //2 properties on a response
  //                         //status - 200, 500, 404, 300,301
  //                         //data - Actual data you asked for
  //                 if(response.status === 200){
  //                     //Return the actual data to the controller
  //                     return response.data;
  //                 }
  //                 return "Error: " + response.status;
  //         })
  //
  //         return promise;
  //     }
  //
  //     //addAnimal (animalObj)
  //     this.addAnimal = function(animalObj){
  //         //http post (url, animalObj)
  //         console.log('animalObjInput', animalObj)
  //             $http({
  //                 method: 'POST',
  //                 url: baseUrl,
  //                 data: animalObj//body
  //             }).then(function(response){
  //                 console.log('animalObjResponse', response.data);
  //             })
  //             //.then
  //     }
  //
  //     this.feedAnimal = function(animalName){
  //         $http.put(baseUrl + animalName + '?status=full');
  //         //http://practiceapi.devmounta.in/api/animals/reddeer?status=not//hungry
  //     }
  //
  //     this.deleteAnimal = function(animalId){
  //         $http.delete(baseUrl + animalId);
  //     }
  //
  //
  // })

});
