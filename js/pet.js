var a50_0x4736=['exports','extend','playerId','name','petIndex','databaseHandler','getExp','player','Kinds','level','expForLevel','experience','_getBaseState','push','target','concat','map','index','setExp','getLevel','levelUp','entities','pushToPlayer','LevelUp','./mob','./mobdata'];(function(_0xf3eee1,_0x1ad146){var _0x2d9d2f=function(_0x14c0cf){while(--_0x14c0cf){_0xf3eee1['push'](_0xf3eee1['shift']());}};_0x2d9d2f(++_0x1ad146);}(a50_0x4736,0xb4));var a50_0x70e7=function(_0x42c932,_0x19eb8d){_0x42c932=_0x42c932-0x0;var _0x3135c1=a50_0x4736[_0x42c932];return _0x3135c1;};var Mob=require(a50_0x70e7('0x0'));var MobData=require(a50_0x70e7('0x1'));var Messages=require('./message');module[a50_0x70e7('0x2')]=Pet=Mob[a50_0x70e7('0x3')]({'init':function(_0x1c2b89,_0x2a944a,_0x480bca,_0x29332c,_0x46b116,_0x575fda,_0x22f1ad,_0x3de800){this['_super'](_0x1c2b89,_0x2a944a,_0x480bca,_0x29332c,_0x22f1ad);this['player']=_0x46b116;this[a50_0x70e7('0x4')]=_0x46b116['id'];this['type']='pet';this[a50_0x70e7('0x5')]=_0x575fda;this[a50_0x70e7('0x6')]=_0x3de800||0x0;var _0x3da13b=this;var _0x11faa1=this['player'][a50_0x70e7('0x7')][a50_0x70e7('0x8')](0xa+this[a50_0x70e7('0x6')],this[a50_0x70e7('0x9')][a50_0x70e7('0x5')],function(_0x11faa1){var _0x2edeff=MobData[a50_0x70e7('0xa')][_0x2a944a][a50_0x70e7('0xb')];if(_0x11faa1<Types[a50_0x70e7('0xc')][_0x2edeff]){_0x3da13b['level']=_0x2edeff;_0x3da13b[a50_0x70e7('0xd')]=Types[a50_0x70e7('0xc')][_0x2edeff];}else{_0x3da13b[a50_0x70e7('0xd')]=_0x11faa1;_0x3da13b[a50_0x70e7('0xb')]=Types['getLevel'](_0x11faa1);}});},'getState':function(){var _0x30c6d3=this[a50_0x70e7('0xe')](),_0x5450d6=[];_0x5450d6[a50_0x70e7('0xf')](this['name']);_0x5450d6[a50_0x70e7('0xf')](this['orientation']);if(this[a50_0x70e7('0x10')])_0x5450d6[a50_0x70e7('0xf')](this['target']['id']);else _0x5450d6[a50_0x70e7('0xf')](0x0);_0x5450d6[a50_0x70e7('0xf')](this[a50_0x70e7('0x4')]);var _0x3dcfdc=_0x30c6d3[a50_0x70e7('0x11')](_0x5450d6);return _0x3dcfdc;},'onMove':function(){if(move_callback)move_callback();},'onMoveCallback':function(_0xe1a092){move_callback=_0xe1a092;},'spawn':function(){if(this[a50_0x70e7('0x12')][a50_0x70e7('0x13')]==0x0||this[a50_0x70e7('0x12')]['index']==0x7)return null;return new Messages['Spawn'](this);},'incExp':function(_0x31f614){var _0x28280b=parseInt(_0x31f614);_0x28280b=Math['ceil'](_0x28280b);this['experience']=parseInt(this['experience'])+parseInt(_0x28280b);this['player'][a50_0x70e7('0x7')][a50_0x70e7('0x14')](0xa+this['petIndex'],this[a50_0x70e7('0x9')][a50_0x70e7('0x5')],this[a50_0x70e7('0xd')]);var _0x1a17cd=this[a50_0x70e7('0xb')];this['level']=Types[a50_0x70e7('0x15')](this[a50_0x70e7('0xd')]);if(_0x1a17cd!==this[a50_0x70e7('0xb')]){this[a50_0x70e7('0x16')]();}return _0x28280b;},'levelUp':function(){this['updateHitPoints']();this[a50_0x70e7('0x12')][a50_0x70e7('0x17')][a50_0x70e7('0x18')](this['player'],new Messages[(a50_0x70e7('0x19'))](0xa+this[a50_0x70e7('0x6')],this[a50_0x70e7('0xb')],this[a50_0x70e7('0xd')]));}});