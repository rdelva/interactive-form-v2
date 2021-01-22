//When the page first loads, the first text field should be in focus by default.

const name = document.getElementById('name');
name.focus();




title.addEventListener('change', (e) => {
 
    //if user selects other, other-title textbox will be made visible
    const otherTitle = document.getElementById('other-title');
    otherTitle.name = "job_role_other";

    if (title.value == 'other'){
        otherTitle.removeAttribute('class');
           
    } else {
        otherTitle.classList.add('is-hidden');
    } 
});

//check and see if seelct theme is selected
// if remained as default. set color to Please select a T-shirt theme


const createOption = () => {
    //create option called "Please select a T-shirt theme"

    const color = document.getElementById('color');    
    const colorOptions = color.getElementsByTagName('option'); //grabs the colorOptions list for later usage
   
    const parent  = colorOptions[0].parentNode;

    const option = document.createElement('option');
    option.innerHTML = 'Please select a T-shirt theme';
    
    // add colorOption before the first item in the drop down menu.          
      parent.insertBefore(option, colorOptions[0]);
      color.value = colorOptions[0].value;  //set the Color drop down menu to Default

    //return  colorOptions;    
}


const removeColorList = () => {
  
    //removes the color choices in drop down menu
    const themes = color.querySelectorAll('[value]'); 
    const parent = themes[0].parentNode;
    for(let i = 0; i < themes.length; i++ ) {
            parent.removeChild(themes[i]);
    } 
    
    return themes;
}

const tShirtColors = (shirtColors) =>{
    // seperates the tshirtColors into two seperate lists based on shirt design
    const jsPunsList = [];
    const heartJSList = [];

    for(let i = 0; i < shirtColors.length; i++){
      
        if(shirtColors[i].innerHTML.includes('JS Puns shirt only')){
            jsPunsList.push(shirtColors[i]);
        } else {
            heartJSList.push(shirtColors[i]);

        }        
    } 
    // send the two arrays into designChoices() in order to be appended based on choice
   designChoices(jsPunsList, heartJSList);
}


const designChoices = (jsPuns, heartJS) => {


    const design = document.querySelector('#design');
    if( jsPuns != undefined || heartJS != undefined){

        
        design.addEventListener('change', (e) => {
            const selectedTheme = e.target.value;
            const color = document.getElementById('color');
            const option  = color.querySelectorAll('option'); 
            const parent = option[0].parentNode; //uses the first option to get the parent
            

            if(selectedTheme == 'js puns'){
                if(option.length > 1 ){
                    removeColorList();
                    for(let i = 0; i < heartJS.length; i++){
                        parent.appendChild(jsPuns[i]);
                    }
                } else {
                    
                    for(let i = 0; i < jsPuns.length; i++){
                        parent.appendChild(jsPuns[i]);
                    }
                }              
              
            } else if( selectedTheme == 'heart js'){
                if(option.length > 1 ){
                    removeColorList();
                    for(let i = 0; i < heartJS.length; i++){
                        parent.appendChild(heartJS[i]);
                    }
                } else {
                    for(let i = 0; i < heartJS.length; i++){
                        parent.appendChild(heartJS[i]);
                    }
                }             
            } else {
                removeColorList();
            }

        });
    }
}

