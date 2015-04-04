angular.module('Sistema-cfe', [])
    .controller('competenciasCtrl', function ($scope, $http) {
    $scope.competencias = [];
    
    $http.get('competencias.json')
        .success(function (response) {
            $scope.competencias = response;
           
    })
        .error(function (err) {
        alert(err);
    });
    $http.get('empleados.json')
        .success(function (response) {
        $scope.empleados = response;
    });
    function borrarTitulo(){
        
         $('#mostrar h1').empty();
        
         $('#mostrar h1').append('Competencias');
    }
  
    var guardar = 0;
    
    $scope.remove = function($index) { 
        
      guardar = $scope.competencias.Competencias[$index];
      $scope.competencias.Competencias.splice($index, 1);
        $('#mostrar h1').empty();
         $('#mostrar h1').append(guardar);
    }
    
    $scope.si = function($scope){
        var comp = $('h1').html();
        $('#izq-ls').append('<li>'+comp+'</li>')
        borrarTitulo();
        
    }
    
    $scope.no = function($scope){
        var comp = $('h1').html();
        
        $('#der-ls').append('<li>'+comp+'</li>')
        borrarTitulo();
        
    }
    
    
}).filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   }
});