/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var diccionari = new Array ();
// var diccionari = new Array(["password", "123456", "123456789", "guest", "qwerty", "12345678", "111111", "12345"]);
/*
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
*/
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

     // Diferents idiomes per la GUI
const Idiomes_dft = [
    {
        "IdIdioma": "ca",
        "Titol": "Versió amb Base de Dades Contrasenyes Segures",
        "Username": "Usuari o correu: ",
        "Password": "Contrasenya: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": " Mínim 8 caràcters,",        
        "Majuscula": " almenys una lletra majúscula,",
        "Minuscula": " almenys una lletra minúscula,",
        "Numero": " almenys un número,",
        "Carespecial": " almenys un carácter especial.",
        "Robustesa": "Dèbil - Regular - Bona - Forta",
        "Inisessio": "Iniciar sessió",
        "Massacomu": "La contrasenya és massa comuna. Si us plau, tria una contrasenya més forta.",
        "Nopatrons": "La contrasenya no pot contenir patrons previsibles.",
        "Norepmult": "La contrasenya no pot contenir repeticions múltiples de caràcters.",
        "Majminnum": "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.",
        "Almcaresp": "La contrasenya ha de contenir almenys un caràcter especial.",
        "Almmincar": "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.",
        "Contrarob": "Contrasenya robusta!",        
        "Computacional": "\n\     - Tendria un Cost Computacional per Força Bruta de: ",
        "Maquina": " pel que una màquina a 1 MIPS podria arribar a necessitar ",
        "Processament": " anys de processament, es a dir, ",
        "Nivell": " dies.\n\     - Tendria un Nivell de Robustesa de: ",
        "Score": "/4, i un zxcvbn Score de: ",
        "Voldesar": "Vol desar l'inici de sessió?",
        "Diccionari": "Diccionari: ",
        "Patrons": "Patrons: ",
        "Mostrartaula": "Mostrar taula ASCII-HTML",
        "Amagartaula": "Amagar taula ASCII-HTML"
    },
    {
        "IdIdioma": "es",
        "Titol": "Versión con Base de Datos Contraseñas Seguras",
        "Username": "Username o correo: ",
        "Password": "Contraseña: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": " Mínimo 8 carácteres,",        
        "Majuscula": " almenos una letra mayúscula,",
        "Minuscula": " almenos una letra minúscula,",
        "Numero": " almenos un número,",
        "Carespecial": " almenos un carácter especial.",
        "Robustesa": "Débil - Regular - Buena - Fuerte",
        "Inisessio": "Iniciar sesión",
        "Massacomu": "La contraseña es demasiado común. Por favor, elige una contraseña más fuerte.",
        "Nopatrons": "La contraseña no puede contener patrones previsibles.",
        "Norepmult": "La contraseña no puede contener múltiples repeticiones de caracteres.",
        "Majminnum": "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.",
        "Almcaresp": "La contraseña debe contener al menos un carácter especial.",
        "Almmincar": "La contraseña es demasiado corta. Debe tener al menos 8 caracteres.",
        "Contrarob": "¡Contraseña robusta!",        
        "Computacional": "\n\     - Tendría un Coste Computacional por Fuerza Bruta de: ",
        "Maquina": " por lo que una máquina a 1 MIPS podría llegar a necesitar ",
        "Processament": " años de procesamiento, es decir, ",
        "Nivell": " días.\n\     - Tendría un Nivel de Robustez de: ",
        "Score": "/4, y un zxcvbn Score de: ",
        "Voldesar": "¿Quiere guardar el inicio de sesión?",
        "Diccionari": "Diccionario: ",
        "Patrons": "Patrones: ",
        "Mostrartaula": "Mostrar tabla ASCII-HTML",
        "Amagartaula": "Esconder tabla ASCII-HTML"
    },
    {
        "IdIdioma": "en",
        "Titol": "Secure passwords Database Version",
        "Username": "User or email: ",
        "Password": "password: ",
        "Mostrar": "Show: ",
        "Minimcar": " Minimum 8 characters,",        
        "Majuscula": " at least one capital letter,",
        "Minuscula": " at least one lowercase letter,",
        "Numero": " at least one number,",
        "Carespecial": " at least one special character.",
        "Robustesa": "Weak - Fair - Good - Strong",
        "Inisessio": "Log in",
        "Massacomu": "The password is too common. Please choose a stronger password.",
        "Nopatrons": "password cannot contain predictable patterns.",
        "Norepmult": "The password cannot contain multiple repetitions of characters.",
        "Majminnum": "password must contain at least one uppercase letter, one lowercase letter, and one number.",
        "Almcaresp": "password must contain at least one special character.",
        "Almmincar": "The password is too short. It must be at least 8 characters long.",
        "Contrarob": "Strong password!",        
        "Computacional": "\n\     - It would have a Brute Force Computational Cost of: ",
        "Maquina": " for what a 1 MIPS machine might need ",
        "Processament": " years of processing, that is, ",
        "Nivell": " days.\n\     - It would have a Robustness Level of: ",
        "Score": "/4, and a zxcvbn Score of: ",
        "Voldesar": "Do you want to save your login?",
        "Diccionari": "Dictionary: ",
        "Patrons": "Patterns: ",
        "Mostrartaula": "Show ASCII-HTML table",
        "Amagartaula": "Hide ASCII-HTML table"
    }
];
var Idiomes = Idiomes_dft;
var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");


