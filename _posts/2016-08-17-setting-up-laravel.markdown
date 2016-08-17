---
layout: post
title:  "Setting up laravel"
date:   2016-08-17 09:00:00
categories: laravel, setup
comments: true
---

_Just a reminder to myself as I always seem to forget a step_

1. laravel new [projecttitle]
2. sudo composer install
3. sudo npm install
4. mv .env.example .env
5. php artisan key:generate
6. Edit .env
7. Point Apache DocumentmentRoot to the public folder
8. change permissions on the storage and bootstrap/cache folders
9. Setup bower and "bower install"
10. Setup routes and go

Alternatively you can add it all to a [bash script](https://github.com/danielvalentin/files/blob/master/scripts/newproject), and it use whenever you set up a new project.