
angular.module('Sistema-cfe', [])
    .controller('competenciasCtrl', function ($scope, $http) {
    $scope.usuarios = [];
    
    $http.get('database.json')
        .success(function (response) {
            $scope.usuarios = response;
           
    })
        .error(function (err) {
        alert(err);
    });
    
    function borrarTitulo(guardar){
            guardar = guardar || "Competencias"
         $('#competencia-menu h1').empty();
         $('#competencia-menu h1').append(guardar);
    }
  
    var guardar = 0;
    
    $scope.remove = function($index) { 
      guardar = $scope.usuario.competencias.neutras[$index];
      $scope.usuario.competencias.neutras.splice($index, 1);
        borrarTitulo(guardar);
    }
    
    $scope.si = function(){
        var comp = $('h1').html();
        $scope.usuario.competencias.existentes.push(comp);
        borrarTitulo()
        
    }
    
    
    $scope.no = function(){
        var comp = $('h1').html();  
        $scope.usuario.competencias.inexistentes.push(comp);
        borrarTitulo();
        
        
    }
    $scope.selectedValue = function(value){

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