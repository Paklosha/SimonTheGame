<template>
  <div class="home">
    <FormValidation></FormValidation>
  </div>
</template>

<script>
// @ is an alias to /src
import FormValidation from '@/components/FormValidation.vue'
export default {
  name: 'Home',
  components: {
    FormValidation
  }
}
</script>