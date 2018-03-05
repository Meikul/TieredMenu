var blurred = false;
window.onblur = function() { blurred = true; };
window.onfocus = function() { blurred && (location.reload()); };

$(document).ready(function(){

  $(document).scroll(function(){
    var deptNav = $('.department-nav');
    if($(document).scrollTop()>172){
      if(deptNav.css('position')!=='fixed'){
        deptNav.css({'position': 'fixed', 'top':'0'});
      }
    }
    else if($(document).scrollTop()<172){
      if(deptNav.css('position')!=='static'){
        deptNav.css({'position': 'static'});
      }
    }
  });
});
