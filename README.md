Proiect Cloud Computing

- NuntApp-etit -

Stoica Simona-Ionela, SIMPRE, an 1, grupa 1121

Link Youtube: https://youtu.be/B2KqXhfTpwo
Link Vercel: https://proiect-cloud-computing-9mok-8d4e5lkkj-simonasi.vercel.app/
Link GitHub: https://github.com/SimonaSI/ProiectCloudComputing.git

Introducere

<img src="./poze/wallpaperflare.com_wallpaper.jpg" >

Cloud computing reprezintă un model de furnizare a serviciilor de calcul, stocare, procesare și alte resurse IT printr-o rețea de servere conectate la internet. Acesta permite utilizatorilor să acceseze și să utilizeze aceste resurse la distanță, fără a fi necesară deținerea unor servere fizice proprii sau a altor infrastructuri IT costisitoare.
Necesitatea cloud computingului în zilele noastre este determinată de o serie de factori. În primul rând, odată cu creșterea utilizării internetului, cantitatea de date procesate și stocate de către companii a crescut considerabil. În același timp, costurile de achiziție și întreținere a infrastructurii IT necesare pentru a stoca și procesa aceste date au devenit din ce în ce mai mari.
Cloud computing-ul oferă o soluție mai eficientă și mai rentabilă pentru aceste probleme, permițând companiilor să-și externalizeze nevoile de stocare și procesare de date. Acesta poate fi utilizat pentru a oferi acces la resurse IT la nivel global, pentru a crește performanța aplicațiilor și a proceselor de afaceri, precum și pentru a crește flexibilitatea și scalabilitatea infrastructurii IT.
Există trei tipuri principale de servicii de cloud computing: IaaS, PaaS si SaaS.
Infrastructura ca Serviciu (IaaS): IaaS oferă utilizatorilor acces la resursele de calcul, stocare și rețea necesare pentru a-și construi propriile aplicații și soluții. Acestea includ servere virtuale, spațiu de stocare, conexiuni de rețea și alte elemente de infrastructură.
Platforma ca Serviciu (PaaS): PaaS oferă o platformă de dezvoltare completă, care include infrastructura necesară pentru a rula aplicații și servicii, precum și un set de instrumente pentru dezvoltatorii de software. Acestea includ servere web, baze de date, instrumente de dezvoltare, middleware și alte componente.
Software ca Serviciu (SaaS): SaaS oferă aplicații și servicii complet funcționale care pot fi utilizate direct de utilizatori finali. Acest tip de cloud computing oferă aplicații precum e-mail, gestionarea relațiilor cu clienții (CRM), contabilitate și colaborare online. Utilizatorii pot accesa aceste aplicații prin intermediul internetului, fără a fi nevoie să instaleze sau să gestioneze propriile software-uri.
Descriere problemă

Organizarea unui eveniment, cum ar fi o nuntă, o cununie sau un botez, poate fi o sarcină complicată și stresantă. Printre cele mai mari probleme pe care oamenii le întâmpină în acest proces se numără căutarea unei locații adecvate și rezervarea acesteia.
Găsirea unei locații potrivite poate fi o provocare majoră, deoarece implică cercetarea și compararea mai multor opțiuni disponibile în funcție de criterii precum locația, capacitatea, prețul, serviciile oferite și multe altele. Aceasta poate fi o sarcină extrem de consumatoare de timp și poate deveni descurajantă pentru utilizatorii care încearcă să organizeze un eveniment.
În plus, procesul de rezervare poate fi și el problematic, deoarece necesită de obicei contactarea locației prin telefon sau e-mail și negocierea termenilor și condițiilor. Acest proces poate fi uneori frustrant și poate fi dificil să se obțină o confirmare rapidă și precisă a rezervării.
Prin intermediul aplicației NuntApp-etit, utilizatorii pot căuta și compara rapid și ușor mai multe locații de evenimente disponibile, având acces la o gamă largă de opțiuni.

Descriere API

API-ul este utilizat pentru a permite comunicarea între serverul aplicației și baza de date MongoDB, dar și pentru a permite interacțiunea între clientul aplicației și serverul său.
API-ul folosit in aplicatie este un API RESTful, care utilizeaza protocolul HTTP si metodele HTTP (GET, POST,PUT, DELETE) pentru a permite comunicarea intre client si server. Acest API se bazeaza pe Node.js si foloseste MongoDB ca baza de date.
În fișierul "pages/api/records.js" s-a definit un endpoint care ascultă cereri HTTP Și decide cum să proceseze aceste cereri în functție de metoda HTTP și de conținutul cererii. De exemplu, dacă primește o cerere HTTP GET faără niciun parametru, endpoint-ul va chema funcția "getRecords" pentru a returna toate înregistrările din colecția "records" din baza de date.

