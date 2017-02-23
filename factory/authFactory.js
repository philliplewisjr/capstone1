


app.factory("authFactory", function(){
  console.log("authFactory working")

  return {
    getAuth : (user_email, user_password)=>{
      console.log(user_email, user_password)
      return firebase.auth().createUserWithEmailAndPassword(user_email, user_password)
      .then((data)=>{
        console.log(data.uid)
        return UID = data.uid
      })
    },
    setter: (user_email, user_password)=>{
      return firebase.auth().signInWithEmailAndPassword(user_eamil, user_password)
      .then((data)=>{
        console.log(data)
        return data
      })
      .catch ((data)=> {
        return data
      })
    },
    getUID : ()=>{
      return UID = firebase.auth().currentUser
    },
    logOut : ()=>{
      return firebase.auth().signOut()
    }
  }
})
