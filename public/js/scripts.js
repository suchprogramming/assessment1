$(function() {

  console.log( "ready!" );

  $("#user_sentence").val("");
  $("#word_to_check").val("");

  $("#word-checker-button").click(function() {
    event.preventDefault();
  });

  var checkSentence;
  var checkWord;

  var successIcon = "<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>"
  var youDoneGoofed = "<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>"

  $("#user_sentence").on('keyup change', function () {
    checkSentence = $("#user_sentence").val().trim();
    console.log(checkSentence)
    if (checkSentence) {
      $("#sentence-input").attr("class", "form-group has-feedback has-success") && $("#sentence-input span").html(successIcon);
    } else {
      $("#sentence-input").attr("class", "form-group has-feedback has-error") && $("#sentence-input span").html(youDoneGoofed);
    }
    checkFullForm();
  })

  $("#word_to_check").on('keyup change', function () {
    checkWord = $("#word_to_check").val().trim();
    console.log(checkWord)
    checkWord ? $("#word-input").attr("class", "form-group has-feedback has-success") && $("#word-input span").html(successIcon) :
      $("#word-input").attr("class", "form-group has-feedback has-error") && $("#word-input span").html(youDoneGoofed)
    checkFullForm();
  })

  function checkFullForm() {
    if (checkWord && checkSentence) {
      $("#word-checker-button").removeClass("disabled");
      $("#word-checker-button").click(function() {
        $("#main-form").submit();
      });
    } else {
      $("#word-checker-button").addClass("disabled");
      $("#word-checker-button").unbind("click")
      $("#word-checker-button").click(function() {
        event.preventDefault();
      });
    }
  }
});
