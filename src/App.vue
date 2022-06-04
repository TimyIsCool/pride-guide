<template>

  <body>
    <nav class="navBar">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center cursor-pointer">
              <router-link to="/">
                <img class="block lg:hidden h-8 w-auto" src="https://cdn.myprojects.lol/what-is.gay.png" alt="Workflow">
                <img class="hidden lg:block h-8 w-auto" src="https://cdn.myprojects.lol/what-is.gay.png" alt="Workflow">
              </router-link>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="ml-3 relative hidden sm:block">
              <div>
                <router-link to="/" class="btn text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page hidden sm:block">Home</router-link>
                <!-- <router-link to="/resources" class="btn text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page hidden sm:block">Resources</router-link> -->
                <router-link to="/donate" class="btn text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page hidden sm:block">Donate to LGBT charities</router-link>
                <a class="text-xl rounded-full btn px-3 py-2" href="https://github.com/bchurton/what-is.gay"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3">
          <router-link to="/" class="text-black btn block px-2 py-2 rounded-md text-base font-medium">Home</router-link>
          <!-- <router-link to="/resources" class="text-black btn block px-2 py-2 rounded-md text-base font-medium">Resources</router-link> -->
          <router-link to="/donate" class="text-black btn block px-2 py-2 rounded-md text-base font-medium">Donate to LGBT charities</router-link>
          <a class="text-xl rounded-full btn px-3 py-2" href="https://github.com/bchurton/what-is.gay"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </nav>

    <router-view />

    <div id="exitButton">
      <button onclick="location.replace('https://google.com')" class="exitButton">Exit site</button>
    </div>
    
    <div class="mb-12 mt-2">
      <p class="mb-2">Thank you for taking the time to read this site ❤</p>
    </div>
  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.pride {
  background: url(https://what-is.gay/pride.png) 0 0 / cover no-repeat;
  color: #de466c;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
body {
  background: #EEEEEE;
}
.navBar {
  background: #ffffff;
}
.btn {
  background: #ffffff;
  transition:0.3s;
}
.btn:hover {
  background: #EEEEEE;
}
.exitButton {
  background-color : #b8b6b6;
  transition: 0.5s;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}
.exitButton:hover {
  background-color : #949292;
}
#exitButton {
  position: fixed;
  bottom: 5px;
  right: 10px;
}
</style>
