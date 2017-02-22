//This file contains all text variables necessary to run the game.

/*General text variables
-------------------------------------------------------*/
var start_warning = "Don't be silly, you- The game has already started!";

var going_outside = "<p>Good idea. Let\'s have some fresh air.</p>";

var already_outside = "<p>We\'re already outside.</p>";

var location_error = "<p class=\"wrong-option\">I can\'t do that from here.</p>";

var task_error = "<p class=\"task-error\">Perhaps we should gather more clues before looking at that.</p>";

var guide_text_game = "<div class=\"wrong-option\">"
+	"I guess we are lost. We can always:"
+	"<ul>"
+		"<li>\"Look at\", \"Look for\" ,\"Examine\", or \"Inspect\" items in the world</li>"
+		"<li>\"Go to\" or \"Look around\" places</li>"
+		"<li>\"Talk to\" or \"Interview\" people </li>"
+	"</ul><br>"
+	"Let\'s try something different this time."
+"</div>";

var guide_text_start = "<p class=\"wrong-option\">"
+	"Well, there's really only one option: \"start\""
+"</p>";

var go_to_error = "<p class=\"wrong-option\">I don't recognize that location.</p>";

var look_at_error = "<p class=\"wrong-option\">I don't recorgnize that item.</p>";

var look_around_error = "<p class=\"wrong-option\">There's nothing much to look at here.</p>";

var general_error = "<p class=\"wrong-option\">I'm not sure what you mean...</p>";

var not_enough_clues = "<p class=\"wrong-option\">Huh- We have not gathered enough clues to formulate a solution. <br> Let's look for more of them./p>";

var solve_question = "<p class=\"valid-command\">Who do you think commited the murders?</p>";

/*Introduction
--------------------------------------------------------*/

var introduction = "<h3 id=\"intro\">Introduction</h3>"
+"<p>"
+ "<p>One morning, in the heat of the Paris summer, we read in the newspaper about a terrible killing. An old woman and her daughter, who had lived alone in an old house "
+ "in the Rue Morgue, had been killed in the middle of the night.</p>"
+ "<blockquote class=\"newspaper_quote\">"
	+ "<p><em>Paris, July 7, 1840.</em> In the early morning today the people in the western part of the city were awakened from their sleep by cries of terror, which came, it "
	+ "seemed, from a house in the street called the Rue Morgue. The only persons living in the house were an <b>old woman, Mrs. L\'Espanaye, and her daughter. Several neighbors "
	+ "and a policeman</b> ran toward the house, but by the time they reached it the cries had stopped. When no one answered their calls, they forced the door open. <br>"
	+ "As they rushed in they heard voices, two voices; they seemed to come from above. The group hurried from room to room, but they found nothing until they reached the "
	+ "<b>fourth floor</b>. There they found a d<b>oor that was firmly closed, locked, with the key inside</b>. Quickly they forced the door open, and they saw spread before them "
	+ "a bloody sickening scene \- a scene of horror! </p>"
	+ "<p>The room was in the wildest possible order \- broken chairs and tables were lying all around the room. There was only one bed, and from it everything had been "
	+ "taken and thrown into the middle of the floor.</p>"
	+ "<p>There was blood <b>everywhere</b>, on the floor, on the bed, on the walls. A <b>sharp knife covered with blood</b> was lying on the floor. In front of the "
	+ "fireplace there was some <b>long gray hair, also bloody</b>; it seemed to have been pulled from a human head. On the floor were <b>four pieces of gold, an "
	+ "earring, several objects made of silver, and two bags containing a large amount of money in gold.</b> Clothes had been thrown around the room. A box was found "
	+ "under the bed covers. It was open, and held only a few old letters and papers. </p>"
	+ "<p>There was no one there \- or so it seemed. <b>Above the fireplace they found the dead body of the daughter</b>; it had been <b>put up into the opening where "
	+ "the smoke escapes to the sky</b>. The body was still warm. There was blood on the face, and on <b>the neck there were dark, deep marks which seemed to have "
	+ "been made by strong fingers.</b> These marks surely show how the daughter was killed. After hunting in every part of the house without finding anything more, "
	+ "the group went outside. <b>Behind the building they found the body of the old woman. Her neck was almost cut through,</b> and when they tried to lift her up, "
	+ "her head fell off.</p>"
