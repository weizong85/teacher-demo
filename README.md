
--------------------------------------------------------------------------------------------
Endpoint: POST https://teacher-demo-123.herokuapp.com/api/register
Headers: Content-Type: application/json

Request JSON:
{
  "teacher": "teacherken@gmail.com"
  "students":
    [
      "studentjon@example.com"
    ]
}

--------------------------------------------------------------------------------------------

Request: GET https://teacher-demo-123.herokuapp.com/api/commonstudents?teacher={{teacherken@gmail.com}}
Request: GET https://teacher-demo-123.herokuapp.com/api/commonstudents?teacher={{teacherken@gmail.com}}&teacher={{teacherken@yahoo.com}}

--------------------------------------------------------------------------------------------

Endpoint: POST https://teacher-demo-123.herokuapp.com/api/suspend
Headers: Content-Type: application/json

Request JSON:
{
  "student" : "studentmary@gmail.com"
}

--------------------------------------------------------------------------------------------

Endpoint: POST https://teacher-demo-123.herokuapp.com/api/retrievefornotifications
Headers: Content-Type: application/json

Request JSON:
{
  "teacher":  "teacherken@example.com",
  "notification": "Hello students! @studentagnes@example.com @studentmiche@example.com"
}

--------------------------------------------------------------------------------------------