var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var isDrawing = false;
  var userInput = [];

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  function startDrawing(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    userInput.push('mousedown');
  }

  function draw(e) {

    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

    userInput.push('mousemove');
  }

  function stopDrawing() {
    isDrawing = false;

    // Проверяем, было ли нарисовано тире
    if (userInput.length > 5) { // Минимальная длина для нарисованного тире
      context.font = '20px Arial';
      context.fillStyle = 'white'
      context.fillText('-', 10, 30); // Отображаем тире на холсте
    }
    }
