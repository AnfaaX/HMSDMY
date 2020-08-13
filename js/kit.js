window.setTimeout("wak()" ,1000);
function wak(){
   var waktu = new Date();
   setTimeout("wak()", 1000);
   
  
   arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  
  var h = waktu.getDate();
  var bln = waktu.getMonth();
  var thn = waktu.getFullYear();
  var tgl = h+" "+arrbulan[bln]+" "+thn;

   document.getElementById('j').innerHTML=waktu.getHours();
   document.getElementById('m').innerHTML=waktu.getMinutes()+":"+waktu.getSeconds();
   document.getElementById('month').innerHTML= tgl;
}

    
      function tdark(){
        var b = document.getElementById("content");
        b.classList.add("dark");
        b.classList.remove("light");
      }
      function tlight(){
        var k = document.getElementById("content");
        k.classList.add("light");
        k.classList.remove("dark");
      }