export default function login(state={
	login: false,
	data: [],
	error: null,
}, action){
	switch(action.type){
		case 'LOGIN_SUCCESSUL' : {
			return {...state, login: true}
		}
		case 'LOGIN_FAILED' : {
			return {...state, login: false, error: 'The credentials were not correct'}
		}
		default : {
			return {...state}
		}
	}
}