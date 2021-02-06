async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#userName').value.trim();
    const email = document.querySelector('#emailAdd').value.trim();
    const password = document.querySelector('#password1').value.trim();
    
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
        
      });
         console.log("#userName")
      // check the response status
      if (response.ok) {

        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);