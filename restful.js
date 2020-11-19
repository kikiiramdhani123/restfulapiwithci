$.ajax({
        url:'http://localhost/belajarapi/public/users',
        type: 'get',
        datatype: 'json',
        success: function(result){
            let asd = result;
           $.each(asd, function(i,data){
            $('#tabelq').append(`
            <tr>
            <td>`+data.id+`</td>
            <td>`+data.username+`</td>
            <td>`+data.firstname+`</td>
            <td>`+data.lastname+`</td>
            <td>`+data.address+`</td>
            <td>`+data.age+`</td>
            <td>`+data.password+`</td>
            <td>`+data.salt+`</td>
            <td>`+data.avatar+`</td>
            <td>`+data.role+`</td>
            <td>`+data.created_by+`</td>
            <td>`+data.created_date+`</td>
            <td>`+data.updated_by+`</td>
            <td>`+data.updated_date+`</td>
            </tr>
          `

            );
           })
        }
    })
