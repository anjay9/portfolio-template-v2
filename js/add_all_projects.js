function addAllProjects(){
  var nextNumber = 0;
  function addProject(number,fileName,title,date,description){
    document.getElementById("project_container").innerHTML +=
    '<div class="project" id="project_'+number+'">'+
      '<div class="project_image" id="project_image_'+number+'" style="background-image:url(project_images/'+fileName+'.png)"></div>'+
      '<div class="project_text" id="project_text_'+number+'">'+
        '<div class="paragraph">'+
          '<div class="project_title">'+title+'</div>'+
          '<div class="project_date">'+date+'</div>'+
          '<div class="project_description">'+description+'</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    if (fileName === "portfolio"){
      document.getElementById("project_"+number).style.cursor = "auto";
    }
    else{
      $("#project_"+number).click(function() {
        window.location.href = './#/';
      });
    }
    projects[number] = {
      fileName:fileName,
      title:title,
      date:date,
      description:description
    };
    nextNumber += 1;
  }
  addProject(nextNumber,'project-1','Project-1','Date','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia vestibulum lacus, vel cursus sapien placerat dictum.');
  addProject(nextNumber,'project-2','Project-2','Date','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia vestibulum lacus, vel cursus sapien placerat dictum.');
  addProject(nextNumber,'project-3','Project-3','Date','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia vestibulum lacus, vel cursus sapien placerat dictum.');
  addProject(nextNumber,'project-4','Project-4','Date','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia vestibulum lacus, vel cursus sapien placerat dictum.');
  projectQuantity = nextNumber;
}
