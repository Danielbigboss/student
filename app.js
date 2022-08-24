





// function myLive(event){
//     let opay = document.querySelector('.opay')
//     if(event.target.value > 0){
//         console.log(opay.value)
//     }

// let h2 = document.querySelector('.h2')

// h2.innerHTML= opay.value

// }
// let body = document.createElement('td')
// body.textContent= opay.value
let table = document.querySelector('table')
let opay = document.querySelector('.opay')
let gender = document.querySelector('.gender')
let email = document.querySelector('.email')
let studentClass = document.querySelector('.class')
let phoneNumber = document.querySelector('.phoneNumber')
let sn = document.querySelector('.sn')
// let sn = document.querySelector('.sn').value;
// let data2 = document.querySelector('.data2')
// let data3 = document.querySelector('.data3')
// let data4 = document.querySelector('.data4')
// let data5 = document.querySelector('.data5')
// let data6 = document.querySelector('.data6')
document.querySelector('.add').addEventListener('click', start)


function start() {
    let row = document.createElement('tr')
    table.append(row)
    table.insertBefore(row, table.firstElementChild)
    let dataall = document.createElement('td')
    let data1 = document.createElement('td');
    let data2 = document.createElement('td')
    let data3 = document.createElement('td')
    let data4 = document.createElement('td')
    let data5 = document.createElement('td')
    console.log(phoneNumber.value)
    dataall.textContent = sn.value;
    data1.textContent = opay.value;
    data2.textContent = gender.value;
    data3.textContent = email.value;
    data4.textContent = studentClass.value;
    data5.textContent = phoneNumber.value;
    row.appendChild(dataall)
    row.appendChild(data1)
    row.appendChild(data2)
    row.appendChild(data3)
    row.appendChild(data4)
    row.appendChild(data5)
    setTimeout(() => {
        sn.value = null;
        opay.value = ''; 
        gender.value = '';
        email.value = '';
        studentClass.value = '';
        phoneNumber.value = '';
    
    }, 3000);
   
}

start();
