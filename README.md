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

![Image of concert-this command](images/concert-thisTryAgain.png)

As you can see since we left the artist/band out of the command, it returned an error asking us to enter the artist/band of our choice.

Next...  Danger Zone / Right into the Danger Zo-o-o-o-one...

![Image of concert-this command](images/concert-thisSuccess.png)

Pretty cool right? It returned the venue, location and date/time for the next concert. You don't want to miss this folks!

---------------------------------------------------------------------------------------------------------

Let's give spotify a try...
Enter This: node liri.js spotify-this-song "danger zone"

![Image of spotify-this-song command](images/spotify.png)

Ooopss... you've got that bass
Typo: node liri.js spotify-this-song fdafda

![ace](https://user-images.githubusercontent.com/46286683/53222244-93f3bd80-3632-11e9-9c9b-0f23f50d41c1.PNG)


---------------------------------------------------------------------------------------------------------

we all love movies...
"Are you not entertained?"
No? Try this command: node liri.js movie-this gladiator

![Image of movie-this command](images/gladiator.png)

Not feeling like anybody?
This will make it easy: node liri.js movie-this

![Image of movie-this command](images/mrNobody.png)


---------------------------------------------------------------------------------------------------------

Times get tough.
Do what your told: 
node liri.js do-what-it-says

![Image of do-what-it-says command](images/doIt.png)

---------------------------------------------------------------------------------------------------------

Oh and it can WRITE!

![Image of write command](images/write.png)

Whelp, that's all folks!
## Links

- Repository: https://github.com/dfarnick/liri-node-app