Mai exact, API-ul expune următoarele funcții pentru a permite interacțiunea cu colecția "records":
• getRecords: returnează toate înregistrările din colecția "records";
• getRecord: returnează o înregistrare specifică din colecția "records", identificată după id-ul său;
• postRecord: adaugă o nouă înregistrare în colecția "records";
• putRecord: actualizează o înregistrare existentă din colecția "records", identificată după id-ul său;
• deleteRecord: șterge o înregistrare din colecția "records", identificată după id-ul său.
API-ul utilizează biblioteca mongoDB pentru a comunica cu baza de date MongoDB și expune aceste funcții prin intermediul unor endpoint-uri HTTP (GET, POST, PUT, DELETE), care sunt gestionate de către funcția handler definită la sfârșitul fișierului.
Funcția handler verifică mai întâi metoda HTTP a cererii primite și apoi apelează funcția corespunzătoare pentru a efectua operația dorită pe colecția "records". Funcțiile returnează apoi un răspuns HTTP cu rezultatele operației efectuate.
În plus, API-ul folosește și câteva funcții ajutătoare din fișierul "apiMethods.js", care oferă metode standardizate pentru a trimite diferite tipuri de răspunsuri HTTP, cum ar fi răspunsuri cu codurile de stare 200 (OK) sau 405 (Method Not Allowed).
Fișierul "js/utils/apiMethods.js" conține funcții pentru trimiterea de răspunsuri HTTP de diferite tipuri. Acestea sunt utilizate pentru a comunica cu clientul aplicației și pentru a gestiona erorile care pot apărea în timpul utilizării API-ului.
În fișierul "js/utils/apiMethods.js" s-au definit câteva funcții care ajută la trimiterea de răspunsuri HTTP standardizate, cum ar fi:
• "sendOk" pentru a trimite un raspuns cu codul de stare 200 OK și datele cerute;
• "sendBadRequest" pentru a trimite un raspuns cu codul de stare 400 Bad Request și un mesaj de eroare;
• "sendNotFound" pentru a trimite un raspuns cu codul de stare 404 Not Found și un mesaj de eroare;
• "sendUnauthorized" pentru a trimite un raspuns cu codul de stare 401 Unauthorized și un mesaj de eroare;
• "sendMethodNotAllowed" pentru a trimite un raspuns cu codul de stare 405 Method Not Allowed și un mesaj de eroare.

Flux de date

S-a dezvoltat o aplicație web, NuntApp-etit, care oferă utilizatorilor informații despre locații pentru evenimente precum nunți, cununii sau botezuri.
În ceea ce privește fluxul de date, aplicația folosește un API RESTful pentru a comunica cu baza de date MongoDB. Acest API permite utilizatorilor să efectueze operații CRUD (create, read, update, delete) pe resursele disponibile în baza de date:

1. Clientul face o cerere HTTP către server pentru a accesa anumite resurse, cum ar fi pagina principală a aplicației;
2. Serverul primește cererea și verifică informațiile;
3. Dacă cererea este validă, serverul va accesa baza de date MongoDB pentru a prelua sau a actualiza datele necesare;
4. Serverul va genera un răspuns HTTP și îl va trimite înapoi la client. Răspunsul poate conține datele solicitate, un mesaj de eroare sau un cod de stare HTTP, care indică dacă cererea a fost îndeplinită cu succes sau nu;
5. Clientul primește răspunsul HTTP și se afișează datele pe interfața utilizatorului, sau va trimite o altă cerere;
6. Acest proces se poate repeta de mai multe ori, în funcție de necesitățile aplicației și de acțiunile utilizatorilor.

Exemple de request/response

Pentru a testa API-ul nostru, am folosit platforma Postman. Aceasta ne-a permis să efectuăm teste unitare și de integrare pentru a ne asigura că API-ul nostru funcționează corect și în conformitate cu specificațiile.
Un prim exemplu de request pe care îl putem vizualiza este acela pentru obținerea tuturor înregistrărilor. Pentru aceasta ne vom folosi de ruta http://localhost:3000/api/records, si nu vom adăuga niciun body. Răspunsul va fi următorul:

