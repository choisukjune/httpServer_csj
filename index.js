
global.DB = {}
global.DB.Info = { mongoPath : "mongo", MongoDBServerURL : "127.0.0.1:55555/admin", ID : "tjrwns", PASS : "q1q1q1q1q1" }
global.DB.CONFIG = {}
global.DB.CONFIG.driver_connect_url = 'mongodb://' + global.DB.Info.ID + ':' + global.DB.Info.PASS + '@127.0.0.1:55555/admin';
global.DB.CONFIG.console_excute_command_js = [ '/c', global.DB.Info.mongoPath, global.DB.Info.MongoDBServerURL, '-u', global.DB.Info.ID, '-p', global.DB.Info.PASS, '<' ];
global.DB.CONFIG.console_excute_command_eval = [ '/c', global.DB.Info.mongoPath, global.DB.Info.MongoDBServerURL, '-u', global.DB.Info.ID, '-p', global.DB.Info.PASS, '--eval' ];

global.ROOTPath = __dirname;

require('./server/server');
require('./server/router');

//server.start(router.routerControl);
global.SERVER.serverStart( global.ROUTER.routerControl );
