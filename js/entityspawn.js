var a12_0x266a=['each','push','./shared/data/entity_spawn.json','exports','EntitySpawnData','saveSpawns','../shared/data/entity_spawn.json'];(function(_0x3d0ca3,_0x5b39df){var _0xd9bc4d=function(_0x2d767a){while(--_0x2d767a){_0x3d0ca3['push'](_0x3d0ca3['shift']());}};_0xd9bc4d(++_0x5b39df);}(a12_0x266a,0x1a3));var a12_0x1802=function(_0x19851a,_0x14e482){_0x19851a=_0x19851a-0x0;var _0x5a5c9b=a12_0x266a[_0x19851a];return _0x5a5c9b;};var _=require('underscore'),SpawnJson=require(a12_0x1802('0x0')),fs=require('fs');var EntitySpawnData=[];var i=0x0;_[a12_0x1802('0x1')](SpawnJson,function(_0x668cc7,_0x1e50c7){EntitySpawnData[i++]=_0x668cc7;});var addSpawn=function(_0x4678f1,_0xb69303,_0x40e3c4){EntitySpawnData[a12_0x1802('0x2')]({'id':_0x4678f1,'x':_0xb69303,'y':_0x40e3c4});};var saveSpawns=function(){fs['writeFile'](a12_0x1802('0x3'),JSON['stringify'](EntitySpawnData),function(_0x136298,_0xf271e7){if(_0x136298){return log['info'](_0x136298);}});};module[a12_0x1802('0x4')][a12_0x1802('0x5')]=EntitySpawnData;module[a12_0x1802('0x4')]['addSpawn']=addSpawn;module[a12_0x1802('0x4')][a12_0x1802('0x6')]=saveSpawns;