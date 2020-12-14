<template>
  <div class="flex flex-col">
    <!-- Select Business -->
    <form v-if="selectBusiness" class="mt-5" @submit.prevent="enterPin">
      <div class="w-full relative">
        <select
          v-model="business"
          name="bank"
          class="text-sm bg-white font-display text-circle pl-2 py-2 rounded w-full focus:outline-none shadow-none border border-border font-display cursor-pointer"
        >
          <option value="" disabled selected>Select Business</option>
          <option
            v-for="(businessType, i) in businessName"
            :key="i"
            :value="businessType.businessId"
            @click="business = businessType.businessid"
          >
            {{ businessType.name }}
          </option>
        </select>
      </div>
      <div class="mt-6 w-full">
        <button
          class="rounded-lg bg-watu text-text w-full focus:outline-none py-2 font-semibold font-display text-center"
          type="submit"
        >
          Proceed
        </button>
      </div>
    </form>
    <!-- Watu pin -->
    <div v-if="pin" class="mt-5">
      <div>
        <p class="text-lg font-display text-text font-semibold text-center">
          Watu Pin
        </p>
      </div>
      <div class="w-full mt-4">
        <p
          class="text-para w-3/4 mx-auto text-center text-base font-display font-light"
        >
          Kindly enter your six (6) digit Watu Pin to confirm payment.
        </p>
      </div>

      <form
        method="get"
        class="text-center mt-5"
        data-group-name="digits"
        data-autosubmit="false"
        autocomplete="on"
        @submit.prevent="submitPayment"
      >
        <div class="digit-group">
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
        </div>
        <div class="mt-6">
          <p
            class="text-base font-display text-text font-semibold text-center cursor-pointer"
            @click="cancelPayment"
          >
            Cancel Payment
          </p>
        </div>
        <div class="mt-5">
          <button
            class="rounded-lg bg-watu text-text w-full focus:outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
      <div class="mt-4">
        <p class="text-center text-sm text-text font-display cursor-pointer">
          don't have a watu pin? <b>Create Pin</b>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      business: '',
      businessName: [
        { name: 'Bytelabs ', businessId: 'Bytelabs ' },
        { name: 'Self Employed', businessId: 'Self Employed' },
        { name: 'Partnership', businessId: 'Partnership ' },
      ],
      pin: false,
      selectBusiness: true,
    }
  },
  methods: {
    enterPin() {
      this.pin = true
      this.selectBusiness = false
    },
    cancelPayment() {
      this.pin = false
      this.selectBusiness = true
    },
    submitPayment() {
      this.$router.push('/paymentFailure')
    },
  },
}
</script>
<style scoped>
.__pay {
  top: 9px;
  right: 14px;
}
.digit-group input {
  width: 30px;
  height: 30px;
  border: 1px solid #dde3e8;
  border-radius: 0.25rem;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  color: white;
  margin: 0 2px;
}

.prompt {
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
}
</style>
