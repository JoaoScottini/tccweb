<template>
  <v-row dense justify="center" class="top">
    <v-col lg="4">
      <v-card elevation="4" class="mx-auto padding-form">
        <v-card-text class="text-center">
          <h1>Login</h1>
        </v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="user.nome" :rules="rules" label="Usuário" required></v-text-field>

          <v-text-field type="password" v-model="user.senha" :rules="rules" label="Senha" required></v-text-field>

          <v-btn color="info" @click="login()">Acessar</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      user: {
        nome: "",
        senha: "",
      },
      valid: false,
      rules: [(v) => !!v || "Campo inválido"],
    }),
    methods: {
      login() {
      let params = {
        email: this.user.name,
        senha: this.user.password,
      };
      var url =
        "https://hire-you-app.herokuapp.com/api/Authentication/authenticate";
      this.request("post", url, params)
        .then((response) => {
          console.log(response.response.response);
        })
        .catch((error) => {
          console.log(error.error.response);
        });
    },

    },
  };
</script>
<style>
</style>