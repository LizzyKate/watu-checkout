<template>
  <section>
    <div class="flex min-h-screen relative">
      <div class="bg-body w-3/4 pt-12">
        <div class="flex justify-center item-center">
          <div class="flex flex-col">
            <div class="flex justify-between">
              <div class="flex items-center justify-between">
                <div>
                  <img src="/Nigeria.png" alt="" />
                </div>
                <div>
                  <p
                    class="text-lg font-display text-text mb-0 ml-4 font-medium"
                  >
                    Nigeria
                  </p>
                </div>
              </div>
              <div class="ml-64">
                <p class="text-lg font-display text-text mb-0 font-medium">
                  NGN
                </p>
              </div>
            </div>
            <!-- CreditCard -->
            <div
              class="mt-4 w-full bg-white rounded-lg pt-10 pb-8 px-10 flex flex-col"
            >
              <div class="flex items-start">
                <div class="rounded-full border border-circle w-5 h-5"></div>
                <div class="ml-3 flex flex-col">
                  <div>
                    <p
                      class="text-content text-lg font-display mb-0 fontmedium"
                    >
                      Credit Card
                    </p>
                  </div>
                  <div>
                    <p class="text-para text-sm font-display font-light">
                      Safe money transfer using your card.
                    </p>
                  </div>
                </div>
                <div class="flex items-center flex-grow justify-end hidden">
                  <div>
                    <i class="fas fa-angle-left text-text text-base"></i>
                  </div>
                  <div class="ml-2">
                    <p
                      class="text-text text-base font-display font-medium mb-0"
                    >
                      Back
                    </p>
                  </div>
                </div>
              </div>
              <CreditCard />
            </div>
            <!-- Bank -->
            <div
              class="mt-4 w-full bg-white rounded-lg pt-10 pb-8 px-10 flex flex-col"
            >
              <div class="flex items-start">
                <div class="rounded-full border border-circle w-5 h-5"></div>
                <div class="ml-3 flex flex-col">
                  <div>
                    <p
                      class="text-content text-lg font-display mb-0 fontmedium"
                    >
                      Bank USSD
                    </p>
                  </div>
                  <div>
                    <p class="text-para text-sm font-display font-light">
                      Safe money transfer using bank USSD
                    </p>
                  </div>
                </div>
              </div>
              <Bank />
            </div>
            <!-- Watu -->
            <div
              class="mt-4 w-full bg-white rounded-lg pt-10 pb-8 mb-8 px-10 flex flex-col"
            >
              <div class="flex items-start">
                <div class="rounded-full border border-circle w-5 h-5"></div>
                <div class="ml-3 flex flex-col">
                  <div>
                    <p
                      class="text-content text-lg font-display mb-0 fontmedium"
                    >
                      Watu
                    </p>
                  </div>
                  <div>
                    <p class="text-para text-sm font-display font-light">
                      Safe money transfer using Watu Wallet
                    </p>
                  </div>
                </div>
              </div>
              <Watu />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white w-1/4 pt-10 px-8 flex flex-col border border-border fixed right-0"
      >
        <div>
          <p class="text-lg text-text font-display mb-0">Pay to:</p>
        </div>
        <div class="mt-5">
          <img src="/logo.png" alt="" />
        </div>
        <div class="mt-3">
          <p class="text-lg text-text font-display font-semibold mb-0">
            Bytelabs Technologies Limited
          </p>
        </div>
        <div class="mt-1">
          <p class="text-base text-text font-display font-thin mb-0">
            3, Lawal Street, Off MKO Abiola Way, Ring Road. Ibadan, Oyo State,
            Nigeria
          </p>
        </div>
        <div class="mt-2">
          <a
            href="tel:+234 (0906) 000-1461"
            class="font-thin text-text font-display text-sm"
            >+234 (0906) 000-1461</a
          >
        </div>
        <div class="mt-8 border border-border w-full"></div>
        <div class="mt-10 flex justify-between items-center">
          <div>
            <p class="text-lg text-text font-display mb-0">Email:</p>
          </div>
          <div>
            <a
              href="mailto:telefalola@gmail.com"
              class="text-text font-hairline text-lg font-display"
              >telefalola@gmail.com</a
            >
          </div>
        </div>
        <div class="mt-4 flex justify-between items-center">
          <div>
            <p class="text-lg text-text font-display mb-0">Amount:</p>
          </div>
          <div>
            <p class="text-text font-hairline text-lg font-display mb-0">
              ₦145,000
            </p>
          </div>
        </div>
        <div class="mt-4 flex justify-between items-center">
          <div>
            <p class="text-lg text-text font-display mb-0">Charge (1.4%) :</p>
          </div>
          <div>
            <p class="text-text font-hairline text-lg font-display mb-0">
              ₦2,030
            </p>
          </div>
        </div>
        <div class="mt-4 flex justify-between items-center">
          <div>
            <p class="text-lg text-text font-display mb-0 font-semibold">
              Total:
            </p>
          </div>
          <div>
            <p
              class="text-text font-hairline text-lg font-display mb-0 font-semibold"
            >
              ₦147,030
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- generate payment success -->
    <div class="h-screen bg-body flex items-center justify-center hidden">
      <Success />
    </div>
    <!-- generate payment failure -->
    <div class="h-screen bg-body flex items-center justify-center hidden">
      <Failure />
    </div>
  </section>
</template>
<script>
import CreditCard from './creditCard'
import Bank from './bank'
import Watu from './watu'
import Success from './paymentSuccess'
import Failure from './paymentFailure'
export default {
  components: {
    CreditCard,
    Bank,
    Watu,
    Success,
    Failure,
  },
}
</script>
<style scoped></style>
