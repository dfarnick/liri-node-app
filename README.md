# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

##Before You Begin

1. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

Liri.js can take in one of the following commands:

*node liri.js concert-this <artist/band name here>

*node liri.js spotify-this-song '<song name here>'

*node liri.js movie-this '<movie name here>'

*node liri.js do-what-it-says

##Let's get after it!

First we will start with searching for a concert. For this we will enter the following command into our CLI.

Want to know when/where your favorite artist/band will be playing?

When we enter: node liri.js concert-this

It will look like this...

![![concert-thistryagain](https://user-images.githubusercontent.com/46286683/53222373-141a2300-3633-11e9-9216-b63846944eb3.PNG)


As you can see since we left the artist/band out of the command, it returned an error asking us to enter the artist/band of our choice.

Next...  Danger Zone / Right into the Danger Zo-o-o-o-one...
node liri.js concert-this 'kenny loggins'
![concert-thissuccess](https://user-images.githubusercontent.com/46286683/53222309-c1d90200-3632-11e9-91a9-6e0273727ae4.PNG)

Pretty cool right? It returned the venue, location and date/time for the next concert. You don't want to miss this folks!

---------------------------------------------------------------------------------------------------------

Let's give spotify a try...
Enter This: node liri.js spotify-this-song "danger zone"

![spotify](https://user-images.githubusercontent.com/46286683/53222440-665b4400-3633-11e9-96ac-c56d7af702f8.PNG)

Ooopss... you've got that bass
Typo: node liri.js spotify-this-song fdafda

![ace](https://user-images.githubusercontent.com/46286683/53222244-93f3bd80-3632-11e9-9c9b-0f23f50d41c1.PNG)


---------------------------------------------------------------------------------------------------------

we all love movies...
"Are you not entertained?"
No? Try this command: node liri.js movie-this gladiator

![gladiator](https://user-images.githubusercontent.com/46286683/53222465-85f26c80-3633-11e9-9645-e237e7aa08d0.PNG)


Not feeling like anybody?
This will make it easy: node liri.js movie-this

![mrnobody](https://user-images.githubusercontent.com/46286683/53222458-7bd06e00-3633-11e9-8138-96bf9197f657.PNG)


---------------------------------------------------------------------------------------------------------

Times get tough.
Do what your told: 
node liri.js do-what-it-says

![doit](https://user-images.githubusercontent.com/46286683/53222474-91459800-3633-11e9-9181-9738b1563920.PNG)


---------------------------------------------------------------------------------------------------------

Oh and it can WRITE!

![write](https://user-images.githubusercontent.com/46286683/53222488-9e628700-3633-11e9-853a-593012731883.PNG))

Whelp, that's all folks!
## Links

- Repository: https://github.com/dfarnick/liri-node-app
