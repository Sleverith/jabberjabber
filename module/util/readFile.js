function readTextFile(File,callback){
    var jsonFile = new XMLHttpRequest();
    jsonFile.overrideMimeType("application/json");
    jsonFile.open("GET",File,true);
    jsonFile.onreadystatechange = function(){
        if(jsonFile.readyState === 4 && jsonFile.status=="200"){
            callback(jsonFile.responseText);
        }
    }
    jsonFile.send(null);
}

export {readTextFile};