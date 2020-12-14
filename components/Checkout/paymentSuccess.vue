<template>
  <div class="h-screen bg-body flex items-center justify-center">
    <div class="relative">
      <div
        class="bg-white rounded-xl px-24 pt-24 pb-10 w-full flex flex-col items-center"
      >
        <div>
          <h2 class="font-semibold font-display text-text text-3xl">
            Payment Successful
          </h2>
        </div>
        <div class="w-3/5">
          <p class="text-text text-base font-display font-light text-center">
            Payment has been successfully made and receipt sent to your mail.
          </p>
        </div>
        <div class="mt-5">
          <p class="text-base text-text font-semibold cursor-pointer">
            Generate Receipt
          </p>
        </div>
        <div class="mt-6 w-full">
          <button
            class="rounded-lg bg-watu text-text w-full focus:outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Thanks
          </button>
        </div>
      </div>
      <div class="absolute w-full __good flex justify-center items-center">
        <div class="rounded-full bg-body p-2 cursor-pointer">
          <img src="/good.svg" class="mx-auto" alt="" />
        </div>
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
