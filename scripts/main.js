(function(){
  'use strict';

  $(document).ready(function(){

  $.ajax({
    url: 'https://api.github.com/users/mldunbar',
  }).then(function(data){
    $('.user').prepend(JST['user-template'](data));
    console.log(data);
  })

  $.ajax({
    url: 'https://api.github.com/users/mldunbar/repos',
  }).then(function(data){
    $('.repos').prepend(JST['repo-template'](data));
    console.log(data);
  })

});
})();
