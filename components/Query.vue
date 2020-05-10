<template>
  <div>
    <form v-on:submit.prevent="query">
      <div class="form-group">
        <label for="exampleInputEmail1">OpenCAP address</label>
        <input v-model="address" class="form-control" placeholder="Enter address">
      </div>
      <button type="submit" class="btn btn-primary" @click="query">
        Submit
      </button>
    </form>

    <div v-if="message" class="alert alert-primary mt-3" role="alert">{{ message }}</div>

    <p></p>

    <div class="row">
      <div v-for="(item, index) in addresses" :key="index" class="col-12">
        <AddressCard :address="item" />
      </div>
    </div>
  </div>
</template>

<script>
import AddressCard from './AddressCard.vue'

export default {
  components: {
    AddressCard
  },
  data () {
    return {
      address: 'ninja$vola.cash',
      message: '',
      addresses: []
    }
  },
  // define methods under the `methods` object
  methods: {
    async query () {
      this.$axios.setBaseURL(window.location.origin)

      try {
        const addresses = await this.$axios.$get('/api/query/' + this.address)
        this.addresses = addresses
      } catch (error) {
        console.log(error)
        if (error.response.data.error && error.response.data.error.message) {
          this.message = error.response.data.error.message
        } else if (error.response.data.code === 'ENOTFOUND') {
          this.message = 'Domain not found'
        } else {
          this.message = error
        }
      }
    }
  }
}
</script>

<style></style>
