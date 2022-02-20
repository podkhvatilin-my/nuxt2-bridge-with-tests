<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "TestComponent",

  props: {
    message: {
      type: String,
      default: 'Hello world'
    }
  }
}
</script>
