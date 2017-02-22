 Game Title: Murders in the Rue Morgue
--------------------------------

You are trying to solve the mystery of the murders in Rue Morgue.

Game World
----------

Characters                      						|						Attributes |
--------------------------------------------------------|----------------------------------|
You (Detective)	                						| <ul><li>Looks for clues in locations</li><li>Solves mystery when all clues have been gathered</li></ul>|
Sidekick                        						| <ul><li>Acts as guide for game</li><li>Suggests a random section where to go if not valid option is provided</li></ul>|
Doctor (Paul Dumas)             						| Provides insight as to what happened to the bodies discovered |
Pauline Dubourg (Washwoman)	    						| Witness. Provides clues to detective |
Pierre Moreau (Shopkeeper)	    						| Witness. Provides clues to detective |
Jules Mignaud (Banker)		    						| Witness. Provides clues to detective |
Isidore Muset (Policeman)	    						| Witness. Provides clues to detective |
Alfonso Garcia (Neighbor)	    						| Witness. Provides clues to detective |
Willliam Bird and Alberto Montani (Passersby)			| Witness. Provides clues to detective |



Locations | Attribute |
----------|-----------|
House |<ul><li>Contains room where murders took place</li><li>Contains doctor who can give clues to user</li></ul>|
Room | Contains several clues necessary to solve the mystery: <ul><li>Chimney</li><li>Door</li><li>First window / Clear Window</li><li>Second window / Behind the bed</li><li>Knife</li><li>Papers / Old letters / Box</li><li>Gray hairs</li><li>Clothes</li></ul>|
Neighborhood |<ul><li>Contains all witnesses able to provide clues to user</li><li>Contains lightning rod</li></ul> |

Wins and Loses
--------------

- User needs to collect all clues in order to solve the mystery.

- Each clue needs to be "saved" by performing an action on the item that holds the clue
	(i.e.: "look at sky", "inspect shoe", etc.)

- User needs to call "solve mystery" method to get to the final chapter, after the clues have been gathered

- If user has not collected the minimum amount of clues before calling "solve mystery" a maximum of 3, user loses.

- Once all clues are collected, the final chapter is displayed.

- At the end of the text basic stats will be displayed (steps taken, time elapsed since "start")

Credits
-------

- Built by: Mauricio Paez, 2017  
- Written and adapted by: Elizabeth Paez, 2017  
- Original story by: Edgar Allan Poe