// Funció per carregar la base de dades ContraSegur.db
function AlaWeb_SQLite(IdIdioma) {
   // window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
    config = {
        locateFile: filename => `/dist/${filename}`
    };
    // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
    // We must specify this locateFile function if we are loading a wasm file from anywhere other than the
    // current html page's folder.

    // Recuperam de la base de dades els TextosGUI per tots els Idiomes
    // SELECT * FROM TblTextosGUI;
    alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
            SELECT * FROM TblTextosGUI;',
     //       [], function(idiomes) {Print_Data(TblTextosGUI = idiomes.pop());}
          [], function(idiomes) {SQL_TextosGUI(IdIdioma, idiomes.pop());}
    );
    
}


        
    // Print data  
function Print_Data(res) {
    for (var i in res)
    {
       // console.log("row " + i);
       // document.getElementById("res").innerHTML += "<br>";
       for (var j in res[i])
         {
          // console.log(" " + res[i][j]);
          // document.getElementById("res").innerHTML += res[i][j] + ", ";
          // window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
         }
    }
}   

function SQL_TextosGUI(IdIdioma, TblTextosGUI){
    Idiomes = TblTextosGUI;
    // window.alert("Hola");
    if (Idiomes.length === 0) {Idiomes = Idiomes_dft;};
       // window.alert("Hola2");

    if (Idiomes.find(Idioma => Idioma.IdIdioma === IdIdioma) === undefined) { 
        window.alert("GUI: Idioma no trobat / Idioma no encontrado / Language not found!");
 
        Idiomes = Idiomes_dft;
    };
       // window.alert("Hola3");

}
  function CanviarIdioma(IdIdioma) {
      AlaWeb_SQLite(IdIdioma);
      Idioma = Idiomes.find(Idioma => Idioma.IdIdioma === IdIdioma);
      // window.alert("Idioma.IdIdioma == IdIdioma");
      document.title = Idioma.Titol;
      document.getElementById("Username").innerHTML = Idioma.Username;
      document.getElementById("Password").innerHTML = Idioma.Password;
      
      
  }   
  