+ "</blockquote>"
+ "<p>\"This sounds like our kind of mystery. What should we do?\"</p>"
+ "</p>";

/*House
--------------------------------------------------*/

var house_start = "<p id=\"house\">Sounds like fun. I\'ll get my coat.</p>"
+ "<h3>The House</h3>"
+ "<p>"
+	"It was late in the afternoon when we reached the house on the Rue Morgue. It was easily found for there were still many persons \- in fact, a crowd, standing there looking at it. <br>"
+	"<br>"
+	"\"I am friends with the Chief of Police. He will let us look around and ask questions. Shall we go in or look around the neighborhood first?\""
+	"<br>"
+"</p>";

/*Street
---------------------------------------------------*/

var street_start = "<h3>The Neighborhood</h3>"
+ "<p>We walk around the house. We note a long, thin metal pole which went from the top of the building to the ground \- a lightning rod, put there to carry down "
+ "to the ground a charge of electricity that might come out of the clouds during a bad summer storm. This could be a possible way for someone to go up or down the wall, "
+ "and then to go in or out the window. </p>"
+ "<p>No other buildings are close to the house where the murder occurred. People still mill around gossiping about the murder. Several neighbors are still in the street.</p>"
+ "<p>\"Now what?\"</p>";

var rod_response = "<p>\"Iron, I guess. Though I do not know if I would be able to climb it going up or down.\"</p>";

/*Apartment
---------------------------------------------------*/

var apartment_start = "<p id=\"apartment\">\"Alright, we will get a look at the scene. Let\'s not forget to check the surroundings later.\"</p>"
+ "<h3>The Apartment</h3>"
+ "<p>"
+	"We went in the front of the house. We went up the stairs into the room where the daughter\'s body had been found. Both bodies were there. The police had left the room as they had found it."
+ "</p>"
+ "<p>"
+	"There was blood everywhere, on the floor, on the bed, on the walls. A sharp knife covered with blood was lying on the floor. In front of the fireplace there was some long gray hair, also bloody. "
+   "On the floor were four pieces of gold, an earring, several objects made of silver, and two bags containing a large amount of money in gold. Nearly the whole amount brought "
+   "from the bank was found, in bags, on the floor. Police confirmed none of the money was taken. Clothes had been thrown around the room; yet it seemed that none had been taken. "
+   "The old woman and her daughter almost never left the house. They had little use for many clothes. Those that were found in the room were as good as any they had. A box was found "
+   "under the bed covers. It was open, and held only a few old letters and papers."
+"</p>"
+"<p>"
+	"\"What would you like to do first?\""
+"</p>";

var papers_response = "<p>\"These look like old letters from Mr. L\'Espanaye. However, everything is in Spanish, and I cannot read Spanish.\"</p>";
var knife_response = "<p>\"This does not look like a knife that the ladies would have in their position.\"</p>";
var hairs_response = "<p>\"These are most likely from the old woman, Mrs. L\'Espanaye. It is a rather large clump of hair and skin.\"</p>";
var expensive_response = "<p>\"I do not think any valuables were stolen. It just looks like items were tossed around the room.\"</p>";
var clothes_response = "<p>\"Nothing fancy. Nothing missing either.\"</p>";

/*Intreviews
----------------------------------------------------*/

var interview_start = "<p>\"Looks like they have stuck around. Let\'s see who is here.\"</p>"
+ "<h3>Interviews</h3>"
+ "<p>The police had detained several witnesses who rushed to the scene when they heard the screams on the night of the murder. Most are still in "
+ "the vicinity of the house. </p>"
+ "<p>\"We can interview the acquaintances, a policeman, the neighbor, and passersby. Who should we talk to first?\"</p>";

