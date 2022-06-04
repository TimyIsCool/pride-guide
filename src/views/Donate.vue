<template>

    <div id="mainContent" class="mt-8 sm:w-1/2 m-auto space-y-8 mb-8">
      <h1 class="text-4xl sm:text-5xl font-extrabold">Donate to <span class="pride">LGBT</span> charities!</h1>
      <div class="mx-5 mt-3" id="pride">
        <h1 class="text-2xl sm:text-3xl font-extrabold">Here are some charities we recommend donating to:</h1>
        <br>

        <div class="sm:w-3/4 m-auto text-left">
          <div class="mb-4 border-l-4 border-yellow-500 text-yellow-900 bg-yellow-100 rounded px-4 py-3">
              <div class="flex items-start">
                <div class="py-1">
                  <svg class="fill-current h-6 w-6 mr-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
                  </svg>
                </div>

                <div>
                  <h3 class="font-semibold">Disclaimer</h3>

                  <p class="text-sm text-yellow-700">
                    We suggest these charities, however, feel free to donate to whichever charity you wish.
                  </p>
                </div>
              </div>
            </div>
        </div>
        
        <div class="w-2/3 m-auto">
          <div class="flex justify-center">
            <div class="flex items-center">
              <img src="https://www.thetrevorproject.org/wp-content/uploads/2021/09/METADATA_IMG_ORANGE-BG.jpg" class="rounded-2xl h-28">
              <div class="text-left ml-2">
                <div>
                  <p class="font-bold">Trevor Project US</p>
                  <p>Suicide prevention line</p>
                  <p><a href="https://www.thetrevorproject.org/" class="underline">Website <i class="fas fa-link"></i></a></p>
                </div>
              </div>
            </div>
          </div>

          <br>

          <div class="flex justify-center">
            <div class="flex items-center">
              <img src="https://www.switchboard.org.uk/wp-content/uploads/2018/07/switchboard.jpg" class="rounded-2xl h-28">
              <div class="text-left ml-2">
                <div>
                  <p class="font-bold">Switchboard LGBT UK</p>
                  <p>LGBT support helpline</p>
                  <p><a href="https://switchboard.lgbt/" class="underline">Website <i class="fas fa-link"></i></a></p>
                </div>
              </div>
            </div>
          </div>

          <br>

          <div class="flex justify-center">
            <div class="flex items-center">
              <img src="https://images.squarespace-cdn.com/content/v1/5a4691e19f07f5d01c0a3df3/1613600987439-HKCNBTY344PR1H37Q0MS/Trans+Lifeline+Logo.png" class="rounded-2xl h-28">
              <div class="text-left ml-2">
                <div>
                  <p class="font-bold">Trans Lifeline US & CA</p>
                </div>
                <div>
                  <p>LGBT crisis hotlne</p>
                  <p><a href="https://www.translifeline.org/" class="underline">Website <i class="fas fa-link"></i></a></p>
                </div>
              </div>
            </div>
          </div>

          <br>

          <div class="flex justify-center">
            <div class="flex items-center">
              <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1410875564/hlcl6zhwfmonalcyehqq.png" class="rounded-2xl h-28">
              <div class="text-left ml-2">
                <div>
                  <p class="font-bold">It Gets Better Project</p>
                </div>
                <div>
                  <p>LGBT crisis hotlne</p>
                  <p><a href="https://itgetsbetter.org/" class="underline">Website <i class="fas fa-link"></i></a></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
</template>

<script>

export default {
  name: 'DonatePage',
  components: {
  }
}
</script>
