

window.addEventListener('load', () => {

    let name = localStorage.getItem("name");
    let designation = localStorage.getItem("designation");
    let phone = localStorage.getItem("phone");
    let email= localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let matric = localStorage.getItem("matric");
    let inter = localStorage.getItem("inter");
    let degree = localStorage.getItem("degree");
    let institute = localStorage.getItem("institute");
    let skill1 = localStorage.getItem("skill1");
    let skill2 =  localStorage.getItem("skill2");
    let skill3 =  localStorage.getItem("skill3");
    let skill4 =   localStorage.getItem("skill4");
    let skill5 =  localStorage.getItem("skill5");
    let lang1 =  localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear =  localStorage.getItem("endyear");
    let company =  localStorage.getItem("company");
    let comlocation =  localStorage.getItem("comlocation");
    let jobTitle =  localStorage.getItem("jobTitle");
    let achv1 =  localStorage.getItem("achv1");
    let achv2 =  localStorage.getItem("achv2");
    let achv3 =  localStorage.getItem("achv3");
    let picture = localStorage.getItem("profile_pic");
   
   
    let resName:any = document.getElementById('resName')
     resName.textContent = name
   
     let resDesig:any = document.getElementById('resDesig')
     resDesig.textContent = designation
   
     let resPhone:any = document.getElementById('resPhone')
     resPhone.textContent = phone
   
     let resEmail:any = document.getElementById('resEmail')
     resEmail.textContent = email
   
     let resAdd:any = document.getElementById('resAdd')
     resAdd.textContent = address
   
     let resMatric:any = document.getElementById('resMatric')
     resMatric.textContent = matric
   
     let resInter:any = document.getElementById('resInter')
     resInter.textContent = inter
   
     let resDeg:any = document.getElementById('resDeg')
     resDeg.textContent = degree
   
     let resInst:any = document.getElementById('resInst')
     resInst.textContent = institute
   
     let resSkill1:any = document.getElementById('resSkill1')
     resSkill1.textContent = skill1;
   
     let resSkill2:any = document.getElementById('resSkill2')
     resSkill2.textContent = skill2
   
     let resSkill3:any = document.getElementById('resSkill3')
     resSkill3.textContent = skill3
   
     let resSkill4:any = document.getElementById('resSkill4')
     resSkill4.textContent = skill4
   
     let resSkill5:any = document.getElementById('resSkill5')
     resSkill5.textContent = skill5
   
     let resLang1:any = document.getElementById('resLang1')
     resLang1.textContent = lang1
   
     let resLang2:any = document.getElementById('resLang2')
     resLang2.textContent = lang2
   
     let resStyear:any = document.getElementById('resStyear')
     resStyear.textContent = styear
   
     let resEndyear:any = document.getElementById('resEndyear')
     resEndyear.textContent = endyear
   
     let resCom:any = document.getElementById('resCom')
     resCom.textContent = company
   
     let resComloc:any = document.getElementById('resComloc')
     resComloc.textContent = comlocation
   
     let resJob:any = document.getElementById('resJob')
     resJob.textContent = jobTitle
   
     let resAchv1:any = document.getElementById('resAchv1')
     resAchv1.textContent = achv1
   
     let resAchv2:any = document.getElementById('resAchv2')
     resAchv2.textContent = achv2
   
     let resAchv3:any = document.getElementById('resAchv3')
     resAchv3.textContent = achv3
   
     let resImg:any = document.getElementById('resImg')
     resImg.src = picture;
   
   
   });
   
   let print_btn = document.getElementById("print_btn")
   
   print_btn?.addEventListener("click", () => {
     window.print();
   });
   