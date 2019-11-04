$('#user-selector').change(function () {
  $.get({
    url: '/login',
    data: {
      user_id: $(this).val(),
    },
  }).done(function () {
    swal({
        title: "Annotator를 전환했습니다.",
        text: "",
        type: 'success',
      },
      function () {
        location.reload()
      });
  })
});