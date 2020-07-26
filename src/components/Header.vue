<template>
<div class="footer-bg">
    <div class="container">
        <nav class="flex items-center justify-between flex-wrap footer-bg pt-3 pb-0">
            <div class="flex items-center flex-shrink-0 c-logo mr-5">
                  <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                  <span class="font-semibold text-xl tracking-tight">Omar DEV</span>
            </div>

            <!-- button menu mobile -->
            <div class="block lg:hidden">
                  <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
            </div>


            <div class="w-full block flex-grow  lg:flex lg:items-center lg:w-auto">
                <div class="text-sm  text-gray-600 lg:flex-grow">
                    <button class="hover:bg-gray-400  py-2 px-3 rounded inline-flex items-center">
                        <span class="flex rounded-full bg-gray-500  px-2 py-2 text-xs font-bold mr-3"></span>
                        <span class="underlined-example">Personal</span>
                    </button>
                    <button class="hover:bg-gray-400  py-2 px-4 rounded inline-flex items-center">
                        <span class="flex rounded-full bg-gray-400  px-2 py-2 text-xs font-bold mr-3"></span>
                        <span class="underlined-example">Business</span>
                    </button>
                </div>

                <div class="text-sm  text-gray-600 lg:flex-grow">
                    <a  class="underlined-example block  lg:inline-block lg:mt-0  hover:text-white mr-4">
                        About
                    </a>
                    <a class="underlined-example block  lg:inline-block lg:mt-0  hover:text-white mr-4">
                      Pricing
                    </a>
                    <a  class=" underlined-example block  lg:inline-block lg:mt-0  hover:text-white mr-4">
                      FAQ
                    </a>
                     <a  class="underlined-example block  lg:inline-block lg:mt-0  hover:text-white mr-4">
                      Contact Us
                    </a>
                </div>

                
                <div>
                    <a class=" inline-block b-t-c text-xs px-4 py-3 leading-none    hover:border-transparent hover:text-teal-500 hover:bg-white" data-toggle="modal" data-target="#signinModal">
                       <span class="underlined-example">
                           Log in
                        </span> 
                    </a>
                    <!-- Modal -->
                    <div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">sign in</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- Sign in form -->
                                    <div class="w-full max-w-xs" style="margin: 5px auto;">
                                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                                    Username
                                                </label>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                            </div>
                                            <div class="mb-6">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                                    Password
                                                </label>
                                                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                                                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                    Sign In
                                                </button>
                                                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                        </form>
                                        <p class="text-center text-gray-500 text-xs">
                                        some goes here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="inline-block b-t-c text-xs px-4 py-3 leading-none rounded-full  bg-gr-light   hover:border-transparent hover:text-teal-500 hover:bg-white" data-toggle="modal" data-target="#signupModal">Join now</a>
                     <!-- Modal -->
                    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">sign up</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- Sign up form -->
                                    <form class="w-full max-w-lg">
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                    First Name
                                                </label>
                                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                                            </div>
                                            <div class="w-full md:w-1/2 px-3">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full px-3">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                    Email
                                                </label>
                                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="email@email.com">
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full px-3">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                    Password
                                                </label>
                                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
                                                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 mb-2">
                                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                                    City
                                                </label>
                                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                                            </div>
                                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                                    State
                                                </label>
                                                <div class="relative">
                                                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        <option v-for="(state, index) in states" :key="index">{{ state }}</option>
                                                    </select>
                                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                                    Zip
                                                </label>
                                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0"></div>
                                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                                Sign Up
                                            </button>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- end Sign up form -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>


</template>

<script>
export default {
    data () {
        return {
            states: ['New Mexico', 'Missouri', 'Texas']
        }
    }
}
</script>

<style>

</style>
