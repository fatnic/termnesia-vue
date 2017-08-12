export const profilePic = (state) => {
    if (state.user) {
        return state.user.photoURL ? state.user.photoURL : "http://i.pravatar.cc/100"
    }
    return ''
 }

 export const profileName = (state) => {
     if (state.user) {
         return state.user.displayName ? state.user.displayName : state.user.email
     }
     return ''
 }