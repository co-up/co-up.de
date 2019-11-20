---
layout: post
title: CoHackDay#2
author: aleks
redirect_from: /2012/01/26/cohackday2-writeup.html
---

A big thanks to everyone who came to [Coworking Hack Day #2](http://www.coworkinghackday.org/)! It was great hanging out with our friends, but especially nice to see some new faces, too.

![01](/images/blog/cohackday2/00.jpg)

[Chris](https://twitter.com/#!/cataspanglish), [Ana](https://twitter.com/#!/anafmora), & [Ishmael](https://twitter.com/#!/nanospanglish) heard about CoHackDay through our participation in [Jellyweek 2012](http://jellyweek.tumblr.com/), & decided to come by & have a look, as well as let us know about the upcoming [Kfé Innovación](http://www.kfeinnovacion.com/call-for-kfe05/), taking place for the first time in Berlin this Friday. We were happy to offer a venue for the event, which you can read more about [here](http://co-up.de/2012/01/23/kfe-innovacion.html).

![02](/images/blog/cohackday2/01.jpg)

[Pavlik](http://wwelves.org/perpetual-tripper/) also heard about us through Jellyweek, and wanted to share his ideas about creating alternative, money-free economic systems. He spent a great deal of time charting out co.up’s benefits, wishes, & abilities with Thilo, providing structure for brainstorming about the space’s growth & future.

![03](/images/blog/cohackday2/02.jpg)

[Thilo](https://twitter.com/#!/freaklikeme) had hoped to create some [8-bit art cutting boards](http://manmadediy.com/chris/posts/208-8-bit-end-grain-cutting-boards), but was unfortunately unable to secure the necessary materials. He writes, “First I discussed with Pavlik how alternative economic systems could be employed in a coworking space and then applied to wishes for co.up, but I still need to digest the input. After a Flora Mate my spirit was recharged and I started to try out a new layout for one of co.up’s rooms, with the help of David, Lukas, Anika, and Alex. I learned that doing it on paper with the space blueprint I had created was quite hard, so we moved right to using masking tape to try out different configurations. It was a lot of fun, but took quite a while. [Here](https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-ash4/s720x720/402994_317658341605894_923116146_n.jpg) are some [results](https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-snc7/402063_317658478272547_148844035153993_888365_2093502020_n.jpg). I would like to present this idea to the rest of the coworkers to gather feedback and move to the next phase: design and colors.”

![03](/images/blog/cohackday2/03.jpg)

[Lukas](https://twitter.com/#!/overbryd) had two projects in mind: brewing mate with a mulled wine twist, & creating a UTF8 symbol selector. The “Glühmate” project was successful - it turned out to taste just like mulled wine, but with a nice kick from the caffeine. In spite of the great deal of time & brainpower invested in the UTF8 selector, the project didn’t move along as quickly as hoped, but as Lukas said, what’s important is that he learned a great deal & had a nice time. :) Thanks to [Tadas](https://twitter.com/#!/tadassce) for dropping by to help, too!

[Alex](https://twitter.com/#!/langalex), [Gilbert](https://twitter.com/#!/gttmnn), & [Rūdis](https://twitter.com/#!/rudolfs) combined their powers to work on the “coworking disco” project. Alex writes, “The idea of the project was to allow us to control a bunch of [PAR LED lights](http://www.thomann.de/de/stairville_led_par_56_alu_poliert.htm?sid=d5389ef907abfc2bd4d0f3fdddb1e9a4) over our wifi. For that we would either use the existing Arduino board connected to the wifi or a brand new [BeagleBone](http://beagleboard.org/bone). The BeagleBone is much more powerful and has Linux and node.js pre-installed, so this was my preferred platform. The advantage of the Arduino was that there are [multiple](http://code.google.com/p/tinkerit/wiki/DmxSimple) [projects](http://arduino.cc/playground/Learning/DMXSerial) already for controlling DMX devices. While I was working on the BeagleBone software Gilbert produced a nice HTML frontend and Rūdis soldered and programmed the Arduino.
After spending a bit of time on Google and not finding anything, I tried to implement the DMX protocol myself. I found a nice [PDF describing the protocol](http://www.google.de/url?sa=t&rct=j&q=dmx%20protocol%20pdf%20arduino&source=web&cd=7&ved=0CFsQFjAG&url=http%3A%2F%2Fwebzone.k3.mah.se%2Fprojects%2Flab%2FFolder%2Findex.aspx%3Fpage%3D6%26tab%3D12%26file%3D16%26function%3Dfolder%26id%3D3&ei=DHoeT7qWJtCi-gaWhvwh&usg=AFQjCNEODb0xkWbLOsjMhKQwaoqPL_YmiQ) and started off in node.js. DMX works by switching a single data pin from high to low at the right time, where the timing is measured in microseconds. That turned out to be the blocker for implementing it. DMX requires me to wait for 4 microseconds, but with node.js the shortest I could get to was 15 or so. This is probably the point where I should have started with interrupts or Assembler, but the lowest level of programming I ever did was a bit of C at university - back in the day. I tried to port my node.js code to C but that wasn't any faster. This was not working.
Having spent most of the day with the BeagleBone without any results, I developed plan C (the C implementation on the BeagleBone being plan B). I would write a small node.js app that would be the frontend for controlling the lights, and the BeagleBone would in turn control the Arduino board, which would talk DMX to the lights. The node app's first version is ready and working, the software on the Arduino is almost working. Once it does I'll push the source to Github.”

![04](/images/blog/cohackday2/04.jpg)

[Dave](https://twitter.com/#!/deviousdrdave) enlisted the help of his “mathemagician” friend to create sudoku puzzle software that can create puzzles & allow players to go head-to-head. After figuring out the algorithm for not only 9x9 puzzles, but also larger ones, the project turned out to be much harder than anticipated, & Dave’s attention was also diverted by the other projects. :)

![05](/images/blog/cohackday2/05.jpg)

[Urs](https://twitter.com/#!/ur5), Anja, & Marko spent the day working on a pair of [TV-B-Gone](http://en.wikipedia.org/wiki/TV-B-Gone) devices using an Arduino. After much soldering, the gang headed out to test the remotes, gleefully reporting back that they work!

![06](/images/blog/cohackday2/06.jpg)

It was lots of fun to spend the day with everyone. We’re already sketching in plans for the next CoHackDay, which will hopefully include some workshops, both technical & non-. See you then!
