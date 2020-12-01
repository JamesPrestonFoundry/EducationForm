function createTicket(form) {
    let url = 'https://thefoundry.zendesk.com/api/v2/tickets.json';
    let subject = "First Year Free Web Application";
    let body = "Completed via the website";
    let ticketData = {"request": {"custom_fields": [{"id": 360015922239, "value": form.fname.value},{"id": 360015946660, "value": form.lname.value},{"id": 360015946680, "value": form.country.value},{"id": 360015946840, "value": form.school.value},{"id": 360015922399, "value": form.course.value}, {"id": 360015946860, "value": form.graduation.value} ], "Submitter email": form.email.value, "subject": subject , "comment": { "body": body}}};
    
    zdAuthRequest('POST', url, ticketData);
};

function zdAuthRequest(method, address, data) {
    $.ajax({
    url: address,
    type: method,
    contentType: 'application/json; charset=utf-8',
    dataType: 'jsonp',
    data: JSON.stringify(data),
    timeout: 2000,
    beforeSend: function(xhr){
        xhr.setREquestHeader("Authorization", 'Basic ' + btoa('bugbot@thefoundry.co.uk/token:Olg1uDHoQDY1SvZoEosS01MEBzdoIZ1SSpnXQZu4'));
    },
    success: function(data, textStatus, xhr) {
        console.log(xhr.status);
    },
    always: function(xhr, textStatus) {
        console.log(xhr.status);
    } 
    })
};
