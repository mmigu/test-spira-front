<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      label="E-mail"
      :rules="[(v) => !!v || 'Email es requerido']"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :counter="10"
      :rules="[(v) => !!v || 'Contraseña es requerido']"
      :type="'password'"
      label="Contraseña"
      required
    ></v-text-field>

    <v-btn class="mr-4" @click="login">
      Ingresar
    </v-btn>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import UserDataService from "../services/UserDataService";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required },
    email: { required, email },
  },

  data: () => ({
    password: "",
    valid: true,
    email: "",
    submitted: null,
  }),

  methods: {
    async login() {
      try {
        console.log("Se va a iniciar sesión");

        if (!this.$refs.form.validate()) {
          return console.log("no se envian datos");
        }

        var data = {
          email: this.email,
          password: this.password,
        };
        var login = await UserDataService.login(data);
        if (login.data.cod === 0) {
          this.$router.push({ path: "/admin" });
        }
        this.submitted = true;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
