export function loggedIn(username, email){
	return function(dispatch){
		if(username === 'asdf@asdf.com' && email === '1234'){
			dispatch({type: 'LOGIN_SUCCESSUL'})
		}
		else{
			dispatch({type: 'LOGIN_FAILED'})
		}
	}
}