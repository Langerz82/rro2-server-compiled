var a18_0x5060=['./lib/class','underscore','./message','./utils','check','../shared/js/gametypes','exports','Class','extend','members','name','leader','manager','pushToGuild','GUILDACTION','ONLINE','memberNames','length','server','updateMember','setGuildId','undefined','error','\x20already\x20exists)','Guild','Messages','JOIN','onlineMemberCount','addGuildMember','info','GUILDACTION.JOIN','deleteInvite','map','entities','GuildError','GUILDERRORTYPE','sentInvites','valueOf','database','addGuildInvite','pushToPlayer','removeGuildInvite','each','keys','removeGuild','Remove\x20from\x20guild:\x20player\x20conflict\x20(','size'];(function(_0x21ec32,_0x2b1810){var _0x2229c7=function(_0x2ec071){while(--_0x2ec071){_0x21ec32['push'](_0x21ec32['shift']());}};_0x2229c7(++_0x2b1810);}(a18_0x5060,0x11a));var a18_0x1821=function(_0x3864aa,_0x573497){_0x3864aa=_0x3864aa-0x0;var _0x5f5b24=a18_0x5060[_0x3864aa];return _0x5f5b24;};var cls=require(a18_0x1821('0x0')),_=require(a18_0x1821('0x1')),Messages=require(a18_0x1821('0x2')),Utils=require(a18_0x1821('0x3')),check=require('./format')[a18_0x1821('0x4')],Types=require(a18_0x1821('0x5'));module[a18_0x1821('0x6')]=Guild=cls[a18_0x1821('0x7')][a18_0x1821('0x8')]({'init':function(_0x2dc7da,_0x1a6e96,_0x570bc2,_0x45f894){this[a18_0x1821('0x9')]={};this['sentInvites']={};this['id']=_0x2dc7da;this[a18_0x1821('0xa')]=_0x1a6e96;this['server']=_0x570bc2;this[a18_0x1821('0xb')]=null;this[a18_0x1821('0xc')]=_0x45f894;},'updateMember':function(_0x5048b2){this[a18_0x1821('0x9')][_0x5048b2['id']]=_0x5048b2['name'];this[a18_0x1821('0xc')][a18_0x1821('0xd')](this,new Messages['Guild'](Types['Messages'][a18_0x1821('0xe')][a18_0x1821('0xf')],this[a18_0x1821('0x10')]()));},'setMembers':function(_0x1a7de9){for(var _0x48d5e6=0x0;_0x48d5e6<_0x1a7de9[a18_0x1821('0x11')];++_0x48d5e6){var _0x2b19c4=this[a18_0x1821('0x12')]['getPlayerByName'](_0x1a7de9[_0x48d5e6]);if(_0x2b19c4){this[a18_0x1821('0x13')](_0x2b19c4);_0x2b19c4[a18_0x1821('0x14')](this['id']);}}},'addMember':function(_0x619804,_0x4cf03e){if(typeof this[a18_0x1821('0x9')][_0x619804['id']]!==a18_0x1821('0x15')){log[a18_0x1821('0x16')]('Add\x20to\x20guild:\x20player\x20conflict\x20('+_0x619804['id']+a18_0x1821('0x17'));this['deleteInvite'](_0x619804['id'],_0x619804);return![];}else{var _0x3d4d9d=!![];if(typeof _0x4cf03e!==a18_0x1821('0x15')){_0x3d4d9d=this['checkInvite'](_0x619804)&&_0x4cf03e;if(_0x4cf03e===![]){this['manager'][a18_0x1821('0xd')](this,new Messages[(a18_0x1821('0x18'))](Types[a18_0x1821('0x19')][a18_0x1821('0xe')][a18_0x1821('0x1a')],[_0x619804['name'],![]]),_0x619804);this['deleteInvite'](_0x619804['id'],_0x619804);return![];}}if(_0x3d4d9d){this[a18_0x1821('0x9')][_0x619804['id']]=_0x619804[a18_0x1821('0xa')];if(this[a18_0x1821('0x1b')]()==0x1)this[a18_0x1821('0xb')]=_0x619804[a18_0x1821('0xa')];_0x619804[a18_0x1821('0x14')](this['id']);this[a18_0x1821('0x12')]['database'][a18_0x1821('0x1c')](_0x619804,this);this[a18_0x1821('0xc')][a18_0x1821('0xd')](this,new Messages[(a18_0x1821('0x18'))](Types['Messages'][a18_0x1821('0xe')]['POPULATION'],[this[a18_0x1821('0xa')],this[a18_0x1821('0x1b')]()]));this[a18_0x1821('0xc')][a18_0x1821('0xd')](this,new Messages[(a18_0x1821('0x18'))](Types[a18_0x1821('0x19')][a18_0x1821('0xe')][a18_0x1821('0xf')],this[a18_0x1821('0x10')]()));if(typeof _0x4cf03e!==a18_0x1821('0x15')){log[a18_0x1821('0x1d')](a18_0x1821('0x1e'));this[a18_0x1821('0xc')][a18_0x1821('0xd')](this,new Messages[(a18_0x1821('0x18'))](Types['Messages']['GUILDACTION']['JOIN'],[_0x619804['name'],_0x619804['id'],this['id'],this['name']]));this[a18_0x1821('0x1f')](_0x619804['id'],_0x619804);}}return _0x619804['id'];}},'invite':function(_0x3d1bda,_0x3baab6){if(typeof this[a18_0x1821('0x9')][_0x3d1bda['id']]!==a18_0x1821('0x15')){_0x3baab6[a18_0x1821('0x20')][a18_0x1821('0x21')]['pushToPlayer'](_0x3baab6,new Messages[(a18_0x1821('0x22'))](Types[a18_0x1821('0x19')][a18_0x1821('0x23')]['BADINVITE'],_0x3d1bda[a18_0x1821('0xa')]));}else{this[a18_0x1821('0x24')][_0x3d1bda[a18_0x1821('0xa')]]=new Date()[a18_0x1821('0x25')]();this[a18_0x1821('0x12')][a18_0x1821('0x26')][a18_0x1821('0x27')](_0x3d1bda,this['name']);_0x3baab6[a18_0x1821('0x20')]['entities'][a18_0x1821('0x28')](_0x3d1bda,new Messages['Guild'](Types[a18_0x1821('0x19')][a18_0x1821('0xe')]['INVITE'],[this['id'],this[a18_0x1821('0xa')],_0x3baab6[a18_0x1821('0xa')]]));}},'deleteInvite':function(_0x56f233,_0x13e45e){this[a18_0x1821('0x12')][a18_0x1821('0x26')][a18_0x1821('0x29')](_0x13e45e,this[a18_0x1821('0xa')]);delete this['sentInvites'][_0x13e45e[a18_0x1821('0xa')]];},'checkInvite':function(_0x582781){var _0x2c9db6=new Date()[a18_0x1821('0x25')](),_0x532010=this;_[a18_0x1821('0x2a')](this[a18_0x1821('0x24')],function(_0x9f3fd4,_0x6e36d6){if(_0x2c9db6-_0x9f3fd4>0x927c0){var _0x1a3a03=_0x532010[a18_0x1821('0x12')]['getEntityByName'](_0x6e36d6);_0x532010['deleteInvite'](id,_0x582781);_0x532010['server'][a18_0x1821('0xd')](_0x532010,new Messages[(a18_0x1821('0x18'))](Types[a18_0x1821('0x19')][a18_0x1821('0xe')][a18_0x1821('0x1a')],_0x1a3a03[a18_0x1821('0xa')]),_0x1a3a03);}});return typeof this[a18_0x1821('0x24')][_0x582781[a18_0x1821('0xa')]]!==a18_0x1821('0x15');},'removeMember':function(_0x45d860){if(typeof this[a18_0x1821('0x9')][_0x45d860['id']]!==undefined){var _0x1164e6=this[a18_0x1821('0x9')][_0x45d860['id']];_0x45d860[a18_0x1821('0x20')][a18_0x1821('0x21')][a18_0x1821('0x28')](_0x45d860,new Messages[(a18_0x1821('0x18'))](Types[a18_0x1821('0x19')]['GUILDACTION'][a18_0x1821('0xf')],[]));delete this[a18_0x1821('0x9')][_0x45d860['id']];this[a18_0x1821('0xc')][a18_0x1821('0xd')](this,new Messages['Guild'](Types[a18_0x1821('0x19')][a18_0x1821('0xe')][a18_0x1821('0xf')],this[a18_0x1821('0x10')]()));this[a18_0x1821('0xc')][a18_0x1821('0xd')](this,new Messages[(a18_0x1821('0x18'))](Types[a18_0x1821('0x19')]['GUILDACTION']['POPULATION'],[this[a18_0x1821('0xa')],this['onlineMemberCount']()]));if(this[a18_0x1821('0xb')]==_0x1164e6){var _0x4b629a=this[a18_0x1821('0x10')]();this[a18_0x1821('0xb')]=_0x4b629a[0x0];}this['server'][a18_0x1821('0x26')]['removeGuildMember'](_0x1164e6,this);if(Object[a18_0x1821('0x2b')](this[a18_0x1821('0x9')])['length']==0x0){this[a18_0x1821('0x12')][a18_0x1821('0x26')][a18_0x1821('0x2c')](this['id']);this['name']='';}return!![];}else{log[a18_0x1821('0x16')](a18_0x1821('0x2d')+id+'\x20does\x20not\x20exist)');return![];}},'forEachMember':function(_0x1b2be7){_[a18_0x1821('0x2a')](this[a18_0x1821('0x9')],_0x1b2be7);},'memberNames':function(){return _[a18_0x1821('0x20')](this[a18_0x1821('0x9')],function(_0x20a40e){return _0x20a40e;});},'onlineMemberCount':function(){return _[a18_0x1821('0x2e')](this['members']);}});