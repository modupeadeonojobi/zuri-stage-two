const form = document.getElementById('contactForm');
const error = document.getElementById('message-warning');
const success = document.getElementById('message-success');
const spinner = document.getElementById('image-loader')


document.addEventListener("submit", (e) => {
    e.preventDefault();
 

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
   

    console.log(formProps, 'tfygkhjkl')
      spinner.style.display = "inline";

    fetch('https://form-zuri-stage-two.herokuapp.com/api/form', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formProps)
    }
    ).then (
        response =>{
            if (response.ok) {
                response.json()
                success.style.display = "block";
                spinner.style.display = "none";
                document.getElementById('contactForm').reset();
                
            } else {
                error.style.display = "block";
                spinner.style.display = "none";
            }

        
        } 
    )


});



