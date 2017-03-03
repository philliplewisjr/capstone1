


app.factory("authFactory", function($q){
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
      return firebase.auth().signInWithEmailAndPassword(user_email, user_password)
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
    getUser : ()=>{
      console.log("hi")
      return $q((resolve, reject)=>{
        console.log("hi2")
        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
          unsubscribe();
          console.log(user)
          if(user) {
            resolve(user);
            $('.logIn').addClass("ng-hide")
            $('.logOut').removeClass("ng-hide")
            $('.general2').removeClass("ng-hide")
          } else {
            reject("Not logged in");
            $('nav.logOut').addClass('ng-hide')
            $('nav.logIn').removeClass('ng-hide')
            $('nav.general2').addClass('ng-hide')
          }
        })
      })

    },
    logOut : ()=>{
      return firebase.auth().signOut()
    }
  }
})
