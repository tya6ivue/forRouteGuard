<template>
  <div>
    <button @click="RouteToSignUpPage">Login Page</button>

    <button @click="RouteToHomePage">Home Page</button>
    <h1>Sign Up Page</h1>
  </div>
</template>

<script>
export default {
  name: "Page3",
  methods: {
    RouteToHomePage() {
      this.$router.push("/");
    },
    RouteToSignUpPage() {
      this.$router.push("/LoginPage");
    },
  },
};
</script>

<style>
</style>