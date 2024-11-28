var userData = [{
    username : "shahrukh",
    password : 12345,
    email: 'shahrukh@gmail.com'
},
{
    username : "shery",
    password : 12345,
    email: 'shery@gmail.com'
},
];
var adminData = [{username : "shahrukh",
password : 12345,
email: 'shahrukh@gmail.com'
},
{
username : "shery",
password : 12345,
email: 'shery@gmail.com'
},];

var setUser = localStorage.setItem('user',JSON.stringify(userData))
var setAdmin = localStorage.setItem('admin',JSON.stringify(adminData))


var getUser = JSON.parse(localStorage.getItem('user'));
console.log('Get User Data',getUser);

var a=[]
for(i=0; i<getUser.length; i++){
    if(getUser[i].username !== 'shahrukh'){
        a=[...a, getUser[i]]
    }
}
getUser= a;
console.log('Delete User Data',getUser);

var getAdmin = JSON.parse(localStorage.getItem('admin'));
console.log('Get Admin Data ',getAdmin);


var b=[]
for(i=0; i<getUser.length; i++){
    if(getAdmin[i].username === 'shahrukh'){
        b=[...a, {...getAdmin[i],email: 'xyz@gmail.com'}]
    }
    else{
        b= [...b,getAdmin[i]]
    }
}
getAdmin= b;
console.log("Updated Admin Data: ",getAdmin);

localStorage.setItem('admin',JSON.stringify(getAdmin));