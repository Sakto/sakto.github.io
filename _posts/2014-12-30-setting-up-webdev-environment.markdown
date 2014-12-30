---
layout: post
title:  "Setting up my webdev environment"
date:   2014-12-30 10:00:00
categories: webserver, apache, mysql
comments: false
---

I've had to reinstall [my OS](http://linuxmint.com) a few times (upgrading, trying out other distros, screwing up, etc.), and have been setting up
my webdev environment over and over. Figured I might as well record the process for reference:

- sudo apt-get install apache2
- sudo apt-get install php5 php5-cli php5-mysql php5-curl php5-mcrypt
- sudo php5enmod mcrypt
- sudo a2enmod rewrite
- sudo apt-get install mysql
- sudo apt-get install phpmyadmin
- sudo vim /etc/apache2/apache2.conf, change webroot to /home/daniel/Web/www
- sudo vim /etc/mysql/my.cnf - change datadir to /home/daniel/Web/dbs

Fetch my [favorite editor](http://www.aptana.com/).

Boom! Back in business!