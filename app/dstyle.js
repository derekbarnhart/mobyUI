
var dstyle = {


filesadded : [], //list of files already added

add : function(filename, filetype){
 if (typeof this.filesadded[filename] == 'undefined'){
  this.load(filename, filetype);
 }
},

load : function(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined"){
  	document.getElementsByTagName("head")[0].appendChild(fileref);
  	this.filesadded[filename]=true; //List of files added in the form "[filename1],[filename2],etc"
	this.lastfile = filename;
	}
},

removeLast: function () {
  this.remove(this.lastfile,"css");  
},

remove : function (filename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   {
   		allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
		 if (typeof this.filesadded[filename]!= 'undefined'){
		  delete this.filesadded[filename];
		 }
 	}
 }
},



//removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page	
	
}