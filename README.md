<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
![logo](https://i.imgur.com/xRZ0Wsh.png)
Get Recd is an app to build essential lists of music.  If you are a big fan of Nirvana, Stan Getz or anyone else, now you can share lists of your favorite albums.  Make sure friends and family don't go out and buy that ONE horrible album and have their opinions skewed forever.  Don't spend your holidays trying to convince them that 'REALLY, Frank Zappa is amazing. You just have to listen to the right album.'
Go into the record store with CONFIDENCE, using get rec'd as your guide
___
![logo](https://i.imgur.com/v1hCW50.png)
#### <i class="devicon-nodejs-plain colored"></i> Node 
####  <i class="devicon-express-original colored"></i> Express
#### <i class="devicon-html5-plain-wordmark colored"></i> HTML
#### <i class="devicon-css3-plain colored"></i> CSS
#### <i class="devicon-javascript-plain colored"></i> JavaScript
#### <i class="devicon-foundation-plain-wordmark colored"></i> Foundation
#### <i class="devicon-mongodb-plain-wordmark colored"></i> Mongo DB
#### <img src="https://pbs.twimg.com/profile_images/647140959583498240/qfYAEN2G.jpg" style="width: 15px;"/> Discog's API
#### <i class="devicon-google-plain colored"></i> Google Oauth
*****
<img src="https://i.imgur.com/XGOkyHw.png" style="width: 200px;"/>
Users will be able to create new lists of recommendations(recs) and search for artists.
the search results will allow the user to group several albums into a Rec.
<img src="https://i.imgur.com/UjXC49j.jpg" style="width: 500px;"/>
Users will then be able to view, edit, and delete their recs. 
<img src="http://suplugins.com/podium/images/placeholder-02.jpg" style="width: 300px;"/>
To check out Get rec'd, visit our app on Heroku at at [Get Rec'd](https://get-recd.herokuapp.com)
See our planning page at [Trello](https://trello.com/b/J5WLmF8H/get-recd)
****
<img src="https://i.imgur.com/KsQpmBw.png" style="width: 200px;"/>
The discogs database is HUGE. In the future, we'd would like to offer different search parameters, such as country of origin or genre.  We would also like to include commenting on lists, rating lists and sharing lists with your friends.
| URI | HTTP Verb | Use Case
  --- | ------- | ------  
 /api/lists | GET  | retrieve all lists  
 /api/lists/:id | GET | a single list  
| URI | HTTP Verb | Use Case
| --- | --------- | -------- |
/myrecs/ | GET | retrieve all lists
/myrecs/new | GET | the form to make a new list
/myrecs/add | POST | add the new list
/myrecs/ |  POST |
/myrecs/about | GET | learn about the app
/myrecs/:id | DELETE |retrieve all lists
THANKS