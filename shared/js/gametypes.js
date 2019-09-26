/* global bootKind, _, exports, module, Types */

Types = {
    Quest: {
            TOTAL_QUEST_NUMBER: 35
    },
    Messages: {

        CREATE: 0,
        LOGIN: 1,
        WELCOME: 2,
        SPAWN: 3,
        DESPAWN: 4,
        MOVE: 5,
        LOOTMOVE: 6,
        AGGRO: 7,
        ATTACK: 8,
        HIT: 9,
        HURT: 10,
        HEALTH: 11,
        CHAT: 12,
        LOOT: 13,
        EQUIP: 14,
        DROP: 15,
        TELEPORT: 16,
        DAMAGE: 17,
        POPULATION: 18,
        KILL: 19,
        LIST: 20,
        WHO: 21,
        ZONE: 22,
        DESTROY: 23,
        HP: 24,
        BLINK: 25,
        OPEN: 26,
        CHECK: 27,
        PVP: 28,
        STATADD: 29,
        STATINFO: 30,
        NOTIFY: 31,
        ITEMLEVELUP: 32,
        QUEST: 33,
        TALKTONPC: 34,
        MAGIC: 36,
        HEALTHENERGY: 37,
        EQUIPMENT: 38,
        INVENTORY: 39,
        SKILL: 40,
        SKILLINSTALL: 41,
        BANKGOLD: 42,
        LOADLOOKS: 43,
        MEMBERSHIP: 44,
        FRIENDS: 45,
        IGNORES: 46,
        LOBBY: 47,
        TRADE: 48,
        TRADEINVALID: 49,
        TRADEINVALIDTYPES: {
            INVALIDKIND: 1,
            UNKNOWNCOUNT: 2,
            INVALIDLEVEL: 3,
            UNTRADEABLE: 4
        },
        TRADESTATES: {
            STARTED: 5,
            INPROGRESS: 6,
            PSENTREQUEST: 7,
            OPSENTERQUEST: 8,
            PACCEPTED: 9,
            OPACCEPTED: 10,
            PADDEDITEM: 11,
            OPADDEDITEM: 12,
            INVENTORYCOUNT: 13,
            ITEMADDED: 14,
            ITEMREMOVED: 15,
            FINISHED: 16
        },
        TRADESCREEN: 50,
        CHARACTERINFO: 51,
        MOVEPATH: 52,
        SELL: 53,
        SHOP: 54,
        BUY: 55,
        STOREOPEN: 56,
        STORESELL: 57,
        STOREBUY: 58,
        WANTED: 59,
        GUILD: 60,
        GUILDERROR: 61,
        GUILDERRORTYPE: {
        	DOESNOTEXIST: 1,
        	BADNAME: 2,
        	ALREADYEXISTS: 3,
        	NOLEAVE: 4,
        	BADINVITE: 5,
        	GUILDRULES: 6,
        	IDWARNING: 7
        },
        GUILDACTION: {
			CONNECT: 8,
			ONLINE: 9,
			DISCONNECT: 10,
			INVITE: 11,
			LEAVE: 12,
			CREATE: 13,
			TALK: 14,
			JOIN: 15,
			POPULATION: 16
		},
		BANK: 62,
		KBVE: 63,
		GUILDWAR: 64,
		GUILDWARTYPES: {
		    JOIN: 1,
		    STARTED: 2,
		    FULL: 3,
		    INVALID: 4,
		    ONGOING: 5,
		    WAITING: 6
		},
		COUNTDOWN: 65,
		CLIENTFOCUS: 66,
		MOVEENTITY: 67,
		STOREENCHANT: 68,
		STOREREPAIR:69,
		BANKSTORE: 70,
		BANKRETRIEVE:71,
		SKILLLOAD: 72,
		NEWPASSWORD:73,
		ADDSPAWN:80,
		SAVESPAWNS:81,
		PARTYINVITE:90,
		PARTYLEAVE:91,
		PARTYLEADER:92,
		PARTYKICK:93,
		PARTY:94,
		KNOWWHO:95,
		PETCREATE:96,
		AUCTIONSELL:97,
		AUCTIONBUY:98,
		AUCTIONOPEN:99,
		AUCTIONDELETE:100,
		CLASSSWITCH:101,
		GATHER:102,
		CRAFT:103,
		AUCTION_LOGIN:104,
		SEND_INVENTORY:105,
		SEND_BANK:106,
		GOLD:107,
		PVP_SIDE:108,
		MOB_SPEECH:109,
		MOVE_SYNC:110,
		TELEPORT_MAP:111,
		PLAYER_REVIVE:112,
		REMOVEPET:113,
		WHEATHER:114,
		LEVELUP:115,
		COLOR_TINT:116,
		DEVICE:117,
		PET_SWAP: 118,

		CARD_SWAP: 119,
		REFRESH_CARDS:120,
		CARD_BATTLE_REQUEST:121,
		CARD_BATTLE_BET:122,

		DELIST:130,
		PLAINLOGIN:200,
		PURCHASE:300,
		PRODUCTS:301,
		APPEARANCEUNLOCK: 302,
		APPEARANCELIST: 303,
		LOOKUPDATE: 304,
    },

    Orientations: {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    },

    Keys: {
        ENTER: 13,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        W: 87,
        A: 65,
        S: 83,
        D: 68,
        SPACE: 32,
        I: 73,
        H: 72,
        M: 77,
        P: 80,
        KEYPAD_4: 100,
        KEYPAD_6: 102,
        KEYPAD_8: 104,
        KEYPAD_2: 98
    },

    Skills: {
      BLOODSUCKING: 1,
      RECOVERHEALTH: 2,
      HEALANDHEAL: 3,
      AVOIDATTACK: 4,
      ADDEXPERIENCE: 5,
      ATTACKWITHBLOOD: 6,
      CRITICALATTACK: 7,
      CRITICALRATIO: 8
    },

    PlayerClass: {
      FIGHTER: 0,
      ARCHER: 1,
      DEFENDER: 2,
      MAGE: 3
    },

    PlayerState: {
    	Roaming: 0,
    	Moving: 1,
    	Following: 2,
    	Aggro: 3,
    	Hurting: 4,
    	GettingItems: 5,
    	FollowPlayer: 6,
    },
};


