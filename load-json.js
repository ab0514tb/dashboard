    $.ajax({
    type: 'GET',
    url: 'http://arimo.com/get/profile',
    async: true,
    cache: false,
    dataType: "json",
    timeout: 5000,
    xhrFields: {
        withCredentials: true,
    },
    beforeSend: function(xhr) {
        console.log('1');
    },
    success: function(response, textStatus, xhr) {
        console.log('2', response);
        console.log('3' + textStatus);
        console.log('4', xhr);
        if (response) {
            $.each(response, function(){
                //ここをこねこねしてました…
                        //失敗作 $("tbody").append("<tr data-href='arimo.php><td>" + this.Profile.first_name + "</td><td>" + this.Profile.last_name + "</td><td></tr>");
                        $('.table').dataTable().fnAddData([
                this.Profile.first_name,
                this.Profile.last_name
            ]);
            $("tbody>tr:last").attr('data-href', 'arimo.php?id=' + this.Profile.id);
            });
        } else {
                alert("取得失敗");
        }
    },
    error: function(xhr, textStatus, errorThrown) {
    },
    complete: function(xhr, textStatus) {
    }
});
