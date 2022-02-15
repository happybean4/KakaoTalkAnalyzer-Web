const input = document.querySelector('input')

var fileName = document.querySelector('.fileName')

fileName.classList.add('hidden')

function loadFile(input){
  var file = input.files[0]
  fileName.textContent = '선택된 파일 : ' + file.name
  fileName.classList.remove('hidden')

}