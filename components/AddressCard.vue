<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-auto">
        <img v-if="address.extensions.avatar" :src="address.extensions.avatar" class="img-fluid" alt="">
      </div>
      <div class="col">
        <div class="card-block p-2">
          <h4 class="card-title">
            {{ address.address_type | toAddressTypeName }}
          </h4>
          <p class="card-text">
            {{ address.address }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
