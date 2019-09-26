/* global bootKind, _, exports, module, Types */

var ItemTypes = {};
var ItemData = {};
var KindData = {};

ItemTypes.KindData = KindData;

ItemTypes.setKindData = function(kindData) {
	//log.info(JSON.stringify(kindData));
	KindData = kindData;
	ItemTypes.KindData = kindData;
};

ItemTypes.getName = function(kind) {
    //if (kind == null) return false;
    try {
    	var item = KindData[kind];
    	if (!item) return '';
        return item.name;
   } catch(e) {
        log.error("No name found for item: "+KindData[kind]);
        log.error('Error stack: ' + e.stack);
    }
}

ItemTypes.getWeaponLevel = function(kind) {
    //if (kind == null) return false;
    try {
    	var item = KindData[kind];
    	if (!item) return 0;
        return item.modifier;
    } catch(e) {
        log.error("No level found for weapon: "+KindData[kind]);
        log.error('Error stack: ' + e.stack);
    }
};


ItemTypes.getArmorLevel = function(kind) {
    //if (kind == null) return false;
    try {
    	var item = KindData[kind];
        if (!item) return 0;
    	return item.modifier;
    } catch(e) {
        log.error("No level found for armor: "+KindData[kind]);
        log.error('Error stack: ' + e.stack);
    }
};

ItemTypes.getItemByLevel = function(type, level) {
	for (var kind in KindData)
	{
	    var item = KindData[kind];
	    if ((item.type == "armor" || item.type == "armorarcher") &&
		item.type == type && level == item.modifier)
	    {
		return item;
	    }
	    if ((item.type == "weapon" || item.type == "weaponarcher") &&
		item.type == type && level == item.modifier)
	    {
		return item;
	    }

	}
	return null;
};

ItemTypes.getLevelByKind = function(kind) {
    var item = KindData[kind];
    if (item.type == "armor" || item.type == "armorarcher")
    {
	return item.modifier;
    }
    if (item.type == "weapon" || item.type == "weaponarcher")
    {
	return item.modifier;
    }
    return null;
};

ItemTypes.getType = function(kind) {
    //if (kind == null) return false;
    try {
    	var item = KindData[kind];
        return item.type;
    } catch(e) {
        log.error("No type found for item: "+kind);
        log.error('Error stack: ' + e.stack);
    }
};

ItemTypes.getBuyPrice = function(id) {
    	var item = KindData[id];
        if (!item) return 0;

        if (item.type == "weapon" || item.type == "weaponarcher") {
        	return Math.floor(item.modifier*20);
        } else if (item.type == "armor" || item.type == "armorarcher") {
        	return Math.floor(item.modifier*20);
        } else if (item.type == "object" && item.buy > 0) {
        	if (item.buyCount > 1)
        		return (item.buy * item.buyCount);
        	else
        		return item.buy;
        }
    	return 0;
};

ItemTypes.getEnchantSellPrice = function(itemKind, enchantLevel, durabilityMax, experience) {
	var value = ItemTypes.getBuyPrice(itemKind) / 10;
	log.info("getEnchantSellPrice:" + itemKind + " " + enchantLevel + " " + durabilityMax + " " + experience);
	if (enchantLevel > 1)
	{
		log.info("getEnchantSellPrice: " + ItemTypes.getEnchantPrice(itemKind,enchantLevel-1,experience) / 10);
		value += ~~(ItemTypes.getEnchantPrice(itemKind,enchantLevel-1,experience) / 10);
	}
	log.info("full price1:"+value);
	value *= durabilityMax / 900;
	log.info("full price2:"+value);
	return Math.floor(value);
};

ItemTypes.getEnchantPrice = function(id, enchantLevel, experience) {
    	var item = KindData[id];
        if (!item) return 0;
				experience = experience || ItemTypes.itemExpForLevel[enchantLevel];

        var level;
        if (item.type == "weapon" || item.type == "weaponarcher") {
        	level = item.modifier;

        } else if (item.type == "armor" || item.type == "armorarcher") {
        	level = item.modifier;
        }
				log.info("getEnchantPrice: "+ItemTypes.itemExpForLevel[enchantLevel]);
        return Math.floor(level*20 * Math.pow(2, enchantLevel) *
        	(experience / ItemTypes.itemExpForLevel[enchantLevel]));
};

ItemTypes.getRepairPrice = function(id, enchantLevel, durability, durabilityMax) {
	var value = ItemTypes.getBuyPrice(id) / 10;
	var point = enchantLevel;
	//log.info("kind="+kind+",point="+point);
	if (point > 1)
	{
			value += ItemTypes.getEnchantPrice(id,point) / 100;
	}
	value *= (durabilityMax - durability) / durabilityMax * durabilityMax / 900;
	//log.info("full price:"+value);
	return Math.floor(value);
};

ItemTypes.isEquippable = function(kind) {
	if (ItemTypes.isArmor(kind) || ItemTypes.isArcherArmor(kind) ||
	    ItemTypes.isWeapon(kind) || ItemTypes.isArcherWeapon(kind) ||
		ItemTypes.isClothes(kind))
			return true;
	return false;
};

