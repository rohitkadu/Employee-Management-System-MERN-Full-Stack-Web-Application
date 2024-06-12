
# 👨‍💼 Employee Management System MERN Full Stack Web Application
 
This Employee Management System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application provides CRUD (Create, Read, Update, Delete) primary operations to efficiently manage employee data. It utilizes Tailwind CSS for styling, CORS for secure cross-origin resource sharing, and Mongoose for object data modeling. The database is hosted on MongoDB Atlas, ensuring robust and scalable data storage.


## Features

- Employee CRUD operations: Create, Read, Update, and Delete employee records
- Responsive UI with Tailwind CSS
- Secure cross-origin resource sharing with CORS
- Data modeling with Mongoose
- Scalable and robust data storage with MongoDB Atlas


## Tech Stack




**Client:** Reac.js, Redux, Router, Tailwind CSS
<p>
<img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png">
</p>



**Server:** Node.js, Express, MongoDB, MongoDB Atlas, Mongoose, 
<p>  
<img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"> 
</p>




## Installation

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
- React

Clone the Repository
```bash
git clone https://github.com/rohitkadu/Employee-Management-System-MERN-Full-Stack-Web-Application.git
```

Setup the Server    
````bash
cd server
npm install rxpress mongodb mongoose cors
````

Environment Variables:
To run this project, you will need to add the following environment variables to your server/config.env file

````bash
ATLAS_URI = mongodb+srv://sample_user:<password>@my-sample-cluster-b3ugy.mongodb.net/<dbname>?retryWrites=true&w=majority
````

Setup the Client    
````bash
npm create vite@latest client – –template react
cd client
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D react-router-dom
````
Run the server project/server
````bash
node --env-file=config.env server
````

Run the client project/client
````bash
npm run dev
````

## Screenshots
<p>MongoDB Atlas Screenshot :</p>
<img src="https://raw.githubusercontent.com/rohitkadu/Employee-Management-System-MERN-Full-Stack-Web-Application/main/outputSS/db%20screenshot.png">

<p>Create & Update Operation Screenshot :</p>
<img src="https://raw.githubusercontent.com/rohitkadu/Employee-Management-System-MERN-Full-Stack-Web-Application/main/outputSS/Create%20Update%20Screenshot.png">

<p>Update & Delete Operation Screenshot :</p>
<img src="https://raw.githubusercontent.com/rohitkadu/Employee-Management-System-MERN-Full-Stack-Web-Application/main/outputSS/Read%20Delete%20Upadate%20Screenshot.png">

