<template>
  <div class="flex flex-col">
    <div class="mt-5 w-full relative hidden">
      <button
        class="text-sm font-display look w-full focus:outline-none shadow-none border-0 cursor-pointer rounded inline-flex justify-between items-center relative"
      >
        <input
          v-model="bank"
          placeholder="Select Business"
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
    <div class="mt-5">
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
        autocomplete="off"
      >
        <div class="digit-group">
          <input id="digit-1" type="text" name="digit-1" data-next="digit-2" />
          <input
            id="digit-2"
            type="text"
            name="digit-2"
            data-next="digit-3"
            data-previous="digit-1"
          />
          <input
            id="digit-3"
            type="text"
            name="digit-3"
            data-next="digit-4"
            data-previous="digit-2"
          />

          <input
            id="digit-4"
            type="text"
            name="digit-4"
            data-next="digit-5"
            data-previous="digit-3"
          />
          <input
            id="digit-5"
            type="text"
            name="digit-5"
            data-next="digit-6"
            data-previous="digit-4"
          />
          <input
            id="digit-6"
            type="text"
            name="digit-6"
            data-previous="digit-5"
          />
        </div>
        <div class="mt-6">
          <p class="text-base font-display text-text font-semibold text-center">
            Pay with another Business
          </p>
        </div>
        <div class="mt-5">
          <button
            class="rounded-lg bg-watu text-text w-full focus;outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
      <div class="mt-4">
        <p class="text-center text-sm text-text font-display">
          don't have a watu pin? <b>Create Pin</b>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
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
