const employeeGrid = document.getElementById('employeeGrid');
    
        function loadEmployees() {
        employeeGrid.innerHTML = ''; // Clear the grid
        const employeesnew = JSON.parse(localStorage.getItem('employeesnew')) || [];
        employeesnew.forEach((emp, index) => {
        const{name,email,phoneno,password}=emp;

    const nameDiv = document.createElement('div');
    const emailDiv = document.createElement('div');
    const phonenoDiv = document.createElement('div');
    const passwordDiv = document.createElement('div');
    const actionDiv = document.createElement('div');

    nameDiv.textContent = name;
    emailDiv.textContent = email;
    phonenoDiv.textContent = phoneno;
    passwordDiv.textContent = password;

        
        const editbtn=document.createElement('button');
         editbtn.textContent='EDIT';
         editbtn.classList.add('edit');
         editbtn.addEventListener('click',()=> editemployee(index));

         const deletebtn=document.createElement('button');
         deletebtn.textContent='DELETE';
         deletebtn.classList.add('delete');
         deletebtn.addEventListener('click',()=> deleteEmployee(index));

         const buttoncontainer=document.createElement('div');
         buttoncontainer.classList.add('buttons');
         buttoncontainer.appendChild(editbtn);
         buttoncontainer.appendChild(deletebtn);

         actionDiv.appendChild(buttoncontainer);

         employeeGrid.appendChild(nameDiv);
        employeeGrid.appendChild(emailDiv);
        employeeGrid.appendChild(phonenoDiv);
        employeeGrid.appendChild(passwordDiv);
        employeeGrid.appendChild(actionDiv);
            });
        }

        function editemployee(index){
      const employeesnew=JSON.parse(localStorage.getItem('employeesnew')) || [];
      const emp=employeesnew[index];
      const name = prompt('Edit Name', emp.name);
      const email = prompt('Edit Name', emp.email);
      const phoneno = prompt('Edit Name', emp.phoneno);
      const password = prompt('Edit Name', emp.password);

      if(name && email && phoneno && password){
        employeesnew[index]={name,email,phoneno,password}
        localStorage.setItem('employeesnew', JSON.stringify(employeesnew));
        loadEmployees();
      } else {
        alert('All fields are required!');
      }
    }
  
    function deleteEmployee(index) {
      const employeesnew = JSON.parse(localStorage.getItem('employeesnew')) || [];
      employeesnew.splice(index, 1);
      localStorage.setItem('employeesnew', JSON.stringify(employeesnew));
      loadEmployees();
    } 
        window.onload = loadEmployees;