

	var ourmd;
	var clip = null;
	
	var metagenhaiku; 
	var genhaiku;
	
	var thishaiku;
	
	var newstyle = '(new style)';
	var newform = '(new form)';
	var newwordlist = '(new wordlist)';
	var newname = 'new name';

	var currstyle;
	var currform;
	var currwordlist;
	
	function load() {
	
	/*	metagenhaiku = new MetaGenHaiku();
		
		genhaiku = new GenHaiku();
	
		// max array size of words must be 16
		
		var adverbtechwords = new Array('cybernetic', 'synthetic', 'microbiotic', 'claustrophobic', 'bionic', 'enclaustrosonic',
									'hypercubic', 'stellar', 'magnetic', 'post-anagramic');
		genhaiku.addWordList('adverbtechwords',adverbtechwords);
									
		var subtechwords = new Array('disorder', 'dellusion', 'architecture', 'attraction', 'connection', 'inner-chamber', 'reflection');
		genhaiku.addWordList('subtechwords',subtechwords);
		
		var midstartwords = new Array('the', 'more', 'minor', 'trigger', 'new', 'by', 'staged');
		genhaiku.addWordList('midstartwords',midstartwords);
		
		var subtechwords2 = new Array('cogs', 'wheels', 'turns', 'events');
		genhaiku.addWordList('subtechwords2',subtechwords2);
		
		var midmiddlewords = new Array('with', 'over', 'sent', 'city', 'void');
		genhaiku.addWordList('midmiddlewords',midmiddlewords);
		
		var closure = new Array('forlorn', 'restored', 'corrosive', 'deafning', 'fundamental');
		genhaiku.addWordList('closure',closure);

		var formarray = new Array();
		
		formarray[0] = {	'first': { 0: [0, 'adverbtechwords'], 1: [1, 'subtechwords'] },
							'second': { 0: [2, 'midstartwords'], 1: [3,'subtechwords2'], 2: [5,'midmiddlewords'], 3: [6,'subtechwords'] },
							'third': { 0: [4, 'closure'] }
					   };
		genhaiku.addForm('form0',formarray[0]);
		
		formarray[1] = {	'first': { 0: [0, 'adverbtechwords'], 1: [1, 'subtechwords'] },
							'second': { 0: [2, 'closure'], 1: [3,'subtechwords'] },
							'third': { 0: [4, 'closure'] }
					   };
		genhaiku.addForm('form1',formarray[1]);			   
		
		//save
		var thisstring = JSON.stringify(genhaiku);

		//load
		var genhaiku2 = JSON.parse(thisstring);

		genhaiku = new GenHaiku();
		genhaiku.forms = genhaiku2.forms;
		genhaiku.wordlists = genhaiku2.wordlists;
		
//		document.getElementById('haiku').innerHTML = thisstring;



		metagenhaiku = new MetaGenHaiku();
		metagenhaiku.addGenHaiku('cyberpunk1 - ps', genhaiku);

		//save
		var thisstring2 = JSON.stringify(metagenhaiku);
		
		//load
		var metagenhaiku2 = JSON.parse(thisstring2);
		
		metagenhaiku = new MetaGenHaiku();
		metagenhaiku.genhaikus = metagenhaiku2.genhaikus;
		*/
		metagenhaiku = new MetaGenHaiku();
		
		//beware when pasting json string here that ''s might not be escaped properly and breaking your .js
		metagenhaiku2 = JSON.parse('{"genhaikus":{"cyberpunk1 - ps":{"forms":{"form0":{"first":{"0":[0,"adverbtechwords"],"1":[1,"subtechwords"]},"second":{"0":[2,"midstartwords"],"1":[3,"subtechwords2"],"2":[5,"midmiddlewords"],"3":[6,"subtechwords"]},"third":{"0":[4,"closure"]}},"form1":{"first":{"0":[0,"adverbtechwords"],"1":[1,"subtechwords"]},"second":{"0":[2,"closure"],"1":[3,"subtechwords"]},"third":{"0":[4,"closure"]}}},"wordlists":{"adverbtechwords":["cybernetic","synthetic","microbiotic","claustrophobic","bionic","enclaustrosonic","hypercubic","stellar","magnetic","post-anagramic"],"subtechwords":["disorder","dellusion","architecture","attraction","connection","inner-chamber","reflection"],"midstartwords":["the","more","minor","trigger","new","by","staged"],"subtechwords2":["cogs","wheels","turns","events"],"midmiddlewords":["with","over","sent","city","void"],"closure":["forlorn","restored","corrosive","deafning","fundamental"]}},"cyberpunk2 - ps":{"forms":{"form0":{"first":{"0":[12,"noun3"],"1":[1,"now"],"2":[4,"on"],"3":[11,"the"],"4":[4,"verb2"]},"second":{"0":[0,"noun1"],"1":[9,"cyberverb"],"2":[7,"connector1"],"3":[10,"verb1"],"4":[1,"noun2"],"5":[1,"of/for"],"6":[2,"freedom/escape"]},"third":{"0":[7,"element"],"1":[11,"floats"],"2":[13,"amongst/between"],"3":[9,"us"],"4":[12,"forever"]}}},"wordlists":{"noun1":["Winter","Solace"],"noun2":["ideal","hope","objective"],"verb1":["broken","destroyed","collapsed"],"cyberverb":["surges","injects","extracts","decodes","encodes","resets"],"connector1":["the","a","upon"],"noun3":["Runner","Camper","Stalker","Hasvester","Decker"],"verb2":["run","hide"],"on":["on"],"the":["the"],"now":["now","is"],"of/for":["of","for"],"freedom/escape":["freedom","escape","divergence"],"element":["Wind","Radioactivity","Interference"],"floats":["floats","flies","travels"],"amongst/between":["amongst","between"],"us":["us"],"forever":["forever","now"]}},"Spring hate - ps":{"forms":{"form0":{"first":{"0":[3,"Hate/Love"],"1":[10,"Spring"],"2":[13,"hate/love!"],"3":[3,"Hate/Love"],"4":[8,"Spring"]},"second":{"0":[14,"A/The/Our"],"1":[6,"creak"],"2":[3,"runs"],"3":[10,"deep"],"4":[5,"as"],"5":[12,"the"],"6":[9,"soul"]},"third":{"0":[9,"Enjoy"],"1":[11,"the"],"2":[7,"weather"],"3":[5,"Spring"],"4":[2,"hate/love"]}}},"wordlists":{"Spring":["Spring"],"hate/love":["hate","love"],"hate/love!":["hate!","love!"],"A/The/Our":["A","The","Our"],"creak":["creak","stream","river"],"runs":["runs"],"deep":["deep","long","dark"],"as":["as"],"the":["the"],"soul":["soul","mind","air"],"Enjoy":["Enjoy"],"weather":["weather.","season.","weather,","season,"],"Hate/Love":["Hate","Love"]}},"BITS - ps":{"forms":{"form0":{"first":{"0":[5,"###"],"1":[6,"Illegal"],"2":[6,"telepathy"],"3":[12,"through"],"4":[3,"name1"],"5":[12,"espionage"],"6":[15,"###"]},"second":{"0":[5,"###"],"1":[1,"Aliens"],"2":[6,"beings"],"3":[13,"don\'t"],"4":[12,"require"],"5":[7,"paranormal"],"6":[10,"telepathy"],"7":[15,"power"],"8":[12,"###"]},"third":{"0":[3,"###"],"1":[7,"Persecution"],"2":[7,"is"],"3":[10,"crime"],"4":[2,"Illegal"],"5":[3,"telepathy"],"6":[8,"###"]}}},"wordlists":{"###":["###"],"Illegal":["Illegal","Media","Private","Home","Virtual","Police"],"name1":["communist","paranormal","alien","criminal","satellite","capitalist"],"telepathy":["telepathy","interference","violation","spying","torture","intimacy","report"],"name2":["Home","Intimacy","Media"],"espionage":["espionage","information","surveillance","smell"],"through":["through","siege","surrounding"],"and/or":["and","or"],"Aliens":["Alien","Communist","Government","Human","Capitalist"],"paranormal":["paranormal","telepathic","telekinetic","usurpating"],"power":["power","state","warrant","report"],"beings":["beings","aliens","monsters","teleporters","transmogryfiers","drugaddicts","superheroes","criminals","crazies","shapeshifter"],"don\'t":["don\'t","voice","state","mind"],"require":["requires"],"Persecution":["Persecution","Surveillance","Intimacy"],"is":["is","state"],"crime":["crime!","invasion!","aggression!"]}},"Ryokan - ps":{"forms":{"form0":{"first":{"0":[10,"The"],"1":[26,"thief"],"2":[10,"left/made"],"3":[27,"it"],"4":[17,"behind"]},"second":{"0":[5,"the/our"],"1":[16,"moon"]},"third":{"0":[17,"at"],"1":[22,"my"],"2":[20,"window"]}},"form1":{"first":{"0":[20,"the/our"],"1":[24,"thief/honor"],"2":[22,"left"],"3":[16,"it"],"4":[2,"behind"]},"second":{"0":[9,"The"],"1":[11,"moon/darkness"]},"third":{"0":[3,"at/for"],"1":[0,"my"],"2":[13,"window/heart/dismay"]}}},"wordlists":{"The":["the"],"left":["left"],"it":["it","us"],"behind":["behind","above","astray","outside","lost"],"moon":["moon","apple","flower"],"at":["at"],"my":["my","our","your"],"window":["window","porch","will"],"thief":["thief"],"the/our":["the","our"],"thief/honor":["thief","honor","legacy"],"moon/darkness":["moon","darkness","legacy","sadness"],"left/made":["left","made"],"at/for":["at","for"],"window/heart/dismay":["window","heart","dismay"]}},"cris - ps":{"forms":{"cris1":{"first":{"0":[14,"large"],"1":[28,"bed"],"2":[7,"long"],"3":[6,"heart"]},"second":{"0":[4,"waiting"],"1":[15,"me"],"2":[8,"snow"],"3":[21,"covered"]},"third":{"0":[0,"will"],"1":[8,"kiss"],"2":["11","will"],"3":[9,"melt"]}}},"wordlists":{"large":["large","cold"],"bed":["bed,"],"long":["long","warm","hot","mellow","sweet"],"heart":["heart","tongue","embrace"],"waiting":["waiting","yearning","pulling","missing","wanting","needing","summoning"],"me":["me,"],"snow":["snow","frost"],"covered":["covered"],"will":["will","shall","must"],"kiss":["kiss,","love,","touch,","grab,","bite,"],"and":["and"],"melt":["melt"]}},"3inch - ps":{"forms":{"form0":{"first":{"0":[31,"melting"],"1":[24,"snow"],"2":[3,"ahead,"]},"second":{"0":[1,"stolen"],"1":[18,"from"],"2":[9,"the"],"3":["16","rising"],"4":[22,"moon"]},"third":{"0":[14,"your"],"1":[31,"lips"],"2":[10,"sealed"]}},"form1":{"first":{"0":[28,"Hide"],"1":[14,"Winter"],"2":[6,"moon"]},"second":{"0":[15,"Footsteps"],"1":[18,"crunching"],"2":[19,"snow"]},"third":{"0":[23,"Dripping"],"1":[31,"frost"]}},"form2":{"first":{"0":[19,"frostbite"],"1":[1,"love"]},"second":{"0":[20,"down"],"1":[15,"the"],"2":[6,"white"],"3":[22,"covered"],"4":[13,"path"]},"third":{"0":[26,"covenant"],"1":[9,"whisper"]}},"form3":{"first":{"0":[7,"moon"],"1":[2,"sealed"]},"second":{"0":[5,"white"],"1":[2,"Winter"],"2":[12,"road"],"3":[14,"ahead,"]},"third":{"0":[14,"Hide"],"1":[12,"stolen"]}},"form4":{"first":{"0":[14,"rising"],"1":[15,"love2"]},"second":{"0":[12,"Dripping"],"1":[29,"heart"],"2":[16,"of mine"]},"third":{"0":[30,"white2"],"1":[29,"lodge"]}}},"wordlists":{"melting":["melting","fading","taunting","trotting","hail"],"snow":["snow","storm"],"ahead,":["ahead,","below,"],"stolen":["stolen","taken","brought","love","yearn","pale","talk","tempered"],"from":["from","to"],"the":["the","a"],"rising":["rising","crescent","young","scorching","cold"],"moon":["moon","sun"],"your":["your","my","sister"],"lips":["lips","mouth"],"sealed":["sealed","moist","taken","wet","sold"],"Hide":["hide","frail","betray","high"],"Winter":["winter","solstice"],"Footsteps":["footsteps","love of","sound of"],"crunching":["crunching","tethering"],"Dripping":["dripping","melting","blowing","floating"],"frost":["frost","ice"],"frostbite":["frostbite","old","warm"],"love":["love","rabbit","fox"],"down":["down","over"],"white":["white","long","short","forked"],"covered":["covered","sleat"],"path":["path","trail"],"covenant":["covenant","silent"],"whisper":["whisper","touch"],"road":["road"],"love2":["love","desire"],"heart":["heart","heartache"],"white2":["white","winter"],"lodge":["lodge","cabin","fox","sleep"],"of mine":["of mine","pinetree"]}},"kizuna - ps":{"forms":{"form1":{"first":{"0":[1,"My"],"1":[29,"old"],"2":[24,"friend"]},"second":{"0":[17,"Too"],"1":["5","many"],"2":[29,"Winters"],"3":[7,"passed"]},"third":{"0":[12,"Bring"],"1":[0,"Sake"]}},"form2":{"first":{"0":[6,"Contact"],"1":[11,"lost"]},"second":{"0":[21,"your"],"1":[19,"memory"],"2":[11,"aged"],"3":[21,"well"]},"third":{"0":[24,"like"],"1":[10,"Port wine"]}},"form3":{"first":{"0":[13,"Broken"],"1":[27,"locket"]},"second":{"0":[12,"Our"],"1":[18,"long"],"2":[27,"Summer"],"3":[26,"tour"]},"third":{"0":[7,"Contact"],"1":[11,"lost"]}},"form4":{"first":{"0":[27,"Saved"],"1":[16,"my"],"2":[10,"hope"]},"second":{"0":[27,"Deep"],"1":[17,"of"],"2":[27,"Winter"],"3":[28,"War"]},"third":{"0":[18,"Immesurable"]}}},"wordlists":{"My":["My","Good","Dear"],"old":["old"," "],"friend":["friend","comrade"],"Too":["Too","Many"],"many":["many"],"Winters":["Winters","Springs"],"passed":["passed","gone by","bloomed"],"Bring":["Bring","Take","Have","Drink","Enjoy","Hate"],"Sake":["sake","wine","beer"],"Contact":["Contact"],"lost":["lost","broken"],"your":["your"],"memory":["memory"],"aged":["aged"],"well":["well"],"like":["like"],"Port wine":["Port wine","fine Scotch"],"Broken":["Broken"],"locket":["locket"],"Our":["Our"],"long":["long"],"Summer":["Summer"],"tour":["tour"],"Saved":["Saved","Rescued"],"my":["my"],"hope":["hope","sanity","love","mind","trust"],"Deep":["Deep"],"of":["of"],"Winter":["Winter"],"War":["War"],"Immesurable":["Immesurable","Unrepayable"]}},"what is love? - ps":{"forms":{"form 0":{"first":{"0":["3","what"],"1":[26,"is"],"2":[22,"love"]},"second":{"0":[1,"baby"],"1":["6","dont"],"2":[10,"hurt"],"3":[21,"me"]},"third":{"0":[13,"dont"],"1":["28","hurt"],"2":[5,"me2"],"3":[12,"no"],"4":["19","more"]}}},"wordlists":{"of":["of"],"love":["love?","hate?","anger?","lust?"],"what":["what","hate","sex","love"],"is":["is"],"baby":["baby","you","i"],"dont":["don\'t","can\'t","won\'t"],"hurt":["hurt","take","burn","like"],"me":["me","you","us"],"me2":["me,","you,","us,"],"no":["no","even","far"],"more":["more","less"]}},"Spring1":{"forms":{"Form1":{"first":{"0":[2,"Flutteringly,"]},"second":{"0":[28,"Floating"],"1":[30,"in"],"2":["27","the"],"3":[7,"breeze,"]},"third":{"0":[13,"A"],"1":[28,"single"],"2":[30,"butterfly."]}}},"wordlists":{"Flutteringly,":["Flutteringly,","Suddenly,","Passionately,","Surprisingly,"],"Floating":["floating","drifting","crying","swimming"],"in":["in","on","over","under"],"the":["the","my","your","our"],"breeze,":["breeze,","river,","clouds,","trees,"],"A":["a","1","my","one"],"single":["single","lonely","lost","brave"],"butterfly.":["butterfly.","grasshopper.","flower.","sigh."]}},"Spring2":{"forms":{"Form1":{"first":{"0":[10,"Wings"],"1":[31,"flutter"]},"second":{"0":[11,"upon"],"1":[28,"melting"],"2":[12,"icicles"]},"third":{"0":[18,"first"],"1":[8,"glimpse"],"2":[0,"of"],"3":[26,"spring"]}}},"wordlists":{"Wings":["Wings","Words","Dreams","Thoughts"],"flutter":["flutter","float","dive","spread"],"upon":["upon","across","over","inside"],"melting":["melting","drowning","frozen","thawning"],"icicles":["icicles","mountains","lakes","forests"],"first":["first","my","your","short"],"glimpse":["glimpse","thought","insight","memory"],"of":["of"],"spring":["Spring","you","warmth","love"]}},"Spring3":{"forms":{"Form1":{"first":{"0":[23,"Longing"]},"second":{"0":[15,"another"],"1":[1,"Spring"],"2":[28,"blooms"]},"third":{"0":[5,"without"],"1":[11,"you"]}}},"wordlists":{"Longing":["Longing","Waiting","Saudade","Sleeping"],"another":["another","lazy","this","silent"],"Spring":["Spring","child","thought","day"],"blooms":["blooms","flowers","awakens","walks"],"without":["without","within","withelding","willowing"],"you":["you","love","me","haste"]}},"Summer1":{"forms":{"Form1":{"first":{"0":[19,"Your"],"1":[6,"wet"],"2":[21,"skin"]},"second":{"0":[25,"watermelon"],"1":[24,"seeds"]},"third":{"0":[4,"this"],"1":[17,"hot"],"2":[24,"sand"]}}},"wordlists":{"Your":["Your","My","Our","This"],"wet":["wet","damp","tanned","biting"],"skin":["skin","lust","craving","love"],"watermelon":["watermelon","apricot","papaya","mango"],"seeds":["seeds","juice","seduction","devotion"],"this":["this","over","our","burning"],"hot":["hot","wet","white","black"],"sand":["sand","spray","tide","dunes"]}}}}');
		
		metagenhaiku.genhaikus = metagenhaiku2.genhaikus;
		
		currstyle = '';
		currform = '';
		currwordlist = '';

		document.getElementById('loadhaikuwordlist').innerHTML = '';
		document.getElementById('loadhaikuform').innerHTML = '';
		document.getElementById('loadhaikustyle').innerHTML = genLoadHaikuStyle();		
	
	
	// start with default
	
		currstyle = "what is love? - ps";
		currform = 'form 0';
		document.getElementById('loadhaikuform').innerHTML = genLoadHaikuForm();
		document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
		document.getElementById('loadwordlist').innerHTML = genLoadWordList();
		generateOnce('');
		
		selectedstyle = currstyle;		

	}


	function genLoadHaikuStyle() {
		var thistext = '<select id="genloadhaikustyle" onchange="loadHaikuStyle()"><option value="">select haiku style<\/option><option value="'+newstyle+'">'+newstyle+'<\/option>';
		var thisarray = metagenhaiku.genhaikus;
		for (name in thisarray)
		{
			var selected = '';
			if (name == currstyle) selected = 'selected';
			thistext += '<option value="'+name+'" '+selected+'>'+name+'<\/option>';
		}
		thistext += '<\/select>';
		return thistext;	
	}
	
	function loadHaikuStyle() {
		var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		if (selectedstyle == newstyle) {
			var thistext = '';
			thistext += '<input id="stylename" type="text" value="'+newname+'"/>';
			thistext += '<input type="button" value="create style" onclick="createNewStyle()"/>';
			document.getElementById('loadhaikuwordlist').innerHTML = '';
			document.getElementById('loadhaikuform').innerHTML = thistext;
			document.getElementById('loadwordlist').innerHTML = '';
		} else {
			currstyle = selectedstyle;
			document.getElementById('loadhaikuform').innerHTML = genLoadHaikuForm();
			document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
			document.getElementById('loadwordlist').innerHTML = genLoadWordList();
		}
	}
	
	function createNewStyle() {
		thisgenhaikuname = document.getElementById('stylename').value;
		if (thisgenhaikuname != newname) {
			thisgenhaiku = new GenHaiku();
			metagenhaiku.addGenHaiku(thisgenhaikuname, thisgenhaiku);
			currstyle = thisgenhaikuname;
			document.getElementById('loadhaikuwordlist').innerHTML = '';
			document.getElementById('loadhaikuform').innerHTML = genLoadHaikuForm();
			document.getElementById('loadhaikustyle').innerHTML = genLoadHaikuStyle();
		}
	}

	function genLoadHaikuForm() {
		var thistext = '<select id="genloadhaikuform" multiple="multiple" height="10" onchange="loadHaikuForm()">';
		
		//var dropdownValue = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		thistext += '<option value="'+newform+'">'+newform+'<\/option>';

		var thisarray = metagenhaiku.genhaikus[currstyle].forms;
		for (name in thisarray)
		{
			var selected = '';
			if (name == currform) selected = 'selected';
			thistext += '<option value="'+name+'" '+selected+'>'+name+'<\/option>';
		}
		thistext += '<\/select>';
		return thistext;	
	}

	function loadHaikuForm() {
		//var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		var selectedform = document.getElementById('genloadhaikuform')[document.getElementById('genloadhaikuform').selectedIndex].value;
		if (selectedform == newform) {
			var thistext = '';
			thistext += '<input id="formname" type="text" value="'+newname+'"/>';
			thistext += '<input type="button" value="create form" onclick="createNewForm()"/>';
			document.getElementById('loadhaikuwordlist').innerHTML = thistext;
			//document.getElementById('loadhaikuform').innerHTML = thistext;
			document.getElementById('loadwordlist').innerHTML = '';
			document.getElementById('loadwords').innerHTML = '';
		} else {
			currform = selectedform;
			document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
			document.getElementById('loadwordlist').innerHTML = genLoadWordList();
		}
	}
	
	function createNewForm() {
		thisformname = document.getElementById('formname').value;
		if (thisformname != newname) {
			//add new form to this genhaiku
			thisform = { 'first': { }, 'second': { }, 'third': { } };
			//cant call addForm when the metagenhaiku been loaded from json
			//need to inject directly to make sure it always works
			metagenhaiku.genhaikus[currstyle].forms[thisformname] = thisform;
			currform = thisformname;
			document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
			document.getElementById('loadhaikuform').innerHTML = genLoadHaikuForm();
			document.getElementById('loadwordlist').innerHTML = genLoadWordList();
		}
	}
	
	function genLoadHaikuWordList() {
		var thistext = ''; //'<select id="genloadhaikuform" multiple="multiple" height="10" onchange="loadHaikuForm()">';
		
		/*var dropdownValue = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		
		var thisarray = metagenhaiku.genhaikus[dropdownValue].forms;
		for (name in thisarray)
		{
			thistext += '<option value="'+name+'">'+name+'<\/option>';
		}
		thistext += '<\/select>';*/
		
		//get selected form
		//var thisgenhaiku = metagenhaiku.genhaikus[document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value];
		//var thisform = thisgenhaiku.forms[document.getElementById('genloadhaikuform')[document.getElementById('genloadhaikuform').selectedIndex].value];
		var thisgenhaiku = metagenhaiku.genhaikus[currstyle];
		//console.log(Object.keys(thisgenhaiku.forms)[0]);
		if(!(currform in thisgenhaiku.forms)) currform = Object.keys(thisgenhaiku.forms)[0];
		var thisform = thisgenhaiku.forms[currform];
		
		cleanupFormLine(thisgenhaiku, thisgenhaiku.forms[currform]['first']);
		cleanupFormLine(thisgenhaiku, thisgenhaiku.forms[currform]['second']);
		cleanupFormLine(thisgenhaiku, thisgenhaiku.forms[currform]['third']);
		
		thistext += '<table class="editor">';
		thistext += genWordListEditorTable(thisgenhaiku, thisform, 'first');
		thistext += genWordListEditorTable(thisgenhaiku, thisform, 'second');
		thistext += genWordListEditorTable(thisgenhaiku, thisform, 'third');
		//thistext += genWordListEditorTable(currstyle, currform, 'first');
		//thistext += genWordListEditorTable(currstyle, currform, 'second');
		//thistext += genWordListEditorTable(currstyle, currform, 'third');
		thistext += '<\/table>';
		
		return thistext;	
	}

	function cleanupFormLine(thisgenhaiku, thisarray) {
		//console.log(thisarray);
		for (name in thisarray)
		{
			//var realname = name;
			var wordlistnames = thisarray[name][1];
			//console.log(thisgenhaiku.wordlists);
			//console.log(wordlistnames);
			if (thisgenhaiku.wordlists != undefined) {
				//console.log('exists');
				if (!thisgenhaiku.wordlists[wordlistnames]) {
					delete thisarray[name];
					//break;
				}
			}
		}
	}
		
	function genWordListEditorTable(thisgenhaiku, thisform, line) {
		var thistext='';
		var thisarray = thisform[line];
		thistext += '<tr class="editortr">';
		var arraycounter = 0;
		var deletable = '';
		for (name in thisarray)
		{
			var realname = name;
			var seedpos = thisarray[name][0];
			var wordlistnames = thisarray[name][1];
			thistext += '<td class="editortd">';
			thistext += genWordListDropDown(thisgenhaiku, wordlistnames, line, arraycounter) + ' ' + genSeedPosDropDown(thisgenhaiku, seedpos, line, arraycounter) + '<br />';

			//var thisgenhaiku.wordlists[wordlistnames][0];
			if (thisgenhaiku.wordlists != undefined) {
				if (thisgenhaiku.wordlists[wordlistnames]) {
					for (index = 0; index < thisgenhaiku.wordlists[wordlistnames].length; index++)
					{
						thistext += '<span class="editorword">'+thisgenhaiku.wordlists[wordlistnames][index] + '<\/span><br />';
					}
				} else {
					deletable = thisarray[realname];
				//	delete thisarray[name]; this should work, but i guess its b0rking the self referenced object stack or whatever
	////////////
				}
			}
			thistext += '<\/td>';
			arraycounter++;
		}

		//add extra wordlist dropdown in the end of the row as an "add new"
		thistext += genWordListDropDownAdd(thisgenhaiku, '', line, arraycounter);
		thistext += '<\/tr>';
		return thistext;
	}

	function genWordListDropDown(thisgenhaiku, thisname, line, index) {
		var thistext='';
		var thistext = '<select id="'+line+''+index+'" onchange="replaceWordListInForm(\''+line+'\',\''+index+'\')"><option value=""><\/option>';
		var thisarray = thisgenhaiku.wordlists;
		for (name in thisarray)
		{
			var selected = '';
			if (name == thisname) selected = 'selected';
			thistext += '<option value="'+name+'" '+selected+'>'+name+'<\/option>';
		}
		thistext += '<\/select>';
		return thistext;
	}
	
	function genSeedPosDropDown(thisgenhaiku, thisname, line, index) {
		var thistext = '<select id="seed_'+line+''+index+'" onchange="replaceSeedPosInForm(\''+line+'\',\''+index+'\')">';
		for (var i = 0; i < 32; i++)
		{
			var selected = '';
			if (i == parseInt(thisname)) selected = 'selected';
			thistext += '<option value="'+i+'" '+selected+'>'+i+'<\/option>';
		}
		thistext += '<\/select>';
		return thistext;
	}

	function genWordListDropDownAdd(thisgenhaiku, thisname, line, index) {
		var thistext='';
		var thistext = '<select id="'+line+''+index+'" onchange="addWordListInForm(\''+line+'\',\''+index+'\')"><option value="" selected>(add in '+line+' line)<\/option>';
		var thisarray = thisgenhaiku.wordlists;
		for (name in thisarray)
		{
			thistext += '<option value="'+name+'">'+name+'<\/option>';
		}
		thistext += '<\/select>';
		return thistext;
	}

	function replaceWordListInForm(line, index) {
		var newvalue = document.getElementById(line+index)[document.getElementById(line+index).selectedIndex].value;
		//var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		//var selectedform = document.getElementById('genloadhaikuform')[document.getElementById('genloadhaikuform').selectedIndex].value;
		//var thisline = metagenhaiku.genhaikus[selectedstyle].forms[selectedform][line];
		var thisline = metagenhaiku.genhaikus[currstyle].forms[currform][line];
		
		if (newvalue == '') {
			var indexcounter = 0;
			for (name in thisline)
			{
				if (indexcounter == parseInt(index)) {
					delete thisline[name];
					break;
				}
				indexcounter++;
			}
		} else {
			var indexcounter = 0;
			for (name in thisline)
			{
				if (indexcounter == parseInt(index)) thisline[name][1] = newvalue;
				indexcounter++;
			}
		}
		document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
	}
	
	function replaceSeedPosInForm(line, index) {
		var newvalue = document.getElementById('seed_'+line+index)[document.getElementById('seed_'+line+index).selectedIndex].value;
		var thisline = metagenhaiku.genhaikus[currstyle].forms[currform][line];
		
		var indexcounter = 0;
		for (name in thisline)
		{
			if (indexcounter == parseInt(index)) thisline[name][0] = newvalue;
			indexcounter++;
		}
		//document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
	}
	
	function addWordListInForm(line, index) {
		var newvalue = document.getElementById(line+index)[document.getElementById(line+index).selectedIndex].value;
		//var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		//var selectedform = document.getElementById('genloadhaikuform')[document.getElementById('genloadhaikuform').selectedIndex].value;
		//var thisline = metagenhaiku.genhaikus[selectedstyle].forms[selectedform][line];
		var thisline = metagenhaiku.genhaikus[currstyle].forms[currform][line];
		
		thisline[index] = [Math.floor(Math.random()*32), newvalue];

		document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
	}
	
	function genLoadWordList() {
		var thistext = '';
		thistext += '<select multiple="single" id="wordlist" onchange="genLoadWords()"><option value="'+newwordlist+'">'+newwordlist+'<\/option>';
		//var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		//var thisarray = metagenhaiku.genhaikus[selectedstyle].wordlists;
		var thisarray = metagenhaiku.genhaikus[currstyle].wordlists;
		
		for (name in thisarray)
		{
			var selected = '';
			if (name == currwordlist) selected = 'selected';
			thistext += '<option value="'+name+'" '+selected+'>'+name+'<\/option>';
		}
		thistext += '<\/select>';
		
		return thistext;
	}
	
	function wipeNewName() {
	 if (document.getElementById('wordlistname').value == newname) document.getElementById('wordlistname').value = '';
	}
	
	function genLoadWords() {
		var thistext = '';
		var selectedwordlist = document.getElementById('wordlist')[document.getElementById('wordlist').selectedIndex].value;
		
		if (selectedwordlist == newwordlist) {
			thistext += '<input id="wordlistname" type="text" value="'+newname+'" onclick="wipeNewName()"/><br />';
			thistext += '<input type="button" value="create wordlist" onclick="createNewWordList()"/>';
		} else {
			//var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
			//var thisarray = metagenhaiku.genhaikus[selectedstyle].wordlists[selectedwordlist];
			var thisarray = metagenhaiku.genhaikus[currstyle].wordlists[selectedwordlist];
			
			var index = 0;
			while ( index < thisarray.length )
			{
				thistext += '<input id="word'+index+'" type="text" value="'+thisarray[index]+'"/><br />';
				index++;
				if (index >= 16) break;
			}
			if (index < 16) thistext += '<input id="word'+index+'" type="text" value=""/><br />';
			thistext += '<input type="button" value="update" onclick="updateWordList()"/> <input type="button" value="delete" onclick="deleteWordList()"/>';
			
			currwordlist = selectedwordlist;
		}
		document.getElementById('loadwords').innerHTML = thistext;
	}
	
	function createNewWordList() {
		
		var thisname = document.getElementById('wordlistname').value;
		
		// test if this name is already in use
		var inUse = false;
		var thisarray = metagenhaiku.genhaikus[currstyle].wordlists;
		for (name in thisarray)
		{
			var selected = '';
			if (name == thisname) {
				inUse = true;
				break;
			}
		}
		if (inUse === true) return; // if it is in use, dont create new one, you would b0rk the db
		
		if (thisname == newname) {
			//input wasnt altered, dont update anything
		} else {
			//add word category with thisname to wordlist
			var newarray = new Array();
			//var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
			//metagenhaiku.genhaikus[selectedstyle].wordlists[thisname] = newarray;
			metagenhaiku.genhaikus[currstyle].wordlists[thisname] = newarray;
			metagenhaiku.genhaikus[currstyle].wordlists[thisname][0] = thisname;

			
			//reload everything
			//loadHaikuStyle();
			currwordlist = thisname;
			document.getElementById('loadwordlist').innerHTML = genLoadWordList();
			document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
			genLoadWords();

		}
	}
	
	function updateWordList() {
		//todo:	update words in this wordlist

		var thiswordlist = new Array();
		
		for (index = 0 ; ; index++) {
			var thisdom = document.getElementById('word'+index);
			var thisvalue = '';
			if (thisdom && thisdom.value != '') thiswordlist[index] = thisdom.value;
			 else break;
		}

		var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		//var thisname = document.getElementById('wordlistname').value;
		var selectedwordlist = document.getElementById('wordlist')[document.getElementById('wordlist').selectedIndex].value;

		if (selectedstyle == '') selectedstyle=currstyle; //might not have occured a load yet

		metagenhaiku.genhaikus[selectedstyle].wordlists[selectedwordlist] = thiswordlist;
	
		//loadHaikuStyle();
		document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
		genLoadWords();
		//document.getElementById('loadwords').innerHTML = "done!"
	}
	
	function deleteWordList() {

		var selectedstyle = document.getElementById('genloadhaikustyle')[document.getElementById('genloadhaikustyle').selectedIndex].value;
		//var thisname = document.getElementById('wordlistname').value;
		var selectedwordlist = document.getElementById('wordlist')[document.getElementById('wordlist').selectedIndex].value;

		if (selectedstyle == '') selectedstyle=currstyle; //might not have occured a load yet
		
		delete metagenhaiku.genhaikus[selectedstyle].wordlists[selectedwordlist];// = thiswordlist;
		document.getElementById('loadwordlist').innerHTML = genLoadWordList();

		//loadHaikuStyle();
		document.getElementById('loadhaikuwordlist').innerHTML = genLoadHaikuWordList();
		//genLoadWords();
		document.getElementById('loadwords').innerHTML = "poof!";
	}
	
	function eexport() {
		document.getElementById('export').innerHTML = JSON.stringify(metagenhaiku).replace(/'/g, "\\'");
	}
	
	function iimport() {
		var metagenhaiku2 = JSON.parse(document.getElementById('import').value);
		
		metagenhaiku = new MetaGenHaiku();
		metagenhaiku.genhaikus = metagenhaiku2.genhaikus;

		document.getElementById('loadhaikuwordlist').innerHTML = '';
		document.getElementById('loadhaikuform').innerHTML = '';
		document.getElementById('loadhaikustyle').innerHTML = genLoadHaikuStyle();
	}
	
	
	function generateOnce(thismd5) {
		if (thismd5 == '') {
			ourmd5 = md5(Math.random());
		} else {
			ourmd5 = thismd5;
		}
		
		ourgenhaiku = metagenhaiku.genhaikus[currstyle];
		if (ourgenhaiku) {
			//metagenhaikus loaded from json dont have getHaiku functions, so lets create new temp one
			ourhaiku = new GenHaiku();
			ourhaiku.wordlists = ourgenhaiku.wordlists;
			ourhaiku.forms = ourgenhaiku.forms;

			thishaiku = ourhaiku.getHaiku(ourmd5); //first + "<br />" + second + "<br />" + third;
		
			document.getElementById('haiku').innerHTML = thishaiku;
			
		} else {
			document.getElementById('haiku').innerHTML = 'no style selected..';
		}
		
		//tweet(thishaiku);
	}
	
	function generateSeries(thismd5, counter, haiku_series_print) {
		if (thismd5 == '') {
			ourmd5 = md5(Math.random());
		} else {
			ourmd5 = thismd5;
		}
		
		ourgenhaiku = metagenhaiku.genhaikus[currstyle];
		if (ourgenhaiku) {
			//metagenhaikus loaded from json dont have getHaiku functions, so lets create new temp one
			ourhaiku = new GenHaiku();
			ourhaiku.wordlists = ourgenhaiku.wordlists;
			ourhaiku.forms = ourgenhaiku.forms;
	
			thishaiku = ourhaiku.getHaiku(ourmd5); //first + "<br />" + second + "<br />" + third;
		
			haiku_series_print += "<br /><br />" + thishaiku;
			//clip.setText(haiku_series_print);
		
		 	counter--;
		 	if (counter == 0) {
		 		//print to screen
		 		document.getElementById('haiku').innerHTML = haiku_series_print;
		 	} else {
		 		//calc next iteration
		 		generateSeries(md5(thishaiku),counter, haiku_series_print);
		 	}
		 } else {
			document.getElementById('haiku').innerHTML = 'no style selected..';		 
		 }
	}
	
	function replacebr(text) {
		return text.replace("<br />", "%0D%0A").replace("<br />", "%0D%0A");
	}

	function useHttpResponse() {
  		if (http.readyState == 4) {
    		var textout = http.responseText;
    		document.getElementById('twittertest').innerHTML = textout;
    		//document.write.textout;
  		}
	}
	
	
	function on(thiselem) {
		document.getElementById('t_info').style.display = "none";
		//document.getElementById('t_share').style.display = "none";
		document.getElementById('t_editor').style.display = "none";
		document.getElementById('t_adv_gen').style.display = "none";
		//document.getElementById('t_adv_io').style.display = "none";
		document.getElementById('th_info').style.backgroundColor = "#FFFFFF";
		//document.getElementById('th_share').style.backgroundColor = "#FFFFFF";
		document.getElementById('th_editor').style.backgroundColor = "#FFFFFF";
		document.getElementById('th_adv_gen').style.backgroundColor = "#FFFFFF";
		//document.getElementById('th_adv_io').style.backgroundColor = "#FFFFFF";

		document.getElementById('t_'+thiselem).style.display = "table-row";
		document.getElementById('th_'+thiselem).style.backgroundColor = "#000000";
	}