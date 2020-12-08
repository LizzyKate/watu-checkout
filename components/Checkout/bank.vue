<template>
  <div class="flex flex-col">
    <div class="mt-5 hidden">
      <div class="w-full">
        <p class="text-text text-center font-display text-base font-semibold">
          Select Bank
        </p>
      </div>
      <div class="mt-5 w-full relative">
        <button
          class="text-sm font-display look w-full focus:outline-none shadow-none border-0 cursor-pointer rounded inline-flex justify-between items-center relative"
        >
          <input
            v-model="bank"
            placeholder="Bank"
            class="text-circle placeholder-circle pl-2 py-1 rounded text-xs focus:outline-none border border-border font-display w-full"
          />
          <svg
            class="fill-current h-4 w-4 absolute __pay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-5 hidden">
      <div class="w-full">
        <p class="text-text text-center font-display text-base font-semibold">
          Select Account
        </p>
      </div>
      <div class="mt-5 w-full relative">
        <button
          class="text-sm font-display look w-full focus:outline-none shadow-none border-0 cursor-pointer rounded inline-flex justify-between items-center relative"
        >
          <input
            v-model="bank"
            placeholder="Account"
            class="text-circle placeholder-circle pl-2 py-1 rounded text-xs focus:outline-none border border-border font-display w-full"
          />
          <svg
            class="fill-current h-4 w-4 absolute __pay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
      </div>
      <div class="mt-4">
        <p class="text-base font-display text-text font-semibold text-center">
          Use different account
        </p>
      </div>
    </div>
    <div class="mt-3">
      <div class="w-full">
        <p
          class="text-para w-3/4 mx-auto text-center text-sm font-display font-light"
        >
          Dial the code below on your mobile phone to complete the payment
        </p>
      </div>
      <div class="mt-4 w-full">
        <p class="text-content font-display font-medium text-lg text-center">
          *737*51*000#
        </p>
      </div>
      <div class="mt-3">
        <div class="border-t border-border w-3/4 mx-auto"></div>
        <div class="flex justify-between items-center mt-2 w-3/4 mx-auto">
          <div>
            <p class="text-sm font-display text-circle">Reference code:</p>
          </div>
          <div>
            <p class="text-sm font-display text-content">9742</p>
          </div>
        </div>
        <div class="border-t border-border w-3/4 mt-1 mx-auto"></div>
        <div class="mt-4">
          <p class="text-sm text-text font-display text-center">
            Click here to copy code
          </p>
        </div>
        <div class="mt-5">
          <p class="text-base font-display text-text font-semibold text-center">
            Choose Another Account
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped>
.contest {
  background-color: #012241;
}
.__pay {
  top: 9px;
  right: 14px;
}
</style>
