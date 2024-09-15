export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswers: number[];
}

export const webQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "Wie können Sie am einfachsten Informationen von einer Funktionskomponente zu ihren Kindern (die ebenfalls Funktionskomponente sind) übermitteln?",
    options: [
      "Über Props der Kinder-Funktionskomponente",
      "Über den useEffect-Hook",
      "Über den useContext-Hook",
      "Über States der Kinder-Funktionskomponente",
    ],
    correctAnswers: [0],
  },
  {
    id: 2,
    text: "Sie erstellen mehrere Tests mit Jest, die alle das gleiche Test-Setup (also etwa Daten in der Datenbank) benötigen. Wie würden Sie des am besten umsetzen?",
    options: [
      "Das Setup wird in eine Funktion mit Annotation '@BeforeEach' ausgelagert. Diese wird automatisch aufgerufen.",
      "Die Tests werden zu einem Test zusammengefasst, der das Setup enthält.",
      "Das Setup wird in eine Funktion ausgelagert, die von allen Tests zu beginn aufgerufen wird.",
      "Das Setup wird in einer Funktion 'beforeEach” ausgelagert. Diese wird automatisch aufgerufen.",
    ],
    correctAnswers: [3],
  },
  {
    id: 3,
    text: "Wie heißt das Modell, in dem wir modellieren, welche Daten in unserem System aus fachlicher Sicht vorkommen?",
    options: [
      "Anwendungsfall-Modell",
      "Komponenten-Modell",
      "Domänenklassen-Modell",
      "Aktivitäts-Modell",
    ],
    correctAnswers: [2],
  },
  {
    id: 4,
    text: "SOP ist ein Sicherheitsfeature welcher Komponente?",
    options: [
      "Server (Express)",
      "Browser",
      "Frontend (React)",
      "Server (Node.js)",
    ],
    correctAnswers: [1],
  },
  {
    id: 5,
    text: "Im HTTP-Request können Informationen an unterschiedlicher Stelle enthalten sein. Wo können Sie diese im Request finden?",
    options: [
      "Im Status-Code",
      "In der URI",
      "Im Header",
      "Im Body",
      "In den Argumenten",
    ],
    correctAnswers: [1, 2, 3],
  },
  {
    id: 6,
    text: "Welche Arten von React-Komponenten gibt es aus technischer Sicht?",
    options: [
      "Stateful Components",
      "Class Components",
      "Container Components",
      "Higher Order Components",
      "Functional Components",
      "Smart Components",
      "Presentational Components",
    ],
    correctAnswers: [1, 4],
  },
  {
    id: 7,
    text: 'Gegeben sei folgender Code: \nconst router = express.Router(); \nrouter.get("\b", myFunc); app-use("/a", router); \nWelche URL (mit Host "host", Protokoll "http" und ohne weitere Portangabe) ruft myrunc auf?',
    options: [
      "http://host/b",
      "http://host/a",
      "http://host/a/b",
      "http://host",
    ],
    correctAnswers: [2],
  },
  {
    id: 8,
    text: "Wozu dient die Entitäts-Komponente des Backends?",
    options: [
      "Sie ist im Grunde die Umsetzung der Domänenklassen und ist u.a. für die Persistierung zuständig.",
      "In ihr wird das Verhalten des Systems modelliert.",
      "Sie ist für die Kommunikation zwischen einem System und der Außenwelt zuständig.",
      "Sie modelliert die Akteure (Entitäten) der Anwendung.",
    ],
    correctAnswers: [0],
  },
  {
    id: 9,
    text: "Mit welcher API kann im Browser mit JavaScript asynchron mit einem Server kommuniziert werden?",
    options: ["Fetch", "React", "Bootstrap", "Express", "Router"],
    correctAnswers: [0],
  },
  {
    id: 10,
    text: "Welche Alternativen gibt es zu REST APIs?",
    options: [
      "Query-Based APIs (z.B. mit GraphQL)",
      "Service-Orientierte APIs (SOAP)",
      "Event-Orientierte APIs (z.B. mit Kafka)",
      "Remote-Procedure-Calls basierte APIs",
    ],
    correctAnswers: [0, 3],
  },
  {
    id: 11,
    text: "Sie sollen Formulardaten mittels HTML und CSS validieren. Was müssen Sie in React beachten?",
    options: [
      "Sie müssen eine Controlled-Component und den useRef-Hook verwenden.",
      "Sie müssen eine Uncontrolled-Component und den useControl-Hook verwenden.",
      "Sie müssen eine Controlled-Component und den useControl-Hook verwenden.",
      "Sie müssen eine Uncontrolled-Component und den useRef-Hook verwenden.",
    ],
    correctAnswers: [3],
  },
  {
    id: 12,
    text: 'Gegeben sei folgende React-Funktionskomponente: \nexport function Conp() {\nconst [main, setMain] = React.useState({content: "not loaded"});\nconst load = asyne () => {\nconst main = auait loadMainbata();\nsetMain(main);\n}\nreturn <div><p>{main.content}</p><p onClick-{load}>Load</p></div>\n}',
    options: [
      "Es ist alles in Ordnung.",
      "Event-Handler müssen mit addEventListener registriert werden.",
      "useState ist hier falsch, stattdessen müsste useContext verwendet werden.",
      "In der Funktion wird asynchroner Code verwendet, hier müsste man useEffect verwenden.",
      "Es werden keine Props definiert, insbesondere main wird nicht als Prop definiert.",
    ],
    correctAnswers: [0],
  },
  {
    id: 13,
    text: "Was ist daran problemtisch, wenn man Datenbankabfragen (egal ob NOSQL oder SL) einfach mit String-Konkatenation zusammenbau, also etwa const query = “select * from students uhere name=${name}“ ;",
    options: [
      "Es ist anfällig für Denial-of-Service-Attacken.",
      "Es ist anfällig für Cross-Origin-Resource-Sharing.",
      "Es ist anfällig für Cross-Site-Scripting (XSS).",
      "Es ist anfällig für Cross-Site-Request-Forgery.",
      "Es ist anfällig für (NO)SQL-Injection.",
    ],
    correctAnswers: [4],
  },
  {
    id: 14,
    text: "Welches Framework in JavaScript kann zur Umsetzung der Entitäts-Komponente (im Backend) eingesetzt werden?",
    options: ["Spring", "React", "Express", "Mongoose"],
    correctAnswers: [3],
  },
  {
    id: 15,
    text: "In einer relationalen Datenbank spricht man von Tabellen (Tables). Was ist das Pendant in MongoDB?",
    options: [
      "Objekte (Objects)",
      "Sammlungen (Collections)",
      "Dokumente (Documents)",
      "Felder (Fields)",
    ],
    correctAnswers: [1],
  },
  {
    id: 16,
    text: "Wofür steht das 'C' in der Abkürzung CIA im Zusammenhang mit der Sicherheit von Webanwendungen?",
    options: ["Confidentiality", "Control", "Configuration", "Compliance"],
    correctAnswers: [0],
  },
  {
    id: 17,
    text: "Welche der folgenden Verfahren bilden eine Zwei-Faktor-Authentifizierung?",
    options: [
      "Passwort und PIN",
      "Passwort und Mobile TAN (die ans Handy geschickt wird)",
      "Karte (mit Chip) und Mobile TAN",
      "Passwort und Fingerabdruck",
      "Passwort und Sicherheitsabfrage",
    ],
    correctAnswers: [1, 3],
  },

  {
    id: 18,
    text: "Was ist ein HTTP-Statuscode?",
    options: [
      "Ein HTTP-Statuscode ist eine Zahl, die den Status einer HTTP-Anfrage beschreibt und deren Bedeutung in der HTTP-Spezifikation beschrieben ist.",
      "Ein HTTP-Statuscode ist eine Zahl, die den Status einer HTTP-Anfrage beschreibt. Die Bedeutung der Zahl muss in der API-Dokumentation beschrieben werden.",
      "Ein HTTP-Statuscode ist eine Zahl, die den Status einer HTTP-Anfrage beschreibt und zusätzlich eine kurze Beschreibung mit der Bedeutung des Status enthält.",
    ],
    correctAnswers: [0],
  },
  {
    id: 19,
    text: 'Sie sehen im Frontend-Code folgenden Import:\nimport "./App.css"\nWelche Aussage ist richtig?',
    options: [
      "Ein CSS kann nicht in JavaScript mit import eingebunden werden, es wird ein Fehler geworfen.",
      "Das CSS wird vermutlich in der App-Komponente verwendet und das Projekt verwendet vermutlich React.",
      "In JavaScript können CSS-Dateien wie andere Module importiert werden.",
      "Das CSS wird vermutlich in der App-Komponente verwendet und das Projekt verwendet vermutlich Babel.",
      "Das CSS wird vermutlich in der App-Komponente verwendet und das Projekt verwendet vermutlich Webpack.",
    ],
    correctAnswers: [4],
  },
  {
    id: 20,
    text: "Wo ist geregelt, dass man personenbezogene Daten vor falschem Zugriff nach Stand der Technik angemessen schützen muss?",
    options: ["DSGVO", "RSPO", "ISO 27000", "StGB"],
    correctAnswers: [0],
  },
  {
    id: 21,
    text: "Was bedeutet der HTTP-Response Status-Code 200?",
    options: [
      "Die Anfrage wurde erfolgreich bearbeitet, die Antwort enthält aber keinen Inhalt (Content).",
      "Interner Serverfehler (Internal Server Error).",
      "Die angefragte Resource gibt es nicht.",
      "Die Resource wurde erfolgreich angelegt.",
      "Anfrage wird nicht unterstützt (Not Implemented).",
      "OK, Anfrage wurde erfolgreich bearbeitet.",
      "Der Client ist nicht berechtigt, die Aktion auszuführen (Unauthorized).",
      "Die Anfrage ist fehlerhaft (Bad Request).",
    ],
    correctAnswers: [5],
  },
  {
    id: 22,
    text: "Was ist Mongoose?",
    options: [
      "eine SQL-Datenbank",
      "eine Objekt-Datenbank",
      "eine Dokument-Datenbank",
      "ein Object-Document-Mapper",
      "ein Object-Relational-Mapper",
      "eine Graph-Datenbank",
    ],
    correctAnswers: [3],
  },
  {
    id: 23,
    text: "Wie kann man das Problem von SOP und CORS architektorseiti sinnvoll lösen?",
    options: [
      "Der Frontend-Server, der den Frontend-Code (HTML etc.) ausliefert, und das Backend müssen auf der gleichen Maschine (also mit gleiher IP-Adresse) laufen.",
      "Es wird ein Gateway eingesetzt, dass alle Anfragen entgegennimmt weiterverteilt.",
      "Wir konfigurieren das Backend so, dass es Anfragen von allen anderen Domains akzeptiert.",
      "Der Frontend-Server, der den Frontend-Code (HTML etc.) ausliefert, wird als Proxy eingesetzt und leitet bestimmte Anfragen an das eigentliche Backend weiter.",
      "Wir setzen eine Microservice-Architektur ein, bei dieser tritt das Problem nicht auf.",
    ],
    correctAnswers: [1, 3],
  },
  {
    id: 24,
    text: "Was bedeutet der HTTP-Response Status-Code 404?",
    options: [
      "Anfrage wird nicht unterstützt (Not Implemented).",
      "Der Client ist nicht berechtigt, die Aktion auszuführen (Unauthorized).",
      "Interner Serverfehler (Internal Server Error).",
      "Die angefragte Resource gibt es nicht.",
      "Die Anfrage ist fehlerhaft (Bad Request).",
      "OK, Anfrage wurde erfolgreich bearbeitet.",
      "Die Resource wurde erfolgreich angelegt.",
      "Die Anfrage wurde erfolgreich bearbeitet, die Antwort enthält aber keinen Inhalt (Content).",
    ],
    correctAnswers: [3],
  },
  {
    id: 25,
    text: "Was für eine Art von Datenbank ist MongoDB?",
    options: [
      "MongoDB ist eine Objekt-Datenbank.",
      "MongoDB ist eine Graph-Datenbank.",
      "MongoDB ist eine relationale Datenbank.",
      "MongoDB ist eine dokumenten-orientierte Datenbank.",
    ],
    correctAnswers: [3],
  },
  {
    id: 26,
    text: "Ordnen Sie die Erklärungen richtig zu: Authorization, Authentication",
    options: [
      "Authorization — Einräumung von Rechten, inklusive der Gewährung von Zugriff aufgrund von Zugriffsrechten.",
      "Authentication — Verifizierung der behaupteten Identität einer Entität.",
    ],
    correctAnswers: [0, 1],
  },
  {
    id: 27,
    text: "Welche Angriffsarten adressiert die Sanitisierung von Daten?",
    options: [
      "SQL-Injection",
      "Cross-Site-Scripting",
      "(Distributed) Denial of Service",
    ],
    correctAnswers: [0, 1],
  },
  {
    id: 28,
    text: "Wofür steht das 'A' in der Abkürzung CIA im Zusammenhang mit der Sicherheit von Webanwendungen?",
    options: ["Availability", "Authentication", "Authorization", "Access"],
    correctAnswers: [0],
  },
  {
    id: 29,
    text: "Was bedeutet das Schutzziel Availability?",
    options: [
      "Nur Personen (oder andere Systeme), die berechtigt sind, dürfen Daten lesen.",
      "Personen (oder andere Systeme), die berechtigt sind, können Daten lesen oder schreiben.",
      "Nur Personen (oder andere Systeme), die berechtigt sind, dürfen Daten schreiben.",
    ],
    correctAnswers: [1],
  },
  {
    id: 30,
    text: "Gegeben sei folgender Code:\nimport {Schema, model, Types} from 'mongoose'\nconst TeamSchema = new Schema({\nname: String,\ncaptain: { type: Schema.Types.ObjectId, ref: 'Player' }\n});\n\nexport const Team = model('Team', TeamSchema);\nWelche Aussagen sind korrekt?",
    options: [
      "Man kann ein neues Teams mit Team({name: 'Hallo'}) anlegen.",
      "Man kann ein neues Teams mit Team.create({ name: 'Hallo'}) anlegen.",
      "Wenn man ein neues Team mit new Team({name: 'Hallo', captain: Ahab}) anlegt, prüft Mongoose automatisch, ob ein Eintrag in der Collection 'players' existiert.",
      "Beim Anlegen eines neuen Teams muss ein Wert für captain angegeben werden.",
    ],
    correctAnswers: [1],
  },
  {
    id: 31,
    text: "Was ist die wichtigste Ergänzung von Mongoose bezüglich MongoDB?",
    options: [
      "Bei Mongoose können wir Daten hierarchisch definieren.",
      "Bei Mongoose können wir Indizes definieren.",
      "Bei Mongoose können wir Fremdschlüssel definieren.",
      "Bei Mongoose können wir ein Schema definieren.",
    ],
    correctAnswers: [3],
  },
  {
    id: 32,
    text: "Das Frontend schickt Daten im Request-Body an das mit Express geschrieben Backend. Obwohl die Daten richtig verschickt werden, können Sie nicht über 'request.body' darauf zugreifen. Woran könnte das liegen?",
    options: [
      "Sie haben die Middleware express.raw() nicht eingebunden.",
      "Sie haben die Middleware express.json() nicht eingebunden.",
      "Sie haben die Middleware express.text() nicht eingebunden.",
      "Sie haben die Middleware express.urlencoded() nicht eingebunden.",
    ],
    correctAnswers: [1],
  },
  {
    id: 33,
    text: "Sie haben im Frontend ein Formular umgesetzt:\n<form action='login' method='post'>\n<label for='userid'>EMail:</label>\n<input type='text' name='email' id='email'><br />\n<label for='password'>Passwort:</label>\n<input type='password' name='password' id='password'><br />\n<input type='submit' value='Login via POST'>\n</form>\nWelche Aussagen sind korrekt?",
    options: [
      "Damit man darauf sinnvoll zugreifen können, muss die Middleware urlencoded installiert ist.",
      "Die Daten befinden sich in der Request-Query.",
      "Die Daten befinden sich im Request-Parameter.",
      "Damit man darauf sinnvoll zugreifen können, muss die Middleware cookie-parser installiert ist.",
      "Die Daten befinden sich im Request-Body.",
    ],
    correctAnswers: [0, 4],
  },
  {
    id: 34,
    text: "Welche Aspekte können Sie sinnvollerweise in einer Security-Pipeline mit Middlewares im Express-Backend adressieren?",
    options: [
      "Hashing",
      "Authentifizierung",
      "Datenbankabfragen",
      "Autorisierung",
      "Rate-Limiting",
      "Cookie-Verwaltung",
      "Logging",
      "Penetrationstests",
      "Code-Reviews",
      "Verschlüsselung",
    ],
    correctAnswers: [1, 3, 4, 6],
  },
  {
    id: 35,
    text: "Wozu dient die Kontroll-Komponente des Backends?",
    options: [
      "Sie ist für die Kommunikation zwischen einem System und der Außenwelt zuständig.",
      "Sie validiert (kontrollieren) die Daten, die eingegeben werden.",
      "In ihr wird das Verhalten des Systems modelliert.",
      "Sie modelliert die Akteure (Kontrolleure) der Anwendung.",
    ],
    correctAnswers: [2],
  },
  {
    id: 36,
    text: "Was bedeutet der HTTP-Response Status-Code 204?",
    options: [
      "Die Anfrage wurde erfolgreich bearbeitet, die Antwort enthält aber keinen Inhalt (Content).",
      "Die Resource wurde erfolgreich angelegt.",
      "Interner Serverfehler (Internal Server Error).",
      "Die Anfrage ist fehlerhaft (Bad Request).",
      "Anfrage wird nicht unterstützt (Not Implemented).",
      "Der Client ist nicht berechtigt, die Aktion auszuführen (Unauthorized).",
      "Die angefragte Resource gibt es nicht.",
      "OK, Anfrage wurde erfolgreich bearbeitet.",
    ],
    correctAnswers: [0],
  },

  {
    id: 37,
    text: 'Sie sehen in einer ts-Datei den folgenden Code:\nimport "./style.css";\nWas bewirkt dieser Code?',
    options: [
      "Die Datei wird nicht wirklich importiert, sondern nur von Webpack verarbeitet.",
      "Die Datei wird importiert, d.h. der TypeScript-Compiler prüft, ob die CSS-Datei korrekt ist.",
      "Die Datei wird importiert, so dass wir in TypeScript direkt auf die darin befindelichen RuleSets zugreifen können.",
    ],
    correctAnswers: [0],
  },
  {
    id: 38,
    text: "Wie heißt die Architektur (bzw. das Architekturmuster) des Backends?",
    options: [
      "Schichtenarchitektur",
      "Middleware-Architektur",
      "Pipe-And-Filter-Architektur",
      "MVC-Architektur",
    ],
    correctAnswers: [0],
  },
  {
    id: 39,
    text: "Welche Eigenschaft ist für eine Hashing-Funktion für kryptographische Anwendungen beim Signieren von Public-Keys im Allgemeinen relevant?",
    options: [
      "Sie darf nicht viel Speicher verbrauchen.",
      "Sie muss besonders schnell sein.",
      "Sie muss kollisionsfrei sein.",
      "Sie muss kollisionsresistent sein.",
    ],
    correctAnswers: [3],
  },
  {
    id: 40,
    text: "In einer relationalen Datenbank spricht man von Spalten (Columns). Was ist das Pendant (die Entsprechung) in MongoDB?",
    options: [
      "Sammlungen (Collections)",
      "Zeilen (Rows)",
      "Pfade (Paths)",
      "Tabellen (Tables)",
      "Dokumente (Documents)",
      "Objekte (Objects)",
      "Graphen (Graphs)",
      "Spalten (Columns)",
      "Felder (Fields)",
    ],
    correctAnswers: [2],
  },
  {
    id: 41,
    text: "Ist ein JWT genauso sicherheitskritisch wie ein Passwort und warum?",
    options: [
      "Nein, da es ja nur ein JSON-Objekt ist und verschlüsselt ist.",
      "Nein, da man mit dem JWT selbst nichts anfangen kann.",
      "Ja, weil es ja das Passwort enhält.",
      "Ja, da es das Passwort ersetzt.",
    ],
    correctAnswers: [3],
  },
  {
    id: 42,
    text: "Welchen HTTP-Statuscode würden Sie beim Aufruf eines Backends erwarten, wenn ein interner Serverfehler auftritt?",
    options: ["500", "400", "200", "404"],
    correctAnswers: [0],
  },
  {
    id: 43,
    text: "Welchen Hook verwenden Sie in React, wenn Sie innerhalb einer Komponente veränderliche Daten speichern wollen?",
    options: ["useContext", "useParam", "useEffect", "useState"],
    correctAnswers: [3],
  },
  {
    id: 44,
    text: "Wie können Sie am einfachsten Informationen von einer Funktionskomponente zu ihren Kindern (die ebenfalls Funktionskomponente sind) übermitteln?",
    options: [
      "Über den useContext-Hook",
      "Über den useEffect-Hook",
      "Über Props der Kinder-Funktionskomponente.",
      "Über States der Kinder-Funktionskomponente.",
    ],
    correctAnswers: [2],
  },
  {
    id: 45,
    text: "Mit welcher Prop registrieren Sie eine Validierungsfunktion einer Controlled-Component, wenn Sie bei jedem Tastendruck eine Validierung durchführen wollen?",
    options: ["onInput", "onSubmit", "onChange", "onBlur"],
    correctAnswers: [2],
  },
  {
    id: 46,
    text: "Geben Sie an, wie die Lebensdauer von Daten ist, wenn man sie in dem angegebenen Ort im Browser speichert.",
    options: [
      "Session Storage: Flüchtig, überlebt Reload nicht",
      "Speicher (als Variable): überlebt Reload",
      "Local Storage: überlebt Restart",
      "Cookie: überlebt Restart",
    ],
    correctAnswers: [0, 2, 3],
  },
  {
    id: 47,
    text: "Was macht die Methode verify der JavaScript-Bibliothek jsonwebtoken?",
    options: [
      "Sie entschlüsselt und verifiziert ein JSON-Objekt.",
      "Sie wandelt einen String in ein JSON-Objekt und erzeugt einen Hashcode, der mit Teilen des Eingabestrings (Signatur) übereinstimmen muss.",
      "Sie entschlüsselt ein Base64-codierte Binärdatei und erzeugt daraus ein JSON-Objekt.",
    ],
    correctAnswers: [1],
  },
  {
    id: 48,
    text: "Was bedeutet der HTTP-Response Status-Code 401?",
    options: [
      "Anfrage wird nicht unterstützt (Not Implemented).",
      "Die Anfrage ist fehlerhaft (Bad Request).",
      "OK, Anfrage wurde erfolgreich bearbeitet.",
      "Interner Serverfehler (Internal Server Error).",
      "Die angefragte Resource gibt es nicht.",
      "Der Client ist nicht berechtigt, die Aktion auszuführen (Unauthorized).",
      "Die Resource wurde erfolgreich angelegt.",
      "Die Anfrage wurde erfolgreich bearbeitet, die Antwort enthält aber keinen Inhalt (Content).",
    ],
    correctAnswers: [5],
  },
  {
    id: 49,
    text: "Was ist eine Ressource im Kontext von REST?",
    options: [
      "Eine Ressource ist eine Entität aus dem Entitäts- bzw. Domänenklassenmodell.",
      "Eine Ressource ist ein JSON-Objekt, das von einer URI identifiziert werden kann.",
      "Eine Ressource ist eine abstrakte Entität, die von einer URI identifiziert werden kann.",
      "Eine Ressource ist ein HTML-Objekt, das von einer URI identifiziert werden kann.",
    ],
    correctAnswers: [2],
  },
  {
    id: 50,
    text: "Sie sind Hacker und haben ein JWT abgefangen. Wie kommen Sie an den Inhalt?",
    options: [
      "Gar nicht, dafür brauche ich das Secret.",
      "Ich kann das JWT mit einem Online-Decoder entschlüsseln.",
      "Ich kann das JWT einfach mit einem Base64 in Text umwandeln.",
    ],
    correctAnswers: [2],
  },
  {
    id: 51,
    text: "Welche Eigenschaft ist für eine Hashing-Funktion für kryptographische Anwendungen beim Signieren von Public-Keys im Allgemeinen relevant?",
    options: [
      "Sie muss besonders schnell sein.",
      "Sie muss kollisionsfrei sein.",
      "Sie darf nicht viel Speicher verbrauchen.",
      "Sie muss kollisionsresistent sein.",
    ],
    correctAnswers: [3],
  },
  {
    id: 52,
    text: 'Sie sehen im Frontend-Code folgenden Import:\nimport "./App.css"\nWelche Aussage ist richtig?',
    options: [
      "Das CSS wird in der App-Komponente verwendet und das Projekt verwendet vermutlich Webpack.",
      "Ein CSS kann nicht in JavaScript mit import eingebunden werden, es wird ein Fehler geworfen.",
      "Das CSS wird in der App-Komponente verwendet und das Projekt verwendet vermutlich Babel.",
      "Das CSS wird in der App-Komponente verwendet und das Projekt verwendet vermutlich React.",
      "In JavaScript können CSS-Dateien wie andere Module importiert werden.",
    ],
    correctAnswers: [0],
  },
  {
    id: 53,
    text: "Gegeben sei folgender Code:\nimport { Schema, model, Types } from 'mongoose'\nconst TeamSchema = new Schema({\nname: String,\ncaptain: { type: Schema.Types.ObjectId, ref: 'Player' }\n});\n\nexport const Team = model('Team', TeamSchema);\nWelche Aussagen sind korrekt?",
    options: [
      "Man kann ein neues Teams mit Team({name: 'Hallo'}) anlegen.",
      "Man kann ein neues Teams mit Team.create({ name: 'Hallo'}) anlegen.",
      "Wenn man ein neues Team mit new Team({name: 'Hallo', captain: Ahab}) anlegt, prüft Mongoose automatisch, ob ein Eintrag in der Collection 'players' existiert.",
      "Beim Anlegen eines neuen Teams muss ein Wert für captain angegeben werden.",
    ],
    correctAnswers: [1],
  },
  {
    id: 54,
    text: "Was macht die Methode sign der JavaScript-Bibliothek jsonwebtoken?",
    options: [
      "Sie verschlüsselt und signiert ein JSON-Objekt.",
      "Sie verschlüsselt ein JSON-Objekt als Base64-codierte Binärdatei.",
      "Sie wandelt ein JSON-Objekt in einen String um und hängt einen Hashcode an.",
    ],
    correctAnswers: [2],
  },
  {
    id: 55,
    text: "Welchen HTTP-Statuscode würden Sie beim Aufruf eines Backends erwarten, wenn die Eingabe fehlerhaft ist?",
    options: ["200", "400", "401", "404", "500"],
    correctAnswers: [1],
  },
  {
    id: 56,
    text: "Wofür steht das 'A' in der Abkürzung CIA im Zusammenhang mit der Sicherheit von Webanwendungen?",
    options: ["Availability", "Authentication", "Authorization", "Access"],
    correctAnswers: [0],
  },
  {
    id: 57,
    text: 'Gegeben sei folgende React-Funktionskomponente:\nexport async function Comp() {\nconst [main, setMain] = React.useState({content: "not loaded"});\nconst load = async () => {\nconst main = await loadMainData();\nsetMain(main);\n}\nreturn <div><p>{main.content}</p><p onClick={load}>Load</p></div>\n}\nWas ist das (Haupt-)Problem?',
    options: [
      "Die Funktion darf nicht asynchron sein.",
      "Es findet keine Fehlerbehandlung statt.",
      "Main könnte undefined sein.",
    ],
    correctAnswers: [0],
  },
  {
    id: 58,
    text: "Welchen Hook verwenden Sie in React, wenn Sie innerhalb einer Komponente veränderliche Daten speichern wollen?",
    options: ["useContext", "useParam", "useEffect", "useState"],
    correctAnswers: [3],
  },
  {
    id: 59,
    text: "Was ist an folgender Middleware problematisch?\nexport async function requiresAuthentication(req, res, next) {\nconst jwtString = req.cookies?.access_token;\nreq.userId = verifyJwt(jwtString)\n}",
    options: [
      "Es fehlt allgemein der Aufruf von send, so dass die Code wirkungslos ist.",
      "Der Statuscode wird im Fehlerfall nicht zurückgegeben, da res fehlt.",
      "Sie setzt den HTTP-Statuscode auf 401, wenn der JWT ungültig ist oder fehlt.",
      "Bei next wird ein Fehler weitergegeben, das ist nicht möglich. Stattdessen muss throw verwendet werden.",
      "Es fehlt der Aufruf der nächsten Middleware, falls die Authentifizierung erfolgreich war.",
    ],
    correctAnswers: [4],
  },
  {
    id: 60,
    text: "Mit welcher Prop registrieren Sie eine Validierungsfunktion einer Controlled-Component, wenn Sie bei jedem Tastendruck eine Validierung durchführen wollen?",
    options: ["onInput", "onSubmit", "onChange", "onBlur"],
    correctAnswers: [2],
  },
  {
    id: 61,
    text: "Wozu dienen die Boundary Classes?",
    options: [
      "Sie sind für die Kommunikation zwischen einem System und der Außenwelt zuständig.",
      "Sie sind für die Kommunikation zwischen einem System und der Datenbank zuständig.",
      "Sie validieren die Daten, d.h. sie prüfen, dass bestimmte Grenzen (Boundaries) eingehalten werden.",
      "Sie modellieren die Domänklassen und sind u.a. für die Persistierung zuständig.",
      "Sie stellen sicher, dass bestimmte Grenzen (Boundaries) eingehalten werden.",
    ],
    correctAnswers: [0],
  },
  {
    id: 62,
    text: "Wie wird eine Resource im Kontext von REST dargestellt?",
    options: [
      "Eine Resource wird als XML-Objekt dargestellt.",
      "Eine Resource kann verschiedene Repräsentationen haben.",
      "Eine Resource wird als HTML-Objekt dargestellt.",
      "Eine Resource wird als JSON-Objekt dargestellt.",
    ],
    correctAnswers: [1],
  },
  {
    id: 63,
    text: "Was ist die Single Origin Policy?",
    options: [
      "Sie ist ein Sicherheitsmechanismus des Servers, der verhindert, dass ein Skript auf eine andere Origin zugreift als die, von der es geladen wurde.",
      "Sie ist ein Sicherheitsmechanismus des Browsers, der verhindert, dass ein Skript auf eine andere Origin zugreift als die, von der es geladen wurde.",
    ],
    correctAnswers: [1],
  },
  {
    id: 64,
    text: 'Sie haben im Frontend ein Formular umgesetzt:\n<form action="login" method="post">\n<label for="userid">EMail:</label>\n<input type="text" name="email" id="email"><br />\n<label for="password">Passwort:</label>\n<input type="password" name="password" id="password"><br />\n<input type="submit" value="Login via POST">\n</form>\nWelche Aussagen sind korrekt?',
    options: [
      "Damit man darauf sinnvoll zugreifen können, muss die Middleware urlencoded installiert ist.",
      "Damit man darauf sinnvoll zugreifen können, muss die Middleware body-parser installiert ist.",
      "Die Daten befinden sich im Request-Body.",
      "Die Daten befinden sich im Request-Parameter.",
      "Die Daten befinden sich in der Request-Query.",
    ],
    correctAnswers: [0, 2],
  },
  {
    id: 65,
    text: "Welches Architekturmuster kommt beim Entwurf einer Backend-Komponente häufig zum Einsatz?",
    options: [
      "Pipe-and-Filter-Architektur",
      "Middleware-Architektur",
      "Schichtenarchitektur",
      "MVC-Architektur",
    ],
    correctAnswers: [2],
  },
  {
    id: 66,
    text: "Welches Framework in JavaScript kann man zur Umsetzung des Boundary-Layers der Backend-Komponente einsetzen?",
    options: ["Spring", "React", "Express", "Mongoose"],
    correctAnswers: [2],
  },
  {
    id: 67,
    text: "In einer relationalen Datenbank spricht man von Tabellen (Table). Was ist das Pendant (die Entsprechung) in MongoDB?",
    options: [
      "Sammlungen (Collections)",
      "Dokumente (Documents)",
      "Zeilen (Rows)",
      "Spalten (Columns)",
    ],
    correctAnswers: [0],
  },
  {
    id: 68,
    text: "In der HTTP-Response können Informationen an unterschiedlicher Stelle enthalten sein. Wo können Sie diese in der Response finden?",
    options: ["Im Body", "Im Header", "Im Status-Code"],
    correctAnswers: [0, 1],
  },
  {
    id: 69,
    text: "Was bedeutet der HTTP-Response Status-Code 400?",
    options: [
      "Die Anfrage ist fehlerhaft (Bad Request).",
      "OK, Anfrage wurde erfolgreich bearbeitet.",
      "Interner Serverfehler (Internal Server Error).",
      "Die angefragte Resource gibt es nicht.",
      "Der Client ist nicht berechtigt, die Aktion auszuführen (Unauthorized).",
      "Anfrage wird nicht unterstützt (Not Implemented).",
      "Die Resource wurde erfolgreich angelegt.",
      "Die Anfrage wurde erfolgreich bearbeitet, die Antwort enthält aber keinen Inhalt (Content).",
    ],
    correctAnswers: [0],
  },
  {
    id: 70,
    text: "Was ist ein Endpunkt im Kontext von REST?",
    options: [
      "Ein Endpunkt ist eine Kombination aus URI und HTTP-Methode.",
      "Ein Endpunkt ist eine Resource.",
      "Ein Endpunkt ist eine URI mit Angabe des Hosts.",
    ],
    correctAnswers: [0],
  },
  {
    id: 71,
    text: "Was ist ein Zertifikat im Sinne von OpenSSL?",
    options: [
      "Eine Datei, die einen privaten Schlüssel enthält.",
      "Eine Datei, die eine Signatur, einen öffentlichen und einen privaten Schlüssel enthält.",
      "Eine Datei, die eine Signatur enthält.",
      "Eine Datei, die eine Signatur und einen privaten Schlüssel enthält.",
      "Eine Datei, die eine Signatur und einen öffentlichen Schlüssel enthält.",
      "Eine Datei, die einen öffentlichen Schlüssel enthält.",
      "Eine Datei, die einen öffentlichen und einen privaten Schlüssel enthält.",
    ],
    correctAnswers: [4],
  },
  {
    id: 72,
    text: "Welche der folgenden Methoden sind gültige HTTP-Request-Methoden?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswers: [0, 1, 2, 3],
  },
  {
    id: 73,
    text: 'Gegeben sei folgender Code:\nconst router = express.Router();\nrouter.get("/a", myFunc)\napp.use("/b", router);\nWelche URL (mit Host "host", Protokoll "http" und ohne weitere Portangabe) ruft myFunc auf?',
    options: [
      "http://host/b",
      "http://host/a",
      "http://host/a/b",
      "http://host/b/a",
    ],
    correctAnswers: [3],
  },
  {
    id: 74,
    text: "In JavaScript gibt es ein bekanntes Muster, um benutzerdefinierte Funktionen nacheinander auszuführen. Wie heißt dieses Muster im JavaScript-Umfeld?",
    options: ["Chain of responsibility", "Middleware"],
    correctAnswers: [1],
  },
  {
    id: 75,
    text: "Sie sollen Formulardaten mittels HTML und CSS validieren. Was müssen Sie in React beachten?",
    options: [
      "Sie müssen eine Controlled-Component und den useRef-Hook verwenden.",
      "Sie müssen eine Uncontrolled-Component und den useRef-Hook verwenden.",
      "Sie müssen eine Controlled-Component und den useControl-Hook verwenden.",
      "Sie müssen eine Uncontrolled-Component und den useControl-Hook verwenden.",
    ],
    correctAnswers: [1],
  },
  {
    id: 76,
    text: "Welchen HTTP-Statuscode würden Sie beim Aufruf eines Backends erwarten, wenn ein interner Serverfehler auftritt?",
    options: ["500"],
    correctAnswers: [0],
  },
  {
    id: 77,
    text: "Welchen Hook verwenden Sie in React, wenn Sie innerhalb einer Komponente veränderliche Daten speichern wollen?",
    options: ["useContext", "useParam", "useEffect", "useState"],
    correctAnswers: [3],
  },
  {
    id: 78,
    text: "Wofür steht das 'A' in der Abkürzung CIA im Zusammenhang mit der Sicherheit von Webanwendungen?",
    options: ["Authentication", "Access", "Availability", "Authorization"],
    correctAnswers: [2],
  },
  {
    id: 79,
    text: "Gegeben sei folgender Code:\nfunction Bar() {\nreturn React.createElement('p', { id: 'par1' }, 'Hello')\n}\nÜbersetzen Sie diesen Code nach JSX.",
    options: ["function Bar() {\nreturn (\n<p id={'par1'}> Hello </p>\n)\n}"],
    correctAnswers: [0],
  },
  {
    id: 80,
    text: "Welche Eigenschaft ist für eine Hashing-Funktion für kryptographische Anwendungen beim Signieren von Public-Keys im Allgemeinen relevant?",
    options: [
      "Sie muss kollisionsresistent sein.",
      "Sie muss besonders schnell sein.",
      "Sie darf nicht viel Speicher verbrauchen.",
      "Sie muss kollisionsfrei sein.",
    ],
    correctAnswers: [0],
  },
  {
    id: 81,
    text: "In JavaScript gibt es ein bekanntes Muster, um benutzerdefinierte Funktionen nacheinander auszuführen. Wie heißt dieses Muster im JavaScript-Umfeld?",
    options: [
      "Express",
      "Middleware",
      "Chain of responsibility",
      "Strategy",
      "Pipeline",
    ],
    correctAnswers: [1],
  },
  {
    id: 82,
    text: "Sie sind Hacker und haben ein JWT abgefangen. Wie kommen Sie an den Inhalt?",
    options: [
      "Gar nicht, dafür bräuchte ich das Secret.",
      "Ich kann das JWT einfach mit einem Base64 in Text umwandeln.",
      "Ich kann das JWT mit einem Online-Decoder entschlüsseln.",
    ],
    correctAnswers: [1],
  },
  {
    id: 83,
    text: "Sie sollen Formulardaten mittels HTML und CSS validieren. Was müssen Sie in React beachten?",
    options: [
      "Sie müssen eine Uncontrolled-Component und den useRef-Hook verwenden.",
      "Sie müssen eine Controlled-Component und den useRef-Hook verwenden.",
      "Sie müssen eine Uncontrolled-Component und den useControl-Hook verwenden.",
      "Sie müssen eine Controlled-Component und den useControl-Hook verwenden.",
    ],
    correctAnswers: [0],
  },
  {
    id: 84,
    text: "Welches Architekturmuster kommt beim Entwurf einer Backend-Komponente häufig zum Einsatz?",
    options: [
      "Middleware-Architektur",
      "Pipe-And-Filter-Architektur",
      "Schichtenarchitektur",
    ],
    correctAnswers: [2],
  },
  {
    id: 85,
    text: "Wie können Sie am einfachsten Informationen von einer Funktionskomponente zu ihren Kindern (die ebenfalls Funktionskomponente sind) übermitteln?",
    options: [
      "Über den useContext-Hook",
      "Über den useEffect-Hook",
      "Über Props der Kinder-Funktionskomponente.",
      "Über States der Kinder-Funktionskomponente.",
    ],
    correctAnswers: [2],
  },
  {
    id: 86,
    text: "Welche Constraints (Beschränkungen) werden von REST gemacht?",
    options: [
      "Die Kommunikation zwischen den Komponenten muss verschlüsselt stattfinden.",
      "Komponenten sind in Layern organisiert. Ein Layer bietet dem darüber liegendem Layer Dienste an und verwendet die Dienste des darunterliegenden Layers.",
      "Es muss das HTTP-Protokoll verwendet werden.",
      "Der Client muss ein Web-Browser sein, der HTML darstellen kann.",
      "Jeder Request muss selbstbeschreibend sein, also ohne vorangegangene Requests verstanden werden.",
      "Die Anwendung besteht aus einem Client und einem Server.",
      "Die Schnittstelle zwischen den Komponenten muss einheitlich (uniform) gestaltet sein.",
      "Der Server muss zustandslos (stateless) sein.",
      "Daten in der Response müssen als 'cacheable' bzw. 'non-cacheable' gekennzeichnet werden können.",
      "Die Kommunikation zwischen den Komponenten muss synchron sein.",
    ],
    correctAnswers: [1, 4, 5, 6, 7, 8],
  },
  {
    id: 87,
    text: "Sie sehen im Frontend-Code folgenden Import:\nimport './App.css'\nWelche Aussage ist richtig?",
    options: [
      "Das CSS wird in der App-Komponente verwendet und das Projekt verwendet vermutlich Webpack.",
      "Das CSS wird in der App-Komponente verwendet und das Projekt verwendet vermutlich Babel.",
      "In JavaScript können CSS-Dateien wie andere Module importiert werden.",
      "Ein CSS kann nicht in JavaScript mit import eingebunden werden, es wird ein Fehler geworfen.",
      "Das CSS wird in der App-Komponente verwendet und das Projekt verwendet vermutlich React.",
    ],
    correctAnswers: [0],
  },
  {
    id: 88,
    text: "In einer relationalen Datenbank spricht man von Tabellen (Tables). Was ist das Pendant (die Entsprechung) in MongoDB?",
    options: [
      "Graphen (Graphs)",
      "Spalten (Columns)",
      "Felder (Fields)",
      "Objekte (Objects)",
      "Tabellen (Tables)",
      "Pfade (Paths)",
      "Zeilen (Rows)",
      "Sammlungen (Collections)",
      "Dokumente (Documents)",
    ],
    correctAnswers: [7],
  },
  {
    id: 89,
    text: "Gegeben sei folgender Code:\nimport {Schema, model, Types} from 'mongoose'\nconst TeamSchema = new Schema({\nname: String,\ncaptain: { type: Schema.Types.ObjectId, ref: 'Player' }\n});\nexport const Team = model('Team', TeamSchema);\nWelche Aussagen sind korrekt?",
    options: [
      "Man kann ein neues Teams mit Team.create({ name: 'Hallo'}) anlegen.",
      "Beim Anlegen eines neuen Teams muss ein Wert für captain angegeben werden.",
      "Wenn man ein neues Team mit new Team({name: 'Hallo', captain: Ahab}) anlegt, prüft Mongoose automatisch, ob Ahab ein Eintrag in der Collection Player ist.",
      "Man kann ein neues Teams mit TeamSchema.create({ name: 'Hallo'}) anlegen.",
    ],
    correctAnswers: [0],
  },
  {
    id: 90,
    text: "Welche Möglichkeiten gibt es, um einen Endpoint in Express zu definieren?",
    options: [
      "Man meldet eine Unterklasse von RequestHandler bei einem Router an.",
      "Man meldet eine Lambda bei einem Router an.",
      "Man meldet eine benannte Funktion an bei einem Router an.",
    ],
    correctAnswers: [1, 2],
  },
  {
    id: 91,
    text: "Was ist an folgender Middleware problematisch?\nexport async function requiresAuthentication(req, res, next) {\ntry {\nconst jwtString = req.header('Authorization').substring('Bearer '.length);\nreq.userId = verifyJWT(jwtString)\n} catch (err) {\nres.status(401);\n}\nnext()\n}",
    options: [
      "Sie setzt den HTTP-Statuscode auf 401, wenn der JWT ungültig ist oder fehlt.",
      "Der Statuscode wird im Fehlerfall nicht zurückgegeben, da send fehlt.",
      "Bei next wird im Fehlerfall der Fehler (err) nicht weitergegeben.",
      "Es fehlt der Aufruf der nächsten Middleware, falls die Authentifizierung erfolgreich war.",
      "Es fehlt allgemein der Aufruf von send, so dass die Code wirkungslos ist.",
    ],
    correctAnswers: [1, 2, 3],
  },
  {
    id: 92,
    text: "Welche der folgenden Methoden sind gültige HTTP-Request-Methoden?",
    options: [
      "READ",
      "UPDATE",
      "GET",
      "POST",
      "PUT",
      "WRITE",
      "DELETE",
      "INSERT",
    ],
    correctAnswers: [2, 3, 4, 6],
  },
  {
    id: 93,
    text: "Was ist ein Zertifikat im Sinne von OpenSSL?",
    options: [
      "Eine Datei, die einen öffentlichen Schlüssel enthält.",
      "Eine Datei, die einen privaten Schlüssel enthält.",
      "Eine Datei, die eine Signatur und einen privaten Schlüssel enthält.",
      "Eine Datei, die einen öffentlichen und einen privaten Schlüssel enthält.",
      "Eine Datei, die eine Signatur enthält.",
      "Eine Datei, die eine Signatur und einen öffentlichen Schlüssel enthält.",
      "Eine Datei, die eine Signatur, einen öffentlichen und einen privaten Schlüssel enthält.",
    ],
    correctAnswers: [5],
  },
  {
    id: 94,
    text: "Welches Framework in JavaScript kann man zur Umsetzung des Entitätslayers der Backend-komponente einsetzen?",
    options: ["React", "Mongoose", "Spring", "Express"],
    correctAnswers: [1],
  },
  {
    id: 95,
    text: "Mit welcher Prop registrieren Sie eine Validierungsfunktion einer Controlled-Component, wenn Sie bei jedem Tastendruck eine Validierung durchführen wollen?",
    options: ["onInput", "onSubmit", "onChange", "onBlur"],
    correctAnswers: [2],
  },
  {
    id: 96,
    text: "Geben Sie an, wie die Lebensdauer von Daten ist, wenn man sie in dem angegebenen Ort im Browser speichert.",
    options: [
      "Session Storage: Flüchtig, überlebt Reload nicht",
      "Speicher (als Variable): überlebt Reload",
      "Local Storage: überlebt Restart",
      "Cookie: überlebt Restart",
    ],
    correctAnswers: [0, 2, 3],
  },
  {
    id: 97,
    text: "In einer relationalen Datenbank spricht man von Spalten (Columns). Was ist das Pendant (die Entsprechung) in MongoDB?",
    options: [
      "Objekte (Objects)",
      "Zeilen (Rows)",
      "Tabellen (Tables)",
      "Pfade (Paths)",
      "Graphen (Graphs)",
      "Dokumente (Documents)",
      "Felder (Fields)",
      "Sammlungen (Collections)",
      "Spalten (Columns)",
    ],
    correctAnswers: [6],
  },
  {
    id: 98,
    text: "Was macht die Methode verify der JavaScript-Bibliothek jsonwebtoken?",
    options: [
      "Sie entschlüsselt und verifiziert ein JSON-Objekt.",
      "Sie wandelt einen String in ein JSON-Objekt und erzeugt einen Hashcode, der mit Teilen des Eingabestrings (Signatur) übereinstimmen muss.",
      "Sie entschlüsselt ein Base64-codierte Binärdatei und erzeugt daraus ein JSON-Objekt.",
    ],
    correctAnswers: [1],
  },
  {
    id: 99,
    text: "In der HTTP-Response können Informationen an unterschiedlicher Stelle enthalten sein. Wo können Sie diese in der Response finden?",
    options: [
      "Im Status-Code",
      "Im Header",
      "In den Argumenten",
      "In der URI",
      "Im Body",
    ],
    correctAnswers: [0, 1, 4],
  },
  {
    id: 100,
    text: "Gegeben sei folgender Code:\nconst router = express.Router();\nrouter.get('/a', myFunc)\napp.use('/b', router);\nWelche URL (mit Host 'host', Protokoll 'http' und ohne weitere Portangabe) ruft myFunc auf?",
    options: [
      "http://host/a/b",
      "http://host/b",
      "http://host/b/a",
      "http://host/a",
    ],
    correctAnswers: [2],
  },
  {
    id: 101,
    text: "Was bedeutet der HTTP-Response Status-Code 401?",
    options: [
      "Anfrage wird nicht unterstützt (Not Implemented).",
      "Die Anfrage ist fehlerhaft (Bad Request).",
      "OK, Anfrage wurde erfolgreich bearbeitet.",
      "Interner Serverfehler (Internal Server Error).",
      "Die angefragte Resource gibt es nicht.",
      "Der Client ist nicht berechtigt, die Aktion auszuführen (Unauthorized).",
      "Die Resource wurde erfolgreich angelegt.",
      "Die Anfrage wurde erfolgreich bearbeitet, die Antwort enthält aber keinen Inhalt (Content).",
    ],
    correctAnswers: [5],
  },

  {
    id: 102,
    text: 'Sie sehen in einer ts-Datei den folgenden Code:\nimport "./style.css";\nWas bewirkt dieser Code?',
    options: [
      "Die Datei wird nicht wirklich importiert, sondern nur von Webpack verarbeitet.",
      "Die Datei wird importiert, d.h. der TypeScript-Compiler prüft, ob die CSS-Datei korrekt ist.",
      "Die Datei wird importiert, so dass wir in TypeScript direkt auf die darin befindelichen RuleSets zugreifen können.",
    ],
    correctAnswers: [0],
  },

  {
    id: 103,
    text: "Welche Möglichkeiten gibt es, um einen Endpoint in Express zu definieren?",
    options: [
      "Man meldet eine Unterklasse von RequestHandler bei einem Router an.",
      "Man meldet eine Lambda bei einem Router an.",
      "Man meldet eine benannte Funktion an bei einem Router an.",
    ],
    correctAnswers: [1, 2],
  },
  {
    id: 104,
    text: "In einer relationalen Datenbank spricht man von Tabellen (Tables). Was ist das Pendant (die Entsprechung) in MongoDB?",
    options: [
      "Graphen (Graphs)",
      "Spalten (Columns)",
      "Felder (Fields)",
      "Objekte (Objects)",
      "Tabellen (Tables)",
      "Pfade (Paths)",
      "Zeilen (Rows)",
      "Sammlungen (Collections)",
      "Dokumente (Documents)",
    ],
    correctAnswers: [7],
  },
  {
    id: 115,
    text: "Welche Constraints (Beschränkungen) werden von REST gemacht?",
    options: [
      "Die Kommunikation zwischen den Komponenten muss verschlüsselt stattfinden.",
      "Komponenten sind in Layern organisiert. Ein Layer bietet dem darüber liegenden Layer Dienste an und verwendet die Dienste des darunterliegenden Layers.",
      "Es muss das HTTP-Protokoll verwendet werden.",
      "Der Client muss ein Web-Browser sein, der HTML darstellen kann.",
      "Jeder Request muss selbstbeschreibend sein, also ohne vorangegangene Requests verstanden werden.",
      "Die Anwendung besteht aus einem Client und einem Server.",
      "Die Schnittstelle zwischen den Komponenten muss einheitlich (uniform) gestaltet sein.",
      "Der Server muss zustandslos (stateless) sein.",
      'Daten in der Response müssen als "cacheable" bzw. "non-cacheable" gekennzeichnet werden können.',
      "Die Kommunikation zwischen den Komponenten muss synchron sein.",
    ],
    correctAnswers: [1, 4, 5, 6, 7, 8],
  },

  {
    id: 110,
    text: "In JavaScript gibt es ein bekanntes Muster, um benutzerdefinierte Funktionen nacheinander auszuführen. Wie heißt dieses Muster im JavaScript-Umfeld?",
    options: [
      "Express",
      "Middleware",
      "Chain of responsibility",
      "Strategy",
      "Pipeline",
    ],
    correctAnswers: [1],
  },
  {
    id: 1,
    text: "Vervollständigen Sie den Satz inhaltlich korrekt: Bei Web-Frameworks beschreibt serverseitig oder clientseitig, ...",
    options: [
      ".. wo die Anwendungssteuerung ist.",
      ".. wo das HTML-Rendering stattfindet.",
      ".. wo der Großteil des Codes ist.",
    ],
    correctAnswers: [0],
  },
  {
    id: 2,
    text: "Welche Aussage ist richtig über Single-Page-Applications (SPA)?",
    options: [
      "SPAs sind client-side Webanwendungen.",
      "SPAs werden vor allem für E-Business-Anwendungen eingesetzt.",
      "SPA steht für Single-Plattform Application.",
    ],
    correctAnswers: [0],
  },
  {
    id: 4,
    text: "Welche Aussage ist richtig über Zertifikate bei HTTPS?",
    options: [
      "HTTPS kann auch ohne ein Zertifikat genutzt werden.",
      "Zertifikate können nur von Zertifizierungsstellen erstellt werden.",
      "Selbst erstellte Zertifikate werden vom Browser als ungültig gekennzeichnet.",
    ],
    correctAnswers: [2],
  },
  {
    id: 5,
    text: "Welche Verschlüsselung verwendet HTTPS zuerst?",
    options: [
      "HTTPS verwendet zuerst die symmetrische, dann die asymmetrische Verschlüsselung.",
      "HTTPS verwendet zuerst die asymmetrische, dann die symmetrische Verschlüsselung.",
      "HTTPS verwendet nur eine symmetrische Verschlüsselung.",
    ],
    correctAnswers: [1],
  },
  {
    id: 6,
    text: "Konfigurationsmanagement: Welche Aussage ist richtig?",
    options: [
      "Es sollten Konstanten in die Konfigurationsdatei ausgelagert werden.",
      "Es sollten Passwörter in der Konfigurationsdatei ausgelagert werden.",
      "Es sollten notwendige Parameter für das Anbinden der Datenbank ausgelagert werden.",
      "Für jede Umgebung (Entwicklung, Test, Produktiv, etc.) muss eine eigene Konfigurationsdatei angelegt werden.",
    ],
    correctAnswers: [2],
  },
  {
    id: 7,
    text: "Mit dem nachfolgenden Code wird ein Webserver umgesetzt. Was wird ausgegeben, wenn die URL 'http://localhost:3000/' mit einem Browser aufgerufen wird?",
    options: [
      "Der Code kann nicht ausgeführt werden, weil es einen Fehler gibt.",
      "Es wird im Browser 'Hello World' ausgegeben.",
      "Es wird im Browser ein Fehler ausgegeben, weil für diese URL keine Route definiert wurde.",
    ],
    correctAnswers: [2],
  },
  {
    id: 8,
    text: "Code: Gibt es in diesem Code einen Fehler? Wenn ja, in welcher Zeile?",
    options: [
      "Es gibt keinen Fehler.",
      "Der Fehler ist in Zeile 8.",
      "Der Fehler ist in Zeile 6.",
      "Der Fehler ist in Zeile 14.",
    ],
    correctAnswers: [3],
  },
  {
    id: 9,
    text: "Welche Aussage ist richtig über JSX?",
    options: [
      "JSX muss XML-konform sein.",
      "Transkompilation ist die Überführung von XML-Code nach HTML-Code.",
      "JSX-Code wird zuerst nach JavaScript und dann nach TypeScript transkompiliert.",
    ],
    correctAnswers: [0],
  },
  {
    id: 10,
    text: "Passwörter: Welche Aussage ist richtig?",
    options: [
      "Aus dem Hashwert eines Passworts kann der Klartext nur mit viel Aufwand wieder berechnet werden.",
      "Gleiche Passwörter haben ohne Salt immer den gleichen Hash-Wert.",
      "Gleiche Passwörter haben auch mit einem Salt immer den gleichen Hash-Wert.",
    ],
    correctAnswers: [1],
  },
  {
    id: 11,
    text: "Was wird ausgegeben, wenn eine anderes Modul das folgende Modul lädt und die 'sayHallo'-Funktion mit dem String 'Manfred' aufruft?",
    options: [
      "Ein anderes Modul kann die Funktion 'sayHallo()' nicht aufrufen.",
      "Das Modul kann nicht geladen werden, weil nicht mehrmals 'module.exports' aufgerufen werden kann.",
      "Es wird 'Hallo Manfred' ausgegeben.",
    ],
    correctAnswers: [2],
  },
  {
    id: 12,
    text: "Load Balancing: Welche Aussage ist richtig?",
    options: [
      "Für alle Load Balancing Verfahren wird ein Load Balancer benötigt.",
      "Für vertikales Hardware Load Balancing wird ein Load Balancer benötigt.",
      "Für horizontales Load Balancing wird ein Load Balancer benötigt."
    ],
    correctAnswers: [2]
  },
  {
    id: 13,
    text: "Welche Aussage ist richtig über Single-Page-Applications (SPA)?",
    options: [
      "Bei Single-Page-Applications ist der State oft über viele Komponenten verteilt.",
      "Auch mit einem zentralen Statemanagement gibt es Probleme bei der Kommunikation zwischen den Komponenten.",
      "Auch bei serverseitigen Webanwendungen ist ein Statemanagement im Client sinnvoll."
    ],
    correctAnswers: [0]
  },
  {
    id: 14,
    text: "SOAP: Welche Aussage ist richtig?",
    options: [
      "Ein zentraler Kritikpunkt an SOAP ist die Größe der XML-Nachrichten, wodurch die Performance der Kommunikation beeinträchtigt wird.",
      "Ein Kritikpunkt an SOAP ist das schwierige Parsen der Nachrichten.",
      "Ein Nachteil von SOAP ist die fehlende Möglichkeit, die Nachrichten zu verschlüsseln."
    ],
    correctAnswers: [0]
  },
  {
    id: 15,
    text: "Kopplung zwischen Client und Server: Welche Aussage ist richtig?",
    options: [
      "Wenn es viele Abhängigkeiten zwischen Client und Server gibt, spricht man von loser Kopplung.",
      "Wenn es sehr umfassende Vorgaben für die Umsetzung einer Schnittstelle gibt, spricht man von enger Kopplung.",
      "Wenn es wenige Abhängigkeiten zwischen Client und Server gibt, spricht man von enger Kopplung."
    ],
    correctAnswers: [1]
  },
  {
    id: 16,
    text: "Welche Aussage ist richtig über DOM-Diffing?",
    options: [
      "DOM-Diffing wird nur bei MPAs angewandt.",
      "Beim DOM-Diffing wird der DOM mit dem Virtual DOM verglichen.",
      "Bei SPAs wird per DOM-Diffing der DOM-Tree auf dem Server aktualisiert."
    ],
    correctAnswers: [1]
  },
  {
    id: 17,
    text: "Vervollständigen Sie den Satz inhaltlich korrekt: Wenn der Server zustandslos ist, ...",
    options: [
      "… kann man kein Login umsetzen.",
      "… ist ein horizontales Load-Balancing aufwändiger, weil der Session-Kontext verteilt werden muss.",
      "… müsste sich ein User immer wieder einloggen, wenn keine anderen Maßnahmen wie Tokens verwendet werden."
    ],
    correctAnswers: [2]
  },
  {
    id: 18,
    text: "Code: Welche Aussage trifft auf den folgenden Code zu?",
    options: [
      "Der Code ist fehlerhaft.",
      "In das DOM-Element mit der ID 'root' wird die React-Komponente 'MeineApp' eingefügt.",
      "Es werden im DOM-Tree die Knoten 'root' und die React-Komponente 'MeineApp' nacheinander im Body-Knoten eingefügt."
    ],
    correctAnswers: [1]
  },
  {
    id: 19,
    text: "Wie kann die Kommunikation zwischen React-Komponenten umgesetzt werden, die keine gemeinsame Vaterkomponente haben?",
    options: [
      "Beispielsweise durch die Verwendung von EventEmitter.",
      "Das ist nicht möglich.",
      "Durch die Verwendung von Callback-Funktionen."
    ],
    correctAnswers: [0]
  },
  {
    id: 20,
    text: "Welche Aussage ist richtig über JWT?",
    options: [
      "Durch die Verschlüsselung wird bei JWT verhindert, dass der Payload unbemerkt verändert wird.",
      "Durch die Signatur wird bei JWT verhindert, dass der Payload unbemerkt verändert wird.",
      "JWT-Tokens werden immer verschlüsselt. Eine unbemerkte Veränderung des Payloads ist nicht möglich."
    ],
    correctAnswers: [1]
  },
  {
    id: 21,
    text: "Code: Welche Aussage ist für den folgenden Code richtig?",
    options: [
      "Die Datei wird synchron geladen.",
      "Die Datei wird asynchron geladen.",
      "In dem Code gibt es Fehler."
    ],
    correctAnswers: [1]
  },
  {
    id: 22,
    text: "Wozu braucht man Redux-Thunk?",
    options: [
      "Durch Redux-Thunk kann man anstelle von einfachen Objekten nun auch Funktionen an den Store senden.",
      "Redux-Thunk verknüpft den Redux-Store mit AJAX.",
      "Durch Redux-Thunk können Remote-Calls an einen REST-Server geschickt werden."
    ],
    correctAnswers: [0]
  },
  {
    id: 23,
    text: "Asymmetrische und symmetrische Verschlüsselung: Welche Aussage ist richtig?",
    options: [
      "Bei der asymmetrischen Verschlüsselung kann der Schlüssel problemlos offengelegt werden.",
      "Bei der symmetrischen Verschlüsselung muss zunächst der Schlüssel sicher ausgetauscht werden, ohne dass jemand den Schlüssel mitbekommt.",
      "Die asymmetrische Verschlüsselung ist im Vergleich zur symmetrischen Verschlüsselung sehr schnell."
    ],
    correctAnswers: [1]
  },
  {
    id: 24,
    text: "Qualitätskriterien für Backend-Dienste: Welche Aussage ist richtig?",
    options: [
      "Unter 'Throughput' wird die Antwortzeit verstanden, die vergeht, bis das Ergebnis ankommt.",
      "Unter 'Availability' wird die Fehlertoleranz gegenüber Fehlbenutzung verstanden.",
      "Unter 'Conformance' wird die Einhaltung von Standards verstanden."
    ],
    correctAnswers: [2]
  },
  {
    id: 25,
    text: "Performance-Optimierung: Welche Aussage ist richtig?",
    options: [
      "Eine lose Kopplung verbessert die Performance von Backend-Services.",
      "Ein zustandsloser Server erleichtert die Wiederverwendung von Code.",
      "Durch ein vertikales Load-Balancing wird die Ausfallsicherheit einer Anwendung verbessert."
    ],
    correctAnswers: [1]
  },
  {
    id: 26,
    text: "Passwörter werden als Hash-Werte in der Datenbank abgelegt, um ...",
    options: [
      ".. die Passwörter bei der Übertragung vom Client zum Server zu schützen.",
      ".. sich gegen Wörterbuchangriffe zu schützen.",
      ".. die Passwörter zu schützen, falls die Datenbank gehackt wurde."
    ],
    correctAnswers: [2]
  },
  {
    id: 27,
    text: "Web-Services: Welche Aussage ist richtig?",
    options: [
      "Web-Services weisen eine enge Kopplung zwischen Client und Server auf.",
      "Web-Services weisen eine lose Kopplung zwischen Client und Server auf.",
      "Web-Services haben mit der Kopplung zwischen Client und Server nichts zu tun."
    ],
    correctAnswers: [1]
  },
  {
    id: 28,
    text: "SOAP: Welche Aussage ist richtig?",
    options: [
      "SOAP ist ein Netzwerkprotokoll für die Umsetzung von REST-Services.",
      "SOAP wird stets in Verbindung mit HTTP verwendet.",
      "SOAP setzt in der Regel auf XML auf, kann aber auch andere Dokumentenformate verwenden."
    ],
    correctAnswers: [2]
  },
  {
    id: 29,
    text: "Code: In dem nachfolgenden Code wird für Express eine Route definiert. Welche Aussage für den Code ist korrekt?",
    options: [
      "Es gibt einen Fehler bei 'meineFunktion'.",
      "Der Code ist korrekt und gibt für die Route 'test' den String 'Hello World' zurück.",
      "Die Funktion darf nicht als Objekt deklariert werden, sondern muss direkt bei der Routendefinition übergeben werden."
    ],
    correctAnswers: [0]
  },
  {
    id: 30,
    text: "TypeScript: Welche Aussage ist richtig?",
    options: [
      "TypeScript ist eine serverseitige Programmiersprache.",
      "JavaScript kann nach TypeScript transkompiliert werden.",
      "TypeScript ist eine clientseitige Programmiersprache."
    ],
    correctAnswers: [2]
  },
  {
    id: 31,
    text: "Welche Aussage ist richtig?",
    options: [
      "Die Properties, die den Funktion- oder Klassenkomponenten übergeben werden, sollten nie geändert werden.",
      "In Klassenkomponenten gibt es nur den State, keine Properties.",
      "Der State in Klassenkomponenten sollte nie geändert werden."
    ],
    correctAnswers: [0]
  },
  {
    id: 32,
    text: "Welche Aussage ist richtig?",
    options: [
      "Browser wie Firefox oder Chrome sind Thin-Client-Applikationen.",
      "Stand-alone-Applikationen haben keine Abhängigkeiten zu anderen Software-Komponenten.",
      "Browser wie Firefox oder Chrome sind Stand-alone-Applikationen."
    ],
    correctAnswers: [0]
  },
  {
    id: 33,
    text: "Welche Aussage ist richtig?",
    options: [
      "J2EE ist ein vollständiges Web-Framework, in dem viele Aspekte wie Binding, Dependency Injection und Routing bereit integriert sind.",
      "React ist ein vollständiges Web-Framework, in dem viele Aspekte wie Binding, Dependency Injection und Routing bereit integriert sind.",
      "Angular ist ein vollständiges Web-Framework, in dem viele Aspekte wie Binding, Dependency Injection und Routing bereit integriert sind."
    ],
    correctAnswers: [2]
  },
  {
    id: 34,
    text: "Welche Aussage ist richtig?",
    options: [
      "React verwendet aus Performance-Gründen kein DOM.",
      "DOM-Diffing ist der Prozess des automatischen Entfernens von DOM-Teilen, die nicht mehr benötigt werden.",
      "Mit Hilfe von Virtual DOMs verbessern Web-Frameworks wie React und Vue die Performance bei der Aktualisierung der Web-Oberfläche."
    ],
    correctAnswers: [2]
  },
  {
    id: 35,
    text: "SPAs und MPAs: Welche Aussage ist richtig?",
    options: [
      "Bei MPAs ist der Netzwerk-Traffic größer als bei SPAs.",
      "Bei SPAs ist der Netzwerk-Traffic größer als bei MPAs.",
      "Der Netzwerk-Traffic ist bei SPAs und MPAs gleich."
    ],
    correctAnswers: [0]
  },
  {
    id: 36,
    text: "Code: Gibt es in dem folgenden Code einen Fehler? Falls ja, in welcher Zeile?",
    options: [
      "In der Zeile 6 gibt es einen Fehler.",
      "In der Zeile 15 gibt es einen Fehler.",
      "In dem Code gibt es keinen Fehler.",
      "In der Zeile 9 gibt es einen Fehler.",
      "In der Zeile 1 gibt es einen Fehler."
    ],
    correctAnswers: [3]
  },
  {
    id: 37,
    text: "MPAs und SPAs: Welche Aussage ist richtig?",
    options: [
      "Bei MPAs gibt es in der Regel eine enge Kopplung zwischen Frontend und Backend.",
      "Die Kopplung zwischen Frontend und Backend ist bei SPAs und MPAs gleich.",
      "Bei SPAs gibt es in der Regel eine enge Kopplung zwischen Frontend und Backend."
    ],
    correctAnswers: [0]
  },
  {
    id: 38,
    text: "Kopplung von Backend und Frontend: Welche Aussage ist richtig?",
    options: [
      "Durch eine enge Kopplung wird die Wiederverwendung des Backends erleichtert.",
      "Die Kopplung hat keinen Einfluss auf die Wiederverwendung vom Backend.",
      "Durch eine enge Kopplung wird die Wiederverwendung des Backends erschwert."
    ],
    correctAnswers: [2]
  },
  {
    id: 39,
    text: "Integrität von Nachrichten: Welche Aussage ist richtig?",
    options: [
      "Für die Sicherung der Integrität von Nachrichten zwischen Client und Server werden Tokens verwendet.",
      "Für die Sicherung der Integrität von Nachrichten zwischen Client und Server werden die Nachrichten verschlüsselt.",
      "Für die Sicherung der Integrität von Nachrichten zwischen Client und Server werden die Nachrichten signiert."
    ],
    correctAnswers: [2]
  },
  {
    id: 40,
    text: "Welche Aussage ist richtig?",
    options: [
      "Aus TypeScript heraus kann auf JavaScript-Komponenten zugegriffen werden.",
      "Aus JavaScript heraus kann auf TypeScript-Komponenten zugegriffen werden.",
      "JavaScript und TypeScript sind nicht kompatibel zueinander."
    ],
    correctAnswers: [0]
  },
  {
    id: 41,
    text: "Code: Was wird im Browser ausgegeben, wenn die Route über den Browser aufgerufen wird?",
    options: [
      "A",
      "B",
      "Es wird nichts ausgegeben, weil es Fehler im Code gibt."
    ],
    correctAnswers: [1]
  },
  {
    id: 42,
    text: "Code: Was wird beim Ausführen des folgenden Codes ausgegeben?",
    options: [
      "Es wird '150' ausgegeben.",
      "Es wird das Funktionsobjekt ausgegeben ([Function]).",
      "Es wird nichts ausgegeben, weil es Fehler im Code gibt."
    ],
    correctAnswers: [0]
  },
  {
    id: 43,
    text: "Code: Was ist in dem Code-Beispiel falsch?",
    options: [
      "Es ist nichts falsch.",
      "Das Objekt 'http' hat keine Funktion 'createServer'.",
      "Der Client erhält nie eine Antwort."
    ],
    correctAnswers: [2]
  },
  {
    id: 44,
    text: "AJAX: Welche Aussage ist richtig?",
    options: [
      "Mit AJAX können selektiv Daten vom Backend abgerufen werden, um die Weboberfläche zu aktualisieren.",
      "AJAX verwendet synchrone Aufrufe an ein Backend, um die Weboberfläche selektiv zu aktualisieren.",
      "AJAX steht für 'Asynchronous JavaScript and XML' und ist wesentliche Grundlage für MPAs."
    ],
    correctAnswers: [0]
  },
  {
    id: 45,
    text: "Umgang mit Passwörtern: Welche Aussage ist richtig?",
    options: [
      "Passwörter sollten in der Datenbank gar nicht abgelegt werden.",
      "Passwörter werden in der Datenbank in der Regel mit einer symmetrischen Verschlüsselung abgelegt.",
      "Passwörter werden in der Datenbank als Hash-Werte abgelegt."
    ],
    correctAnswers: [2]
  },
  {
    id: 46,
    text: "Load Balancing: Welche Aussage ist richtig?",
    options: [
      "Bei der vertikalen Prozessverteilung besteht das Problem, dass gegebenenfalls der Session-Kontext zwischen den Servern ausgetauscht werden muss.",
      "Bei der vertikalen Prozessverteilung werden innerhalb eines Application-Servers mehrere Service-Layer umgesetzt.",
      "Die vertikale Prozessverteilung ermöglicht eine Skalierung von Anwendungen an beliebige Nutzerzahlen."
    ],
    correctAnswers: [0]
  },
  {
    id: 47,
    text: "Skript- und Programmiersprachen: Welche Aussage ist richtig?",
    options: [
      "Bei Skriptsprachen werden syntaktische Fehler zur Kompilierzeit angezeigt.",
      "Bei Skriptsprachen werden semantische Fehler zur Kompilierzeit angezeigt.",
      "Bei Programmiersprachen werden syntaktische Fehler schon zur Kompilierzeit angezeigt."
    ],
    correctAnswers: [2]
  },
  {
    id: 48,
    text: "Vertraulichkeit bei der Kommunikation von Client und Server: Welche Aussage ist richtig?",
    options: [
      "Die Vertraulichkeit der Kommunikation kann durch die Verwendung von Signaturen erreicht werden.",
      "Die Vertraulichkeit der Kommunikation kann durch eine Verschlüsselung erreicht werden.",
      "Die Vertraulichkeit der Kommunikation kann durch den Einsatz von Tokens erreicht werden."
    ],
    correctAnswers: [1]
  },
  {
    id: 49,
    text: "Software-Architektur: Welche der folgenden Aussagen ist richtig?",
    options: [
      "Die Software-Architektur umfasst auch eine Beschreibung der Schnittstellen zu Drittsystemen.",
      "In der Software-Architektur können auch Klassen und ihre Beziehungen untereinander beschrieben werden.",
      "In der Software-Architektur sollten auch verwendete Hardware-Komponenten dargestellt werden."
    ],
    correctAnswers: [1]
  },
  {
    id: 50,
    text: "Welche Aussage ist richtig?",
    options: [
      "DOM-Diffing ist das selektive Aktualisieren des DOM.",
      "DOM-Diffing ist das Rendern des DOM nach HTML.",
      "DOM-Diffing ist das Kopieren vom DOM."
    ],
    correctAnswers: [0]
  },
  {
    id: 51,
    text: "React-Lifecycle: Welche Aussage trifft auf React-Klassenkomponenten zu?",
    options: [
      "Die Methode componentDidMount() wird kurz vor dem Konstruktor aufgerufen.",
      "Die Methode componentDidMount() wird nach dem Erzeugen des HTML-Codes in der render()-Methode aufgerufen.",
      "Die Methode componentWillUnmount() wird aufgerufen, nachdem die Komponente aus dem DOM entfernt wurde."
    ],
    correctAnswers: [1]
  },
  {
    id: 52,
    text: "Verfahren der IT-Security: Welche Aussage ist richtig?",
    options: [
      "Die Vertraulichkeit der Kommunikation wird in der Regel durch Signaturen sichergestellt.",
      "Mit der Integritätsprüfung wird sichergestellt, dass die Nachrichten nicht auf dem Weg vom Client zum Server verändert wurden.",
      "Authentifizierung ist die Prüfung, ob der Nutzer berechtigt ist, die angefragte Aktion auszuführen."
    ],
    correctAnswers: [1]
  },
  {
    id: 53,
    text: "Code: Welche Aussage zu dem folgenden Code ist richtig?",
    options: [
      "In dem Code gibt es einen Fehler.",
      "'App' ist eine Klassenkomponente.",
      "'App' ist eine Funktionskomponente."
    ],
    correctAnswers: [2]
  },
  {
    id: 54,
    text: "Anwendungszustand: Welche Aussage ist richtig?",
    options: [
      "Wenn es auf dem Server eine User-Session gibt, ist der Server zustandslos.",
      "Wenn es auf dem Server eine User-Session gibt, ist der Server zustandsbehaftet.",
      "Die User-Session hat keine Relevanz für den Zustand."
    ],
    correctAnswers: [1]
  },
  {
    id: 55,
    text: "Welche Aussage ist richtig?",
    options: [
      "Um den State im Store zu ändern, muss 'setState()' aufgerufen werden. Nur dann wird die Komponente aktualisiert.",
      "Bei React-Redux informiert der Store automatisch alle Komponenten, wenn sich der State ändert.",
      "Komponenten müssen sich zunächst per 'connect()' mit dem Store verbinden, damit sie über Änderungen im State informiert werden."
    ],
    correctAnswers: [2]
  },
  {
    id: 56,
    text: "Welche der nachfolgenden Vorgehensweisen ist richtig, wenn eine React-Komponente per 'dispatch()'-Methode Actions an den Store schicken soll?",
    options: [
      "Es muss nichts gemacht werden. Alle Komponenten erhalten automatisch die dispatch()-Methode in den Properties.",
      "Die Komponente kann über die connect()-Methode ohne Parameter angebunden werden. Die dispatch()-Methode ist dann in den Properties.",
      "Beim Aufrufen der connect()-Methode muss eine mapStateToProps-Funktion übergeben werden."
    ],
    correctAnswers: [1]
  },
  {
    id: 57,
    text: "Code: Welche Aussage trifft auf den folgenden Code zu?",
    options: [
      "Es werden im DOM-Tree die Knoten 'root' und die React-Komponente 'MeineApp' nacheinander im Body-Knoten eingefügt.",
      "In das DOM-Element mit der ID 'root' wird die React-Komponente 'MeineApp' eingefügt.",
      "Der Code ist fehlerhaft."
    ],
    correctAnswers: [1]
  },
  {
    id: 58,
    text: "MPAs und SPAs: Welche Aussage ist richtig?",
    options: [
      "Für die Umsetzung von Single-Page-Anwendungen können JSP-Seiten, ASP-Seiten oder auch Servlets verwendet werden.",
      "Für die Umsetzung von Multi-Page-Anwendungen können JSP-Seiten, ASP-Seiten oder auch Servlets verwendet werden.",
      "Für die Umsetzung von Multi-Page-Anwendungen ist JavaScript und AJAX zwingend erforderlich."
    ],
    correctAnswers: [1]
  },
  {
    id: 59,
    text: "Welche Aussage ist richtig?",
    options: [
      "Mit Hilfe von Virtual DOMs verbessern Web-Frameworks wie React und Vue die Performance bei der Aktualisierung der Web-Oberfläche.",
      "DOM-Diffing ist der Prozess des automatischen Entfernens von DOM-Teilen, die nicht mehr benötigt werden.",
      "React verwendet aus Performance-Gründen kein DOM."
    ],
    correctAnswers: [0]
  },
  {
    id: 60,
    text: "Welche Aussage ist richtig?",
    options: [
      "Bei Actions muss dem Attribut 'payload' immer ein Wert zugewiesen sein.",
      "Über den 'payload' in der Action entscheidet der Reducer, ob er für die Action zuständig ist.",
      "Actions sind Objekte, die an die Reducer gesandt werden."
    ],
    correctAnswers: [2]
  },
  {
    id: 61,
    text: "Dynamische Webseiten: Welche Aussage ist richtig?",
    options: [
      "PHP-Seiten werden auf dem Client kompiliert.",
      "PHP-Seiten werden auf dem Server interpretiert.",
      "PHP-Seiten werden auf dem Server kompiliert."
    ],
    correctAnswers: [1]
  },
  {
    id: 62,
    text: "Node.js: Welche Aussage ist richtig?",
    options: [
      "Bei Node.js können aufwändige Berechnungen in Threads ausgelagert werden.",
      "Node.js ist nicht geeignet für aufwändige Berechnungen, weil dadurch alle anderen Anfragen blockiert werden.",
      "Node.js ist ein Multi-Threaded Server für die Umsetzung von Server-Anwendungen in JavaScript."
    ],
    correctAnswers: [1]
  },
  {
    id: 63,
    text: "Fehlerbehandlung: Welche Aussage ist für den folgenden Code richtig?",
    options: [
      "In der Zeile wird eine Exception angelegt.",
      "In der Zeile wird ein Error-Objekt angelegt.",
      "In der Zeile gibt es einen syntaktischen Fehler."
    ],
    correctAnswers: [1]
  },
  {
    id: 64,
    text: "Hacker-Angriffe: Welche Aussage ist richtig?",
    options: [
      "Gegen den Angriff mit Rainbow-Tables schützt die Verwendung von Salts.",
      "Gegen Wörterbuchangriffe hilft die Verwendung von Hash-Werten.",
      "Gegen Wörterbuchangriffe hilft der Einsatz von HTTPS."
    ],
    correctAnswers: [0]
  },
  {
    id: 65,
    text: "Load Balancing: Welche Aussage ist richtig?",
    options: [
      "Für alle Load Balancing Verfahren wird ein Load Balancer benötigt.",
      "Für vertikales Hardware Load Balancing wird ein Load Balancer benötigt.",
      "Für horizontales Load Balancing wird ein Load Balancer benötigt."
    ],
    correctAnswers: [2]
  },
  {
    id: 66,
    text: "Was ist auf der Konsole zu sehen, wenn für den folgenden Code die entsprechende Route im Browser aufgerufen wird?",
    options: [
      "Es wird am Anfang nur 'Started Server' auf der Konsole ausgegeben. Danach nichts mehr.",
      "Es wird 'Hallo' ausgegeben.",
      "Es wird 'A' ausgegeben."
    ],
    correctAnswers: [0]
  },
  {
    id: 67,
    text: "Code: Gibt es in diesem Code einen Fehler? Wenn ja, in welcher Zeile?",
    options: [
      "In dem Code gibt es keinen Fehler.",
      "In Zeile 5 gibt es einen Fehler.",
      "In Zeile 7 und 10 gibt es Fehler."
    ],
    correctAnswers: [0]
  },
  {
    id: 68,
    text: "Performance-Optimierung von Backend-Services: Welche Aussage ist richtig?",
    options: [
      "Skalierbarkeit beschreibt, ob ein Server weiterbetrieben werden kann, während Wartungsarbeiten ausgeführt werden, wie z.B. das Einspielen von Updates.",
      "Zugriffszeit ist der Zeitraum vom Absenden der Anfrage vom Client bis zum Erreichen des Servers.",
      "Skalierbarkeit beschreibt die Möglichkeit, ein System an die Anzahl der Anfragen anzupassen, die pro Zeiteinheit bearbeitet werden können."
    ],
    correctAnswers: [2]
  },
  {
    id: 69,
    text: "React: Welche Aussage trifft am besten zu?",
    options: [
      "Bei React wird das Rendering ausschließlich auf dem Server ausgeführt.",
      "Mit React können SPAs umgesetzt werden.",
      "Mit React können MPAs umgesetzt werden."
    ],
    correctAnswers: [1]
  },
  {
    id: 70,
    text: "Was ist bei der Verwendung von JSX zu beachten?",
    options: [
      "In JSX kann kein CSS verwendet werden.",
      "Attribute mit dem Namen 'className' müssen nach 'class' umbenannt werden.",
      "Dem Style-Attribut muss ein JavaScript-Objekt übergeben werden."
    ],
    correctAnswers: [2]
  },
  {
    id: 71,
    text: "Vollenden Sie den Satz korrekt. Wenn sowohl Access- als auch Refresh-Tokens verwendet werden, ...",
    options: [
      "... ist die TTL vom Refresh-Token eher lang, vom Access-Token eher kurz.",
      "... ist die TTL vom Refresh-Token eher kurz, vom Access-Token eher lang.",
      "... ist die TTL vom Refresh-Token und Access-Token in der Regel gleich lang."
    ],
    correctAnswers: [0]
  },
  {
    id: 72,
    text: "Authentifizierung: Welche Aussage ist richtig?",
    options: [
      "Für eine sichere Authentifizierung werden Signaturen verwendet.",
      "Durch die Verwendung von Tokens ist eine Authentifizierung nicht mehr erforderlich.",
      "Für eine sichere Authentifizierung muss die Kommunikation verschlüsselt werden."
    ],
    correctAnswers: [2]
  },
  {
    id: 73,
    text: "Welche Funktion muss der connect()-Methode übergeben werden, wenn eine Komponente über Änderungen im State informiert werden soll?",
    options: [
      "Die mapStateToProps-Funktion.",
      "Die mapDispatchToProps-Funktion.",
      "Die dispatch()-Funktion."
    ],
    correctAnswers: [0]
  },
  {
    id: 74,
    text: "Im nachfolgenden Code wird ein Reducer umgesetzt. In dem Code gibt es möglicherweise einen Fehler. In welcher Zeile ist der Fehler?",
    options: [
      "In Zeile 4-6 gibt es einen Fehler.",
      "In Zeile 12 gibt es einen Fehler.",
      "In Zeile 8 gibt es einen Fehler.",
      "In dem Code gibt es keinen Fehler."
    ],
    correctAnswers: [1]
  },
  {
    id: 75,
    text: "Was ist in dem Code-Beispiel falsch?",
    options: [
      "Es ist nichts falsch.",
      "Das Modul 'http' gibt es nicht.",
      "Das Objekt http hat keine Funktion 'createServer()'.",
      "Der Client erhält nie eine Antwort."
    ],
    correctAnswers: [3]
  },
  {
    id: 76,
    text: "Welche Aussage ist richtig?",
    options: [
      "Bei Basic Authentication werden User-ID und Passwort unverschlüsselt übertragen.",
      "Bei Basic Authentication werden User-ID und Passwort verschlüsselt übertragen.",
      "Basic Authentication verwendet automatisch HTTPS."
    ],
    correctAnswers: [0]
  },
  {
    id: 77,
    text: "Welche Aussage ist richtig?",
    options: [
      "Durch Tokens wird eine Authentifizierung überflüssig.",
      "Tokens sind in der Regel unbegrenzt gültig.",
      "Bei serverseitigen Webanwendungen ist die Nutzung von Tokens nicht notwendig."
    ],
    correctAnswers: [2]
  },
  {
    id: 78,
    text: "SPAs und MPAs: Welche Aussage ist richtig?",
    options: [
      "Bei SPAs und MPAs werden die Sitzungsinformationen in einer Datenbank verwaltet.",
      "Bei SPAs werden die Sitzungsinformationen im Client verwaltet.",
      "Bei MPAs werden die Sitzungsinformationen im Client verwaltet."
    ],
    correctAnswers: [1]
  },
  {
    id: 79,
    text: "Horizontales Load Balancing: Welche Aussage ist richtig?",
    options: [
      "Horizontales Load-Balancing ist häufig sehr teuer und wird nur in Ausnahmefällen umgesetzt.",
      "Horizontales Load-Balancing benötigt in der Regel teure Hardware.",
      "Durch horizontales Load-Balancing können Anwendungen für beliebig große Nutzerzahlen skaliert werden."
    ],
    correctAnswers: [2]
  },
  {
    id: 80,
    text: "Wie kann in React eine Vaterkomponente der Kindkomponente (Child-Komponente) Daten zukommen lassen?",
    options: [
      "Die Vaterkomponente kann an die Kindkomponente Properties über die Tag-Attribute weitergeben.",
      "Die Vaterkomponente kann der Kindkomponente eine Callback-Methode geben.",
      "Es kann das Event-Bubbling verwendet werden."
    ],
    correctAnswers: [0]
  },
  {
    id: 81,
    text: "Client-Server: Welche Aussage ist richtig?",
    options: [
      "Eine Server-Anwendung kann gleichzeitig auch eine Client-Anwendung sein.",
      "Der Web-Server gehört zum Frontend.",
      "Ein Frontend kann gleichzeitig auch Backend sein."
    ],
    correctAnswers: [0]
  },
  {
    id: 82,
    text: "Load Balancing: Welche Aussage ist richtig?",
    options: [
      "Horizontales Load Balancing verbessert bei intensiv genutzten Systemen nur die Zugriffszeiten, nicht jedoch die Ausfallsicherheit.",
      "Horizontales Load Balancing verbessert bei intensiv genutzten Systemen sowohl die Zugriffszeiten als auch die Ausfallsicherheit.",
      "Vertikales Load Balancing verbessert bei intensiv genutzten Systemen sowohl die Zugriffszeiten als auch die Ausfallsicherheit."
    ],
    correctAnswers: [1]
  },
  {
    id: 83,
    text: "NoSQL/ MongoDB: Welche Aussage ist richtig?",
    options: [
      "NoSQL-Datenbanken können beliebig skaliert werden.",
      "MongoDB verwendet für Abfragen über mehrere Collections hinweg SQL.",
      "In MongoDB müssen immer ganze Dokumente abgerufen werden."
    ],
    correctAnswers: [0]
  },
  {
    id: 84,
    text: "Load Balancing: Welche Aussage ist richtig?",
    options: [
      "Die Performance einer Anwendung kann mit vertikalem Hardware Load Balancing nur sehr begrenzt verbessert werden.",
      "Vertikales Hardware Load Balancing ist die am weitesten verbreitete Art des Load-Balancings.",
      "Vertikales Hardware Load Balancing ist eine recht kostengünstige Art, die Performance eines Servers zu verbessern."
    ],
    correctAnswers: [0]
  },
  {
    id: 85,
    text: "Code: In dem folgenden Code gibt es einen Fehler. Welche der folgenden Aussagen ist korrekt?",
    options: [
      "Der Fehler ist in dem JSX-Teil.",
      "Der Fehler ist bei dem Export.",
      "Der Fehler ist bei den Imports."
    ],
    correctAnswers: [0]
  },
  {
    id: 86,
    text: "Code: In dem nachfolgenden Code gibt es möglicherweise einen Fehler. In welcher Zeile ist der Fehler?",
    options: [
      "In Zeile 9 ist ein Fehler.",
      "In Zeile 17 ist ein Fehler.",
      "Es gibt keinen Fehler.",
      "In Zeile 23 ist ein Fehler."
    ],
    correctAnswers: [1]
  },
  {
    id: 87,
    text: "Welche Aussage ist richtig?",
    options: [
      "React ist eine clientseitige Softwarebibliothek, die aber auch ein serverseitiges Rendering ermöglicht.",
      "React basiert auf TypeScript.",
      "Bei React werden Anwendungslogik und Rendering klar voneinander getrennt."
    ],
    correctAnswers: [0]
  }
];
