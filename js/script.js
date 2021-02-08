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


const tShirtSelection = () => {

    const shirtColors = document.getElementById("shirt-colors");
    const shirtDesign = document.getElementById("design");

    shirtColors.classList.add('is-hidden');
    shirtDesign.addEventListener('change', (e) => {

        if(e.target.value == "Select Theme"){
            shirtColors.classList.add('is-hidden');
        } else {
            shirtColors.classList.remove('is-hidden');
            //createDefaultOption();
            //clearOptions();  
        }
    });   
}

const createDefaultOption = () => {

    const color = document.getElementById("color"); 
    const options = color.getElementsByTagName("option");

    const parent = options[0].parentNode;
   // adds the "Please select a T-shirt theme" to the top of the list and set it to default
   const text = "Please select a T-shirt theme";
   const defaultOption = document.createElement("option");
   defaultOption.innerHTML = text;    
    
   parent.insertBefore(defaultOption, options[0]);

   options[0].setAttribute("selected", ""); // makes "please select t-shirt theme" the default option
}

const clearOptions = () => {

    //Until a theme is selected from the “Design” menu, no color options 
    //appear in the “Color” drop down and the “Color” field reads “Please select a T-shirt theme”. 

    const color = document.getElementById("color");
    const colorOptions = color.querySelectorAll("option[value]"); //gets the list of the color options    
    const colorParent = colorOptions[0].parentNode; // selects the parent of the select list 
    
    //Removes the entire option list from the website and makes the dropdown menu empty
    // Note : list is stored in colorOptions variable
    for(let i = 0; i < colorOptions.length; i++){
        colorParent.removeChild(colorOptions[i]);
    }
}



const themeSelection = () => {
    const color = document.getElementById("color");

    const colorOptions = color.querySelectorAll("option[value]"); //gets the list of the color options    

   
    //seperate the colorOptions into two different list

    const jsPunsList = [];
    const jsHeartList = [];

    for(let i = 0; i < colorOptions.length; i++){
        if(colorOptions[i].innerHTML.includes('JS Puns')){
            jsPunsList.push(colorOptions[i]);
        } else {
            jsHeartList.push(colorOptions[i]);
        }
    }

   
   //if user selects JS Puns or JS Heart

      const design = document.getElementById("design");  
      const optionList = color.getElementsByTagName("option");

      colorParent = optionList[0].parentNode;
  

      design.addEventListener('change', (e)=> {
        const selectedTheme  = e.target.value;  //theme shirt that the user selected
        //console.log(selectedTheme);

        if(selectedTheme == "js puns"){
            //check to see if the default option is the only one listed there
            if(optionList.length == 1){
                //add the jsPuns list underneath the default option
                for(let i = 0; i < jsPunsList.length; i++){
                    color.appendChild(jsPunsList[i]);
                }
            } else {
                //if there are items in the list. Clear it out using clearOptions()
                //then repopulate the list
                clearOptions();
                //add the jsPuns list underneath the default option
                for(let i = 0; i < jsPunsList.length; i++){
                    color.appendChild(jsPunsList[i]);
                }
            }
        } else if (selectedTheme == "heart js"){
            if(optionList.length == 1){
                //add the jsHeart list underneath the default option
                for(let i = 0; i < jsHeartList.length; i++){
                    color.appendChild(jsHeartList[i]);
                }
            } else {
                  //if there are items in the list. Clear it out using clearOptions()
                //then repopulate the list
                clearOptions();
                //add the jsHeart list underneath the default option
                for(let i = 0; i < jsHeartList.length; i++){
                    color.appendChild(jsHeartList[i]);
                }
            }
        } 
        

      }); // end of the design addEventListener

      
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

        //error Message for Payment Section
        const ccSection = document.querySelector('#credit-card');
        const  parentCC = ccSection.parentNode;
        const divCC = document.createElement('div');
        const divZip = document.createElement('div');
        const divCvv = document.createElement('div');

        parentCC.insertBefore(divCC,ccSection);
        parentCC.insertBefore(divZip,ccSection);
        parentCC.insertBefore(divCvv,ccSection);
        
        divCC.innerHTML = `Please enter a valid credit card number`;
        divZip.innerHTML = `Please enter a valid zipcode`;
        divCvv.innerHTML = `Please enter a valid CVV`;

        divCC.classList.add('errorMessage');
        divCC.classList.add('is-hidden');
        divCC.id = 'ccNumErrorMessage';

        divZip.classList.add('errorMessage');
        divZip.classList.add('is-hidden');
        divZip.id = 'zipErrorMessage';

        divCvv.classList.add('errorMessage');
        divCvv.classList.add('is-hidden');
        divCvv.id = 'ccvErrorMessage';
      
        

}




