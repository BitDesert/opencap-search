<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail1">OpenCAP address</label>
      <input v-model="address" class="form-control" placeholder="Enter address">
    </div>
    <button type="submit" class="btn btn-primary" @click="query">
      Submit
    </button>

    <p>{{ message }}</p>

    <div class="row">
      <div v-for="(item, index) in addresses" :key="index" class="col-3">
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
      try {
        const addresses = await this.$axios.$get('/api/query/' + this.address)
        this.addresses = addresses
      } catch (error) {
        this.message = error.response.data.error.message
      }
    }
  }
}
</script>

<style></style>
