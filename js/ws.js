var a69_0x31c5=['addConnection','_counter','forEachConnection','world','enterWorld','substr','from','base64','gunzip','log','toString','decode','disconnect','Client\x20closed\x20socket\x20','encode','stringify','gzip','sendUTF8','send','/../shared/','Something\x20went\x20wrong\x20when\x20trying\x20to\x20send\x20','error','Error\x20stack:\x20','stack','underscore','bison','./lib/class','http','socket.io','url','./utils','exports','Class','extend','port','connectionCallback','errorCallback','Not\x20implemented','each','_connections','_server','closeCallback','listenCallback','info','Closing\x20connection\x20to\x20','_connection','remoteAddress','conn','close','WebsocketServer','serve-static','client','index.html','morgan','use','dev','prototype','startsWith','function','length','endsWith','substring','pathname','split','concat','/token','Token\x20received\x20with\x20ID:\x20','/status','statusCallback','writeHead','write','/config/config_build.json','connection','parser','headers','host','string','address','websocket','application/json','js/file.js','/shared/js/gametypes.js','js/gametypes.js','/shared/js/itemtypes.js','js/itemtypes.js','end','createServer','Server\x20(everything)\x20is\x20listening\x20on\x20port\x20','_httpServer','listen','Client\x20socket\x20connected\x20from\x20','socketioConnection'];(function(_0x3d8d0a,_0x1001b4){var _0x1a1ed5=function(_0x362c41){while(--_0x362c41){_0x3d8d0a['push'](_0x3d8d0a['shift']());}};_0x1a1ed5(++_0x1001b4);}(a69_0x31c5,0xd0));var a69_0x37cf=function(_0xeb308d,_0x43f918){_0xeb308d=_0xeb308d-0x0;var _0x398c8c=a69_0x31c5[_0xeb308d];return _0x398c8c;};var _=require(a69_0x37cf('0x0'));var BISON=require(a69_0x37cf('0x1'));var useBison=![];var cls=require(a69_0x37cf('0x2'));var http=require(a69_0x37cf('0x3'));var socketio=require(a69_0x37cf('0x4'));var url=require(a69_0x37cf('0x5'));var Utils=require(a69_0x37cf('0x6'));var WS={};var zlib=require('zlib');var connect=require('connect');module[a69_0x37cf('0x7')]=WS;var Server=cls[a69_0x37cf('0x8')][a69_0x37cf('0x9')]({'init':function(_0x97af08){this[a69_0x37cf('0xa')]=_0x97af08;},'onConnect':function(_0x24f618){this[a69_0x37cf('0xb')]=_0x24f618;},'onError':function(_0x4d31ee){this[a69_0x37cf('0xc')]=_0x4d31ee;},'broadcast':function(_0x26d210){throw a69_0x37cf('0xd');},'forEachConnection':function(_0x13d95d){_[a69_0x37cf('0xe')](this['_connections'],_0x13d95d);},'addConnection':function(_0x5f210c){this[a69_0x37cf('0xf')][_0x5f210c['id']]=_0x5f210c;},'removeConnection':function(_0x44552a){delete this[a69_0x37cf('0xf')][_0x44552a];},'getConnection':function(_0x12f152){return this[a69_0x37cf('0xf')][_0x12f152];}});var Connection=cls[a69_0x37cf('0x8')][a69_0x37cf('0x9')]({'init':function(_0x1cead6,_0x4645f1,_0x500087){this['_connection']=_0x4645f1;this[a69_0x37cf('0x10')]=_0x500087;this['id']=_0x1cead6;},'onClose':function(_0x4bbb24){this[a69_0x37cf('0x11')]=_0x4bbb24;},'listen':function(_0x46f015){this[a69_0x37cf('0x12')]=_0x46f015;},'broadcast':function(_0x363172){throw a69_0x37cf('0xd');},'send':function(_0x2688f4){throw a69_0x37cf('0xd');},'sendUTF8':function(_0x4f60f4){throw a69_0x37cf('0xd');},'close':function(_0x1afd0c){log[a69_0x37cf('0x13')](a69_0x37cf('0x14')+this[a69_0x37cf('0x15')][a69_0x37cf('0x16')]+'.\x20'+_0x1afd0c);this[a69_0x37cf('0x15')][a69_0x37cf('0x17')][a69_0x37cf('0x18')]();}});WS[a69_0x37cf('0x19')]=Server['extend']({'_connections':{},'_counter':0x0,'init':function(_0x1b736b,_0x4aa302,_0x3a8a21){var _0x36de9e=this;this['_super'](_0x1b736b);this['ip']=_0x3a8a21;if(_0x4aa302===!![]){var _0x46e66f=connect();var _0x2db3b4=require(a69_0x37cf('0x1a'));_0x46e66f['use'](_0x2db3b4(a69_0x37cf('0x1b'),{'index':[a69_0x37cf('0x1c')]}));var _0x5114f0=require(a69_0x37cf('0x1d'));_0x46e66f[a69_0x37cf('0x1e')](_0x5114f0(a69_0x37cf('0x1f')));if(typeof String[a69_0x37cf('0x20')][a69_0x37cf('0x21')]!==a69_0x37cf('0x22')){String[a69_0x37cf('0x20')][a69_0x37cf('0x21')]=function(_0x3362ff){return _0x3362ff[a69_0x37cf('0x23')]>0x0&&this['substring'](0x0,_0x3362ff[a69_0x37cf('0x23')])===_0x3362ff;};}if(typeof String['prototype'][a69_0x37cf('0x24')]!==a69_0x37cf('0x22')){String[a69_0x37cf('0x20')][a69_0x37cf('0x24')]=function(_0x387474){return _0x387474[a69_0x37cf('0x23')]>0x0&&this[a69_0x37cf('0x25')](this['length']-_0x387474[a69_0x37cf('0x23')],this['length'])===_0x387474;};}_0x46e66f[a69_0x37cf('0x1e')](function handleDynamicPageRequests(_0x3ba5ab,_0x15c573){var _0x485fec=url['parse'](_0x3ba5ab[a69_0x37cf('0x5')])[a69_0x37cf('0x26')];var _0xb1a67e=_0x485fec[a69_0x37cf('0x27')]('&')[0x1];var _0x9e1063=_0x485fec[a69_0x37cf('0x27')]('&')[0x2];_0x485fec[a69_0x37cf('0x28')](_0xb1a67e)[a69_0x37cf('0x28')](_0x9e1063);if(_0x485fec['startsWith'](a69_0x37cf('0x29'))){log[a69_0x37cf('0x13')](a69_0x37cf('0x2a')+_0xb1a67e+'\x20and\x20name:\x20'+_0x9e1063);}switch(_0x485fec){case a69_0x37cf('0x2b'):if(_0x36de9e[a69_0x37cf('0x2c')]){_0x15c573[a69_0x37cf('0x2d')](0xc8);_0x15c573[a69_0x37cf('0x2e')](_0x36de9e[a69_0x37cf('0x2c')]());}break;case a69_0x37cf('0x2f'):case'/config/config_local.json':var _0x2ada50=_0x3ba5ab[a69_0x37cf('0x30')][a69_0x37cf('0x31')]['incoming'][a69_0x37cf('0x32')][a69_0x37cf('0x33')][a69_0x37cf('0x27')](':',0x2);var _0x30663b;if(typeof _0x2ada50[0x0]===a69_0x37cf('0x34')&&_0x2ada50[0x0]['length']>0x0){_0x30663b=_0x2ada50[0x0];}else{_0x30663b=_0x3ba5ab[a69_0x37cf('0x30')][a69_0x37cf('0x35')]()[a69_0x37cf('0x35')];}var _0x1ea187=0x50;if(0x2===_0x2ada50[a69_0x37cf('0x23')]){if(typeof _0x2ada50[0x1]===a69_0x37cf('0x34')&&_0x2ada50[0x1]['length']>0x0){var _0x52c87=parseInt(_0x2ada50[0x1],0xa);if(!isNaN(_0x52c87)&&_0x52c87>0x0&&_0x52c87<0x10000){_0x1ea187=_0x52c87;}}}var _0x213eff={'host':_0x30663b,'port':_0x1ea187,'dispatcher':!![],'transports':[a69_0x37cf('0x36'),'polling'],'force new connection':!![],'allowUpgrades':![]};var _0x1f68fd=JSON['stringify'](_0x213eff);var _0x33a321={'Content-Type':a69_0x37cf('0x37'),'Content-Length':_0x1f68fd['length']};_0x15c573[a69_0x37cf('0x2d')](0xc8,_0x33a321);_0x15c573['end'](_0x1f68fd);break;case'/shared/js/file.js':sendFile(a69_0x37cf('0x38'),_0x15c573,log);break;case a69_0x37cf('0x39'):sendFile(a69_0x37cf('0x3a'),_0x15c573,log);break;case a69_0x37cf('0x3b'):sendFile(a69_0x37cf('0x3c'),_0x15c573,log);break;default:_0x15c573[a69_0x37cf('0x2d')](0x194);}_0x15c573[a69_0x37cf('0x3d')]();});this['_httpServer']=http[a69_0x37cf('0x3e')](_0x46e66f)['listen'](_0x1b736b,this['ip']||undefined,function serverEverythingListening(){log[a69_0x37cf('0x13')](a69_0x37cf('0x3f')+_0x1b736b);});}else{this[a69_0x37cf('0x40')]=http['createServer'](function statusListener(_0xda2590,_0x1b17c0){var _0x41f4cd=url['parse'](_0xda2590[a69_0x37cf('0x5')])['pathname'];if(_0x41f4cd===a69_0x37cf('0x2b')&&_0x36de9e[a69_0x37cf('0x2c')]){_0x1b17c0['writeHead'](0xc8);_0x1b17c0[a69_0x37cf('0x2e')](_0x36de9e[a69_0x37cf('0x2c')]());}else{_0x1b17c0[a69_0x37cf('0x2d')](0x194);}_0x1b17c0[a69_0x37cf('0x3d')]();});this[a69_0x37cf('0x40')][a69_0x37cf('0x41')](_0x1b736b,this['ip']||undefined,function serverOnlyListening(){log['info']('Server\x20(only)\x20is\x20listening\x20on\x20port\x20'+_0x1b736b);});}this['_ioServer']=new socketio(this[a69_0x37cf('0x40')]);this['_ioServer']['on'](a69_0x37cf('0x30'),function webSocketListener(_0x3743a0){log[a69_0x37cf('0x13')](a69_0x37cf('0x42')+_0x3743a0[a69_0x37cf('0x17')]['remoteAddress']);_0x3743a0[a69_0x37cf('0x16')]=_0x3743a0[a69_0x37cf('0x17')][a69_0x37cf('0x16')];var _0x898be6=new WS[(a69_0x37cf('0x43'))](_0x36de9e['_createId'](),_0x3743a0,_0x36de9e);if(_0x36de9e[a69_0x37cf('0xb')]){_0x36de9e[a69_0x37cf('0xb')](_0x898be6);}_0x36de9e[a69_0x37cf('0x44')](_0x898be6);});},'_createId':function(){return 0xc350+this[a69_0x37cf('0x45')]++;},'broadcast':function(_0x280ecf){this[a69_0x37cf('0x46')](function(_0x2aaa3e){_0x2aaa3e['send'](_0x280ecf);});},'onRequestStatus':function(_0x507b04){this[a69_0x37cf('0x2c')]=_0x507b04;}});WS[a69_0x37cf('0x43')]=Connection[a69_0x37cf('0x9')]({'init':function(_0x320e6e,_0x22f7db,_0x4e9562){var _0x5846e1=this;this['_super'](_0x320e6e,_0x22f7db,_0x4e9562);this['_connection']['on']('message',function(_0x32ceaa){if(_0x32ceaa==a69_0x37cf('0x47')||_0x32ceaa=='pvp'){_0x5846e1[a69_0x37cf('0x10')][a69_0x37cf('0x48')](_0x32ceaa);return;}var _0x4d40dd=_0x32ceaa[a69_0x37cf('0x49')](0x0,0x1);if(_0x4d40dd=='2'){var _0x163c5b=Buffer[a69_0x37cf('0x4a')](_0x32ceaa['substr'](0x1),a69_0x37cf('0x4b'));zlib[a69_0x37cf('0x4c')](_0x163c5b,(_0x57e923,_0x163c5b)=>{if(_0x57e923)console[a69_0x37cf('0x4d')](_0x57e923[a69_0x37cf('0x4e')]());else{if(_0x5846e1[a69_0x37cf('0x12')]){if(useBison){_0x5846e1[a69_0x37cf('0x12')](BISON[a69_0x37cf('0x4f')](_0x163c5b));}else{_0x5846e1[a69_0x37cf('0x12')](JSON['parse'](_0x163c5b));}}}});}else{if(_0x5846e1[a69_0x37cf('0x12')]){if(useBison){_0x5846e1['listenCallback'](BISON[a69_0x37cf('0x4f')](_0x32ceaa[a69_0x37cf('0x49')](0x1)));}else{_0x5846e1['listenCallback'](JSON['parse'](_0x32ceaa[a69_0x37cf('0x49')](0x1)));}}}});this[a69_0x37cf('0x15')]['on'](a69_0x37cf('0x50'),function(){log[a69_0x37cf('0x13')](a69_0x37cf('0x51')+_0x5846e1[a69_0x37cf('0x15')][a69_0x37cf('0x17')][a69_0x37cf('0x16')]);if(_0x5846e1[a69_0x37cf('0x11')]){_0x5846e1['closeCallback']();}delete _0x5846e1[a69_0x37cf('0x10')]['removeConnection'](_0x5846e1['id']);});},'send':function(_0x31ec48){var _0x357dad=this;var _0x3466ce;if(useBison){_0x3466ce=BISON[a69_0x37cf('0x52')](_0x31ec48);}else{_0x3466ce=JSON[a69_0x37cf('0x53')](_0x31ec48);}if(_0x3466ce[a69_0x37cf('0x23')]>=0x800){zlib[a69_0x37cf('0x54')](_0x3466ce,{'level':0x1},(_0x4c0f63,_0x384f91)=>{_0x384f91=new Buffer(_0x384f91)[a69_0x37cf('0x4e')]('base64');_0x357dad[a69_0x37cf('0x55')]('2'+_0x384f91);});}else{_0x357dad['sendUTF8']('1'+_0x3466ce);}},'sendUTF8':function(_0x2e162a){this[a69_0x37cf('0x15')][a69_0x37cf('0x56')](_0x2e162a);}});function sendFile(_0x403013,_0x1b5c55,_0x1d48ee){try{var _0xc04a2d=require('fs');var _0x248963=_0xc04a2d['readFileSync'](__dirname+a69_0x37cf('0x57')+_0x403013);var _0x2e135a={'Content-Type':'text/javascript','Content-Length':_0x248963[a69_0x37cf('0x23')]};_0x1b5c55[a69_0x37cf('0x2d')](0xc8,_0x2e135a);_0x1b5c55[a69_0x37cf('0x3d')](_0x248963);}catch(_0x26c6e9){_0x1b5c55[a69_0x37cf('0x2d')](0x1f4);_0x1d48ee['error'](a69_0x37cf('0x58')+_0x403013);_0x1d48ee[a69_0x37cf('0x59')](a69_0x37cf('0x5a')+_0x26c6e9[a69_0x37cf('0x5b')]);}}