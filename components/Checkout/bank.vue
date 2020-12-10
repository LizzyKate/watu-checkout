<template>
  <div class="flex flex-col">
    <!-- Select Bank -->
    <div class="mt-8 hidden">
      <div class="w-full">
        <p class="text-text text-center font-display text-base font-semibold">
          Select Bank
        </p>
      </div>
      <form class="mt-5 w-full">
        <select
          v-model="bankName"
          name="bank"
          class="text-sm font-display text-circle pl-2 py-2 rounded w-full focus:outline-none shadow-none border border-border font-display cursor-pointer"
        >
          <option value="" disabled selected>Bank</option>
          <option
            v-for="(bankType, i) in bank"
            :key="i"
            :value="bankType.bankId"
            @click="bankName = bankType.bankid"
          >
            {{ bankType.bankName }}
          </option>
        </select>
        <div class="mt-6 w-full">
          <button
            class="rounded-lg bg-watu text-text w-full focus;outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
    <!-- Select Account -->
    <div class="mt-5 hidden">
      <div class="w-full">
        <p class="text-text text-center font-display text-base font-semibold">
          Select Account
        </p>
      </div>
      <form class="mt-5 w-full">
        <select
          v-model="accountName"
          name="bank"
          class="text-sm font-display text-circle pl-2 py-2 rounded w-full focus:outline-none shadow-none border border-border font-display cursor-pointer"
        >
          <option value="" disabled selected>Account</option>
          <option
            v-for="(accountType, i) in account"
            :key="i"
            :value="accountType.accountId"
            @click="accountName = accountType.accountId"
          >
            {{ accountType.accountName }}
          </option>
        </select>

        <div class="mt-6 w-full">
          <button
            class="rounded-lg bg-watu text-text w-full focus;outline-none py-2 font-semibold font-display text-center"
            type="submit"
          >
            Proceed
          </button>
        </div>
      </form>
      <!-- <div class="mt-4">
        <p class="text-base font-display text-text font-semibold text-center">
          Use different account
        </p>
      </div> -->
    </div>
    <!-- Bank Code -->
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
            Choose Another Bank
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bankName: '',
      accountName: '',
      bank: [
        { bankName: 'Uba Bank', bankId: 'Uba Bank' },
        { bankName: 'Fidelity Bank', bankId: 'Fidelity Bank' },
        { bankName: 'Access Bank', bankId: 'Access Bank' },
      ],

      account: [
        { accountName: 'Savings Account', accountId: 'Savings account' },
        {
          accountName: 'Fixed Deposit Account',
          accountId: 'Fixed Deposit Account',
        },
        { accountName: 'Current Account', accountId: 'Current Account' },
      ],
    }
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
