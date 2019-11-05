

function Task(name, time, description) {
  this.name = name;
  this.time = time;
  this.description = description;
}

Task.prototype.list = function() {
  return this.name + ', ' + this.time + ', ' + this.description;
}

$(document).ready(function() {
  var newTask = new Task("name", "time", "description");
  $("form#userForm").submit(function(event) {
    event.preventDefault();
    var taskInput = $("#taskName").val();
    var dateInput = $("#taskDate").val();
    var infoInput = $("#taskInfo").val();
    newTask.name = taskInput,
    newTask.time = dateInput,
    newTask.description = infoInput;

    $("#taskList").append(`<button id="${taskInput}"> ${newTask.name}</button>`).fadeIn("slow");



    $(`button#${taskInput}`).click(function() {
      $('#taskDetails').text(newTask.list()).fadeIn("slow");
      $('#taskDetails').append(`<input type="checkbox" id="${taskInput}1" />`);

      var checkBox = document.getElementById(`${taskInput}1`);
      console.log(checkBox);
      if (checkBox.checked == true){
      $(`button#${taskInput}`).remove();
    }

    });
  });
});
