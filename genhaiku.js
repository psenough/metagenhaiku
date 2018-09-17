
	
	// function to get a word from an array, based on ourmd5 index value (limited to 0..16)
	function getword(ourmd5, varthing, arraything) {
		var thisvar = parseInt("0x"+ourmd5.charAt(varthing));
	 	return arraything[thisvar % arraything.length];
	}


// javascript doesnt support associative arrays, but i want to use them, so i reimplemented the wheel
	function getAssociativeArrayLength(thisarray) {
		var ind = 0;
		for (i in thisarray)
		{
			ind++;
		}
		return ind;
	}
	

	function getAssociativeArrayByIndex(thisarray, index) {
		var ind = 0;
		for (i in thisarray)
		{
			if (index == ind) return thisarray[i];
			ind++;
		}
	}
	

	function GenHaiku () {
    	this.forms = {};
    	this.wordlists = {};
    
    	this.addWordList = function( wordlistname, wordlistarray ) {
    		this.wordlists[wordlistname] = wordlistarray;
   		}
    
    	this.addForm = function( formname, formarray ) {
    		this.forms[formname] = formarray;
    	}
    	
    	this.getHaiku = function(ourdm5) {
    		var ourhaiku = '';
    		var first = '';
    		var second = '';
    		var third = '';

			var thisform = getAssociativeArrayByIndex(this.forms, parseInt("0x"+ourmd5.charAt(10)) % getAssociativeArrayLength(this.forms));
	 	
			var ourarray;
			var i;
			
			//console.log(this.wordlists);
    		ourarray = thisform.first;
    		for (i in ourarray)
			{
				first += getword( ourmd5, ourarray[i][0], this.wordlists[ourarray[i][1]] ) + " ";
			}
			
    		ourarray = thisform.second;
    		for (i in ourarray)
			{
				second += getword( ourmd5, ourarray[i][0], this.wordlists[ourarray[i][1]] ) + " ";
			}
			
    		ourarray = thisform.third;
    		for (i in ourarray)
			{
				third += getword( ourmd5, ourarray[i][0], this.wordlists[ourarray[i][1]] ) + " ";
			}
			
			ourhaiku = first + '<br />' + second + '<br />' + third;
			return ourhaiku;
    	}
    
	}


	function MetaGenHaiku () {
		this.genhaikus = {};
    	
    	// "stylename" : GenHaiku
    	
    	this.addGenHaiku = function( genhaikuname, genhaikuarray ) {
    		this.genhaikus[genhaikuname] = genhaikuarray;
   		}
    	
	}

	
	

