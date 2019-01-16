function startCorrectingDivHeight(){
  function takeHeight(id){
    var elemHeight = $('#'+id).height();
    return elemHeight;
  }

  function calcProjectHeight(idNumber, imageHeight){
    var textHeight = takeHeight("project_text_"+idNumber);
    var totalHeight = textHeight + imageHeight;
    return totalHeight;
  }

  function setEachProjectHeight(){
    if (window.screen.width < 500){
      for (var idNumber=0; idNumber<projectQuantity; idNumber++){
        var id = "project_"+idNumber;
        $("#"+id).height("auto");
      }
    }
    else if (window.screen.width >= 500){
      var imageHeight = $('#project_image_0').outerHeight();
      for (var idNumber=0; idNumber<=projectQuantity; idNumber++){
        if (idNumber % 2 === 0){
          var evenHeight = calcProjectHeight(idNumber, imageHeight);
          var nextIdNumber = idNumber + 1;
          if ($("#project_"+nextIdNumber).length){
            var oddHeight = calcProjectHeight(nextIdNumber, imageHeight);
            var largerHeight = Math.max(evenHeight, oddHeight);
            $("#project_"+idNumber).height(largerHeight + "px");
            $("#project_"+nextIdNumber).height(largerHeight + "px");
          }
          else{
            $("#project_"+idNumber).height("auto");
          }
        }
      }
    }
  }

  setInterval(function(){setEachProjectHeight();},1000/30);
}
