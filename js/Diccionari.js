/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// var diccionari = new Array(["password", "123456", "123456789", "guest", "qwerty", "12345678", "111111", "12345"]);
 var diccionari = new Set ([ "password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969",
    "shadow", "master", "mustang", "michael", "pussy", "superman", "fuckyou", "121212", "killer", "trustno1", "jordan",
    "jennifer", "hunter", "buster", "soccer", "harley", "batman", "tigger", "sunshine", "iloveyou", "fuckme", "charlie",
    "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "asshole", "computer", "michelle",
    "jessica", "pepper", "131313", "freedom", "pass", "fuck", "maggie", "159753", "ginger", "princess", "joshua", "cheese",
    "amanda", "summer", "love", "ashley", "6969", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "dallas",
    "austin", "thunder", "taylor", "matrix", "minecraft", "william", "corvette", "hello", "martin", "heather", "secret",
    "fucker", "merlin", "diamond", "hammer", "silver", "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick",
    "internet", "scooter", "orange", "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever",
    "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome",
    "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal",
    "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "gateway", "marina",
    "diablo", "bulldog", "compaq", "purple", "hardcore", "banana", "junior", "hannah", "porsche", "lakers", "iceman",
    "money", "cowboys", "london", "tennis", "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff",
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"]); 

// var patrons = ["/123/", "/abc/", "/qwerty/"];
var patrons = [/098/, /0pm/, /0pñ/, /123/, /1aq/, /1qa/, /234/, /2ws/, /2zs/, /321/, /345/, /3ed/, /432/, /456/,
    /4rf/, /543/, /567/, /5tg/, /654/, /678/, /6yh/, /765/, /789/, /7uj/, /876/, /890/, /8ik/, /987/, /9ol/,
    /abc/, /aq1/, /aqw/, /asd/, /aze/, /bcç/, /bcd/, /bgt/, /bnm/, /bvc/, /cba/, /çcb/, /cçd/, /cde/, /çde/,
    /cvb/, /cxw/, /cxz/, /dcb/, /dçc/, /de3/, /def/, /dfg/, /dsa/, /dsq/, /edc/, /edç/, /efg/, /ert/, /ewq/,
    /eza/, /fds/, /fed/, /fgh/, /fr4/, /gfd/, /gfe/, /ghi/, /ghj/, /gt5/, /hgf/, /hij/, /hjk/, /hy6/, /ihg/,
    /ijk/, /iop/, /iuy/, /jhg/, /jih/, /jkl/, /ju7/, /ki8/, /kjh/, /kji/, /klm/, /klñ/, /lkj/, /lmn/, /lo9/,
    /mju/, /mlk/, /mnb/, /mnñ/, /mno/, /mp0/, /nbv/, /nhy/, /nml/, /nño/, /nop/, /ñlk/, /ñnm/, /ñop/, /ñp0/,
    /oiu/, /onm/, /oñn/, /opq/, /poi/, /pon/, /poñ/, /pqr/, /qa1/, /qaz/, /qpo/, /qrs/, /qsd/, /qwe/, /rew/,
    /rez/, /rfv/, /rqp/, /rst/, /rty/, /sdf/, /srq/, /stu/, /sw2/, /sz2/, /tgb/, /tre/, /tsr/, /tuv/, /tyu/,
    /uio/, /ujm/, /uts/, /uvw/, /uyt/, /vbn/, /vcx/, /vfr/, /vut/, /vwx/, /wer/, /wqa/, /wsx/, /wvu/, /wxc/,
    /wxy/, /xcv/, /xsw/, /xsz/, /xwv/, /xyz/, /yhn/, /ytr/, /yui/, /yxw/, /zaq/, /zer/, /zsx/, /zxc/, /zyx/];




        function Iniciar() {
            window.alert("Password: " + document.getElementById("password").value);
            // window.alert("Calcul: " + calcul.value);
        }
       
        function Comprovar() {
            
            var password = document.getElementById("password").value;
           
            //Comprovam la mida minima
            if (password.length >= 8) {
                document.getElementById("minimcar").checked = true;
            }
           
            for (i = 0; i < password.length; i++) {
                lletra = password.charAt(i);
                if (isNaN(lletra) && (lletra.toUpperCase() === lletra.toLowerCase())) {
                    document.getElementById("Quinta").checked = true;
                } else if (!isNaN(lletra)) {
                    document.getElementById("Cuarta").checked = true;
                } else if (lletra === lletra.toUpperCase()) {
                    document.getElementById("majuscula").checked = true;
                } else if (lletra === lletra.toLowerCase()) {
                    document.getElementById("Tercera").checked = true;
                }
            }
        }
        
        function mensaje() {
            var password = document.getElementById("password").value;
            base = 0;
            
            exponente = password.length;
            if (document.getElementById("Cuarta").checked) {base = base + 10;}
            if (document.getElementById("majuscula").checked) {base = base + 40;}
            if (document.getElementById("Tercera").checked) {base = base + 40;}
            if (document.getElementById("Quinta").checked) {base = base + 41;}
            calcul = base * exponente / 16;  
            
        document.getElementById("calcul").value = calcul.toString();
            
            window.alert("Calcul: " + calcul);
           
            Costcomputacional = Math.pow(base, exponente) / 1e6;
            robustesa=0;
                if (Costcomputacional < 1e3) {
                    robustesa=0;
                    
                } else if (Costcomputacional < 1e6) {
                        robustesa=1;
                       
                } else if (Costcomputacional < 1e8) {
                        robustesa=2;
                        
                } else if (Costcomputacional < 1e10) {
                        robustesa=3;
                   
                } else if (Costcomputacional > 1e10) {
                   robustesa=4; 
                }
            calculanys= Costcomputacional / (365*24*60*60);
            calculdies =  Costcomputacional / (24*60*60);
                window.alert( "Password: " + password  +
                    "\n\ - " + "Els cost computacional es: " + Costcomputacional + "\n\ - " +"El nivell de robustesa es: " + robustesa +  
                    "\n\ - " + " els anys que s'usarien per esbrinar la teva contrasenya serien: " + calculanys +
                    "\n\ - " + "El dies per esbrinarla es: " + calculdies +  "\n\ - " 
                    + controlContrasenya(password));
       
            // window.alert(controlContrasenya(document.getElementById("password").value));
            if(confirm("Vol desar l'inici de sessio?")) {
    localStorage.setItem("Uusario", document.getElementById("Usuario").value);
    localStorage.setItem("password", document.getElementById("password").value);
    const myWindow = window.open("desa.html", "_blank", "width=460, height=600, left=0, top=0, \n\
\n\ location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}
          }
          
        
        
   function readSingleFile(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
       alert("Got the file.\n"
           + "name: " + f.name + "\n"
           + "type: " + f.type + "\n"
           + "size: " + f.size + " bytes\n"
           + "starts with: " + contents.substr(0, contents.indexOf("\n"))
      ); 
      if (contents.substr(0, 1) == "/") {
        // patrons = contents.replaceAll("\r\n", ",");
        stream2 = contents.replaceAll("\r\n", ",");
        stream3 = stream2.replaceAll("/", "");
        stream4 = stream3.split(",");      
        for (i = 0; i < stream4.length; i++) {
            patrons[i] = new RegExp(stream4[i]);
        }        
         alert("Patrons:" + patrons);
      } else {
        stream1 = contents.replaceAll("\n", ",");
        stream2 = stream1.split(",");
        for (i = 0; i < stream2.length; i++ ) {
            diccionari.add(stream2[i]); 
        }
        // alert("Diccionari:" + diccionari);
      }
    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}

       function esComuna(password) {
          /*
           for ( i=1; < diccionari.lenght; i++) {
           if (diccionari[i] == password) {
              return true;
          }
            */
          
             return diccionari.has(password.toLowerCase());        
              }
              
          function patrones(password) {
              
              for (i=0; i < patrons.length; i++) {
                 
                if (patrons[i].test(password.toLowerCase())) {
                  return true;
              }
              }
              return false;
              }
              
            
            
        
       function controlContrasenya(password) {      
           
        const Majuscules = /[A-Z]|Ñ|Ç/;
        const Minuscules =  /[A-Z]|ñ|ç/;
        const caracteresEspeciales = /[º\ª "@·#$~%&¬/()='¡?¿^`[*+]¨´{}-_.:,;<>Z\*-+']/;
        const Digitos = /[0-9]/;
           
          if (esComuna(password)) {
            return "Tu contraseña es muy comun, porfavor intente cambiarla";
          }
          
          if (patrones(password)) {
              return "Tu contraseña te patrons";
          }
          
          if (!Minuscules.test(password) || !Majuscules.test(password) || !Digitos.test(password)) {
              return "Te falta una minuscula, una majucula y numeros en tu contraseña";
          }
         
          if (!caracteresEspeciales.test(password)) {
              return "Tu contreña a de contener por lo menos un caracter especial";
          }
          if (!password.length < 8){
              return "Tu contraseña no tiene el numero de letras necesario";
          }
          return "es robusta";
        }