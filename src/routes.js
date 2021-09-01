import HomePage from "../src/pages/HomePage";
import SignUpPage from "../src/pages/SignUpPage";
import LoginPage from "../src/pages/LoginPage";

//  let retereiveData =  localStorage.getItem("LoginDatacreD")

function refresh(to, from, next) {
  const retereiveData = localStorage.getItem("LoginDatacreD");

  console.log(retereiveData);

  if (retereiveData) {
    console.log(to);
    if (to.fullpath == "/LoginPage") {
      console.log("matlab value hai!");
      next();
    }
  } else {
    //    if(to.fullpath == "/" || to.fullpath == "/SignUpPage") {
    //       next()
    //    }
    console.log("matlab value nhai hai!");
    next();
  }
}
export default [
  {
    path: "/",
    component: HomePage,
    beforeEnter: refresh,
    name: HomePage,
  },
  {
    path: "/SignUpPage",
    component: SignUpPage,
    beforeEnter: refresh,
    name: SignUpPage,
  },
  {
    path: "/LoginPage",
    component: LoginPage,
    beforeEnter: refresh,
    name: LoginPage,
  },
];
