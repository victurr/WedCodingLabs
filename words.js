function words(tenses){
  var anArray = []; var result = {};
  tenses = tenses.replace(/(\r\n|\n|\r)/gm," ");
  tenses = tenses.replace(/[^\x20-\x7E]/gm," ");
  tenses = tenses.replace("  "," ");

  anArray = tenses.split(" "); 
  anArray.forEach(function(valu){
    var count = 0;
      for(var i = 0; i < anArray.length; i++){
        if(valu == anArray[i]){
          count++;
        }
      }
      result[valu] = count;
  });
  return result;
}