Un alt request pe care îl putem face este acela de a extrage doar o locație folosind id-ul. Pentru aceasta vom folosi ruta http://localhost:3000/api/records si vom adăuga parametrul id cu valoarea id-ului căutat. Răăspunsul este următorul:

Pentru a efectua un request de tip DELETE se va folosi aceeași ruta ca cea de la get by id, doar că se va alege metoda DELETE. Rezultatul este următorul:

Dacă încercăm să rulăm request-ul de get by id, vom observa că locația nu mai există și nu se va întoarce niciun răspuns.

De asemenea, vom realiza și un tip de request POST. Acesta va folosi ruta http://localhost:3000/api/records și îi vom da un body cu un json format din atributele necesare. Mai jos se observă conținutul json-ului și rezultatul întors:

Metode HTTP

Metodele HTTP (Hypertext Transfer Protocol) sunt utilizate pentru a comunica cu serverele web și pentru a solicita sau trimite resurse. Protocolul HTTP definește un set de metode standard pentru a indica tipul de acțiune care trebuie efectuat asupra unei resurse specifice.
• GET - utilizată pentru a obține informații de la server. Cererea de tip GET nu are corp, și este utilizată în general pentru a solicita date sau fișiere de la server.
• POST - utilizată pentru a trimite date către server. Aceasta poate fi utilizată pentru a încărca un fișier, a introduce informații într-o bază de date sau pentru a efectua o altă acțiune.
• PUT - utilizată pentru a actualiza o resursă existentă pe server. Metoda PUT poate fi utilizată pentru a actualiza date sau fișiere existente pe server.
• DELETE - utilizată pentru a șterge o resursă de pe server. Aceasta poate fi utilizată pentru a șterge un fișier sau un înregistrare dintr-o bază de date.

Autentificare și autorizare servicii utilizate

Am creat un cont pe MongoDB Atlas și am utilizat link -ul de conectare generat pentru a mă conecta la baza de date stocată în MongoDB Compass.
MongoDB Atlas este o platformă de gestionare a bazelor de date MongoDB în cloud și oferă o interfață web pentru a configura și gestiona bazele de date, precum și un set de instrumente pentru a le monitoriza și a le securiza. După crearea contului am adăugat un proiect nou, un user și o parolă pe care le-am salvat.

MongoDB Compass este o aplicație desktop care oferă o interfață grafică pentru interogarea, vizualizarea și administrarea bazelor de date MongoDB. Pentru a mă conecta la aceasta, am adăugat o nouă conexiune folosind un string de conexiune. În string-ul de conexiune se va înlocui parola cu cea generată anterior.

Odată ce s-a creat conexiunea se pot adăuga date in baza de date.

Descriere tehnologii

