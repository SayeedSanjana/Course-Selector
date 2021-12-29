<template>
  <div class="">
    <section class="flex flex-col md:flex-row h-screen justify-center mb-16 border border-purple-100">
      <!-- Body Starts -->
      <div class=" bg-white flex px-4" >
        <div class="md:max-w-md md:mx-auto w-full flex">
          <div class="w-full mt-5 ">
          
            <h1 class="text-xl md:text-3xl font-bold leading-tight mt-2 text-left mb-3 text-gray-700">Sign Up
            </h1>

               <!-- Register form starts -->
            <form action="">

              <!-- Input name starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left ">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Full name <span class="text-xs text-gray-400 font-medium">(Should include A-Z, a-z and no special characters i.e' .,/# ' and no Dr./Mr.)</span></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input 
                        class="w-full -ml-10 h-11 pl-4 rounded outline-none bg-purple-100">
                    </div>
                  </div>
                </div>
                 <!-- Input name starts -->

                <!-- Input gender starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="md:w-1/2 w-full mr-3 mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1 bg-gray-100">Gender</label>
                    <div class="relative">
                      <select class="block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white bg-purple-100" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div class="md:w-1/2 w-full mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Date of Birth</label>
                    <div class=""> 
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input class="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none  pl-10 bg-purple-100" id="date" type="date">
                    </div>
                  </div>
                </div>
                <!-- Input gender end-->
                
                <!-- Input address starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Address</label>
                    <div class="flex ">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <textarea  type="text" class="w-full -ml-10 pl-4 pr-3 py-2 text-regal-teal rounded h-24 outline-none bg-purple-100"></textarea>
                    </div>
                  </div>
                </div>
                <!-- Input address end -->
                
                 <!-- Input phone starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1  text-regal-teal">Phone <span class="text-xs text-gray-400 font-medium">(Should include only digits i.e 0-9)</span></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input  type="text" class="w-full -ml-10 h-11 py-2 pl-4 rounded outline-none bg-purple-100">
                    </div>
                  </div>
                </div>
                <!-- Input phone ends -->
                
                <!-- Input email starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1  text-regal-teal">Email</label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input class="w-full -ml-10 h-11 py-2 pl-4 text-regal-teal rounded outline-none bg-purple-100" >
                    </div>
                  </div>
                </div>
                <!-- Input email ends -->

                <!-- Input password starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1  text-regal-teal">Password <span class="text-xs text-gray-400 font-medium">(Should include 0-9,A-Z, a-z and special characters)</span></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input  type="password" class="w-full -ml-10 h-11 py-2 pl-4 rounded outline-none bg-purple-100">
                    </div>
                  </div>
                </div>
                <!-- Input password ends -->

                <!-- Button for creating new account -->
                <div class="flex justify-center -mx-1 border-b border-gray-300 2xl:-mr-12 mt-2">
                  <div class="w-full mb-2">
                    <button class="block w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold bg-purple-700">Create New Account</button>
                  </div>
                </div>

                <!-- Button for login-->
                <div class="flex justify-center 2xl:-mr-12 -mx-1">
                  <div class="w-full ">
                    <h3 class="text-sm mb-1 text-gray-700">Aready Have An Account?</h3>
                    <router-link to="/" class="block w-64 max-w-xs mx-auto text-gray-700 rounded-lg py-3 font-semibold bg-purple-300">Login</router-link>
                  </div>
                  <!-- <router-link to="/" class="hover:text-indigo-800 text-blue-700" > Sign In Instead </router-link> -->
                </div>
            </form>
               <!-- Register form  ends -->

          </div>
        </div>

      </div>
      <!-- Body Ends -->

    </section>

  </div>
</template>


<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>