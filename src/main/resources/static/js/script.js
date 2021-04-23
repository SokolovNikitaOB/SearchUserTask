$(function(){
//    const appendTask = function(data){
//            var taskCode = '<p> Id: ' + data.id + ' Name: ' + data.name + '</p>';
//            $('#task-list').append('<div>' + taskCode + '</div>');
//        };
//
//    $.get('/tasks/',function(response){
//            for(i in response){
//                appendTask(response[i]);
//            }
//        });

    $(document).on('click', '#search', function(){
        var text = $('#task').val();
        $('#result-search table tbody').empty();
        $('#result-search table tbody').append('<tr><th>ID задачи</th><th>Имя пользователя</th><th>Задача</th><th>Дата назначения</th></tr>');
        $.get('/tasks/',function(response){
                    for(i in response){
                        if(response[i].name.toLowerCase().includes(text.toLowerCase())){
                            var date = new Date(response[i].date);

                            $('#result-search table tbody').append(
                            '<tr>'+
                            '<td>' + response[i].id + '</td>'+
                            '<td>' + response[i].user.name + '</td>'+
                            '<td>' + response[i].name + '</td>'+
                            '<td>' + date.toDateString() + '</td>'+
                            '</tr>');
                        }
                    }
                });
    });
});
