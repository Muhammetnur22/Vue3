<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      this.GStore.flashMessage = 'You are succesfully registered for' + this.event.title
      
      this.$router.push({
        name: 'EventDetails'
      })

      setTimeout(()=>{
        this.GStore.flashMessage = ''
      }, 3000)
    }
  }
}
</script>