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
This project uses the following APIs from the following sources:
    * Weather Underground
    * Google
This project also uses a personal firebase database. Holla at me for permission but you gotta agree not to be mean!
```
cd app
mkdir credentials && cd credentials
touch firebaseCredentials.js
touch googleCredentials.js
touch weatherCredentials.js
```
3. Credentials files
firebaseCredentials.js
```
"use strict";

app.constant("FirebaseCredentials", {
    apiKey: "CONTACT ME FOR KEY",
    authDomain: "CONTACT ME FOR DOMAIN",
    databaseURL: "CONTACT ME FOR URL"
});
```
googleCredentials.js
```
"use strict";

app.constant("GoogleCredentials", {
    apiKey: "YOUR API KEY"
});
```
weatherCredentials.js
```
"use strict";

app.constant("WeatherCredentials", {
    apiKey: "YOUR API KEY",
    apiRef: "YOUR API REFERRAL"
});
```

## Thanks for looking!




