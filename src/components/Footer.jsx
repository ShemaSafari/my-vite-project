import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#ea792e9c]'>
        <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white">
            <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div class="">
                    <img class="h-20 rounded-lg" src="public/kindred-k-favicon.jpg" alt="dummyLogoDark"/>
                    <p class="mt-6 text-m">
                       This website is made by <span class="font-bold"> Shema Bruno and Anayo Anyafulu. </span><br />Shema Bruno was responsible for the front-end development using <b>React.js</b> and <b>Tailwind CSS</b>, while Anayo Anyafulu handled the back-end using the <b>Spring Boot</b> Java framework. <br /> <br />
                      We built this website as a hands-on project to deepen our understanding of web development and to lay the groundwork for offering professional web development services in the future.


                    </p>
                </div>
                <div class="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        {/* <h2 class="font-semibold mb-5 text-gray-800">Company</h2> */}
                        <ul class="text-sm space-y-2 text-black">
                            {/* <li className='text-black'><a href="#">Home</a></li> */}
                            {/* <li className='text-black'><a href="#Foodcard">Recipes</a></li> */}
                            {/* <li className='text-black'><a href="#About_us">About us</a></li> */}
                        </ul>
                    </div>
                   
                </div>
            </div>
            <p class="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © Company name. All Right Reserved. Pls dont still our Name
            </p>
        </footer>
        
      
    </div>
  )
}

export default Footer
