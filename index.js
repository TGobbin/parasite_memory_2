(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[304,1346,302,46],[0,1364,302,46],[0,932,300,300],[1211,1128,302,66],[1211,1196,302,66],[906,1052,303,77],[1158,748,303,302],[1515,1198,302,66],[906,1199,302,66],[0,1234,302,66],[1463,748,303,302],[1210,1264,302,66],[1211,1052,302,74],[1515,1052,303,72],[0,1302,302,60],[1514,1266,302,66],[906,1267,302,66],[852,672,304,302],[608,1388,302,45],[608,1335,303,51],[912,1391,302,45],[302,932,300,300],[1216,1391,302,45],[1470,0,393,356],[304,1278,302,66],[1210,1334,303,55],[604,976,300,300],[1515,1126,302,70],[906,1131,303,66],[1520,1391,302,45],[1515,1334,303,55],[1865,0,3,3],[1768,748,243,243],[1310,358,571,196],[0,0,1468,334],[1310,556,492,190],[0,672,850,258],[0,336,1308,334]]},
		{name:"index_atlas_2", frames: [[0,1090,1895,495],[0,1587,1705,377],[1026,0,1017,1017],[0,0,1024,1088]]},
		{name:"index_atlas_3", frames: [[0,0,1346,1346]]},
		{name:"index_atlas_4", frames: [[0,0,1620,1620]]},
		{name:"index_atlas_5", frames: [[0,0,1620,1620]]},
		{name:"index_atlas_6", frames: [[0,0,1620,1620]]},
		{name:"index_atlas_7", frames: [[0,0,1620,1620]]},
		{name:"index_atlas_8", frames: [[0,0,1620,1620]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_241 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_238 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_299 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_235 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_232 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_296 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_293 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_229 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_226 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_223 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_288 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_221 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_218 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_285 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_211 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_279 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_252 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_269 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_247 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_203 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_300 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_295 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_276 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_274 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_242 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_303 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_275 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Ancylostomaduodenalemanterior = function() {
	this.initialize(img.Ancylostomaduodenalemanterior);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);


(lib.Ancylostomaduodenalemposterior = function() {
	this.initialize(img.Ancylostomaduodenalemposterior);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);


(lib.Cichlidogyrus_vetusmolendarius = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cichlidogyrus_vetusmolendarius_haptor = function() {
	this.initialize(img.Cichlidogyrus_vetusmolendarius_haptor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2588,1960);


(lib.Cimexlectularishead2 = function() {
	this.initialize(img.Cimexlectularishead2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);


(lib.Cimex_lectularius_03 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Clinostomum3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Clinostomum_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Clonorchissinensisoralandventralsuckers = function() {
	this.initialize(img.Clonorchissinensisoralandventralsuckers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3087,1998);


(lib.Clonorchis_sinensis = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Fasciolacercaria = function() {
	this.initialize(img.Fasciolacercaria);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);


(lib.Fasciola_hepatica_07 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ixodesricinusmouthpieces = function() {
	this.initialize(img.Ixodesricinusmouthpieces);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);


(lib.Ixodes_ricinus_03 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Schistosoma_mansoni_female_04 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Schistosoma_mansoni_male_04 = function() {
	this.initialize(img.Schistosoma_mansoni_male_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib.Taeniapisiformisproglottid = function() {
	this.initialize(img.Taeniapisiformisproglottid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);


(lib.Taeniapisiformisscolex = function() {
	this.initialize(img.Taeniapisiformisscolex);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3088,2076);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WinMessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("YOU WIN!", "normal 700 56px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.lineWidth = 317;
	this.text.parent = this;
	this.text.setTransform(0,-35.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24A23F").s().p("Eg4PAGQIAAsfMBwfAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WinMessage, new cjs.Rectangle(-360,-40,720,83.1), null);


(lib.Recs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// recs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73E37").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80D737").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#37B8D7").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8037D7").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7594DB").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEDD61").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#80A66D").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB6AC7").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC33").s().p("AlnHgQh4AAAAh4IAArPQAAh4B4AAILPAAQB4AAAAB4IAALPQAAB4h4AAg");
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,96,96);


(lib.Icons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(18));

	// icons
	this.instance = new lib.CachedBmp_197();
	this.instance.setTransform(-40.45,-40.45,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(-49.9,33.05,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_274();
	this.instance_2.setTransform(-50.45,32.35,0.3333,0.3333);

	this.instance_3 = new lib.Ixodes_ricinus_03();
	this.instance_3.setTransform(-50,-50,0.0617,0.0617);

	this.instance_4 = new lib.CachedBmp_242();
	this.instance_4.setTransform(0,0,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_14();
	this.instance_5.setTransform(-49.9,26.35,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_276();
	this.instance_6.setTransform(-50.45,31,0.3333,0.3333);

	this.instance_7 = new lib.Ixodesricinusmouthpieces();
	this.instance_7.setTransform(-81.15,-54.25,0.0517,0.0516);

	this.instance_8 = new lib.CachedBmp_203();
	this.instance_8.setTransform(-49.9,28.5,0.3333,0.3333);

	this.instance_9 = new lib.CachedBmp_300();
	this.instance_9.setTransform(-50.45,31.05,0.3333,0.3333);

	this.instance_10 = new lib.Clonorchissinensisoralandventralsuckers();
	this.instance_10.setTransform(-48.25,-50.3,0.0354,0.0354,7.9588);

	this.instance_11 = new lib.CachedBmp_295();
	this.instance_11.setTransform(-50,-49.95,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_18();
	this.instance_12.setTransform(-49.9,33.05,0.3333,0.3333);

	this.instance_13 = new lib.Clonorchis_sinensis();
	this.instance_13.setTransform(70.65,-0.1,0.0617,0.0617,134.9298);

	this.instance_14 = new lib.CachedBmp_247();
	this.instance_14.setTransform(-65.55,-59.35,0.3333,0.3333);

	this.instance_15 = new lib.CachedBmp_20();
	this.instance_15.setTransform(-49.9,33.05,0.3333,0.3333);

	this.instance_16 = new lib.Cimex_lectularius_03();
	this.instance_16.setTransform(2.2,-74.25,0.0617,0.0617,44.9299);

	this.instance_17 = new lib.CachedBmp_269();
	this.instance_17.setTransform(-50,-49.95,0.3333,0.3333);

	this.instance_18 = new lib.CachedBmp_71();
	this.instance_18.setTransform(-49.9,33.05,0.3333,0.3333);

	this.instance_19 = new lib.CachedBmp_252();
	this.instance_19.setTransform(-50.45,34.5,0.3333,0.3333);

	this.instance_20 = new lib.Cimexlectularishead2();
	this.instance_20.setTransform(-74.4,-64.8,0.0482,0.0482);

	this.instance_21 = new lib.CachedBmp_211();
	this.instance_21.setTransform(-50.25,23.8,0.3333,0.3333);

	this.instance_22 = new lib.Schistosoma_mansoni_male_04();
	this.instance_22.setTransform(-55,-44.5,0.0509,0.0509);

	this.instance_23 = new lib.CachedBmp_279();
	this.instance_23.setTransform(-51.45,-49.95,0.3333,0.3333);

	this.instance_24 = new lib.CachedBmp_26();
	this.instance_24.setTransform(-50.25,23.8,0.3333,0.3333);

	this.instance_25 = new lib.Schistosoma_mansoni_female_04();
	this.instance_25.setTransform(-50,41.9,0.0617,0.0617,-89.9292);

	this.instance_26 = new lib.CachedBmp_28();
	this.instance_26.setTransform(-50.3,22.1,0.3333,0.3333);

	this.instance_27 = new lib.Cichlidogyrus_vetusmolendarius();
	this.instance_27.setTransform(-50.05,47.1,0.0743,0.0743,-89.9412);

	this.instance_28 = new lib.CachedBmp_218();
	this.instance_28.setTransform(-50.35,26.3,0.3333,0.3333);

	this.instance_29 = new lib.CachedBmp_285();
	this.instance_29.setTransform(-50.45,26.35,0.3333,0.3333);

	this.instance_30 = new lib.Cichlidogyrus_vetusmolendarius_haptor();
	this.instance_30.setTransform(-60.65,49.25,0.052,0.052,0,180,0);

	this.instance_31 = new lib.CachedBmp_221();
	this.instance_31.setTransform(-50.25,28.7,0.3333,0.3333);

	this.instance_32 = new lib.Taeniapisiformisscolex();
	this.instance_32.setTransform(-69.85,-68.55,0.0482,0.0482);

	this.instance_33 = new lib.CachedBmp_223();
	this.instance_33.setTransform(-50.3,28.7,0.3333,0.3333);

	this.instance_34 = new lib.Taeniapisiformisproglottid();
	this.instance_34.setTransform(-55.8,31.35,0.0391,0.0391,0,180,0);

	this.instance_35 = new lib.CachedBmp_288();
	this.instance_35.setTransform(-50.5,-49.95,0.3333,0.3333);

	this.instance_36 = new lib.CachedBmp_226();
	this.instance_36.setTransform(-50.25,28.7,0.3333,0.3333);

	this.instance_37 = new lib.Ancylostomaduodenalemanterior();
	this.instance_37.setTransform(-76,-60,0.0441,0.0441);

	this.instance_38 = new lib.CachedBmp_229();
	this.instance_38.setTransform(-50.25,28.7,0.3333,0.3333);

	this.instance_39 = new lib.Ancylostomaduodenalemposterior();
	this.instance_39.setTransform(-49.8,-49.65,0.0387,0.0387);

	this.instance_40 = new lib.CachedBmp_232();
	this.instance_40.setTransform(-50.25,28.7,0.3333,0.3333);

	this.instance_41 = new lib.CachedBmp_296();
	this.instance_41.setTransform(-49.95,30.15,0.3333,0.3333);

	this.instance_42 = new lib.Fasciola_hepatica_07();
	this.instance_42.setTransform(-48.25,-52.1,0.0617,0.0617);

	this.instance_43 = new lib.CachedBmp_293();
	this.instance_43.setTransform(-50.45,-49.95,0.3333,0.3333);

	this.instance_44 = new lib.CachedBmp_235();
	this.instance_44.setTransform(-50.25,27.65,0.3333,0.3333);

	this.instance_45 = new lib.Fasciolacercaria();
	this.instance_45.setTransform(-50.6,67.95,0.0482,0.0482,-90);

	this.instance_46 = new lib.CachedBmp_238();
	this.instance_46.setTransform(-49.9,33.05,0.3333,0.3333);

	this.instance_47 = new lib.Clinostomum3();
	this.instance_47.setTransform(-42.4,-50.3,0.0847,0.0847);

	this.instance_48 = new lib.CachedBmp_299();
	this.instance_48.setTransform(-50,-49.95,0.3333,0.3333);

	this.instance_49 = new lib.CachedBmp_241();
	this.instance_49.setTransform(-49.9,33.05,0.3333,0.3333);

	this.instance_50 = new lib.Clinostomum_1();
	this.instance_50.setTransform(-40.1,-49.15,0.0777,0.0777);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{y:31.05,x:-50.45}},{t:this.instance_8}]},1).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_2},{t:this.instance_12}]},1).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_2},{t:this.instance_15}]},1).to({state:[{t:this.instance_17},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]},1).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]},1).to({state:[{t:this.instance_11},{t:this.instance_25},{t:this.instance_9,p:{y:32.35,x:-50.45}},{t:this.instance_24}]},1).to({state:[{t:this.instance_11},{t:this.instance_27},{t:this.instance_9,p:{y:32.35,x:-50.45}},{t:this.instance_26}]},1).to({state:[{t:this.instance_11},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]},1).to({state:[{t:this.instance_11},{t:this.instance_32},{t:this.instance_9,p:{y:31.3,x:-50.45}},{t:this.instance_31}]},1).to({state:[{t:this.instance_35},{t:this.instance_34},{t:this.instance_33}]},1).to({state:[{t:this.instance_11},{t:this.instance_37},{t:this.instance_9,p:{y:32.35,x:-50.45}},{t:this.instance_36}]},1).to({state:[{t:this.instance_11},{t:this.instance_39},{t:this.instance_9,p:{y:32.35,x:-47.5}},{t:this.instance_38}]},1).to({state:[{t:this.instance_43},{t:this.instance_42},{t:this.instance_41,p:{x:-49.95,y:30.15}},{t:this.instance_40}]},1).to({state:[{t:this.instance_11},{t:this.instance_45},{t:this.instance_41,p:{x:-50.45,y:28.75}},{t:this.instance_44}]},1).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_9,p:{y:32.35,x:-50.45}},{t:this.instance_46}]},1).to({state:[{t:this.instance_48},{t:this.instance_50},{t:this.instance_9,p:{y:32.35,x:-50.45}},{t:this.instance_49}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Highlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#24A23F").ss(1,1,1).p("AlzoEILnAAQCQAAAACRIAALnQAACRiQAAIrnAAQiRAAAAiRIAArnQAAiRCRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(169,224,181,0.498)").s().p("AlzIFQiRAAABiRIAArnQgBiQCRAAILnAAQCQAAAACQIAALnQAACRiQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Highlight, new cjs.Rectangle(-52.6,-52.6,105.30000000000001,105.30000000000001), null);


(lib.FullScreenTip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Fullscreen mode", "normal 700 18px 'Open Sans'", "#009900");
	this.text.textAlign = "right";
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(95,-26.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(4,1,1).p("AFJk7IgKCAAFhkdQB2BhAAB7QAACfjLB2QgWANgYAMQgiARhVAaQhVAZgqAGQhxARiSgrQidgugehKAFNk7ICGAq");
	this.shape.setTransform(79.25,-0.7943);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F5C46").ss(4,1,1).p("AgBAAIADAA");
	this.shape_1.setTransform(112.375,-32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FullScreenTip, new cjs.Rectangle(-7,-34.4,135.4,67.19999999999999), null);


(lib.ButtonRec1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24A23F").s().p("Am3EYQh4AAAAh4IAAk/QAAh4B4AAINvAAQB4AAAAB4IAAE/QAAB4h4AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonRec1, new cjs.Rectangle(-56,-28,112,56), null);


(lib.ButtonRec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24A23F").s().p("AqnEYQh4AAAAh4IAAk/QAAh4B4AAIVPAAQB4AAAAB4IAAE/QAAB4h4AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonRec, new cjs.Rectangle(-80,-28,160,56), null);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24A23F").s().p("AkXABID3jgIAABvIE4AAIAADjIk4AAIAABtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(-28,-22.4,56,44.8), null);


(lib.LevelButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.CachedBmp_303();
	this.instance.setTransform(-95.15,-32.65,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-32.6,190.3,65.30000000000001);


(lib.Parasite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-244.6,-54.95,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_275();
	this.instance_1.setTransform(-311.9,-82.9,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.9,-82.9,631.7,165);


(lib.New = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-81.95,-30.8,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-141.95,-38.3,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.9,-38.3,283.3,86);


(lib.Memory = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-128.2,-58.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-181.15,-67.4,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.1,-67.4,568.3,125.7);


(lib.FullScreenButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#24A23F").ss(4,2,0,3).p("ABLjHIB9AAIAAB9ADIBLIAAB9Ih9AAAjHhKIAAh9IB9AAAhKDIIh9AAIAAh9");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24A23F").ss(4,2,0,3).p("ADIhKIh9AAIAAh9ABLDIIAAh9IB9AAAhKjHIAAB9Ih9AAAjHBLIB9AAIAAB9");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// hit
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// memory
	this.instance = new lib.Memory("single",0);
	this.instance.setTransform(232.6,79.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(1).to({regX:103,regY:-4.6,x:263.25,y:53.2,alpha:0.2892},0).wait(1).to({x:204.35,y:35.3,alpha:0.5247},0).wait(1).to({x:160.25,y:21.9,alpha:0.7008},0).wait(1).to({x:128.75,y:12.35,alpha:0.8269},0).wait(1).to({x:106.6,y:5.6,alpha:0.9153},0).wait(1).to({x:91.4,y:1,alpha:0.9763},0).wait(1).to({x:81.2,y:-2.1,alpha:1},0).wait(1).to({x:74.8,y:-4.05},0).wait(1).to({x:71.35,y:-5.05},0).wait(1).to({x:70.1,y:-5.45},0).wait(1).to({x:70.7,y:-5.25},0).wait(1).to({x:72.8,y:-4.65},0).wait(1).to({x:76.05,y:-3.7},0).wait(1).to({x:80.35,y:-2.4},0).wait(1).to({regX:0,regY:0,x:-17.55,y:3.8},0).to({x:-17.4,y:4.8},1).wait(1));

	// new
	this.instance_1 = new lib.New("single",0);
	this.instance_1.setTransform(-294.95,-2.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:-0.3,regY:4.7,x:-295.25,y:2.15},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-294.95,y:-2.55},0).to({x:-75.85,y:68.4,alpha:1},1).to({x:-78.05},1).wait(20));

	// super
	this.instance_2 = new lib.Parasite("single",0);
	this.instance_2.setTransform(54.75,-79.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-148,alpha:1},11,cjs.Ease.backOut).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.7,-162.7,1099.5,300.79999999999995);


(lib.StartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("START", "normal 600 22px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(0,-14.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#A9E0B5"},0).wait(1).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-28,112,56);


(lib.PlayAgainButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("PLAY AGAIN", "normal 600 22px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(0,-14.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#A9E0B5"},0).wait(1).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-28,160,56);


(lib.Card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.icon = new lib.Icons();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// rec
	this.rec = new lib.Recs();
	this.rec.name = "rec";

	this.timeline.addTween(cjs.Tween.get(this.rec).wait(1));

	// highlight
	this.highlight = new lib.Highlight();
	this.highlight.name = "highlight";
	this.highlight.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.highlight).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-52.1,104.30000000000001,104.30000000000001);


(lib.BackButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Arrow();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkDEEIAAoHIIHAAIAAIHg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-26,56,52);


(lib.Cards = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.card17 = new lib.Card();
	this.card17.name = "card17";
	this.card17.setTransform(608,272);

	this.card16 = new lib.Card();
	this.card16.name = "card16";
	this.card16.setTransform(496,272);

	this.card15 = new lib.Card();
	this.card15.name = "card15";
	this.card15.setTransform(384,272);

	this.card14 = new lib.Card();
	this.card14.name = "card14";
	this.card14.setTransform(272,272);

	this.card13 = new lib.Card();
	this.card13.name = "card13";
	this.card13.setTransform(160,272);

	this.card12 = new lib.Card();
	this.card12.name = "card12";
	this.card12.setTransform(48,272);

	this.card11 = new lib.Card();
	this.card11.name = "card11";
	this.card11.setTransform(608,160);

	this.card10 = new lib.Card();
	this.card10.name = "card10";
	this.card10.setTransform(496,160);

	this.card9 = new lib.Card();
	this.card9.name = "card9";
	this.card9.setTransform(384,160);

	this.card8 = new lib.Card();
	this.card8.name = "card8";
	this.card8.setTransform(272,160);

	this.card7 = new lib.Card();
	this.card7.name = "card7";
	this.card7.setTransform(160,160);

	this.card6 = new lib.Card();
	this.card6.name = "card6";
	this.card6.setTransform(48,160);

	this.card5 = new lib.Card();
	this.card5.name = "card5";
	this.card5.setTransform(608,48);

	this.card4 = new lib.Card();
	this.card4.name = "card4";
	this.card4.setTransform(496,48);

	this.card3 = new lib.Card();
	this.card3.name = "card3";
	this.card3.setTransform(384,48);

	this.card2 = new lib.Card();
	this.card2.name = "card2";
	this.card2.setTransform(272,48);

	this.card1 = new lib.Card();
	this.card1.name = "card1";
	this.card1.setTransform(160,48);

	this.card0 = new lib.Card();
	this.card0.name = "card0";
	this.card0.setTransform(48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card0},{t:this.card1},{t:this.card2},{t:this.card3},{t:this.card4},{t:this.card5},{t:this.card6},{t:this.card7},{t:this.card8},{t:this.card9},{t:this.card10},{t:this.card11},{t:this.card12},{t:this.card13},{t:this.card14},{t:this.card15},{t:this.card16},{t:this.card17}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cards, new cjs.Rectangle(-4.1,-4.1,664.3000000000001,328.3), null);


// stage content:
(lib.parasite_memory_game_2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:0,game:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		config = 
		{
			general:
			{
				timeoutRatio:1,
				mouseOverFrequency:50
			},
			texts:
			{
				lineHeight:0.14,
				movesText:"MOVES: "
			},
			win:
			{
				enterDuration:350,
				exitDuration:175,
				enterEase:createjs.Ease.backOut,
				exitEase:createjs.Ease.sineIn
			},
			cards:
			{
				ratioX:0.5,
				ratioY:0.16,
				enterWait:50,
				enterDuration:350,
				enterEase:createjs.Ease.sineOut,
				spinWait:1000,
				spinDuration:350,
				spinEase:createjs.Ease.sineInOut,
				memorizeWait:5000
			},
			sounds:
			{
				bgm:
				{
					volume:0.0,
					main:"BGM"
				},
				sfx:
				{
					button:"ButtonSFX",
					correct:"CorrectSFX",
					wrong:"WrongSFX",
					win:"WinSFX",
					card:"CardSFX"
				}
			},
			startButton:
			{
				tweenWait:1000,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			},
			backButton:
			{
				tweenDuration:350,
				ease:createjs.Ease.backOut
			},
			levelButton:
			{
				tweenWait:1000,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			}
			,
			fullScreenButton:
			{
				wait:1300,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			}
			,
			fullScreenTip:
			{
				wait:1600,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			}
		};
		
		root = this;
		
		const startButton = root.startButton;
		const fullScreenButton = root.fullScreenButton;
		const fullScreenTip = root.fullScreenTip;
		const levelText = root.levelText;
		
		root.setUp = () =>
		{
			stage.off("drawstart", root.drawStart);
			root.drawStart = null;
			
			if (!root.started)
			{
				let props;
				
				createjs.Touch.enable(stage);
				stage.enableMouseOver(config.general.mouseOverFrequency);
				stage.preventSelection = false;
				root.fixText(config.texts.lineHeight);
				document.body.style.backgroundColor = "#EAEAD1";
				fullScreenTip.visible = true;
				fullScreenTip.scaleX = fullScreenTip.scaleY = 0;
				createjs.Tween.get(fullScreenTip).wait(config.fullScreenTip.wait).to({scaleX:1, scaleY:1}, config.fullScreenTip.tweenDuration, config.fullScreenTip.ease);
				fullScreenButton.toggled = false;
				fullScreenButton.on("mousedown", root.toggleFullScreen);
				document.addEventListener("fullscreenchange", root.checkFullScreenExit);
				document.addEventListener("mozfullscreenchange", root.checkFullScreenExit); /* Firefox */
				document.addEventListener("webkitfullscreenchange", root.checkFullScreenExit); /* Chrome, Safari and Opera */
				document.addEventListener("msfullscreenchange", root.checkFullScreenExit); /* IE / Edge */
				props = new createjs.PlayPropsConfig().set({ interrupt: createjs.Sound.INTERRUPT_NONE, delay: 0, offset: 0, loop: -1, volume: config.sounds.bgm.volume });
				createjs.Sound.play(config.sounds.bgm.main, props);
				root.started = true;
			}
			
			root.stop();
			
			startButton.scaleX = startButton.scaleY = 0;
			createjs.Tween.get(startButton).wait(config.startButton.tweenWait).to({scaleX:1, scaleY:1}, config.startButton.tweenDuration, config.startButton.ease);
			
		// --- AGGIUNGI QUESTO BLOCCO DI CODICE ---
		levelText.scaleX = levelText.scaleY = 0;
		createjs.Tween.get(levelText).wait(config.startButton.tweenWait).to({scaleX:1, scaleY:1}, config.startButton.tweenDuration, config.startButton.ease);
		// -----------------------------------------
		
			fullScreenButton.visible = true;
			fullScreenButton.scaleX = fullScreenButton.scaleY = 0;
			createjs.Tween.get(fullScreenButton).wait(config.fullScreenButton.wait).to({scaleX:1, scaleY:1}, config.fullScreenButton.tweenDuration, config.fullScreenButton.ease);
			
			startButton.mouseDown = startButton.on("mousedown", root.start);
		};
		
		root.start = () =>
		{
			fullScreenButton.visible = true;
			fullScreenButton.scaleX = fullScreenButton.scaleY = 1;
			fullScreenTip.visible = false;
			startButton.off("mousedown", startButton.mouseDown);
			createjs.Tween.removeAllTweens();
			root.gotoAndStop("game");
		};
		
		root.checkFullScreenExit = e =>
		{
			if (fullScreenButton.toggled)
				root.toggleButton(fullScreenButton, {outLabel:0, overLabel:1, downLabel:2});				
			else
				root.toggleButton(fullScreenButton, {outLabel:2, overLabel:2, downLabel:2});
			
			fullScreenButton.toggled = !fullScreenButton.toggled;
		};
		
		root.toggleFullScreen = e =>
		{
			if (fullScreenTip)
				fullScreenTip.visible = false;
			
			if (fullScreenButton.toggled)
				root.exitFullScreen();				
			else
				root.requestFullScreen();
		};
		
		root.requestFullScreen = () =>
		{
			var elem = document.documentElement;
				
			if (elem.requestFullscreen)
				elem.requestFullscreen();
			else if (elem.mozRequestFullScreen) /* Firefox */
				elem.mozRequestFullScreen();
			else if (elem.webkitRequestFullscreen) /* Chrome, Safari and Opera */
				elem.webkitRequestFullscreen();
			else if (elem.msRequestFullscreen) /* IE/Edge */
				elem.msRequestFullscreen();
		};
		
		root.exitFullScreen = () =>
		{
			if (document.exitFullscreen)
				document.exitFullscreen();
			else if (document.mozCancelFullScreen) /* Firefox */
				document.mozCancelFullScreen();
			else if (document.webkitExitFullscreen) /* Chrome, Safari and Opera */
				document.webkitExitFullscreen();
			else if (document.msExitFullscreen) /* IE/Edge */
				document.msExitFullscreen();
		};
		
		root.toggleButton = function(button, frames)
		{
			var listeners = button._listeners;
				
			if (!listeners)
				return;
			
			for (var key in listeners)
			{
				var listener = listeners[key][0];
						
				if (typeof(listener.outLabel) !== 'undefined')
					listener.outLabel = frames.outLabel;
				
				if (typeof(listener.overLabel) !== 'undefined')
					listener.overLabel = frames.overLabel;
				
				if (typeof(listener.downLabel) !== 'undefined')
					listener.downLabel = frames.downLabel;
			}
			
			button.gotoAndStop(frames.outLabel);
		};
		
		root.fixText = lineHeightRatio =>
		{
			var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
			var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		
			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
					{
						var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
						y += lineHeight * lineHeightRatio; // 0.14
					}
		
					if (this.outline)
						ctx.strokeText(text, 0, y, this.maxWidth || 0xFFFF);
					else
						ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
				};
			}
		};
		
		root.drawStart = stage.on("drawstart", root.setUp, null, true);
	}
	this.frame_1 = function() {
		const movesText = root.movesText;
		
		const backButton = root.backButton;
		
		const playAgainButton = root.playAgainButton;
		
		const startButton = root.startButton1;
		
		const winMessage = root.winMessage;
		
		let cards;
		
		root.setup = () =>
		
		{
		
		backButton.mouseDown = backButton.on("mousedown", e =>
		
		{
		
		backButton.off("mousedown", backButton.mouseDown);
		
		root.backToStart();
		
		});
		
		
		if (root.cards)
		
		cards = root.cards;
		
		
		root.drawStart = stage.on("drawstart", root.start, null, true);
		
		};
		
		root.start = () =>
		
		{
		
		stage.off("drawstart", root.drawStart);
		
		root.drawStart = null;
		
		
		root.removeCards();
		
		root.addCards();
		
		stage.update();
		
		
		winMessage.visible = false;
		
		playAgainButton.visible = false;
		
		startButton.visible = false;
		
		
		cards.mouseOver = e =>
		
		{
		
		e.target.highlight.visible = true;
		
		};
		
		cards.mouseOut = e =>
		
		{
		
		e.target.highlight.visible = false;
		
		};
		
		cards.mouseDown = e =>
		
		{
		
		let props;
		
		
		cards.card = e.target;
		
		cards.card.highlight.visible = false;
		
		cards.deactivate();
		
		cards.spin(cards.card, {scaleX:-1, wait:0, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
		
		props = new createjs.PlayPropsConfig().set({ interrupt: createjs.Sound.INTERRUPT_ANY, delay: 0, offset: 0, loop: 0, volume: 1 });
		
		createjs.Sound.play(config.sounds.sfx.card, props);
		
		
		cards.tweenTimeout = setTimeout(() =>
		
		{
		
		clearInterval(cards.tweenTimeout);
		
		cards.spinComplete();
		
		}, cards.tweenDuration * cards.timeoutRatio);
		
		};
		
		cards.addListeners = () =>
		
		{
		
		cards.cardsMouseOver = cards.on("mouseover", cards.mouseOver);
		
		cards.cardsMouseOut = cards.on("mouseout", cards.mouseOut);
		
		cards.cardsMouseDown = cards.on("mousedown", cards.mouseDown);
		
		};
		
		cards.activate = () =>
		
		{
		
		cards.addListeners();
		
		};
		
		cards.deactivate = () =>
		
		{
		
		cards.off("mouseover", cards.cardsMouseOver);
		
		cards.off("mouseout", cards.cardsMouseOut);
		
		cards.off("mousedown", cards.cardsMouseDown);
		
		
		cards.cardsMouseOver = null;
		
		cards.cardsMouseOut = null;
		
		cards.cardsMouseDown = null;
		
		};
		
		cards.spin = (card, params, changeCallBack = null, completeCallBack = null) =>
		
		{
		
		if (changeCallBack === null)
		
		changeCallBack = () => {};
		
		
		if (completeCallBack === null)
		
		completeCallBack = () => {};
		
		
		createjs.Tween.get(card).wait(params.wait).to({scaleX:params.scaleX}, params.duration, params.ease).addEventListener("change", cards.tween);
		
		};
		
		cards.tween = e =>
		
		{
		
		cards.card = e.target.target;
		
		
		const icon = cards.card.icon;
		
		const rec = cards.card.rec;
		
		
		if (cards.card.scaleX <= -0.5)
		
		{
		
		const frame = cards.card.face + 1;
		
		
		icon.scaleX = -1;
		
		rec.scaleX = -1;
		
		
		if (icon.currentFrame !== frame)
		
		icon.gotoAndStop(frame);
		
		
		if (rec.currentFrame !== frame)
		
		rec.gotoAndStop(frame);
		
		}
		
		else
		
		{
		
		icon.scaleX = 1;
		
		rec.scaleX = 1;
		
		
		if (icon.currentFrame !== 0)
		
		icon.gotoAndStop(0);
		
		
		if (rec.currentFrame !== 0)
		
		rec.gotoAndStop(0);
		
		}
		
		};
		
		cards.spinComplete = () =>
		
		{
		
		cards.count++;
		
		cards.updateMoves();
		
		
		if (cards.count % 2 === 0)
		
		{
		
		let props = new createjs.PlayPropsConfig().set({ interrupt: createjs.Sound.INTERRUPT_ANY, delay: 0, offset: 0, loop: 0, volume: 1 });
		
		// MODIFIED CODE
		if (cards.prevCard !== cards.card && Math.floor(cards.prevCard.face / 2) === Math.floor(cards.card.face / 2))
			//END MODFIED CODE
		{
		
		createjs.Tween.get(cards.prevCard).to({scaleX:0, scaleY:0}, cards.tweenDuration, cards.ease);
		
		createjs.Tween.get(cards.card).to({scaleX:0, scaleY:0}, cards.tweenDuration, cards.ease).call(() =>
		
		{
		
		cards.removeChild(cards.prevCard);
		
		cards.removeChild(cards.card);
		
		cards.prevCard._off = true;
		
		cards.card._off = true;
		
		});
		
		
		createjs.Sound.play(config.sounds.sfx.correct, props);
		
		}
		
		else
		
		{
		
		cards.spin(cards.prevCard, {scaleX:1, wait:cards.tweenWait, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
		
		cards.spin(cards.card, {scaleX:1, wait:cards.tweenWait, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
		
		createjs.Sound.play(config.sounds.sfx.wrong, props);
		
		}
		
		
		cards.restoreTimeout = setTimeout(() =>
		
		{
		
		clearInterval(cards.restoreTimeout);
		
		cards.restore();
		
		cards.checkIfWin();
		
		}, (cards.tweenWait + cards.tweenDuration) * cards.timeoutRatio);
		
		}
		
		else
		
		{
		
		cards.restore();
		
		cards.checkIfWin();
		
		}
		
		
		};
		
		cards.restore = () =>
		
		{
		
		cards.activate();
		
		
		if (cards.prevCard && cards.count % 2 === 0)
		
		{
		
		cards.prevCard = null;
		
		cards.card = null;
		
		}
		
		else
		
		cards.prevCard = cards.card;
		
		};
		
		cards.updateMoves = () =>
		
		{
		
		movesText.text = config.texts.movesText + cards.count;
		
		};
		
		cards.checkIfWin = () =>
		
		{
		
		if (cards.children.length === 0)
		
		{
		
		let props;
		
		
		cards.deactivate();
		
		
		winMessage.visible = true;
		
		winMessage.scaleY = 0;
		
		createjs.Tween.get(winMessage).to({scaleY:1}, cards.winDuration, cards.winEase);
		
		
		playAgainButton.visible = true;
		
		playAgainButton.scaleX = playAgainButton.scaleY = 0;
		
		createjs.Tween.get(playAgainButton).wait(cards.winDuration).to({scaleX:1, scaleY:1}, cards.winDuration, cards.winEase);
		
		
		startButton.visible = true;
		
		startButton.scaleX = startButton.scaleY = 0;
		
		createjs.Tween.get(startButton).wait(cards.winDuration * 2).to({scaleX:1, scaleY:1}, cards.winDuration, cards.winEase);
		
		
		playAgainButton.mouseDown = playAgainButton.on("mousedown", cards.playAgain);
		
		
		startButton.mouseDown = startButton.on("mousedown", e =>
		
		{
		
		startButton.off("mousedown", startButton.mouseDown);
		
		root.backToStart();
		
		});
		
		
		props = new createjs.PlayPropsConfig().set({ interrupt: createjs.Sound.INTERRUPT_ANY, delay: 0, offset: 0, loop: 0, volume: 1 });
		
		createjs.Sound.play(config.sounds.sfx.win, props);
		
		}
		
		};
		
		cards.playAgain = e =>
		
		{
		
		let props;
		
		
		playAgainButton.off("mousedown", playAgainButton.mouseDown);
		
		
		createjs.Tween.get(winMessage).to({scaleY:0}, cards.winExitDuration, cards.winExitEase);
		
		createjs.Tween.get(playAgainButton).to({scaleX:0, scaleY:0}, cards.winExitDuration, cards.winDimissEase);
		
		createjs.Tween.get(startButton).to({scaleX:0, scaleY:0}, cards.winExitDuration, cards.winDimissEase);
		
		
		cards.dimissWinTimeout = setTimeout(() =>
		
		{
		
		clearInterval(cards.dimissWinTimeout);
		
		
		winMessage.visible = false;
		
		playAgainButton.visible = false;
		
		startButton.visible = false;
		
		root.removeCards();
		
		root.addCards();
		
		root.drawStart = stage.on("drawstart", root.start, null, true);
		
		
		}, cards.winExitDuration * cards.timeoutRatio);
		
		
		props = new createjs.PlayPropsConfig().set({ interrupt: createjs.Sound.INTERRUPT_ANY, delay: 0, offset: 0, loop: 0, volume: 1 });
		
		createjs.Sound.play(config.sounds.sfx.button, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1);
		
		};
		
		
		cards.count = 0;
		
		cards.updateMoves();
		
		cards.winDuration = config.win.enterDuration;
		
		cards.winExitDuration = config.win.exitDuration;
		
		cards.winEase = config.win.enterEase;
		
		cards.winExitEase = config.win.exitEase;
		
		cards.enterTweenWait = config.cards.enterWait;
		
		cards.enterTweenDuration = config.cards.enterDuration;
		
		cards.memorizeWait = config.cards.memorizeWait;
		
		cards.enterTweenEase = config.cards.enterEase;
		
		cards.tweenWait = config.cards.spinWait;
		
		cards.tweenDuration = config.cards.spinDuration;
		
		cards.timeoutRatio = config.general.timeoutRatio;
		
		cards.ease = config.cards.spinEase;
		
		cards.x = ((canvas.width / stage.scaleX) - cards.nominalBounds.width) * config.cards.ratioX;
		
		cards.y = (canvas.height / stage.scaleY) * config.cards.ratioY;
		
		cards.randomInitialPos = {x:Math.round(Math.random() * canvas.width), y:Math.round(Math.random() * canvas.height)};
		
		cards.tickChildren = false;
		
		cards.sortChildren((a, b) => {return 0.5 - Math.random();});
		
		
		cards.children.forEach((card, index) =>
		
		{
		// MODIFIED
		card.face = index;
		// END MODIFIED
			
		card.scaleX = -1;
		
		card.icon.scaleX = -1;
		
		card.rec.scaleX = -1;
		
		card.icon.gotoAndStop(card.face + 1);
		
		card.rec.gotoAndStop(card.face + 1);
		
		card.mouseChildren = false;
		
		card.initialPos = {x:card.x, y:card.y};
		
		card.x = cards.randomInitialPos.x;
		
		card.y = cards.randomInitialPos.y;
		
		card.alpha = 0;
		
		createjs.Tween.get(card).wait(index * cards.enterTweenWait).to({alpha:1, x:card.initialPos.x, y:card.initialPos.y}, cards.enterTweenDuration, cards.enterTweenEase);
		
		});
		
		
		cards.memorizeTimeout = setTimeout(() =>
		
		{
		
		clearInterval(cards.memorizeTimeout);
		
		
		cards.children.forEach(card =>
		
		{
		
		cards.spin(card, {scaleX:1, wait:0, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
		
		});
		
		
		cards.startTimeout = setTimeout(() =>
		
		{
		
		clearInterval(cards.startTimeout);
		
		cards.addListeners();
		
		}, cards.tweenDuration * cards.timeoutRatio);
		
		
		}, cards.memorizeWait * cards.timeoutRatio);
		
		
		backButton.scaleX = backButton.scaleY = 0;
		
		createjs.Tween.get(backButton).to({scaleX:1, scaleY:1}, config.backButton.tweenDuration, config.backButton.ease);
		
		};
		
		root.clearAllTimeouts = () =>
		
		{
		
		if (cards)
		
		{
		
		clearTimeout(cards.tweenTimeout);
		
		clearTimeout(cards.restoreTimeout);
		
		clearTimeout(cards.dimissWinTimeout);
		
		clearTimeout(cards.memorizeTimeout);
		
		clearTimeout(cards.startTimeout);
		
		clearTimeout(cards.tweenTimeout);
		
		clearTimeout(cards.dimissWinTimeout);
		
		}
		
		};
		
		root.backToStart = e =>
		
		{
		
		createjs.Tween.removeAllTweens();
		
		root.clearAllTimeouts();
		
		root.removeCards();
		
		root.gotoAndStop("start");
		
		};
		
		root.removeCards = () =>
		
		{
		
		root.removeChild(cards);
		
		cards = null;
		
		};
		
		root.addCards = () =>
		
		{
		
		cards = new lib.Cards();
		
		root.addChild(cards);
		
		};
		
		root.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// fullscreenTip
	this.fullScreenTip = new lib.FullScreenTip();
	this.fullScreenTip.name = "fullScreenTip";
	this.fullScreenTip.setTransform(571.4,92.85);
	this.fullScreenTip.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.fullScreenTip).to({_off:true},1).wait(1));

	// fullScreenButton
	this.fullScreenButton = new lib.FullScreenButton();
	this.fullScreenButton.name = "fullScreenButton";
	this.fullScreenButton.setTransform(680,30);
	new cjs.ButtonHelper(this.fullScreenButton, 0, 1, 2, false, new lib.FullScreenButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fullScreenButton).wait(2));

	// restartButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(360,253);
	this.playAgainButton._off = true;
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1).to({_off:false},0).wait(1));

	// backButton
	this.backButton = new lib.BackButton();
	this.backButton.name = "backButton";
	this.backButton.setTransform(48,32.4);
	this.backButton._off = true;
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.BackButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backButton).wait(1).to({_off:false},0).wait(1));

	// startButton
	this.levelText = new lib.LevelButton();
	this.levelText.name = "levelText";
	this.levelText.setTransform(540,289.05);
	new cjs.ButtonHelper(this.levelText, 0, 1, 1);

	this.startButton = new lib.StartButton();
	this.startButton.name = "startButton";
	this.startButton.setTransform(360,349);
	new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.StartButton(), 3);

	this.startButton1 = new lib.StartButton();
	this.startButton1.name = "startButton1";
	this.startButton1.setTransform(361.3,321.6);
	new cjs.ButtonHelper(this.startButton1, 0, 1, 2, false, new lib.StartButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startButton},{t:this.levelText}]}).to({state:[{t:this.startButton1}]},1).wait(1));

	// win
	this.winMessage = new lib.WinMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(360,143.5);
	this.winMessage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1).to({_off:false},0).wait(1));

	// moves
	this.movesText = new cjs.Text("MOVES: 0", "normal 700 26px 'Open Sans'", "#5B562E");
	this.movesText.name = "movesText";
	this.movesText.textAlign = "center";
	this.movesText.lineHeight = 37;
	this.movesText.lineWidth = 301;
	this.movesText.parent = this;
	this.movesText.setTransform(360,14.95);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.movesText);
	}
	this.movesText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movesText).wait(1).to({_off:false},0).wait(1));

	// cards
	this.cards = new lib.Cards();
	this.cards.name = "cards";
	this.cards.setTransform(32,64);
	this.cards._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cards).wait(1).to({_off:false},0).wait(1));

	// title
	this.instance = new lib.Title();
	this.instance.setTransform(400,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(360,199.8,414.5,188.39999999999998);
// library properties:
lib.properties = {
	id: 'D1AE1FD25370974DBECEAB7BBAC614B2',
	width: 720,
	height: 405,
	fps: 60,
	color: "#EBFFEF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Ancylostomaduodenalemanterior.jpeg", id:"Ancylostomaduodenalemanterior"},
		{src:"images/Ancylostomaduodenalemposterior.jpeg", id:"Ancylostomaduodenalemposterior"},
		{src:"images/Cichlidogyrus_vetusmolendarius_haptor.jpeg", id:"Cichlidogyrus_vetusmolendarius_haptor"},
		{src:"images/Cimexlectularishead2.jpeg", id:"Cimexlectularishead2"},
		{src:"images/Clonorchissinensisoralandventralsuckers.jpeg", id:"Clonorchissinensisoralandventralsuckers"},
		{src:"images/Fasciolacercaria.jpeg", id:"Fasciolacercaria"},
		{src:"images/Ixodesricinusmouthpieces.jpeg", id:"Ixodesricinusmouthpieces"},
		{src:"images/Schistosoma_mansoni_male_04.jpeg", id:"Schistosoma_mansoni_male_04"},
		{src:"images/Taeniapisiformisproglottid.jpeg", id:"Taeniapisiformisproglottid"},
		{src:"images/Taeniapisiformisscolex.jpeg", id:"Taeniapisiformisscolex"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png", id:"index_atlas_6"},
		{src:"images/index_atlas_7.png", id:"index_atlas_7"},
		{src:"images/index_atlas_8.png", id:"index_atlas_8"},
		{src:"sounds/ButtonSFX.mp3", id:"ButtonSFX"},
		{src:"sounds/WrongSFX.mp3", id:"WrongSFX"},
		{src:"sounds/CorrectSFX.mp3", id:"CorrectSFX"},
		{src:"sounds/WinSFX.mp3", id:"WinSFX"},
		{src:"sounds/CardSFX.mp3", id:"CardSFX"},
		{src:"sounds/BGM.mp3", id:"BGM"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D1AE1FD25370974DBECEAB7BBAC614B2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;