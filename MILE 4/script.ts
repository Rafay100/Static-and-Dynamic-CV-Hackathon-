
let myName:any = document.getElementById('name')
let designation:any = document.getElementById('designation')
let phone:any = document.getElementById('phone')
let email:any = document.getElementById('email')
let address:any = document.getElementById('address')
let matric:any = document.getElementById('matric')
let inter:any = document.getElementById('inter')
let degree:any = document.getElementById('degree')
let institute:any = document.getElementById('institute')
let skill1:any = document.getElementById('skill1')
let skill2:any = document.getElementById('skill2')
let skill3:any = document.getElementById('skill3')
let skill4:any = document.getElementById('skill4')
let skill5:any = document.getElementById('skill5')
let lang1:any = document.getElementById('lang1')
let lang2:any = document.getElementById('lang2')
let styear:any = document.getElementById('styear')
let endyear:any = document.getElementById('endyear')
let company:any = document.getElementById('company')
let comlocation:any = document.getElementById('comlocation')
let jobTitle:any  = document.getElementById('jobTitle')
let achv1:any = document.getElementById('achv1')
let achv2 :any = document.getElementById('achv2')
let achv3:any = document.getElementById('achv3')
let pic:any = document.getElementById('pic')



let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('form')

form?.addEventListener('submit', (e)=>{
  e.preventDefault()

  localStorage.setItem("name", myName.value)
  localStorage.setItem("designation", designation.value)
  localStorage.setItem("phone", phone.value)
  localStorage.setItem("email", email.value)
  localStorage.setItem("address", address.value)
  localStorage.setItem("matric", matric.value)
  localStorage.setItem("inter", inter.value)
  localStorage.setItem("degree", degree.value)
  localStorage.setItem("institute", institute.value)
  localStorage.setItem("skill1", skill1.value)
  localStorage.setItem("skill2", skill2.value)
  localStorage.setItem("skill3", skill3.value)
  localStorage.setItem("skill4", skill4.value)
  localStorage.setItem("skill5", skill5.value)
  localStorage.setItem("lang1", lang1.value)
  localStorage.setItem("lang2", lang2.value)
  localStorage.setItem("styear", styear.value)
  localStorage.setItem("endyear", endyear.value)
  localStorage.setItem("company", company.value)
  localStorage.setItem("comlocation", comlocation.value)
  localStorage.setItem("jobTitle", jobTitle.value)
  localStorage.setItem("achv1", achv1.value)
  localStorage.setItem("achv2", achv2.value)
  localStorage.setItem("achv3", achv3.value)

  if (pic.files && pic.files[0]) {
    let reader = new FileReader()
    reader.addEventListener("load", ()=>{
      let textImg:any = reader.result
      localStorage.setItem("profile_pic", textImg)
    })
    reader.readAsDataURL(pic.files[0])
  }
  
   window.location.href = "./resume/resume.html"
 })