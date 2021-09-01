<template>
  <div>
    <button @click="RouteToSignUpPage">SignUpPage</button>

    <button @click="RouteToHomePage">Home Page</button>

    <h1>Login Page</h1>

    <div class="field">
      <label>Email</label>
      <div>
        <input type="email" v-model="EmailData" placeholder="abc@gmail.com" />
      </div>
    </div>

    <div>
      <label>Password</label>
      <div>
        <input v-model="PasswordData" placeholder="********" />
      </div>
    </div>

    <button @click="Submit" type="is-danger">Log in</button>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      PasswordData: "",
      EmailData: "",
    };
  },
  methods: {
    RouteToSignUpPage() {
      this.$router.push("/SignUpPage");
    },
    RouteToHomePage() {
      this.$router.push("/");
    },

    Submit() {
      let User = {
        Email: "",
        Password: "",
      };

      (User.Email = this.EmailData),
        (User.Password = this.PasswordData),
        localStorage.setItem("LoginDatacreD", JSON.stringify(User));
      // this.$router.push("/");
      (this.EmailData = ""), (this.PasswordData = "");
    },
  },
};
</script>

<style>
</style>