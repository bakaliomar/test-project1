<template>
    <div class="footer-bg">
        <div class="container">
            <div class="sm:flex ml-5 mr-5 pt-5 border-top">

                <!-- Product -->
                <div class="sm:w-1/4 h-auto">
                    <div class="text-xs  font-bold text-gray-700  uppercase mb-4">Product</div>
                    <ul class="text-sm text-gray-900 list-reset leading-normal">
                        <li class="" v-for="(product, index) in products" :key="index">{{product}}</li>
                    </ul>
                </div>


                <!-- Company -->
                <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                    <div class="text-xs font-bold text-gray-700 uppercase mb-4">Company</div>
                    <ul class="text-sm text-gray-900 list-reset leading-normal">
                        <li class="" v-for="(company, index) in companies" :key="index">{{company}}</li>
                    </ul>
                </div>


                <!-- Help Center -->
                <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                    <div class="text-xs font-bold text-gray-700  uppercase mb-4">Help center</div>
                    <ul class="text-sm text-gray-900 list-reset leading-normal">
                        <li class="" v-for="(help, index) in helps" :key="index">{{help}}</li>
                    </ul>
                </div>


                <!-- Stay in touch -->
                <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                    <div class="text-xs font-bold text-gray-700  uppercase mb-4">Stay in touch</div>
                    <p style="margin-top: 2.25rem;font-size: 15px;" class="text-sm text-gray-600 pb-3">Join our mailing list to get update. We respect your privacy.  </p>
                    <div class="flex">
                        <div class="flex bg-gr-light rounded-full    w-full overflow-hidden">
                            <input class="appearance-none bg-gr-light text-gray-600 w-full rounded-full  py-2 px-3" placeholder="Email address...">
                            <div class="bg-blue-light shadow-border p-3">
                                <div class="w-4">
                                 <i class="fa fa-paper-plane"></i>
                                </div>
                            </div>
		                </div>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="sm:flex ml-5 mr-5 pb-5 mt-4">
                <!-- logo -->
                <div class="sm:w-1/3 h-auto">
                    <div class="text-orange">
                         <div class="flex items-center flex-shrink-0 c-logo">
                            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                            <span class="font-semibold text-xl tracking-tight">Omar DEV</span>
                        </div>
                    </div>
                </div>

                <div class="sm:w-1/3 h-auto sm:mt-2">
                    <div class="text-gray-600  text-xs">Copyright @ {{ copy }} Upshift,Inc.</div>
                </div>

                <div class="sm:w-1/3 sm:mt-0 mt-8 h-auto">
                    <div class="row d-flex justify-content-end">
                        
                        <img src="@/assets/img/social/Facebook.svg">
                          <img src="@/assets/img/social/Instagram.svg">
                          <img src="@/assets/img/social/Linkedin.svg">
                    </div>
                  
                </div>
                
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return  {
            products: ["Personal", "Business", "Pricing", "Log In"],
            companies: ["About", "Blog", "Careers", "Contact Us"],
            helps: ["FAQ", "Insurance", "Agreement"],
            copy: new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>
