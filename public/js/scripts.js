$(function() {

  console.log( "ready!" );

  $("#user_sentence").val("");
  $("#word_to_check").val("");

  $("#word-checker-button").click(function() {
    event.preventDefault();
  });

  var checkSentence;
  var checkWord;

  $("#user_sentence").keyup(function () {
    checkSentence = $("#user_sentence").val().trim();
    console.log(checkSentence)
    checkSentence ? $("#sentence-input").removeClass("has-error").addClass("has-success") : $("#sentence-input").removeClass("has-success").addClass("has-error")
    checkFullForm();
  })

  $("#word_to_check").keyup(function () {
    checkWord = $("#word_to_check").val().trim();
    console.log(checkWord)
    checkWord ? $("#word-input").removeClass("has-error").addClass("has-success") : $("#word-input").removeClass("has-success").addClass("has-error")
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
