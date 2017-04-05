# ArriveDry

It is difficult to know what to wear / pack when commuting by bicycle. Weather and road conditions (safety) can be determining factors in the success and enjoyment of the commute. ArriveDry strives to help take the hassle out of getting where you want to go by bike.

## Nashville Software School Front-End Capstone Project

### Wanna Check It Out?
1. Clone the repo
```
git clone https://github.com/wocaldwell/frontend-capstone.git
cd lib
npm install
```
2. Get some credintials
* This project uses the following APIs from the following sources:
    * Weather Underground
    * Google
* This project also uses a personal firebase database. Setup your own firebase db and import a json file with the following data
```
{
  "gear" : {
    "bicycle" : {
      "bell" : "http://www.wfc.com.hk/pages/55805d4e69702d4c49380700",
      "bottleCage" : "http://www.kingcage.com/index.php?products=yes",
      "bottles" : {
        "camelbak" : "https://www.camelbak.com/es/bottles/R02014--Podium_Big_Chill_25oz?color=eeda0e5f154641e1ac62371b1fbc4b72",
        "cleanBottle" : "https://www.cleanbottle.com/"
      },
      "chain" : {
        "chain" : "https://www.sram.com/sram/road/component/chains#sm.00000805orlumfjls7m29cv42s8x5",
        "powerLink" : "https://www.sram.com/sram/mountain/products/powerlink-gold-chain-connector-9-speed#sm.00000805orlumfjls7m29cv42s8x5"
      },
      "fenders" : "https://www.sks-germany.com/en/productcategories/bluemels-en/",
      "framePump" : "http://www.zefal.com/en/traditional-pumps/32-hpx.html",
      "frontLights" : {
        "cygolite" : "http://cygolite.com/product/metro-750-usb/",
        "flea" : "https://www.blackburndesign.com/flea-2-0-front-usb-6.html"
      },
      "pedals" : "http://www.mkspedal.com/sites/default/files/media/2016/10/03/MKS2017catalogED48%5BEng%5D.pdf",
      "racks" : "http://nitto-tokyo.sakura.ne.jp/carrier-E.html",
      "rearLights" : {
        "flea" : "https://www.blackburndesign.com/flea-2-0-rear-usb.html",
        "serfas" : "https://www.serfas.com/products/view/669/"
      },
      "saddle" : "http://www.brooksengland.com/cambium/",
      "tires" : {
        "gatorskin" : "http://www.continental-tires.com/bicycle/tyres/race-tyres/gatorskin",
        "schwalbe" : "https://www.schwalbetires.com/bike_tires/road_tires/marathon_420"
      },
      "tubes" : "https://bike.michelin.com/en/products/michelin-airstop-ct"
    },
    "body" : {
      "coldWeather" : {
        "boots" : "https://www.amazon.com/Salomon-Tactile-TS-WP-Winter/dp/B0037QH1BK/ref=cm_cr_arp_d_product_top?ie=UTF8",
        "gloves" : {
          "full" : "http://www.mechanix.com/automotive/the-original",
          "mitts" : "https://www.rivbike.com/blogs/peeking-through-the-knothole/halfmitts-are-essential"
        },
        "jacket" : "http://www.pearlizumi.com/us/en/Shop/Ride/Road/Men's/Apparel/Tops/Outerwear/Jackets/Men's_ELITE_Barrier_Convertible_Jacket/p/111315134TN",
        "shirts" : "https://www.underarmour.com/en-us/mens-ua-coldgear-armour-compression-mock/pid1265648-609",
        "toques" : {
          "flaps" : "http://www.volcom.com/catalog/product/view/id/192179/",
          "regular" : "https://shop.ccs.com/accessories/beanies"
        }
      },
      "everyday" : {
        "bandanna" : "https://www.rivbike.com/collections/odds-ends/products/bandanna-burgundy",
        "cyclingCap" : "https://www.walzcaps.com/",
        "glasses" : "https://www.serfas.com/products/index/optics/multi-lens-interchangeable",
        "gloves" : "https://www.rivbike.com/collections/clothing/products/thinny-riding-gloves-fake-leather-grey",
        "pants" : "http://www.levi.com/US/en_US/mens-jeans/p/197150006?ab=Commuter_LP_Mens_541_030717",
        "shirts" : "http://www.elyandwalker.com/ELY/Ely_Cattleman_Season.htm",
        "shoes" : "http://www.pearlizumi.com/US/en/Shop/Ride/Mountain/Men's/Footwear/Cycling%20Shoes/Men's_X-Alp_Launch_II/p/151160012FJ",
        "shorts" : "https://www.rivbike.com/collections/clothing/products/musa-shorts-new-for-2017",
        "socks" : {
          "long" : "http://www.dickssportinggoods.com/p/reebok-all-sport-athletic-knee-high-socks-15rbkurbkllsprtlcapa/15rbkurbkllsprtlcapa",
          "short" : "http://www.reebok.com/us/reebok-crossfit-mens-inside-comfort-sock/BP7315.html"
        }
      }
    },
    "stuff" : {
      "locks" : {
        "cableLock" : "http://www.kryptonitelock.com/en/products/product-details.html?id=kryptonite:product/style/cable-locks",
        "diySaddleLock" : "http://www.londoncyclist.co.uk/prevent-bicycle-saddle-theft/",
        "uLock" : "http://www.kryptonitelock.com/content/kryt-us/en/products/product-information/current-key/0009521.html"
      },
      "other" : {
        "latexGloves" : "http://www.dynarex.com/product.php?family=Safe-Touch_Latex_Exam_Gloves_Powder_Free&itmno=1720",
        "plasticBags" : "http://www.onegoodthingbyjillee.com/2015/08/60-ways-to-reuse-plastic-bags.html",
        "straps" : {
          "johnsStrap" : "https://www.rivbike.com/products/johns-irish-strap-39-370078-one-meter-each?variant=23336420289",
          "toeStraps" : "http://www.benscycle.com/p-1887-mks-fit-alpha-first-nylon-toe-straps.aspx"
        }
      },
      "portage" : {
        "arkel" : "https://www.arkel-od.com/",
        "ortlieb" : "https://ortliebusa.com/product-category/ortlieb/"
      },
      "tools" : {
        "electricalTape" : "http://www.3m.com/3M/en_US/company-us/all-3m-products/~/All-3M-Products/Energy/Tapes-Adhesives/Electrical-Tapes-Mastics-Adhesives/?N=5002385+8709319+8710676+8710748+8711017+8730567+3294857497&rt=r3",
        "multiTool" : "http://www.parktool.com/product/i-beam-mini-fold-up-with-chain-tool-ib-3?category=Multi-Tools",
        "tireLeavers" : "https://www.schwalbetires.com/tire_levers_page",
        "wrench" : "https://store.snapon.com/Adjustable-8-Adjustable-Wrench-P884298.aspx"
      }
    }
  },
  "heat-description" : {
    "cold" : "Have extra layers for this ride, it's going to be pretty cold.",
    "comfortable" : "The temperature will be pretty comfortable for this ride.",
    "cool" : "It's a good thing you aren't Phil Collins because based on the cool temperature this ride WILL be jacket required!",
    "hot" : "Light clothing is recommended for this trip and you just might See people rocking. . . hear people chanting, feeling, Hot! Hot! Hot!",
    "verycold" : "This ride will be very cold. Be sure to have gloves and wear insulating layers.",
    "veryhot" : "Mother father it is hot! Pack extra water, you're gonna need it.",
    "warm" : "This trip may be a little warm. Be prepared to rip your sleeves off!"
  },
  "meals" : {
    "long" : "you may need to pack a meal and a snack",
    "regular" : "don't forget to pack a meal",
    "short" : "you should pack a snack"
  },
  "precipitation" : {
    "insignificant" : "there is no need for the waterproof gear",
    "possible" : "it is highly recommended that you have a way to keep things dry",
    "probable" : "RAIN GEAR IS NECESSARY TODAY",
    "slight" : "you might pack the rain gear just to be safe"
  }
}
```
then . . . 
```
cd app
mkdir credentials && cd credentials
touch firebaseCredentials.js
touch googleCredentials.js
touch weatherCredentials.js
```
3. Credentials files
* firebaseCredentials.js
```
"use strict";

app.constant("FirebaseCredentials", {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR URL"
});
```
* googleCredentials.js
```
"use strict";

app.constant("GoogleCredentials", {
    apiKey: "YOUR API KEY"
});
```
* weatherCredentials.js
```
"use strict";

app.constant("WeatherCredentials", {
    apiKey: "YOUR API KEY",
    apiRef: "YOUR API REFERRAL"
});
```

## Thanks for looking!




