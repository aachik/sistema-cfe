
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

    
    $scope.remove = function($index) { 
      var guardar = $scope.usuario.competencias.neutras[$index];
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

    $scope.submit = function(event){

        var form = $('form');
        var values = {};
        $.each(form.serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        if(values['usuario'] == $scope.usuarios.cuenta && values['contraseña'] == $scope.usuarios.contraseña){
            $('#acceso').css('display', 'none');
        }
        else {
            $('#form').append('<div class="alert alert-danger alert-dismissible" role="alert">  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Alerta!</strong> Datos incorrectos favor de verificarlos</div>');
            $('#usuario').val('');
              $('#contraseña').val('');
        }
       form.preventDefault();

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
}).controller('graficaCtrl', function($scope){


});