Pentru dezvoltarea aplicației NuntApp-etit, am ales să utilizăm o serie de tehnologii moderne și bine cunoscute în industria IT.
Pentru partea de front-end, am utilizat biblioteca React, datorită avantajelor pe care le oferă, cum ar fi performanța ridicată, modularitatea și ușurința în utilizare. Am ales să implementăm o interfață utilizator modernă și intuitivă, pentru a asigura o experiență plăcută utilizatorilor.
Next.js este un framework construit pe baza React care permite dezvoltatorilor sa creeze aplicatii web cu JavaScript si server-side rendering (SSR) usor. Acestea au fost alese datorita scalabilitatii si flexibilitatii lor, precum si datorita faptului ca permit crearea de aplicatii web responsive si performante.
Tailwind este o biblioteca CSS care ofera clase predefinite pentru stilizarea elementelor HTML. Aceasta a fost aleasa pentru a accelera dezvoltarea UI-ului, oferind clase de stilizare reutilizabile si personalizabile.
GitHub este o platforma de gazduire pentru proiecte software, care permite dezvoltatorilor sa colaboreze si sa-si gazduiasca codul sursa. A fost utilizat pentru a gestiona versiunile aplicatiei.
Postman este o aplicatie care permite testarea si dezvoltarea de API-uri. A fost utilizata pentru a testa API-ul aplicatiei in timpul dezvoltarii.
Visual Studio Code este un editor de cod sursa dezvoltat de Microsoft, care oferă un mediu de dezvoltare eficient și ușor de utilizat.. A fost ales pentru dezvoltarea aplicatiei datorita facilitatilor oferite pentru dezvoltarea aplicatiilor web, precum si datorita disponibilitatii plugin-urilor si integrarii cu alte instrumente.
De asemenea, am folosit două servicii de cloud - MongoDB Atlas și Vercel - pentru a gestiona baza de date și publicarea aplicației noastre web. MongoDB Atlas este un serviciu de bază de date gestionat care permite utilizatorilor să gestioneze bazele de date MongoDB în cloud. Vercel este un serviciu de hosting de aplicații web care oferă o gamă largă de funcții pentru publicarea și administrarea aplicațiilor.
MongoDB este o baza de date NoSQL document-oriented, care stochează date sub formă de JSON, ceea ce face mai ușor manipularea lor. Aceasta este utilizata in aplicatie pentru a stoca si gestiona datele despre locatiile de evenimente. MongoDB a fost ales datorita scalabilitatii si flexibilitatii sale, care permite utilizatorilor sa adauge si sa modifice datele fara a fi necesara o schema rigida.
MongoDB Compass este un GUI (Graphical User Interface) pentru MongoDB, care ofera o interfata vizuala pentru administrarea bazei de date. Acesta este util pentru a vizualiza datele din baza de date si pentru a gestiona colectiile si indexurile.
Vercel este o platforma de gazduire a aplicatiilor web care faciliteaza implementarea si scalarea aplicatiilor. A fost aleasa datorita usurintei de utilizare si performantei excelente si este utilizată pentru a publica aplicația online și a o face accesibilă utilizatorilor.

Aplicație

NuntApp-etit este o aplicație web care vine în ajutorul cuplurilor care își doresc să-și organizeze nunta sau alt eveniment important din viața lor. Aceasta are două pagini principale: pagina de afișare a locațiilor disponibile și pagina de inserare a unei noi locații.
Pe prima pagină a aplicației sunt afișate mai multe locații disponibile pentru organizarea nunții, fiecare locație fiind prezentată cu un titlu, o descriere, o imagine și alte informații relevante pentru organizarea unui eveniment de acest gen. De asemenea, fiecare locație este dotată cu două butoane: un buton de detalii și un buton de ștergere. Butoanele sunt concepute astfel încât să ajute utilizatorii să interacționeze cu locațiile în mod intuitiv și facil.

Dacă utilizatorul dorește să afle mai multe informații despre o anumită locație, poate apăsa butonul de detalii, iar aplicația îl va redirecționa către site-ul de unde au fost extrase toate locațiile existente în baza mea de date, unde sunt afișate mai multe informații despre locația respectivă, precum și o galerie de imagini. Această pagină este concepută astfel încât utilizatorul să poată lua o decizie mai informată în ceea ce privește alegerea locației pentru nunta lor.

În cazul în care utilizatorul dorește să adauge o locație pentru a ajuta alți utilizatori în găsirea unei locații potrivite, acesta poate folosi butonul "Adaugă locație" pentru a naviga către a doua pagină a aplicației. Pe această pagină se află un formular de inserare a unei noi locații, cu toate câmpurile necesare pentru a introduce informațiile despre locația nouă, precum titlu, descriere, capacitate, contact și link-ul către pagina oficială a locației. După ce utilizatorul completează toate câmpurile și apasă butonul de submit, aplicația va adăuga automat noua locație în baza de date și va redirecționa utilizatorul către pagina de afișare a locațiilor disponibile, unde va putea vedea și locația nouă adăugată în listă. Câmpul pentru inserarea unei imagini reprezintă un string în care se afla adresa URL a fotografiei, iar câmpul Detalii reprezintă un link de redirecționare către pagina oficială a locației.

NuntApp-etit este o aplicație intuitivă și ușor de folosit, concepută pentru a ajuta cuplurile să-și organizeze nunta într-un mod simplu și eficient.

Referințe

• https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing
• https://chrome.google.com/webstore/detail/vercel-deploy/nkignhibadhmcbiiilleogljodcaonjk?hl=ro
• https://nextjs.org/
• https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop
• https://www.techtarget.com/searchdatamanagement/definition/MongoDB
• https://react.dev/
• https://kinsta.com/knowledgebase/what-is-github/
• https://tailwindcss.com/
• https://aws.amazon.com/types-of-cloud-computing/

stoicasimona19
dIl2qOEEPLnUFRqd