const registerActivities = () => {
    let price = document.createElement('div');
    price.id ="price"
   
  
    const activities =  document.querySelector('.activities'); 
    activities.appendChild(price);
    let selectedActivityPrice = 0;
    let totalPrice = 0;
    
  

    activities.addEventListener('change', (e) => {
        let selectedActivity = e.target;       
        
        if(selectedActivity.tagName == 'INPUT'){          

            selectedActivityPrice = parseFloat(selectedActivity.getAttribute("data-cost"));                     
            
            selectedActivityTime = selectedActivity.getAttribute("data-day-and-time");

            let activityListDayandTime = activities.querySelectorAll("[data-day-and-time]");

            //console.log(activityListDayandTime);
            //check off item
                //if checked item day and time matches  with activities disable checkbox and make text bold

            if(selectedActivity.checked == true){
                totalPrice += selectedActivityPrice;
                price.innerHTML = `<strong>Total: $${totalPrice}</strong>`;
                for(let i = 0; i < activityListDayandTime.length; i++){
                   
                    if((selectedActivityTime == activityListDayandTime[i].getAttribute("data-day-and-time")) && (activityListDayandTime[i].checked == false)){
                        activityListDayandTime[i].disabled = true;
                        let label = activityListDayandTime[i].parentNode;
                        label.style.color = "grey";
                        label.style.fontWeight = "bold";
                        selectedActivity.disabled  = false;
                    }
                }                
            } else {
                totalPrice -= selectedActivityPrice;
                price.innerHTML = `<strong>Total:$${totalPrice}</strong>`;

               for(let i = 0; i < activityListDayandTime.length; i++){
                   
                    if(activityListDayandTime[i].disabled == true){
                        activityListDayandTime[i].disabled = false;
                        let label = activityListDayandTime[i].parentNode;
                        label.style.color = "black";
                        label.style.fontWeight = "normal";
                    }
                }
            }           

                        
        }

    
    }); // end of activities event
} // end of register activities




const paymentInfo = () => {
    const paymentInfo = document.getElementById("payment");
    const creditCard = document.getElementById("credit-card");
    const payPal = document.getElementById("paypal");
    const bitcoin = document.getElementById("bitcoin");

    
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitcoin.style.display = "none";


    //Sets it to Credit Card Options
    /*Note: if the  payment option list ever changes or increase it will allways look for the credit card option
    */
   
    
    for(let i = 0; i < paymentInfo.options.length; i++){
        if(paymentInfo.options[i].value == 'credit card' ){
            paymentInfo.options[i].setAttribute("selected", "selected");            
        }
    }


    paymentInfo.addEventListener("change", (e) => {
        let  paymentMethod = e.target.value;
        if (paymentMethod == "select method"){
            creditCard.style.display = "none"
            payPal.style.display = "none";
            bitcoin.style.display = "none";
        }
        else if (paymentMethod == "credit card"){ 
            creditCard.style.display = "block";
            payPal.style.display = "none";
            bitcoin.style.display = "none";
        } 
        else if (paymentMethod  == "paypal"){ 
            payPal.style.display = "block";
            creditCard.style.display = "none";
            bitcoin.style.display = "none";
        } 
        else {
            bitcoin.style.display = "block";
            creditCard.style.display = "none";
            payPal.style.display = "none";
        }

    });
}
// setting up errorMessages for the forms 

/*const createErrorMessage = () => {
    const div  = document.createElement('div');
    div.style.color = "red";

}*/


const errorMessages = () => {
    //const finding the parent node to use for insertBefore
    const name =  document.getElementById("name");
    const email =  document.getElementById("mail");

    const parent = name.parentNode;
    const parentEmail = email.parentNode;


        //error messages setup
        const div  = document.createElement('div');
        const message = `Please enter your name`;
        div.innerHTML = message;
        div.style.color = "red";
        parent.insertBefore(div,name);
        div.classList.add("nameError");
        const nameErrorMessage = document.querySelector(".nameError");
        nameErrorMessage.style.display = 'none';



        //email  error  messages
        const divEmail  = document.createElement('div');

        divEmail.innerHTML = `Please enter your email`;
        divEmail.classList.add("emailErrorMessage");
        divEmail.style.color = "red";
        parentEmail.insertBefore(divEmail,email);
        divEmail.classList.add("emailErrorMessage");
        const emailErrorMessage = document.querySelector(".emailErrorMessage");
        emailErrorMessage.style.display = 'none';


}





const verifyName  = () => {
    const name = document.getElementById("name");
    const nameLabel = document.querySelector("[for=name]");
    const nameErrorMessage = document.querySelector(".nameError");


    //console.log(name.value);
    const nameRegex = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/;

    //console.log(nameRegex.test(name.value));


    //checks to see if name is blank
    if(name.value == "" || nameRegex.test(name.value) == false){
        nameLabel.style.color = "red";
        name.style.border = "red";
        nameErrorMessage.style.display = 'block';
        


    } else {
        nameLabel.style.color = "black";
        name.style.border = "black";
        nameErrorMessage.style.display = 'none';
       
    }
   
}

