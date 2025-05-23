//LOGIN
document.getElementById('loginForm')?.adEventListener('submit', async (e) =>{
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const res = await fetch('/api/auth/login', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username, password})
    })
    if(res.ok){
        const data = await res.json()
        localStorage.setItem('token', data.token)
        window.location.href = 'home.html'
    } else {
        const msg = await res.text()
        document.getElementById('message').innerText = msg
    }
})



//DESLOGAR
function logout() {
    window.location.href = '/login.html'   
  }
  