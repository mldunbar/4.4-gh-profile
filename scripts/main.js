(function(){
  'use strict';

  $(document).ready(function(){

  $.ajax({
    url: 'https://api.github.com/users/mldunbar',
  }).then(function(data){
    $('.user-template').prepend(JST['user-template'](data));
    console.log(data);
  });

  $.ajax({
    url: 'https://api.github.com/users/mldunbar/repos',
  }).then(function(array){
    $('.repo-template').prepend(JST['repo-template'](array));
    console.log(array);
  });

});
})();
