<template>
  <div>
    <input type="email" @input="validate" v-model="data.email" />
    <div class="text-danger">
      {{ error[LoginField.Email] }}
    </div>
    <button @click="login" class="btn btn-dark">Login</button>
  </div>
</template>

<script lang="ts" setup>
enum LoginField {
  Email = "email",
  Password = "password",
  Username = "username",
}

const data = reactive({
  email: "",
  password: "",
  username: "",
});

const error = ref<{ [key in LoginField]?: string }>({});

function validate() {
  error.value = {};
  if (!data.email) {
    error.value[LoginField.Email] = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.value[LoginField.Email] = "Email is invalid";
  }
  return Object.keys(error.value).length === 0;
}

function login() {
  if (!validate()) return;
  console.log("login");
}
</script>

<style></style>
