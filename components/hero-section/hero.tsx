import React from 'react'
import Image from "next/image";
import { Button } from '../ui/button';

function Hero() {
  return (
    <div>
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
        <Image
          src="https://s3-alpha-sig.figma.com/img/219a/c5f0/922b0bef4768d4cb4b116fa2f1a3bd45?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m4A2udGJpx2xnkk5ZnCGLPRu5-Hwv9geK1CCTN12FxzfLC8y3blY9vIXjGxLP-hUuhgwVXDFlGD83vb7RxyIzlL5CyR3kUJbZRQPEfcdDCoHSfiqK-XkENghqYBlynBYhppFeijcItKwrpJtFbX3ggx0i5yQnLtMWrpgsb0Co9wrrnd~5b8xCdZYS6VLr8qfT0Dfh5JmAgcUPhjrFJPjhbrmcybIVVI8mEaKfk34BtSRkmZOq2wkJtv3Hu~fQYe5-hU9d0vHHdMEmugvjdNY75YaQ2vJWilaHRuc-9ty3iB2tvKxF67Rso-D~Qgq7UhOQKV8fy7r6Py-~kgEhIKJbA__"
          alt="Business Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
       <div className="absolute inset-0  flex items-center pl-8 lg:pl-16">
          <div className="text-white max-w-lg">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left">Get a Quote Instantly</h1>
            <Button className="bg-red-600 font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero;