function SQL_Diccionari(TblDiccionari) {
    //  window.alert("SQL_Diccionari IdIdioma = '" + IdIdioma + "'");    
    diccionari.clear();
    SqlDiccionari = [];
    for (var i in TblDiccionari) {
        // console.log("TblDiccionari[" + i + "].Password: " + TblDiccionari[i].Password);
        diccionari.push(TblDiccionari[i].Password);  
        SqlDiccionari[i] = TblDiccionari[i].Password;
    }
     // window.alert(Diccionari.size);  
    // if (Diccionari.length == 0) {
    if (diccionari.size == 0) {
        window.alert("Idioma sense contrasenyes / Idioma sin contraseñas / Language without passwords!");
        diccionari = Diccionari_dft;
        IdIdioma = "ca";
        IdIdioma_ant = "ca";
        
    } else {
        // window.alert("Contrasenyes en idioma / Contraseñas en idioma / Language passwords = '" + IdIdioma + "'");
    };
    // window.alert(TblDiccionari[0].Password);
}

        function Iniciar() {
            window.alert("password: " + document.getElementById("password").value);
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
            
            // window.alert("Calcul: " + calcul);
           
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
                window.alert( "password: " + password  +
                     Idioma.Computacional + Costcomputacional +  Idioma.Nivell + robustesa +  
                    Idioma.Maquina + calculanys + Idioma.Processament + calculdies + Idioma.Score + calcul +  "\n\ - "
                    + controlContrasenya(password));
       
            // window.alert(controlContrasenya(document.getElementById("password").value));
            if(confirm("Vol desar l'inici de sessio?")) {
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("password", document.getElementById("password").value);
    const myWindow = window.open("desa.html", "_blank", "width=460, height=600, left=0, top=0, \n\
\n\ location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}
          }
          
          function esComuna(password) {
            /*
             for ( i=1; < diccionari.lenght; i++) {
             if (diccionari[i] == password) {
                return true;
            }
              */
            
               return diccionari.includes(password.toLowerCase());        
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
            diccionari.push(stream2[i]); 
        }
        // alert("Diccionari:" + diccionari);
      }
    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}



    function insert(IdIdioma) {
          const myWindow = window.open("", "_blank", "width=640,height=640,left=15,top=235,location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0");
        myWindow.document.open();

        myWindow.document.write(`
            <html>
                <head>
                    <title>SQL INSERT TblDiccionari for SQLite Studio</title>
                </head>
                <body style="background-size: 640px 604px; background-image: url('img/passwordCL.png'); background-repeat: no-repeat;">
                    <p>
                        <a href="https://sqlitesudio.netlify.app/" target="_blank">
                            <font size="+2">SQL UPDATE TblDiccionari for SQLite Studio IdIdioma='${IdIdioma}'</font>
                        </a>
                    </p>
                    <p>DELETE FROM TblDiccionari;</p>
        `);

        diccionari.forEach(p => {
                const safe = p.replace(/'/g, "''");  // Escapar comillas simples
                myWindow.document.write(`<p>INSERT INTO TblDiccionari VALUES ('${safe}', '${IdIdioma}', '${md5(safe)}','${SHA1(safe)}','AES(safe)');<\p>`);
        });
         myWindow.document.write(`
                </body>
            </html>
        `);
        myWindow.document.close();           
     }

        function mostrarInsertsACrear(texto) {
            const nuevaVentana = window.open('', '_blank');
            nuevaVentana.document.write('<pre>' + texto + '</pre>');
            nuevaVentana.document.title = "Los datos a insertar son los siguientes: ";
        }
        
        function showPassword() {
              var x = document.getElementById("password");
              if (x.type === "password") {
                x.type = "text";
              } else {
                x.type = "password";
              }
            }

            function generatePassword(length = 12) {
    const lowercase = "abcdefghijklmnopqrstuvwxyzàèéíòóúüçñ";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÈÉÍÒÓÚÜÇÑ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=¡¿";
    const allChars = lowercase + uppercase + numbers + specialChars;

    function getRandomChar(set) {
        return set[Math.floor(Math.random() * set.length)];
    }

    let Password = [
        getRandomChar(lowercase),
        getRandomChar(uppercase),
        getRandomChar(numbers),
        getRandomChar(specialChars)
    ];

    while (Password.length < length) {
        Password.push(getRandomChar(allChars));
    }

    return Password.sort(() => Math.random() - 0.5).join('');
}
 function generateAndSetPassword() {
        document.getElementById('password').value = generatePassword();
    }
