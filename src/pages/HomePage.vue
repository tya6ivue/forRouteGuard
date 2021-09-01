<template>
 <div> 

  <!-- <navbar> 
      <template>
          <bavbar-item>
      </template>
  </navbar> -->

<button @click="RouteToSignUp">SignUp Page</button>
<button @click="RouteToLogin">Login Page</button>
     <h1>Home PAge</h1>
  </div>
</template>

<script>
export default {
  name: "HomePage",

methods: {
    RouteToSignUp() {
          this.$router.push("/SignUpPage");
    },
      RouteToLogin() {
          this.$router.push("/LoginPage");
    }
}

}
</script>

<style>

</style>