//When the page first loads, the first text field should be in focus by default.

const name = document.getElementById('name');
name.focus();




title.addEventListener('click', (e) => {
    //not sure if i did this part right
    const title = document.getElementById('title');
    console.log(title.value);
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
}

const tShirtColors = (colorChoices) =>{

    for(let i = 0; i < colorChoices.length; i++){
        console.log(colorChoices[i]);
    } 

}


/*design.addEventListener('click', (e) => {
    const color = document.getElementById('color');
    const colorOptions = color.getElementsByTagName('option');
    const parent  = colorOptions[0].parentNode;

    console.log(design.value);

    if(design.value  == 'Select Theme') {
       // tShirtColorHidden();     
        
    } else if (design.value == '') {
       /* // put colorOptionList back into the color 
            //make item selectable
            for(let i = 0; i < colorOptionsList.length; i++){
                parent.appendChild(colorOptionsList[i]);
            } 

           console.log(); 
    }

});
*/
 const colorOptions = createOption();
 removeColorList();
//tShirtColorHidden();