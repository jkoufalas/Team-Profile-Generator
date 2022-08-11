const generateHTMLPageHeader = () => {

 
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  
  <body>
    <!-- Page margins are created using the container and container-fluid classes -->
    <header class="container-fluid bg-danger text-light mb-5 p-3">
        <h1 class="text-center">My Team</h1>
    </header>
  
    <!-- Two column layout -->
    <section class="container my-5">
    <div class="row d-flex justify-content-center">\n`;
 }
 
 const generateHTMLCardManager = (name, id, email, officeNumber) =>{
   return `<div class="card m-4 shadow" style="width: 20rem;">
   <div class="card-body bg-primary text-light rounded-top">
     <h4 class="card-title">${name}</h4>
     <h5 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h5>
   </div>
   <div class="rounded-bottom" style="background-color:#f6f6f6;font-size:14px">
    <ul class="list-group list-group-flush m-4">
     <li class="list-group-item">ID: ${id}</li>
     <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
     <li class="list-group-item">Office Number: ${officeNumber}</li>
    </ul>
   </div>
 </div>\n`
 }
 
 const generateHTMLCardEngineer = (name, id, email, gitHub) =>{
   return `<div class="card m-4 shadow" style="width: 20rem;">
   <div class="card-body bg-primary text-light rounded-top">
     <h4 class="card-title">${name}</h4>
     <h5 class="card-title"><i class="fas fa-glasses"></i> Engineer</h5>
   </div>
   <div class="rounded-bottom" style="background-color:#f6f6f6;font-size:14px">
    <ul class="list-group list-group-flush m-4">
     <li class="list-group-item">ID: ${id}</li>
     <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
     <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${gitHub}" class="card-link">${gitHub}</a></li>
    </ul> 
   </div>
 </div>\n`
 }
 
 const generateHTMLCardIntern = (name, id, email, school) =>{
   return `<div class="card m-4 shadow" style="width: 20rem;">
   <div class="card-body bg-primary text-light rounded-top">
     <h4 class="card-title">${name}</h4>
     <h5 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h5>
   </div>
   <div class="rounded-bottom" style="background-color:#f6f6f6;font-size:14px">
    <ul class="list-group list-group-flush m-4">
     <li class="list-group-item">ID: ${id}</li>
     <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
     <li class="list-group-item">School: ${school}</li>
    </ul>
   </div>

 </div>\n`
 }
 
 
 const generateHTMLPageEnd = () => {
 
 return `</section>
 
 </body>
 
 </html>\n`
 }
 
 
 //exports functions and data types
 module.exports = {
   generateHTMLPageHeader,
   generateHTMLPageEnd,
   generateHTMLCardManager,
   generateHTMLCardEngineer,
   generateHTMLCardIntern
 };
 