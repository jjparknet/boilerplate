$.ajax({
    url: '/api/user',
    method: 'GET',
    async: false,
    success: function (data, textStatus, jqXHR) {
        console.log(data.username);
    }
})