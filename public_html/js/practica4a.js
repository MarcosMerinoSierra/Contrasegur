/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

                var seconds=0;
                    function timer(){
                        seconds = seconds + 1;
                        document.getElementById("counter").innerHTML=seconds;
                    }
                    setInterval(timer,1000);