const verifyEmail = () => {
    
    const mail = document.getElementById("mail");
    const mailLabel = document.querySelector("[for=mail]");   
    const emailErrorMessage = document.querySelector(".emailErrorMessage");

    //checks to see if email is blank
    if(mail.value == ""){
        mailLabel.style.color = "red";
        mail.style.border = "red";
        emailErrorMessage.style.display = 'block';

    }else {
        mailLabel.style.color = "black";
        mail.style.border = "black";
        emailErrorMessage.style.display = 'none';

    }

    //check to see if email is valid

    const emailRegex = /[^@]+@[^@.]+\.[a-z]+$/i;

    //console.log(emailRegex.test(mail.value));
    
    if (emailRegex.test(mail.value) == false){
        mailLabel.style.color = "red";
        mail.style.border = "red";
    } else {
        mailLabel.style.color = "black";
        mail.style.border = "black";
    }


}


const verifyRegActivities = () => {

    const activities =  document.querySelector('.activities'); 
    const activityListItems = activities.querySelectorAll("input");
    const legend = activities.querySelector("legend");

    let checked = 0; //keeps track of how many items was checked

    for(let i = 0; i < activityListItems.length; i++){
        if(activityListItems[i].checked == true){
            checked++;
        }
    }

    if(checked == 0) {
        //console.log("no item was checked");
        legend.style.color = "red";
    } else {
       // console.log(`${checked} items was checked`);
        legend.style.color = "black";

    }

    
}

//checks if the Payment Info was selected


const verifyPaymentInfo = () => {
    
    const payment = document.getElementById('payment');
    const parent = payment.parentNode;        
    const legend = parent.querySelector('legend');      

    const ccNum = document.getElementById("cc-num");
    const zip = document.getElementById("zip");
    const cvv = document.getElementById("cvv");


    const ccRegex = /[0-9]{13,16}/;
    const zipRegex = /[0-9]{5}/;
    const ccvRegex  = /[0-9]{3}/

    const ccResult = ccRegex.test(ccNum.value);
    const zipResult = zipRegex.test(zip.value);
    const ccvResult = ccvRegex.test(cvv.value);
    
    
    console.log(ccResult); 
    console.log(zipResult); 
    console.log(ccvResult); 
    

    if(payment.value == "credit card") {
        //Credit Card Verification
        if(ccResult == true && zipResult == true && ccvResult == true){
            legend.style.color = 'black';
        // console.log ("turns black");
        } else {        
            legend.style.color = 'red';           
        }
    } else if (payment.value == "paypal"){
        legend.style.color = 'black';    
    } else if (payment.value == "bitcoin"){
        legend.style.color = 'black'; 
    } else {
        legend.style.color = 'red';
    }

}


const realTimeChecking  = () => {
    //Real Time checking
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const activities =  document.querySelector('.activities'); 
    name.addEventListener('keyup', (e) =>{
        verifyName();
       
   });

   mail.addEventListener('keyup', (e) =>{
        verifyEmail();
   });

   //real time checking for Register Activities
   
   activities.addEventListener('change', (e) => {
        if(e.target.tagName == 'INPUT'){    
           // console.log("Hi");
            verifyRegActivities();
            
        }
    });
}// end of realTime checking


const submitAndVerify =  () => {
    const submit = document.querySelector("[type = submit]");
    
    submit.addEventListener("click", (e) => {
        e.preventDefault();      
        verifyRegActivities();
        verifyPaymentInfo();
        verifyName();
        verifyEmail();

    });

}

//createErrorMessage();
errorMessages();
createOption();
const shirtColors = removeColorList();
tShirtColors(shirtColors);
designChoices();
registerActivities();
paymentInfo();
realTimeChecking();
submitAndVerify();
