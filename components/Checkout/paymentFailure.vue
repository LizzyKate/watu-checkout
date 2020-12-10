<template>
  <div class="relative">
    <div
      class="bg-white rounded-xl px-24 pt-24 pb-10 w-full flex flex-col items-center"
    >
      <div>
        <h2 class="font-semibold font-display text-text text-3xl">
          Payment Unsuccessful
        </h2>
      </div>
      <div class="w-3/5">
        <p class="text-text text-base font-display font-light text-center">
          Payment was not successfully made, Please try again.
        </p>
      </div>
      <div class="mt-10 w-full">
        <button
          class="rounded-lg bg-watu text-text w-full focus;outline-none py-2 font-semibold font-display text-center"
          type="submit"
        >
          Try Again
        </button>
      </div>
      <div class="mt-5">
        <p class="text-sm text-text font-semibold cursor-pointer">No thanks</p>
      </div>
    </div>
    <div class="absolute w-full __good flex justify-center items-center">
      <div class="rounded-full bg-body p-2">
        <img src="/failed.svg" class="mx-auto" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.__good {
  top: -42px;
}
</style>