ItemTypes.isClothes = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "boots" ||
    	item.type === "gloves";
};

ItemTypes.isArmor = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "armor";
};

ItemTypes.isArcherArmor = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "armorarcher";
};

ItemTypes.isWeapon = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "weapon";
};

ItemTypes.isArcherWeapon = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "weaponarcher";
};

ItemTypes.isObject = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "object";
};

ItemTypes.isBenef = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "benef";
};

ItemTypes.isCraft = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "craft";
};

ItemTypes.isCard = function(kind) {
    var item = KindData[kind];
    if (!item) return false;
    return item.type === "card";
};


ItemTypes.isConsumableItem = function(kind) {
    var item = KindData[kind];
    if (!item)
    	return false;
    return item.type === "object";
};

ItemTypes.isHealingItem = function(kind) {
    var item = KindData[kind];
    if (!item)
    	return false;
    return item.type === "object" && (item.typemod=="health" || item.typemod=="healthpercent");
};

ItemTypes.isItem = function (kind) {
    var item = ItemTypes.KindData[kind];
    if (!item) return false;
    return item.type == "weaponarcher" ||
    	item.type == "weapon" ||
    	item.type == "armor" ||
    	item.type == "object" ||
    	item.type == "craft" ||
    	item.type == "boots" ||
    	item.type == "gloves" ||
    	item.type == "card";
}

ItemTypes.forEachKind = function(callback) {
    for(var k in kindData) {
    	//log.info("k="+JSON.stringify(k));
        callback(KindData[k], k);
    }
};

ItemTypes.forEachArmorKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(ItemTypes.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};
ItemTypes.forEachWeaponKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(ItemTypes.isWeapon(kind)) {
            callback(kind, kindName);
        }
    });
};


ItemTypes.forEachArcherArmorKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(ItemTypes.isArcherArmor(kind)) {
            callback(kind, kindName);
        }
    });
};
ItemTypes.forEachArcherWeaponKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(ItemTypes.isArcherWeapon(kind)) {
            callback(kind, kindName);
        }
    });
};


ItemTypes.getItemListBy = function (itemType, minLevel, maxLevel) {
    var ItemsList = [];
    for(var k in KindData) {
    	var item = KindData[k];
    	if (!item)
    	    continue;

        if (itemType == 1 && item.type == "object" && item.buy > 0)
        {
            ItemsList.push({
		name: item.name,
		kind: k,
		type: item.type,
		buyCount: item.buycount,
		buyPrice: item.buy
            });
        }
        else if (itemType == 2 && (item.type == "armor" || item.type == "armorarcher") &&
        	 item.modifier >= minLevel && item.modifier <= maxLevel) {
            ItemsList.push({
		name: item.name,
		kind: k,
		type: item.type,
		buyCount: item.buyCount,
		buyPrice: ItemTypes.getBuyPrice(k),
		rank: item.modifier
            });
        }
        else if (itemType == 3 && (item.type == "weapon" || item.type == "weaponarcher") &&
        	 item.modifier >= minLevel && item.modifier <= maxLevel) {
            ItemsList.push({
		name: item.name,
		kind: k,
		type: item.type,
		buyCount: item.buyCount,
		buyPrice: ItemTypes.getBuyPrice(k),
		rank: item.modifier
            });
        }

    }
    if (ItemsList.length > 0 && ItemsList[0].rank > 0)
	ItemsList.sort(function(a, b) {
	    return a.rank - b.rank;
    });
    return ItemsList;
};


ItemTypes.Store = {
    isBuy: function(id) {
        var item = KindData[id];
        if (!item) return false;
        return (item.buy > 0) ? true : false;
    },
    isBuyMultiple: function(id) {
    	var item = KindData[id];
        if (!item) return false;
    	return (item.buycount > 0) ? true : false;
    },
    isSell: function(id) {
        var item = KindData[id];
        if (!item) return false;
        return (item.buy >= 2) ? true : false;
    },
    getBuyCount: function(id) {
    	var item = KindData[id];
        if (!item) return false;
    	return (item.buyCount > 1) ? item.buyCount : 1;
    },

    getItems: function (type, min, max)
    {
	return ItemTypes.getItemListBy(type, min, max);
    },
};

ItemTypes.itemExpForLevel = [];

ItemTypes.itemExpForLevel[0] = 0;

for(i=1; i < 200; i++){
    var points = Math.floor((i * 50) * Math.pow(2, i / 10.));
    //log.info("level_"+i+"="+points);
    ItemTypes.itemExpForLevel[i] = points;
};

ItemTypes.getItemLevel = function(exp){
    if (exp==0) return 1;
    var i=1;
    for(i=1; i < 200; i++){
        if(exp > ItemTypes.itemExpForLevel[i-1] &&
        	exp <= ItemTypes.itemExpForLevel[i]){
            return i;
        }
    }
    return 200;
};


if(!(typeof exports === 'undefined')) {
    module.exports = ItemTypes;
}
