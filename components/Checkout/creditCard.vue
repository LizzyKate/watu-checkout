<template>
  <div>
    <!-- Card Details -->
    <keep-alive>
      <form v-if="cardDetail" class="mt-2" @submit.prevent="submitCardDetails">
        <div class="border border-border rounded flex flex-col">
          <div class="mt-2 ml-8">
            <p class="text-text text-sm font-semibold font-display mb-0">
              Card Number
            </p>
          </div>
          <div class="mt-1 mx-4 relative">
            <div>
              <input
                v-model="cardNumber"
                type="text"
                placeholder="0000 0000 0000 0000"
                class="text-circle placeholder-circle pl-2 py-2 rounded text-xs focus:outline-none border border-border font-display w-full"
              />
            </div>
            <div class="absolute __pay">
              <img src="/pay.svg" alt="" />
            </div>
          </div>
          <div class="mt-3 mx-8 flex justify-between items-center">
            <div class="w-full">
              <p class="text-text text-sm font-semibold font-display mb-0">
                Card Expiry
              </p>
            </div>
            <div class="w-full">
              <p
                class="text-text text-center text-sm font-semibold font-display mb-0"
              >
                Cvv Number
              </p>
            </div>
          </div>
          <div class="mt-1 mx-4 mb-4 flex justify-between items-center">
            <div>
              <input
                v-model="cardExpiry"
                type="date"
                class="text-circle placeholder-circle pl-2 py-2 rounded text-xs focus:outline-none border border-border font-display w-full"
              />
            </div>
            <div class="ml-4">
              <input
                v-model="cvv"
                type="text"
                inputmode="numeric"
                class="text-circle placeholder-circle pl-2 py-2 rounded text-xs focus:outline-none border border-border font-display w-full"
              />
            </div>
          </div>
        </div>
        <div class="flex mt-4 items-center">
          <div class="cursor-pointer" @click="saveCard()">
            <div v-if="toggle">
              <i class="fas fa-toggle-on text-save text-base"></i>
            </div>
            <div v-else>
              <i class="fas fa-toggle-off"></i>
            </div>
          </div>
          <div>
            <p class="font-display text-text text-sm mb-0 ml-2">
              Save this card
            </p>
          </div>
        </div>
        <div class="w-full mt-6">
          <p
            class="text-base text-center text-text font-display font-semibold cursor-pointer"
            @click="useSavedCard()"
          >
            Use saved card
          </p>
        </div>
        <div class="mt-4">
          <button
            class="rounded-lg bg-watu text-text w-full focus:outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Proceed
          </button>
        </div>
      </form>
    </keep-alive>
    <!-- OTP -->
    <div v-if="otp" class="mt-5">
      <div>
        <p class="text-lg font-display text-text font-semibold text-center">
          Enter OTP
        </p>
      </div>
      <div class="w-full mt-4">
        <p
          class="text-para w-3/4 mx-auto text-center text-base font-display font-light"
        >
          Check your mail for a 6-digit password sent to you
        </p>
      </div>

      <form
        class="text-center mt-5"
        data-group-name="digits"
        data-autosubmit="false"
        autocomplete="on"
        @submit.prevent="paid"
      >
        <div class="digit-group">
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
          <input type="text" inputmode="numeric" autocomplete="one-time-code" />
        </div>
        <div class="mt-4">
          <button
            class="rounded-lg bg-watu text-text w-full focus:outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
    </div>
    <!-- Saved Card -->
    <div v-if="save" class="mt-2">
      <div
        v-for="card in savedCards"
        :key="card.id"
        class="border border-border rounded-lg bg-card flex justify-between items-center py-2 px-5 cursor-pointer"
        @click="submitCardDetails()"
      >
        <div>
          <p class="text-text text-base">{{ card.cardNo }}</p>
        </div>
        <div>
          <img src="/mastercard.svg" alt="" />
        </div>
      </div>
      <div class="mt-8">
        <p
          class="text-base font-display text-text font-semibold text-center cursor-pointer"
          @click="useAnotherCard()"
        >
          Use another card
        </p>
      </div>
      <!-- <div class="mt-4" @click="submitCardDetails()">
        <button
          class="rounded-lg bg-watu text-text w-full focus:outline-none py-2 font-semibold font-display text-center"
          type="submit"
        >
          Proceed
        </button>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardNumber: '',
      cardExpiry: '',
      cvv: '',
      toggle: false,
      save: false,
      // cardDetail: true,

      savedCards: [
        {
          id: 1,
          cardNo: '534898**********7553',
        },
      ],
    }
  },
  computed: {
    otp() {
      return this.$store.state.checkout.otp
    },
    cardDetail() {
      return this.$store.state.checkout.cardDetail
    },
  },
  methods: {
    saveCard() {
      this.toggle = !this.toggle
    },
    useSavedCard() {
      this.save = true
      // this.cardDetail = false
      this.$store.commit('checkout/hideCardDetail', false)
    },
    useAnotherCard() {
      this.save = false
      // this.cardDetail = true
      this.$store.commit('checkout/hideCardDetail', true)
    },
    submitCardDetails() {
      if (this.cardDetail) {
        // this.cardDetail = false
        this.$store.commit('checkout/hideCardDetail', false)
        this.$store.commit('checkout/getOtp', true)
        this.$store.commit('checkout/goBack', true)
      } else if (this.save) {
        this.save = false
        this.$store.commit('checkout/getOtp', true)
        this.$store.commit('checkout/goBack', true)
      }
    },
    paid() {
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
</style>