var police_response = "<p><b>Isidore Muset</b>, a policeman, says that he was with the group that first entered the house. While he was going up the stairs he heard two voices, one low "
+ "and soft, and one hard, high, and very strange \- the voice of someone who was certainly not French, the voice of a foreigner. Spanish perhaps. It was not a " 
+ "woman\'s voice. He could not understand what it said. But the low voice, the softer voice, said, in French, \"My God!\" the room where the daughter\'s body "
+ "was found was locked on the inside.</p>"
+ "<p>When they reached the door everything was quiet. When they forced the door open they saw no one. The windows were closed and firmly locked on the inside. "
+ "There are no steps that someone could have gone down while they were going up. They say that the openings over the fireplace are too small for anyone to have "
+ "escaped through them. It took four or five people to pull the daughter\'s body out of the opening over the fireplace. A careful search was made through the "
+ "whole house. It was four or five minutes from the time they heard the voices to the moment they forced open the door of the room.</p>";

var acquaintance_response ="<p><b>Pauline Dubourg</b>, a washwoman, says she has known both of the dead women for more than three years, and has washed their clothes during that period. "
+ "The old lady and her daughter seemed to love each other dearly. They always paid her well. She did not know where their money came from, she said. She "
+ "never met anyone in the house. Only the two women lived on the fourth floor.  Almost no one ever went into the house and Mrs. L\'Espanaye and her daughter "
+ "were not often seen.</p>"
+ "<p><b>Pierre Moreau</b>, a shopkeeper, says Mrs. L\'Espanaye had bought food at his shop for nearly four years. She owned the house and had lived in it for more "
+ "than six years. People said they had money. He never saw anyone enter the door except the old lady and her daughter, and a doctor eight or ten times, perhaps.</p>"
+ "<p><b>Jules Mignaud</b>, a banker, says that Mrs. L\'Espanaye had put money in his bank, beginning eight years before. Three days before her death she took out of "
+ "the bank a large amount of money, in gold. A man from the bank carried it for her to her house.</p>";

var neighbor_response = "<p><b>Alfonso Garcia</b>, who is Spanish and lives on the Rue Morgue, says he entered the house but did not go up the stairs; he is nervous and he was afraid he "
+ "might be ill. He heard the voices. He believes the high voice was not that of a Frenchman. Perhaps it was English; but he doesn\'t understand English, so he "
+ "is not sure.</p>";

var passerby_response = "<p><b>William Bird</b>, another foreigner, an Englishman, says he was one of the persons who entered the house. He has lived in Paris for two years. He heard the "
+ "voices. The low voice was that of a Frenchman, he was sure, because he heard it say, in French, \"My God!\" The high voice was very loud. He is sure it was "
+ "not the voice of an Englishman, nor the voice of a Frenchman. It seemed to be that of an Italian. It might have been a woman\'s voice. He does not "
+ "understand Italian.</p>"
+ "<p><b>Mr. Alberto Montani</b>, an Italian, was passing the house at the time of the cries. He says that they lasted for about two minutes. They were screams, "
+ "long and loud, terrible, fearful sounds. Montani, who speaks Spanish but not French, says that he also heard two voices. He thought both vices were French. "
+ "But he could not understand any of the words spoken.</p>";

/*Scene
-----------------------------------------------------*/

var scene_start = "<h3>Inspect the Bodies</h3>"
+ "<p>We meet with the doctor, Paul Dumas, first.</p>"
+ "<p>Doctor Dumas says, \"I was called to see the bodies soon after they were found. They were in a horrible condition, badly marked and broken. Such results "
+ "could not have come from a woman\'s hands, only from those of a very powerful man. The daughter had been killed by strong hands around her neck.\"</p>"
+ "<p>The good doctor is kind enough to let us inspect the bodies for ourselves.</p>"
+ "<p>\"Which body should we inspect first?\"</p>";

