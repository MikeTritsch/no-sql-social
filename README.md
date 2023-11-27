# No SQL Social

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![mixed-social-media-reactions](https://github.com/MikeTritsch/no-sql-social/assets/122573481/a9cce6c5-ba35-4783-8c78-a1132b0d45b4)


# 💻 Built Using...
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Uses [mongoose](https://www.npmjs.com/package/mongoose)

Uses MongoDB Compass

## Description

Welcome to the No SQL Social! A user backend framework that outlines key components of social media functionality. This applicaiton utilizes the flexibility of MongoDB to run full CRUD routes revolving around generating users, thoughts, friend-networks and reactions.

## Links

[Walkthrough](https://drive.google.com/file/d/1P3huquliGu_jQng7oc3jJTBq7h--mwWK/view?usp=sharing)

[GitHub Repo](https://github.com/MikeTritsch/no-sql-social)

## What comes next? and other issues...

I always appreciate more practice in creating backend routes. I really took the time to analyze the code as I was writing it, making sure I fully understood what each line was doing. I learned a lot through trial and error in regards to getting nested documents to render and connect with eachother.

I tried multiple times to make user thoughts fully render within the user document thoughts array. I was able to achieve this with the reaction array, where it renders the full reaction object, but was unable to make the thoughts array do the same.

## Installation

    ** REQUIRES NODE **
    1. Clone repo (link found at the top of the README)
    2. Install all dependencies (Express, mongoose) by running:
         npm i <package>
    3. Using MongoDB Compass, insert your personal connection string within the connection.js file
    4. To seed data, run:
        node utils/seed.js
    5. Using a client (Postman, Insomia, Thunderclient) of your choice, run your needed routes

## Credits

Ian Darland for helping me build debug and catching routing errors.

## License

MIT License

Copyright (c) 2023 Mike Tritsch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---