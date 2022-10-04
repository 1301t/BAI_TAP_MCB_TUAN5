function timeRefresh(timeoutPeriod){
    setTimeout("location.reload(true);",timeoutPeriod);
}
window.onload=timeRefresh(30000);
const myNodeList = document.querySelectorAll('p');
  const nhietdo1 =[0,0,0,0,0,0,0,0,0,0,0,0];
  const doam1 =[0,0,0,0,0,0,0,0,0,0,0,0];
  const anhsang1 =[0,0,0,0,0,0,0,0,0,0,0,0];
  setInterval(function(){
    let nhietdo2 = Math.floor(Math.random()*100)+1;
    let doam2 = Math.floor(Math.random()*100)+1;   
    let anhsang2 = Math.floor(Math.random()*100)+1;
   
    function myNHIETDO(){
                       
      if(nhietdo2 <=10){
        document.getElementById('NHIETDO').style.background='pink';
      }
      else if(nhietdo2 <=50){
        document.getElementById('NHIETDO').style.background='organe';
      }
      else {
        document.getElementById('NHIETDO').style.background='red';
      
      }
  }
                
    function myDOAM(){ 
                        if(doam2<20){
                            document.getElementById('DOAM').style.background='greenyellow';
                        }
                        else if(doam2<40){
                            document.getElementById('DOAM').style.background='green';
                        }
                        else {
                            document.getElementById('DOAM').style.background='blue';
                       
                        }
                    }
                    
     function myANHSANG(){
                        
                        if(anhsang2 <=10){
                            document.getElementById('ANHSANG').style.background='palegoldenrod';
                        }else if(anhsang2 <=50){
                            document.getElementById('ANHSANG').style.background='pink';
                        }else 
                        document.getElementById('ANHSANG').style.background='plum';
                      
                        }
                
            
                   myNHIETDO();
                   myDOAM();
                   myANHSANG();

                    function bieuDo(){
                        nhietdo1.push(nhietdo2); nhietdo1.shift();
                        doam1.push(doam2); doam1.shift();
                        anhsang1.push(anhsang2); anhsang1.shift();
                        console.log(nhietdo1);
                        console.log(doam1);
                        console.log(anhsang1);
                    }
                    bieuDo();
                   
                for(var i = 0; i < nhietdo1.length;i++){
                       myNodeList[0].textContent = `${nhietdo2} °C`;
                       myNodeList[1].textContent = doam2 + ' %';
                       myNodeList[2].textContent = anhsang2 +' Lux';
                    }; 
            
               

                    Highcharts.chart('container', {

                        title: {
                          text: 'BIỂU ĐỒ NHIỆT ĐỘ, ĐỘ ẨM, ÁNH SÁNG '
                        },
                        
                        
                        yAxis: {
                            min:0,
                            max:100
                        },
                        
                        xAxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                          
                        },
                        
                        options: {
                            scales: {
                              y: {
                                beginAtZero: true,     
                            }
                          },},
                      
                        
                        series: [{
                          name: 'Nhiệt độ',
                          data: nhietdo1
                        },{
                          name: 'Độ ẩm',
                          data: doam1
                        }, {
                          name: 'Ánh sáng',
                          data: anhsang1
                        },],
                        
                        
                        });
                                                         },2000);
// function myNHIETDO(){
//     NHIETDO = Math.floor(Math.random()*100);
// /    var x = Math.floor(Math.random()*100)+1;
// /  document.getElementById('nhietdo').innerHTML = x; 
//             if(NHIETDO <=10){
//                 document.getElementById("nhietdo").innerHTML = "Nhiệt độ : " + NHIETDO + "℃";
//                 document.getElementById("NHIETDO").style.backgroundColor = "pink";
              
//             }
//             else if(NHIETDO<=35){
//                 document.getElementById("inhietdo").innerHTML = "Nhiệt độ : " + NHIETDO + "℃";
//                 document.getElementById("NHIETDO").style.backgroundColor = "organe";
    
//             }
//             else {
//                 document.getElementById("nhietdo").innerHTML = "Nhiệt độ : " + NHIETDO + "℃";
//                 document.getElementById("NHIETDO").style.backgroundColor = "red";
//                NhietDo.style.background='red';
//             }
//         }
// function myDOAM(){
//     var x = Math.floor(Math.random()*100)+1;
//   document.getElementById('doam').innerHTML = x; 
  
//     if(x<=10){
//         DOAM.style.background='greenyellow';
//     }
//     else if(x<=35){
//        DOAM.style.background='greeny';
//     }
//     else {
//        DOAM.style.background='blue';
//     }
// }
// function myANHSANG(){
//     var x = Math.floor(Math.random()*100)+1;
//   document.getElementById('anhsang').innerHTML = x; 
  
//     if(x <=10){
//        ANHSANG.style.background='palegoldenrod';
//     } 
//     else if(x <=35){
//         ANHSANG.style.background='pink';

//     }
//     else {
//     ANHSANG.style.background='plum';
//     }
// }

function on() {
     if(confirm('Bật đèn')==false){
         document.getElementById('myimage').src ='DEN_ON1.jpg';
     }
    document.getElementById("myImage").src= "DEN_ON1.jpg"
 }
 function off() {
    if(confirm('Tắt đèn ')==false){
        document.getElementById('myimage').src ='DEN_OFF1.jpg';
   }
    document.getElementById("myImage").src= "DEN_OFF1.jpg";
 }
 on();
 off();

 myNHIETDO();
 myANHSANG();
 myDOAM();

  