const verifyName  = () => {
    const name = document.getElementById("name");
    const nameLabel = document.querySelector("[for=name]");
    const nameErrorMessage = document.querySelector(".nameError");

    const basicInfoLegend = nameLabel.previousElementSibling;

    //console.log(name.value);
    const nameRegex = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/;
    let nameIsValid = "";

    //console.log(nameRegex.test(name.value));


    //checks to see if name is blank
    if(name.value == "" || nameRegex.test(name.value) == false){
        nameLabel.style.color = "red";
        basicInfoLegend.style.color = "red";
        name.style.border = "red";
        nameErrorMessage.style.display = 'block';
        nameIsValid = false;   
        


    } else {
        nameLabel.style.color = "black";
        name.style.border = "black";
        basicInfoLegend.style.color = "black";
        nameErrorMessage.style.display = 'none';
        nameIsValid = true;   

       
    }
   return nameIsValid;
}

const verifyEmail = () => {
    
    const mail = document.getElementById("mail");
    const mailLabel = document.querySelector("[for=mail]");   
    const emailErrorMessage = document.querySelector(".emailErrorMessage");
    let emailIsValid = "";

    //checks to see if email is blank
    if(mail.value == ""){
        mailLabel.style.color = "red";
        mail.style.border = "red";
        emailErrorMessage.style.display = 'block';
        emailIsValid = false;

    }else {
        mailLabel.style.color = "black";
        mail.style.border = "black";
        emailErrorMessage.style.display = 'none';
        emailIsValid = true;
    }

    //check to see if email is valid

    const emailRegex = /[^@]+@[^@.]+\.[a-z]+$/i;

    //console.log(emailRegex.test(mail.value));
    
    if (emailRegex.test(mail.value) == false){
        mailLabel.style.color = "red";
        mail.style.border = "red";
        emailIsValid = false;
    } else {
        mailLabel.style.color = "black";
        mail.style.border = "black";
        emailIsValid = true;
    }

    return emailIsValid;    
}


const verifyRegActivities = () => {

    const activities =  document.querySelector('.activities'); 
    const activityListItems = activities.querySelectorAll("input");
    const legend = activities.querySelector("legend");
    let   regActValid = ""; 

    let checked = 0; //keeps track of how many items was checked

    for(let i = 0; i < activityListItems.length; i++){
        if(activityListItems[i].checked == true){
            checked++;
        }
    }

    if(checked == 0) {
        //console.log("no item was checked");
        legend.style.color = "red";
        regActValid = false;
    } else {
       // console.log(`${checked} items was checked`);
        legend.style.color = "black";
        regActValid = true;

    }
   
    return regActValid;
}

//Verifys if a t-shirt was selected
const verifyTShirt = () => {
    const shirtSection = document.querySelector(".shirt");
    const shirtLegend = shirtSection.querySelector("legend");
    const shirtColor = document.querySelector("#color");
    let shirtIsValid = "";


    const design = document.querySelector("#design");
   
    if(design.value == "Select Theme" || shirtColor.value == "Please select a T-shirt theme") {
        shirtLegend.style.color ="red";
        shirtIsValid = false;
    } else {
        shirtLegend.style.color ="black";
        shirtIsValid = true;

    }

    return shirtIsValid;
}

