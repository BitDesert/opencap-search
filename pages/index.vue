<template>
  <div class="container">
    <div>
      <h1 class="title text-center">
        OpenCAP address tester
      </h1>
      <query />
    </div>
    <div class="footer mt-3">
      <ul class="list-inline">
        <li class="list-inline-item"><a href="https://github.com/BitDesert/opencap-test">GitHub</a></li>
        <li class="list-inline-item"><a href="https://github.com/opencap/protocol">OpenCAP protocol</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Query from '~/components/Query.vue'

export default {
  components: {
    Query
  }
}
</script>

<style>
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
