---
layout: post
title:  "Setting up laravel"
date:   2016-07-15 09:00:00
categories: laravel
comments: true
---

_Just a reminder to myself as I always seem to forget a step_

1. laravel new [projecttitle]
2. sudo composer install
3. sudo npm install
4. sudo composer install
5. mv .env.example .env
6. php artisan key:generate
7. Edit .env
8. Point Apache DocumentmentRoot to the public folder
9. change permissions on the storage and bootstrap/storage folders
10. Setup bower and "bower install"
11. Setup routes and go