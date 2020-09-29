var ans1="";
var ans2="";
var ans3="";
var name="";
var email="";
var branch="";
var roll="";
var group="";
var year="";


$.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");

  $(document).ready(function() {
    $(container).find(".input-block").first().click();

      $($this).find("#Q1").keyup(function() {
    ans1=$("#Q1").val();
  });
  $($this).find("#Q2").keyup(function() {
    ans2=$("#Q2").val();
  });
  $($this).find("#Q3").keyup(function() {
    ans3=$("#Q3").val();
  });
  $($this).find("#name").keyup(function() {
    name=$("#name").val();
  });
  $($this).find("#email").keyup(function() {
    email=$("#email").val();
  });

  $($this).find("form").submit(function() {
    alert("Responses Submitted Successfully");
    window.location.href='./Done.html';
    event.preventDefault();
  });
  });
 

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function() {
    rescroll(this);
  });

  $(window).on("scroll", function() {
    $(container).find(".input-block").each(function() {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function() {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();