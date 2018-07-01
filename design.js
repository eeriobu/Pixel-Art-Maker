var color, height, width;

$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})

function makeGrid(N, M) {
  $('tr').remove();

  for (var i = 1; i <= N; i++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (var j = 1; j <= M; j++) {
      $('tr').last().append('<td></td>')
    }
  }
}

$('#pixelCanvas').on('click', 'td', function (event) {
  color = $('#colorPicker').val();
  $(this).css('background-color', color);
})