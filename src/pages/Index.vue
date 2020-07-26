<template>
<div id="app">
    <!-- Header body -->
    <div class="footer-bg pt-5 pb-5">
        <div class="container">
            <div class="row" >
                <div class="col-12 col-md-6 d-flex align-items-center pt-5 pb-5">
                    <div >
                        <h1 class="font-semibold c-title"> Just drive.</h1>
                        <h1 class="font-semibold c-title mb-4"> We'll do the reset.</h1>
                        <span class="text-gray-600 text-sm ">
                            All-inclusive,usage-based car subscriptions.
                        </span>
                        <form class="w-full max-w-sm mt-4">
                            <div class="flex items-center">
                                <input class="border-b border-b-2 border-color appearance-none bg-transparent  w-full text-gray-400 mr-4 py-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone number">
                                <button class="bg-logo flex-shrink-0  hover:bg-teal-700  hover:border-teal-700 text-xs  text-white py-3 px-4 rounded-full" type="button">
                                    Get started
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center pt-5 pb-5">
                    <img src="@/assets/img/drive.jpg" class="rounded-lg">
                </div>
            </div>
        </div>
    </div>
    <!-- end Header body -->



    <!--  logos -->
    <div class="bg-white">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-2">
                    <img class="logos" src="@/assets/img/business.png">
                </div>

                <div class="col-2">
                    <img  class="logos" src="@/assets/img/wired.png">
                </div>

                <div class="col-2">
                    <img style="    width: 128px;    height: 50px;" src="@/assets/img/urban.png">
                </div>

                <div class="col-2">
                    <img  class="logos" src="@/assets/img/metropolis.png">
                </div>

                <div class="col-2">
                   <img style="    width: 128px;height: 53px;" src="@/assets/img/curbed.png">
                </div>

                <div class="col-2 d-flex justify-content-center">
                   <i class="fa fa-arrow-down"></i>
                </div>
            </div>
        </div>
    </div>


    <!-- About Section -->
    <section  class="bg-white">
        <div class="container">
            <div class="row ">

                <!-- rating -->
                <div class="col-12 col-md-6 pt-5 pb-5">
                        <div class="flex content-center text-left">

                            <div class="w-1/3" style="z-index: 0;">
                                <img src="@/assets/img/img.jpg">
                            </div>

                            <div  class="w-3/3 p-4 bg-service text-white card-rating">
                                <div  class="text-white text-sm border-l border-gray-500 pl-2">
                                    "Since becoming a monthly subscribe , i feel like <br> 
                                    i have my car back again, It's like Iown a car without <br>
                                    the worries or cost of keeping it around all t time "
                                </div>
                               <div class="row d-flex align-items-center pt-3">
                                    <div class="col-6  col-md-6 col-lg-6 pl-4">
                                        <span class="d-flex align-items-center">
                                            <img class="rounded-full img-avatar" src="@/assets/img/avatar.png"/>
                                            <span class="text-xs ml-3">
                                                Omar
                                            </span>
                                        </span>
                                        
                                    </div>
                                    <div class="col-5  col-md-5 col-lg-5 text-right">
                                        <span class="d-flex justify-content-end text-xs font-semibold ">
                                            <svg v-for="i in 5" :key="i" viewBox="0 0 24 24"  class="h-4 w-4 fill-current text-white-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                                            </svg>
                                        </span>
        
                                        <small class="text-xs text-gray-600">
                                            28 reviews at Yelp
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <!-- ABOUT US -->
                <div class="col-12 col-md-6 pt-5 pb-5">
                    <div class="d-flex align-items-center  font-bold" >
                        <span class="c-logo text-xs"> 01 </span> 
                        <hr class="ml-2 mr-2 w-10 border-2"> 
                        <span class="c-logo text-xs">ABOUT US</span>
                    </div>
                    <h2 class="c-title text-3xl mt-3 mb-3">
                        Let's make cities better
                    </h2>
                    <p class="text-gray-600 text-sm">
                        Upshift is like having your own car at your doorstep, but only <br>
                        the days you want it . Monthly plans based on how much you  <br>
                        drive that include parking, insurance maintenecce and more.
                    </p>
                    <p class="text-gray-600 text-sm">
                        We believe in using business ti drive positive  change in the <br>
                        world and never setting for what worked in the past
                    </p>
                    <hr class="w-1/2 mb-4 mt-4">
                     <div class="row d-flex align-items-center">
                         <div class="col-4  col-md-3 col-lg-2">
                            <img style="width:32px; height: auto;" class="rounded-full" src="@/assets/img/avatar.png"/>
                         </div>
                         <div class="col-8  col-md-9 col-lg-10">
                             <small class="text-gray-600"> Interesed in our values ?</small> <br>
                            <span class="text-xs font-semibold d-flex">
                               Learn more about the company  <i class="fa fa-arrow-right ml-2 pt-1"></i>
                            </span>
                         </div>
                     </div>
                </div>
            </div>

        </div>
    </section>


    <!-- Section How to work -->
    <section  class="bg-white">
        <div class="container">

            <!-- How to work -->
            <div class="row">


                <!--  -->
                <div class="col-12 col-md-12 pt-5">
                    <div class="d-flex align-items-center  font-bold" >
                        <span class="c-logo text-xs"> 02 </span> 
                        <hr class="ml-2 mr-2 w-10 border-2"> 
                        <span class="c-logo text-xs">HOW IT WORKS</span>
                    </div>
                </div>


                <!--  -->
                <div class="col-12 col-md-4 pb-5 ">
                    <h2 class="c-title text-3xl mt-3 mb-3">
                        Simple and <br>
                        handy rental  <br> 
                        process
                    </h2>
                </div>

                <!-- Check thz Avaibile -->
                 <div class="col-12 col-md-4 pb-5">

                     <span class="text-gray-600 text-sm">
                         Snow chains, surf board rack ,key lock box ,or
                         dog  car seat hammock Avaibile upon request. 
                     </span>
                     <hr class="mt-3 mb-3">
                     <div class="row d-flex align-items-center pb-3">
                         <div class="col-4 col-md-3 col-lg-2">
                             <i class="fa fa-question-circle text-2xl text-gray-600"></i>
                         </div>
                         <div class="col-8  col-md-9 col-lg-10">
                            <span class="text-xs font-semibold d-flex">
                                Check the Aviabile accessoires <i class="fa fa-arrow-right ml-2 pt-1"></i>
                            </span>
                         </div>
                     </div>
                    
                </div>


                <!-- Read our FAQ -->
                <div class="col-12 col-md-4 pb-5 ">
                    <span class="text-gray-600 text-sm">
                        Still got questions . We've probably covered  <br>
                        them all in the help center
                     </span>
                     <hr class="mt-3 mb-3">
                     <div class="row d-flex align-items-center">
                         <div class="col-4  col-md-3 col-lg-2">
                             <i class="fa fa-question-circle text-2xl text-gray-600"></i>
                         </div>
                         <div class="col-8  col-md-9 col-lg-10">
                            <span class=" text-xs font-semibold d-flex">
                               <span class="underlined-example">Read our FAQ</span>  <i class="fa fa-arrow-right ml-2 pt-1"></i>
                            </span>
                         </div>
                     </div>
                </div>
            </div>



            <!-- steps -->
            <div class="row pb-5">
                <div class="col-md-3 text-center">
                    <i class="fa fa-font text-5xl text-gray-500 pb-4"></i>
                   
                    <h3 class="pb-4 text-2xl c-title">
                        Text us
                    </h3>
                    <div class="text-gray-600 text-sm leading-loose pb-4"> 
                        <span>
                            Text when you want your car.
                        </span>
                        <br>
                        <span>
                            No app needed, just an online.
                        </span>
                        <span>
                           account.real human operators.
                        </span>

                    </div>
                    <hr>
                </div>
                 <div class="col-md-3 text-center pt-4">
                     <i class="fa fa-truck text-5xl text-gray-500 pb-4"></i>
                     <h3 class="pb-4 text-2xl c-title">
                        We deliver
                    </h3>
                    <div class="text-gray-600 text-sm leading-loose pb-4"> 
                        <span>
                            Text when you want your car.
                        </span>
                        <br>
                        <span>
                            No app needed, just an online.
                        </span>
                        <span>
                           account.real human operators.
                        </span>

                    </div>
                    <hr>
                        
                </div>
                 <div class="col-md-3 text-center">
                     <i class="fa fa-google-drive text-5xl text-gray-500 pb-4"></i>
                     <h3 class="pb-4 text-2xl c-title">
                        You drive
                    </h3>
                   <div class="text-gray-600 text-sm leading-loose pb-4"> 
                        <span>
                            Text when you want your car.
                        </span>
                        <br>
                        <span>
                            No app needed, just an online.
                        </span>
                        <span>
                           account.real human operators.
                        </span>

                    </div>
                    <hr>
                </div>
                 <div class="col-md-3 text-center pt-4">
                     <i class="fas fa-people-carry text-5xl text-gray-500 pb-4"></i>
                     <h3 class="pb-4 text-2xl c-title">
                        We pick it up
                    </h3>
                    <div class="text-gray-600 text-sm leading-loose pb-4"> 
                        <span>
                            Text when you want your car.
                        </span>
                        <br>
                        <span>
                            No app needed, just an online.
                        </span>
                        <span>
                           account.real human operators.
                        </span>

                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </section>



    <!-- 03 service zone -->
    <section  class="bg-white">
         <div class="container">
              <div class="row pb-5">
                  <div class="col-12">
                        <div class="flex content-center text-left pt-12">

                            <div class="w-1/3" 
                                style=" background-position: center;z-index: 2;
                                background-size: cover;">
                                <img src="@/assets/img/img.jpg">
                            </div>

                            <div style="margin-left: -100px;z-index: 0;" class="w-3/3 p-12 bg-service text-white mt-10">
                                <div style="padding: 0 24%">
                                    <div class="flex pt-10 pb-8">
                                      <div class=" d-flex align-items-center font-bold" >
                                            <span class="text-white text-xs"> 03 </span> 
                                            <hr class="ml-2 mr-2 w-10 border-2 border-white"> 
                                            <span class="text-white text-xs"> SERVICE ZONE</span>
                                        </div>
                                    </div>

                                    <!-- title -->
                                    <h1 class="text-3xl pb-5"> We've got SF Covered </h1>
                                    <p class="text-gray-400">
                                        We provide two delivery options for every trip
                                    </p>

                                    <div class="flex mb-4 content-center text-left">
                                        <div class="w-1/6">
                                           <img src="@/assets/img/check.svg" class="img-flesh ml-2">
                                        </div>
                                        <div class="w-5/6">
                                            <p class="text-white font-bold text-sm">
                                                    Concierge Service 8am - 8pm Daily
                                            </p>
                                            <p class="text-gray-400 text-xs">
                                                We provide two delivery options for every trip
                                                We provide two delivery options for every trip
                                            </p>
                                        </div>
                                    </div>

                                    <div class="flex mb-4 content-center text-left">
                                        <div class="w-1/6">
                                          <img src="@/assets/img/check.svg" class="img-flesh ml-2">
                                        </div>
                                        <div class="w-5/6">
                                            <p class="text-white font-bold text-sm">
                                               Selfe Service ( 24 / 7 )
                                            </p>
                                            <p class="text-gray-400 text-xs">
                                                We provide two delivery options for every trip
                                                We provide two delivery options for every trip
                                                We provide two delivery options for every trip.
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="bg-white">
                                    <div class="flex mb-4 content-center text-left mt-5">
                                        <div class="w-2/6">
                                            <i class="fa fa-sign-out-alt text-4xl"></i>
                                        </div>
                                        <div class="w-4/6">
                                            <p class="text-gray-500 text-sm">
                                                Outside of SF ?
                                            </p>
                                            
                                            <a class="text-white text-xs d-flex">
                                                Tell us where to expend &nbsp; 
                                                 <i class="fa fa-arrow-right pt-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
         </div>
    </section>



    <!-- Pricing -->
    <section  class="bg-white">
        <div class="container">
            <div class="row pb-5 pt-5 ml-5 mr-5">
                <div class="col-12 d-flex justify-content-center ">
                    <div class=" d-flex align-items-center font-bold" >
                        <span class="c-logo text-xs"> 04 </span> 
                        <hr class="ml-2 mr-2 w-10 border-2"> 
                        <span class="c-logo text-xs"> PRICING</span>
                    </div>
                </div>
                <div class="col-12 text-center">
                     <h2 class="c-title text-3xl mt-2 mb-2">
                           Monthly plans for less than a parking space
                    </h2>
                    <p class="text-gray-600 text-sm">
                        Plans include concirge delivry an pickup, cleaning and refueling services,full coverage insurance <br> and maintenece-everyhing but gas and tolls.
                        Join instally with $0 down and get your car right now. 
                    </p>

                </div>


                <!-- Price 1 -->
                <div class="col-12 col-md-6 col-lg-4 pt-5 pb-5 pl-0">
                    <div class="max-w-md rounded overflow-hidden  p-10 text-center border-purple-200 border">
                        <div class=" text-3xl mb-2 text-purple-900">FlexPass</div>
                        <p class="text-gray-600 text-sm">
                            Get 4 days/month
                        </p>
                        <p class="pt-10 pb-10 border-b border-gray-300">
                            <span class=" text-5xl mb-2 text-gray-600">$159</span>
                            <span class="text-gray-600 text-sm">/month </span>
                        </p>
                        <p class="pt-10 pb-10 text-gray-600 text-sm">
                            Not sure how much you drive ?<br>
                            Get a magic button anytime you <br> 
                            need  car
                        </p>
                        <button class="bg-logo text-xs hover:bg-purple-800 w-full text-white pt-6 pb-6 w-12/12 rounded-full">
                            Start with Flexpass
                        </button>
                            
                        <a class="block text-xs pt-6"> View plan details &nbsp; <i class="fa fa-arrow-right"></i> </a>
                    </div>
                </div>

                <!-- Price 2 -->
                <div class="col-12 col-md-6 col-lg-4 pb-5 pt-3">
                    <div class="max-w-md rounded overflow-hidden shadow-lg p-8 text-center  border-purple-700 border-t-4">
                         <div class="mb-2  font-bold text-xs c-logo">RECOMMENDED</div>
                        <div class=" text-3xl mb-2 text-purple-900 ">Geataway</div>
                        <p class="text-purple-900 text-sm">
                            Get 4 days/month
                        </p>
                        <p class="pt-10 pb-10 border-b border-gray-300">
                            <span class=" text-5xl mb-2 text-gray-600">$290</span>
                            <span class="text-gray-600 text-sm">/month </span>
                        </p>
                        <p class="pt-10 pb-10 text-gray-600 text-sm">
                                Get away up to once a week. <br>
                                Your car is delivered and <br> disappears - Like magic.
                        </p>
                        <button class="bg-logo text-xs hover:bg-purple-800 w-full text-white pt-6 pb-6 w-12/12 rounded-full">
                            Start with gateway
                            </button>
                            
                            <a class="block text-xs pt-6 pb-4"> View plan details &nbsp; <i class="fa fa-arrow-right"></i> </a>
                    </div>
                </div>
                <!-- Price 3 -->

                <div class="col-12 col-md-6 col-lg-4  pb-5 pt-5 pr-0">
                    <div class="max-w-md rounded overflow-hidden  p-10 text-center border-purple-200 border">
                        <div class=" text-3xl mb-2 text-purple-900">FlexPass</div>
                        <p class="text-gray-600 text-sm">
                            Get 4 days/month
                        </p>
                        <p class="pt-10 pb-10 border-b border-gray-300">
                            <span class=" text-5xl mb-2 text-gray-600">$159</span>
                            <span class="text-gray-600 text-sm">/month </span>
                        </p>
                        <p class="pt-10 pb-10 text-gray-600 text-sm">
                            Not sure how much you drive ?<br>
                            Get a magic button anytime you <br> 
                            need  car
                        </p>
                        <button class="bg-logo text-xs hover:bg-purple-800 w-full text-white pt-6 pb-6 w-12/12 rounded-full">
                            Start with Flexpass
                        </button>
                            
                        <a class=" block text-xs pt-6"> View plan details &nbsp; <i class="fa fa-arrow-right "></i> </a>
                    </div>
                </div>
            </div>
        </div>     
    </section>
    
    <!-- section the car -->
    <section  class="footer-bg">
        <div class="container">
             <div class="row pb-5 pt-5 ml-5">
                  <div class="col-12 col-md-6 p-0">
                        <div class="d-flex align-items-center  font-bold" >
                            <span class="c-logo text-xs"> 05 </span> 
                            <hr class="ml-2 mr-2 w-10 border-2"> 
                            <span class="c-logo text-xs"> The car</span>
                        </div>
                      
                        <h2 class="c-title text-3xl mt-3 mb-3">
                            Always Drive an <br> Idenical Prius
                        </h2>
                        <span class="leading-relaxed text-gray-600 text-sm">
                            All our cars are the same so they feel familiar.
                            <br>
                            No branding so you don't stick out. 
                        </span>
                        <p class="pt-3 text-gray-600 text-sm">
                            Fits 5 compfortably - or a surfboard, bicycle, or skis.
                            54 MPG hybrid gets you to Tahoe and back on a 
                            single tankl . Phone mount, charging cables, and 
                            Fastrack included.Bluetooth and safety technology
                            like adaptive cruise control.We use all natural
                            deodorzers and cleaning supplies.
                        </p>
                  </div>
                  <div class="col-12 col-md-6">
                        <div class="w-4/4 img-mobile">
                            <img  src="@/assets/img/0.jpg">
                        </div>
                        <div class="d-flex img-the-car">
                            <div class="w-2/4 mr-3 ">
                                <img src="@/assets/img/2.jpg">
                            </div>
                            <div class="w-2/4">
                                <img src="@/assets/img/1.jpg">
                            </div>
                        </div>
                       
                  </div>
             </div>
        </div>
    </section>


    <!-- section Join_instantly -->
    <section class="footer-bg">
        <div class="container">
            <div class="row pb-5 ml-5 mr-5">
                <div class="col-12 col-md-6 p-0">
                    <h2 class="c-title text-3xl">
                        Join instantly with $0 down <br> and get your car right now
                    </h2>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center p-0">
                    <button class=" w-56 bg-logo flex-shrink-0  hover:bg-teal-700  hover:border-teal-700 text-xs  text-white py-3 px-5 rounded-full" type="button">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    </section>
            
       
    
   
</div>
</template>

<script>
</script>

