import HomePage from "../src/pages/HomePage";
import SignUpPage from "../src/pages/SignUpPage";
import LoginPage from "../src/pages/LoginPage";

// const router = new VueRouter({ ... })

function refresh(to, from, next) {
  const retereiveData = localStorage.getItem("LoginDatacreD");

  //   console.log(retereiveData,retereiveData && Object.keys(retereiveData).length);

  if (retereiveData && Object.keys(retereiveData).length) {
    if (to.fullPath == "/LoginPage") {
      //   console.log("matlab value hai!");
      next();
    } else {
      next("/LoginPage");
    }
  } else {
    // console.log("matlab value nhai hai!");
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
