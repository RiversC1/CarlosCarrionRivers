const postReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD-USER':
            return state.concat([action.data])
        case 'EDIT-USER':
            return state.map((user)=> user.id === action.id ? { ...user, editing: !user.editing} : user)
        case 'UPDATE':
        return state.map((user)=>{
            if(user.id === action.id){
                return{
                    ...user,
                    firstName: action.data.newFirstName,
                    lastName: action.data.newLastName,
                    selectCountry: action.data.newSelectCountry,
                    editing: !user.editing
                }
            }else return user;
        })
        case 'DELETE-USER':
            return state.filter((user)=> user.id !== action.id)
        default:
            return state;
    }

}

export default postReducer;