var old_woman_response = "<h4>Mrs. L\'Espanaye, the Old Woman</h4>"
+ "<p>\"Not only was she outside,\" the good doctor says. \"Her neck was almost cut through. I am told that when they tried to lift her up, her head fell off.\""
+ "The body and head are arranged on the floor. The body appears to be broken besides the severed head.</p>"
+ "<p>Upon closer inspection of the old woman\'s hands, hair is stuck under her finger nails. The hair does not look human. We take some hair for reference."
+ "\"I think that is all we will find. What next?\"</p>";

var daughter_response = "<h4>The Daughter</h4>"
+ "<p>\"Yes,\" Doctor Dumas agrees. \"It took four or five people to pull the daughter\'s body out of the opening over the fireplace. I really don\'t know "
+ "how the murderer could have gotten her up there on his own.\"</p>"
+ "<p>There was blood on the face, and on the neck there were dark, deep marks which seemed to have been made by strong fingers. The doctor provides us with "
+ "a picture of the marks on the daughter's neck. The hand marks are larger than both of our hands.</p>";

/*Dicover the Escape route
-----------------------------------------------------*/

var escape_start = "<h3>Discover the Escape Route</h3>"
+ "<p>It is clear that the killers were in the room where the daughter was found. Though, it had been necessary for the neighbors to break down the door in "
+ "order to enter the room. There was no other door. From this room they must have escaped. The only available exits were the locked door, the chimney, and "
+ "the two windows. One window is easily seen. The other window is partly out of sight behind the big bed. </p>"
+ "<p>\"Let us look, one at a time, at the possible ways to escape. Which should we check first?\"</p>";

var door_response = "<h4>The Door</h4>"
+ "<p>\"The door was firmly closed and locked from the inside. The key is in the room. You can see the forced entry by the neighbors.\"</p>";

var chimney_response = "<h4>Chimney</h4>"
+ "<p>The opening above the fireplace is not big enough, near the top, for even a small animal.</p>"
+ "<p>Plus the daughter was stuffed up the fireplace already.</p>";

var visible_window_response = "<h4>Visible Window</h4>"
+ "<p>It is firmly closed, fastened, like the door, on the inside. To keep the window closed, to fasten it, someone had put a strong iron nail into the wood "
+ "at the side of the window in such a way that the window could not be raised. At least it seemed that the nail held the window closed. The nail was easy to " 
+ "see. There it was. And the people who discovered the killings used their greatest strength and could not raise the window.</p>"
+ "<p>We try to raise the window and cannot. Even after removing the nail, we cannot raise the window.</p>"
+ "<p>Perhaps there is a hidden lock inside the window. You feel the window carefully with your fingers. Indeed, a button which, when pressed, opens an inner "
+ "lock. With almost no effort you raise the window.</p>"
+ "<p>The killer could close the window from outside and the window would lock itself. But there was still the nail.</p>"
+ "<p>You carefully put the nail back into the hole from which you had taken it. Then you press the button and try to raise the window. You cannot. The nail "
+ "also was holding the window closed!</p>"
+ "<p>\"Then... then the murderer could not possibly have gone out this window. Where do we look next?\"</p>";

var hidden_window_response = "<h4>Window Behind the Bed</h4>"
+ "<p>We go to the second window and look behind the bed at the lower half of the window. There was a nail here, too, which holds the window closed. Without "
+ "moving the bed, you try to open this window also, and again you cannot do so.</p>"
+ "<p>Next, we try to see whether the two windows are in some way different.</p>"
+ "<p>The nail in the second window looks the same as the one we had just seen. We move the bed so that we can look closely. Yes. There is a button here, "
+ "too. Without touching the nail you press the button and try to raise the window. Up it goes!</p>"
+ "<p>As the window went up it carried with it the top part of the nail, the head. When we close the window, the head of the nail is again in its place. It "
+ "looks just as it had looked before. The head of the nail comes off easily into your fingers away from the window. The nail had been broken. When you put "
+ "the nail head back in its place, the nail again looks whole.</p>"
+ "<p>\"The murderer must have escaped through that window! Now that we know how he got out, what should we do next?\"</p>";
