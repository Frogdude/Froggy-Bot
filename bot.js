var PlugAPI = require('./plugapi'); // git clone (or unzip) into the same directory as your .js file. There should be plugapi/package.json, for example (and other files)
var ROOM = 'chillout-mixer-ambient-triphop';
//Plug changed the update code again, as well as how it is stored, which broke my static method which could be used to get it. So, for now, it must be hardcoded.

Current update code: h90

// Instead of providing the AUTH, you can use this static method to get the AUTH cookie via twitter login credentials:
PlugAPI.getAuth({
    username: 'PlugBotCity3',
    password: 'goodboy'
}, function(err, auth) { // if err is defined, an error occurred, most likely incorrect login
    if(err) {
        console.log("An error occurred: " + err);
        return;
    }
    var bot = new PlugAPI(auth, '4w@fWs$');
    bot.connect(ROOM);
}
bot.on('chat', function (data) {
if (data.type == 'userJoin')
bot.chat("Welcome!" + @ username);
});

    
