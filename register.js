// for Registerform
document.getElementById('submitbtn').addEventListener('click',function(){
    const name=document.getElementById('Username').value;
    const email=document.getElementById('email').value;
    const phoneno=document.getElementById('phoneno').value;
    const password=document.getElementById('password').value;
    
    if(name && email && phoneno && password){
        const employeesnew = JSON.parse(localStorage.getItem('employeesnew')) || [];
        employeesnew.push({name,email,phoneno,password});
        localStorage.setItem('employeesnew',JSON.stringify(employeesnew));
        alert('Form Filled Successfully!');
        document.getElementById('name').value ='';
        document.getElementById('email').value ='';
        document.getElementById('phoneno').value ='';
        document.getElementById('password').value ='';
    }
    else{
        alert('Please fill in all fields!');
    }
    }
    );


    