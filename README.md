# NODEJS-ASSIGNMENT-7
NodeJS Assignment on creating student administration app with different data and with auto incremented ID feature


With online schooling on the rise, every school needs software to store the information of thestudents. New student records need to be added when admissions happen, their details updated when students pass to the next class and records need to be deleted when students leave
Details
1. A student record consists of the following structure.
  1. id
  2. name
  3. currentClass
  4. division
  
2. The server should respond to GET, POST, PUT, DELETE request

3. GET request

1. /api/student
  1. Initial data is provided in the InitialData.js file. This data should be
  preloaded on the server. Like if the first request to the server is get
  /api/student then it should return all these student records.
  2. Server should send back details of all student records available in the
  form of an array in json format.
2. /api/student/{id}
  1. Server should send back details of provided student id in json format
  {id:1,name: 'Lokesh', currentClass : 12, division: 'A'}
  2. If the id is invalid respond with 404.

4. POST request
  1. Request will be sent with headers
  {'content-type':'application/x-www-form-urlencoded'}
  2. /api/student
    1. Server should record the student details if all the three
    [name,currentClass,division] are provided. Should return the id to which is
    allocated to the new student details in json format {'id':new_id}
    2. If incomplete details are given return status code 400.
    3. Returned should be unique to every student and should be incremental.
    4. Even if a record is deleted its id should not be used.
5. PUT request
  1. PUT request will have header
  {'content-type':'application/x-www-form-urlencoded'}
  2. /api/student/{id}
    1. If valid id and valid update is given then should update the student details
    2. If invalid id is given then respond with status 400.
    3. If invalid update is given then respond with status 400.
    4. Update will be given with format {name: 'new name'}
6. DELETE request
  1. /api/student/{id}
    1. If a valid id is given remove the corresponding record.
    2. If invalid id is given respond with status 404.
