$(document).ready(function () {
  let bar = $(".progress-bar");
  let percent = $(".percent");
  let progress = $(".progress");

  // AJAX FORM
  $("#form-upload").ajaxForm({
    beforeSend: function () {
      progress.removeClass("hidden");
      let percentVal = "0%";
      bar.width(percentVal);
      percent.html(percentVal);
    },
    uploadProgress: function (event, position, total, percentComplete) {
      let percentVal = percentComplete + "%";
      bar.width(percentVal);
      percent.html(percentVal);
    },
    complete: function (xhr) {
      $("#target").attr("src", xhr.responseText);
      $("myfile").val("");
    },
  });
});