//checks if the Payment Info was selected


const verifyPaymentInfo = () => {
    
    const payment = document.getElementById('payment');
    const parent = payment.parentNode;        
    const legend = parent.querySelector('legend');      

    const ccNum = document.getElementById("cc-num");
    const zip = document.getElementById("zip");
    const cvv = document.getElementById("cvv");


    const ccRegex = /^\d{13,16}$/;
    const zipRegex = /[0-9]{5}/;
    const ccvRegex  = /\d{3}/;   //[0-9]{3}

    const ccResult = ccRegex.test(ccNum.value);
    const zipResult = zipRegex.test(zip.value);
    const ccvResult = ccvRegex.test(cvv.value);


    const ccNumLabel = document.querySelector("[for='cc-num']");
    const zipLabel = document.querySelector("[for='zip']");
    const cvvLabel = document.querySelector("[for='cvv']");


    //ErrorMessages Labels
    const ccError = document.getElementById('ccNumErrorMessage');
    const zipError = document.getElementById('zipErrorMessage');
    const ccvError = document.getElementById('ccvErrorMessage');

    let paymentIsValid = ""
    


    if(payment.value == "credit card") {
        //Credit Card Verification
        
        if(ccResult == true && zipResult == true && ccvResult == true){
            legend.style.color = 'black';
            paymentIsValid = true;

            const errorMessages  = document.querySelectorAll('.errorMessage');
            //Make on the labels black and hide messages if its true
            for(let i = 0; i < errorMessages.length; i++){
                errorMessages[i].classList.add("is-hidden");
            }

            ccNumLabel.style.color = 'black'
            zipLabel.style.color = 'black'
            cvvLabel.style.color = 'black'

        } else {        
            legend.style.color = 'red'; 
            paymentIsValid = false       
                   
            //Credit Card Num Error 
                    if(ccResult == false){
                        ccNumLabel.style.color = 'red';
                        ccError.classList.remove('is-hidden');
                    } else {
                        ccNumLabel.style.color = 'black';
                        ccError.classList.add('is-hidden');
                    }   
                
                    //Zip Code Error
                    if(zipResult == false){
                        zipLabel.style.color = 'red';
                        zipError.classList.remove('is-hidden');
                    } else {
                        zipLabel.style.color = 'black';
                        zipError.classList.add('is-hidden');
                    }
                
                    //CCV Code Error
                     if(ccvResult == false){
                        cvvLabel.style.color = 'red';
                        ccvError.classList.remove('is-hidden');
                    } else {
                         cvvLabel.style.color = 'black';
                         ccvError.classList.add('is-hidden');
                    }
                              
        }
    } else if (payment.value == "paypal"){
        legend.style.color = 'black';
        paymentIsValid = true;    
    } else if (payment.value == "bitcoin"){
        legend.style.color = 'black'; 
        paymentIsValid = true;
    } else {
        legend.style.color = 'red';
        paymentIsValid = false;

    }

    return paymentIsValid;

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
            verifyRegActivities();
            
        }
    });
}// end of realTime checking


const submitAndVerify =  () => {
    const form = document.querySelector("form");
   
    form.addEventListener("submit", (e) => {


        if(!verifyName()) {
            e.preventDefault();
        } 

        if(!verifyEmail()) {
            e.preventDefault();
        }

        if(!verifyTShirt()) {
            e.preventDefault();
        }

        if(!verifyRegActivities()) {
            e.preventDefault();
        }

        if(!verifyPaymentInfo()) {
            e.preventDefault();
        }

    });
}

tShirtSelection();
createDefaultOption();
themeSelection();
errorMessages();
registerActivities();
paymentInfo();
realTimeChecking();
submitAndVerify();