Types.expForLevel = [];
Types.defenseExp = [];
Types.attackExp = [];
Types.moveExp = [];
Types.skillExp = [];

Types.expForLevel[0] = 0;
Types.defenseExp[0] = 0;
Types.attackExp[0] = 0;
Types.moveExp[0] = 0;
Types.skillExp[0] = 0;

for(i=1; i < 200; i++){
    var points = Math.floor((i * 150) * Math.pow(1.8, i / 10.));
    //log.info("level_"+i+"="+points);
    Types.expForLevel[i] = points;
    Types.defenseExp[i] = (points * 10)+50;
    Types.attackExp[i] = (points * 10)+50;
    Types.moveExp[i] = (points * 5)+20;
    Types.skillExp[i] = ~~(points / 2);
};


Types.getLevel = function(exp){
    if (typeof(exp)=='undefined' || exp==0) return 0;
    var i=1;
    for(i=1; i < 200; i++){
        if(exp < Types.expForLevel[i]){
            return i;
        }
    }
    return 200;
};

Types.getAttackLevel = function(exp){
    if (exp==0) return 0;
    var i=1;
    for(i=1; i < 200; i++){
        if(exp < Types.attackExp[i]){
            return i;
        }
    }
    return 200;
};

Types.getDefenseLevel = function(exp){
    if (exp==0) return 0;
    var i=1;
    for(i=1; i < 200; i++){
        if(exp < Types.defenseExp[i]){
            return i;
        }
    }
    return 200;
};

Types.getMoveLevel = function(exp){
    if (exp==0) return 0;
    var i=1;
    for(i=1; i < 200; i++){
        if(exp < Types.moveExp[i]){
            return i;
        }
    }
    return 200;
};

Types.getSkillLevel = function(exp) {
    if (typeof(exp)=='undefined' || exp==0) return 1;
    var i=1;
    for(i=1; i < 20; i++){
        if(exp < Types.skillExp[i]){
            return i;
        }
    }
    return 20;
}

Types.isPlayer = function(kind) {
	if (kind === 1 || kind === 222)
		return true;
	return false;
};

Types.getOrientationAsString = function(orientation) {
    switch(orientation) {
        case Types.Orientations.LEFT: return "left"; break;
        case Types.Orientations.RIGHT: return "right"; break;
        case Types.Orientations.UP: return "up"; break;
        case Types.Orientations.DOWN: return "down"; break;
    }
};

Types.getMessageTypeAsString = function(type) {
    var typeName;
    _.each(Types.Messages, function(value, name) {
        if(value === type) {
            typeName = name;
        }
    });
    if(!typeName) {
        typeName = "UNKNOWN";
    }
    return typeName;
};


if(!(typeof exports === 'undefined')) {
    module.exports = Types;
}
