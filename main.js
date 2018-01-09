
$(document).ready(function(){
$('#search').on('keyup',function(e){
let username = e.target.value;
$.ajax({
url:'https://api.github.com/users/'+username,
data:{
    client_id:'bc92c1a1bd3bda6a1952',
    client_secret:'ac70ec7a1b2a0ea6a4f236c04f2eeec7fc65eeec'
}

}).done(function(user){
$('#profile').html(`

  <div class="container img">
  <a  target="_blank" class="btn btn-success btn-sm" href="${user.html_url}">Profile</a>
  <img src="${user.avatar_url}" style="width:400px">
  </div>

  

`);
});
});
});

