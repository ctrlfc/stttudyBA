request = prepare_the_request();
Response = send_request_synchronously(request);
display(Response);

// 回调函数 = 等我打call

request = prepare_the_request();
send_request_asynchronously(request, function(response) {
    display(response);
});

// 其实没说很清楚,....