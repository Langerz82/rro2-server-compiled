var a22_0x11b6=['itemSkillLevel','itemDurability','itemDurabilityMax','itemExperience','isConsumableItem','setInventory','_putInventory','itemSkillKind','setInventoryItem','map','entities','pushToPlayer','isCraft','modifyGold','Gold','./lib/class','./itemroom','./message','../shared/js/gametypes','exports','Class','extend','number','gold','maxNumber','info','itemSlots=','itemKinds=','stringify','itemSkillKinds=','itemSkillLevels=','itemsDurabilityMax=','itemsExperience=','rooms','itemKind','itemCount','makeEmptyInventory','owner','itemKind=','itemNumber','putInventory','kind'];(function(_0x268b47,_0xfd14a9){var _0x1d42a6=function(_0x3432b3){while(--_0x3432b3){_0x268b47['push'](_0x268b47['shift']());}};_0x1d42a6(++_0xfd14a9);}(a22_0x11b6,0x15f));var a22_0x3dc8=function(_0x7a00a9,_0x4aac79){_0x7a00a9=_0x7a00a9-0x0;var _0x316846=a22_0x11b6[_0x7a00a9];return _0x316846;};var cls=require(a22_0x3dc8('0x0')),ItemRoom=require(a22_0x3dc8('0x1')),Messages=require(a22_0x3dc8('0x2')),ItemTypes=require('../shared/js/itemtypes'),Types=require(a22_0x3dc8('0x3'));module[a22_0x3dc8('0x4')]=Inventory=cls[a22_0x3dc8('0x5')][a22_0x3dc8('0x6')]({'init':function(_0x17a786,_0x4ae8fe,_0x29e260,_0x8499b9,_0x563649,_0x6e2783,_0xa97c54,_0x16b7bd,_0xab3fc9,_0x40293f,_0x35d4bc){this['owner']=_0x17a786;this[a22_0x3dc8('0x7')]=_0x4ae8fe;this[a22_0x3dc8('0x8')]=parseInt(_0x35d4bc);this[a22_0x3dc8('0x9')]=0x18;this['rooms']={};log['info']('number='+_0x4ae8fe);log[a22_0x3dc8('0xa')](a22_0x3dc8('0xb')+JSON['stringify'](_0x29e260));log[a22_0x3dc8('0xa')](a22_0x3dc8('0xc')+JSON[a22_0x3dc8('0xd')](_0x8499b9));log[a22_0x3dc8('0xa')]('itemNumbers='+JSON[a22_0x3dc8('0xd')](_0x563649));log[a22_0x3dc8('0xa')](a22_0x3dc8('0xe')+JSON[a22_0x3dc8('0xd')](_0x6e2783));log[a22_0x3dc8('0xa')](a22_0x3dc8('0xf')+JSON['stringify'](_0xa97c54));log[a22_0x3dc8('0xa')]('itemsDurability='+JSON[a22_0x3dc8('0xd')](_0x16b7bd));log[a22_0x3dc8('0xa')](a22_0x3dc8('0x10')+JSON[a22_0x3dc8('0xd')](_0xab3fc9));log['info'](a22_0x3dc8('0x11')+JSON[a22_0x3dc8('0xd')](_0x40293f));for(var _0x1a42f9=0x0;_0x1a42f9<this[a22_0x3dc8('0x7')];_0x1a42f9++){this[a22_0x3dc8('0x12')][_0x29e260[_0x1a42f9]]=new ItemRoom(_0x8499b9[_0x1a42f9],_0x563649[_0x1a42f9],_0x6e2783[_0x1a42f9],_0xa97c54[_0x1a42f9],_0x16b7bd[_0x1a42f9],_0xab3fc9[_0x1a42f9],_0x40293f[_0x1a42f9]);}},'hasItem':function(_0x4bdc52){for(var _0x9adfc5 in this[a22_0x3dc8('0x12')]){if(this[a22_0x3dc8('0x12')][_0x9adfc5][a22_0x3dc8('0x13')]===_0x4bdc52){return!![];}}return![];},'hasItems':function(_0x59e2ae,_0x50ba2b){var _0x1c91c0=0x0;for(var _0x15aa3c in this[a22_0x3dc8('0x12')]){if(this['rooms'][_0x15aa3c][a22_0x3dc8('0x13')]===_0x59e2ae){_0x1c91c0+=this[a22_0x3dc8('0x12')][_0x15aa3c][a22_0x3dc8('0x14')];if(_0x1c91c0>=_0x50ba2b)return!![];}}return![];},'hasRoomInInventory':function(){for(var _0x5d1b6d=0x0;_0x5d1b6d<this['maxNumber'];_0x5d1b6d++){if(!this[a22_0x3dc8('0x12')][_0x5d1b6d]){return!![];}}return![];},'hasRoomInInventoryEquipment':function(){for(var _0x5c33be=0x6;_0x5c33be<this['maxNumber'];_0x5c33be++){if(!this[a22_0x3dc8('0x12')][_0x5c33be]){return!![];}}return![];},'makeEmptyInventory':function(_0x20a781){this[a22_0x3dc8('0x12')][_0x20a781]=null;delete this['rooms'][_0x20a781];databaseHandler[a22_0x3dc8('0x15')](this[a22_0x3dc8('0x16')],_0x20a781);},'getItemNumber':function(_0x2ff55c){log['info'](a22_0x3dc8('0x17')+_0x2ff55c);log[a22_0x3dc8('0xa')](JSON[a22_0x3dc8('0xd')](this[a22_0x3dc8('0x12')]));for(var _0xaee90b in this[a22_0x3dc8('0x12')]){if(this[a22_0x3dc8('0x12')][_0xaee90b][a22_0x3dc8('0x13')]==_0x2ff55c){return this[a22_0x3dc8('0x12')][_0xaee90b][a22_0x3dc8('0x18')];}}return 0x0;},'getInventoryNumber':function(_0x1cacd0){for(var _0x8c438c in this[a22_0x3dc8('0x12')]){if(this['rooms'][_0x8c438c][a22_0x3dc8('0x13')]==_0x1cacd0){return _0x8c438c;}}return-0x1;},'getEmptyInventoryNumber':function(){for(var _0xa73899=0x0;_0xa73899<this[a22_0x3dc8('0x9')];_0xa73899++){if(!this[a22_0x3dc8('0x12')][_0xa73899]){return _0xa73899;}}return-0x1;},'getEmptyEquipmentNumber':function(){for(var _0x3f30a3=0x6;_0x3f30a3<this[a22_0x3dc8('0x9')];_0x3f30a3++){if(!this['rooms'][_0x3f30a3]){return _0x3f30a3;}}return-0x1;},'putInventoryItem':function(_0x3d16e1){log['info'](JSON[a22_0x3dc8('0xd')](_0x3d16e1));return this[a22_0x3dc8('0x19')](_0x3d16e1[a22_0x3dc8('0x1a')]||_0x3d16e1['itemKind'],_0x3d16e1[a22_0x3dc8('0x18')],_0x3d16e1['itemSkillKind'],_0x3d16e1[a22_0x3dc8('0x1b')],_0x3d16e1[a22_0x3dc8('0x1c')],_0x3d16e1[a22_0x3dc8('0x1d')],_0x3d16e1[a22_0x3dc8('0x1e')]);},'putInventory':function(_0x319d42,_0x6b2cb5,_0x32069a,_0x74083a,_0x22f4fe,_0x18f8a3,_0x44671d){_0x6b2cb5=_0x6b2cb5?_0x6b2cb5:0x1;_0x32069a=_0x32069a?_0x32069a:0x0;_0x74083a=_0x74083a?_0x74083a:0x0;_0x22f4fe=_0x22f4fe?_0x22f4fe:0x0;_0x18f8a3=_0x18f8a3?_0x18f8a3:0x0;_0x44671d=_0x44671d?_0x44671d:0x0;if(ItemTypes[a22_0x3dc8('0x1f')](_0x319d42)||ItemTypes['isCraft'](_0x319d42)){for(var _0x324b7f in this['rooms']){if(this[a22_0x3dc8('0x12')][_0x324b7f]['itemKind']==_0x319d42){this['rooms'][_0x324b7f][a22_0x3dc8('0x18')]+=_0x6b2cb5;if(this[a22_0x3dc8('0x12')][_0x324b7f][a22_0x3dc8('0x18')]<=0x0){this['makeEmptyInventory'](_0x324b7f);}else{databaseHandler[a22_0x3dc8('0x20')](this[a22_0x3dc8('0x16')],_0x324b7f,_0x319d42,this['rooms'][_0x324b7f][a22_0x3dc8('0x18')],0x0,0x0,0x0,0x0,0x0);}return _0x324b7f;}}return this[a22_0x3dc8('0x21')](_0x319d42,_0x6b2cb5,0x0,0x0,0x0,0x0,0x0);}else{return this['_putInventory'](_0x319d42,_0x6b2cb5,_0x32069a,_0x74083a,_0x22f4fe,_0x18f8a3,_0x44671d);}},'_putInventory':function(_0x552477,_0x1f5fec,_0x54eaa,_0x17236d,_0x456c0f,_0x3d3c6a,_0x25bdc5){var _0x27996d=0x0;if(!ItemTypes[a22_0x3dc8('0x1f')](_0x552477)){_0x27996d=0x6;}for(;_0x27996d<this[a22_0x3dc8('0x9')];_0x27996d++){var _0x59bd6d=this[a22_0x3dc8('0x12')][_0x27996d];if(!_0x59bd6d){_0x59bd6d={};_0x59bd6d['itemKind']=_0x552477;_0x59bd6d[a22_0x3dc8('0x18')]=_0x1f5fec;_0x59bd6d[a22_0x3dc8('0x22')]=_0x54eaa;_0x59bd6d[a22_0x3dc8('0x1b')]=_0x17236d;_0x59bd6d[a22_0x3dc8('0x1c')]=_0x456c0f;_0x59bd6d[a22_0x3dc8('0x1d')]=_0x3d3c6a;_0x59bd6d[a22_0x3dc8('0x1e')]=_0x25bdc5;this[a22_0x3dc8('0x12')][_0x27996d]=_0x59bd6d;databaseHandler[a22_0x3dc8('0x23')](this['owner'],_0x27996d,_0x59bd6d);return _0x27996d;}}if(this[a22_0x3dc8('0x16')]instanceof Player)this[a22_0x3dc8('0x16')][a22_0x3dc8('0x24')][a22_0x3dc8('0x25')][a22_0x3dc8('0x26')](this[a22_0x3dc8('0x16')],new Messages['Notify']('Inventory\x20is\x20full.'));return-0x1;},'setInventoryItem':function(_0x5c84f4,_0x5cf244){if(_0x5cf244)this[a22_0x3dc8('0x20')](_0x5c84f4,_0x5cf244[a22_0x3dc8('0x13')],_0x5cf244[a22_0x3dc8('0x18')],_0x5cf244[a22_0x3dc8('0x22')],_0x5cf244[a22_0x3dc8('0x1b')],_0x5cf244[a22_0x3dc8('0x1c')],_0x5cf244[a22_0x3dc8('0x1d')],_0x5cf244[a22_0x3dc8('0x1e')]);else{this[a22_0x3dc8('0x15')](_0x5c84f4);this[a22_0x3dc8('0x16')][a22_0x3dc8('0x24')]['entities'][a22_0x3dc8('0x26')](this['owner'],new Messages['Inventory'](_0x5c84f4,null));}},'setInventory':function(_0x132bb4,_0xb3d175,_0x3d579c,_0x5e65b8,_0x5459a8,_0x29cd21,_0x48638e,_0xcc237){var _0x2ec936={};_0x2ec936['itemKind']=_0xb3d175;_0x2ec936[a22_0x3dc8('0x18')]=_0x3d579c;_0x2ec936[a22_0x3dc8('0x22')]=_0x5e65b8;_0x2ec936[a22_0x3dc8('0x1b')]=_0x5459a8;_0x2ec936[a22_0x3dc8('0x1c')]=_0x29cd21;_0x2ec936[a22_0x3dc8('0x1d')]=_0x48638e;_0x2ec936[a22_0x3dc8('0x1e')]=_0xcc237;this[a22_0x3dc8('0x12')][_0x132bb4]=_0x2ec936;databaseHandler['setInventory'](this[a22_0x3dc8('0x16')],_0x132bb4,_0xb3d175,_0x3d579c,_0x5e65b8,_0x5459a8,_0x29cd21,_0x48638e,_0xcc237);},'takeOutInventory':function(_0x80966a,_0x285695){var _0x2ffba1=this['rooms'][_0x80966a];if((ItemTypes[a22_0x3dc8('0x1f')](_0x2ffba1[a22_0x3dc8('0x13')])||ItemTypes[a22_0x3dc8('0x27')](_0x2ffba1[a22_0x3dc8('0x13')]))&&_0x2ffba1[a22_0x3dc8('0x18')]>_0x285695){_0x2ffba1['itemNumber']-=_0x285695;databaseHandler['setInventoryItem'](this['owner'],_0x80966a,_0x2ffba1);}else{this[a22_0x3dc8('0x15')](_0x80966a);}},'modifyGold':function(_0xf862a0){this['gold']+=_0xf862a0;databaseHandler[a22_0x3dc8('0x28')](this[a22_0x3dc8('0x16')],0x1,this[a22_0x3dc8('0x8')]);if(this['owner'])this[a22_0x3dc8('0x16')][a22_0x3dc8('0x24')]['entities'][a22_0x3dc8('0x26')](this[a22_0x3dc8('0x16')],new Messages[(a22_0x3dc8('0x29'))](0x1,this[a22_0x3dc8('0x8')]));},'toString':function(){var _0x52e0be=0x0;var _0x3ecf23=''+this[a22_0x3dc8('0x9')];for(_0x52e0be=0x0;_0x52e0be<this[a22_0x3dc8('0x9')];_0x52e0be++){_0x3ecf23+=',\x20'+this[a22_0x3dc8('0x12')][_0x52e0be][a22_0x3dc8('0x13')]+'\x20';_0x3ecf23+=this[a22_0x3dc8('0x12')][_0x52e0be][a22_0x3dc8('0x18')]+'\x20';_0x3ecf23+=this[a22_0x3dc8('0x12')][_0x52e0be][a22_0x3dc8('0x22')]+'\x20';_0x3ecf23+=this[a22_0x3dc8('0x12')][_0x52e0be][a22_0x3dc8('0x1b')]+'\x20';_0x3ecf23+=this['rooms'][_0x52e0be][a22_0x3dc8('0x1c')]+'\x20';_0x3ecf23+=this[a22_0x3dc8('0x12')][_0x52e0be][a22_0x3dc8('0x1d')]+'\x20';_0x3ecf23+=this[a22_0x3dc8('0x12')][_0x52e0be][a22_0x3dc8('0x1e')]+'\x20';}return _0x3ecf23;}});