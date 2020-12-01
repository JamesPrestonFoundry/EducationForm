function createTicket(form) {
    let subject = "First Year Free Web Application";
    let body = "Completed via the website";
    let ticketData = {"ticket": {"custom_fields": [{"id": 360015922239, "value": form.fname.value},{"id": 360015946660, "value": form.lname.value},{"id": 360015946680, "value": form.country.value},{"id": 360015946840, "value": form.school.value},{"id": 360015922399, "value": form.course.value}, {"id": 360015946860, "value": form.graduation.value} ], "Submitter email": form.email.value, "subject": subject , "comment": { "body": body}}};
    
    zdPost('https://thefoundry.zendesk.com/api/v2/tickets.json', JSON.stringify(ticketData));
  }

  function zdPost(address, data) {
    return new Promise(((resolve, reject) => {
      $.ajax({
        url: address,
        contentType: 'application/json',
        type: 'POST',
        headers: {
            "Authorization": "Basic " + btoa('james.preston@foundry.com/O6eZkPEOAKXVnllIkixkPq1WuR2EeYz8N87bbQGy')
          },
        data: data,
      }).done((data) => {
        console.log(JSON.stringify(data))
        resolve(data)
      });
    }));
  }
