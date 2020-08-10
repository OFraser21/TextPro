# README

Github would not allow me to upload all my files at one I wasn't aware of this at the time, I assumed like azure dev ops it would allow me to do it all at once for this I apologize I'm actually not sure how to guarantee all my files will be in tact as github doesn't specify which files get left behind. As such my work can also be found at the following dropbox link: https://www.dropbox.com/sh/xr2gcltb32tg7sg/AABpVOSsxUvFOkYce-DptgUia?dl=0

Contained is a general read me describing not only the technologies used in this project but, my experiences with them as well as things I'd have done differently and things I struggled with.


Experience:

    I took it upon myself to learn completely new technologies for this coding exercise(Ruby,POSTGRESQL,Trilio) and I soon came to realize I probably should have stuck to what I knew for the time being. I spent many hours just trying to figure out if my environments were set up correctly, if certain dependencies were installed etc. Ruby on rails was a stark difference to what I am use to as far as it's integration with POSTGRESQL, I can see why an experienced ruby develop would use the model structure to create quick dbs but for me coming from a more traditional SQL background I found this to be somewhat difficult. Not in creation persay but in getting all of the kinks out. There are many things I did not originally understand about postgresql including that each entry has its own timestamp(I redundantly made one originally), as well as how it's types work. I struggled for a really long time trying to make a javascript datetime work properly with the entity I created for postgresql, apparently they have to be in a very particular structure and they may change from when they enter the db to when they leave and basically decided it would be easier to remove the timestamp column and use the built in created column.  I made several migrations through out the project because of early mistakes I made in creating my DB. Trilio was not hard in particular but it isn't great at explaining errors and while some see it as a plus, there were countless ways to integrate in ruby alone, which caused some confusion for me overall in finding out which would be best for my application. I think overall it really comes down to I wish I had the opportunity to take the time to learn and read about the technologies I decided to use before I had to use them, which is my fault in entirety, I knew I was under a time constraint and as such choosing all new technologies sans react is of course a disadvantage of my own making. Also in hindsight I likely should have went for a more so chat room style vs a traditional text message application. Depsite this overall I had a great time learning experimenting with the new technologies and apis. Thank you for the opportunity. 


Things I'd do Differently:
    There were many facets of this project I wish I had the time to complete but here are a list of them in no particular order.
        Network Error Catching
        Better styling/css
        Foreign Key linking between contacts and textmessages
        Better structure to expand to a robust contact system
        Better masking in inputs
        Smart linking of contacts, ie: same name different number prompts a name change validation 
        Better placement of secret resources and api keys
        Error Prompts 
        NUMBER + EXT Saving
        Better DB structure overall, current design allows for mass duplicates/ bad linking of columns
        Displaying proper states for text messages 
        Validation of Phone number using Twilio instead of built in standards
        Formatting Time Tags
        Scrolling MessageBoxes instead of infinite scrolling page

Technologies Used:
    Ruby on Rails
    Postgresql
    React JS
    Twilio
