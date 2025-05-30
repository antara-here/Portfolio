document.addEventListener("DOMContentLoaded",function(){
  console.log("Button clicked");
  document.getElementById("sendBtn").addEventListener("click",function()
{

  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  if(name==="" || email==="" || message==="")
  {
    alert("Please fill out all fields.");
  }
  else{
    alert("Thank you for contacting me!");
    document.getElementById("contactForm").reset();
  }
});
});
