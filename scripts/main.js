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
  }).then(function(repos){
    $('.repo').prepend(JST['repo-template'](repos));
    console.log(repos);
  });

});
})();
