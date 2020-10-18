//When the page first loads, the first text field should be in focus by default.

const name = document.getElementById('name');
name.focus();




title.addEventListener('change', (e) => {
 
    //if user selects other, other-title textbox will be made visible
    const otherTitle = document.getElementById('other-title');

    if (title.value == 'other'){
        otherTitle.classList.remove('is-hidden');    
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

            console.log(activityListDayandTime);
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

    creditCard.style.display = "none";
    payPal.style.display = "none";
    bitcoin.style.display = "none";


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

createOption();
const shirtColors = removeColorList();
tShirtColors(shirtColors);
designChoices();
registerActivities();
paymentInfo();