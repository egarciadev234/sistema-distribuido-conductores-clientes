<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Conductor
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Nombre">
          <b-form-input id="name" :state="state" v-model.trim="conductor.name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Email">
          <b-form-input id="email" :state="state" v-model.trim="conductor.email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Telefono">
          <b-form-input id="cellphone" :state="state" v-model.trim="conductor.cellphone"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Vehiculo">
          <b-form-input id="vehiculo" :state="state" v-model.trim="conductor.vehiculo"></b-form-input>
        </b-form-group>
        
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Password">
          <b-form-input id="password" :state="state" v-model.trim="conductor.password"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Verificar password">
          <b-form-input id="verify-password" :state="state" v-model.trim="conductor.verify_password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Registrarse</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateConductor',
  data () {
    return {
      conductor: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/conductor`, this.conductor)
      .then(response => {
        this.$router.push({
          name: 'ShowBook',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>