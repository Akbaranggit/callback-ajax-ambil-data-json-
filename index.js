import ajaxAmbilData from "./module/ajaxambildata.js";

ajaxAmbilData("https://jsonplaceholder.typicode.com/users",function(data) { 
    let hasil = "<tr>"  
    data.forEach((attribute) => {
            hasil += "<td>" +
            attribute.id +
            "</td><td>" +
            attribute.name +
            "</td><td>" +
            attribute.username +
            "</td><td>" +
            attribute.email +
            "</td><td>" +
            attribute.address.street + ", " + attribute.address.suite + ", "+ attribute.address.city +
            "</td><td>" +
            attribute.company.name +
            "</td></tr>";
    });
    document.getElementById("dataTable").innerHTML = hasil;
});
