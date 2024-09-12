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
    id: 38,
    text: 'Sie sehen in einer ts-Datei den folgenden Code:\nimport "./style.css";\nWas bewirkt dieser Code?',
    options: [
      "Die Datei wird nicht wirklich importiert, sondern nur von Webpack verarbeitet.",
      "Die Datei wird importiert, d.h. der TypeScript-Compiler prüft, ob die CSS-Datei korrekt ist.",
      "Die Datei wird importiert, so dass wir in TypeScript direkt auf die darin befindelichen RuleSets zugreifen können.",
    ],
    correctAnswers: [0],
  },
  {
    id: 39,
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
    id: 41,
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
    id: 43,
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
    id: 45,
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
    id: 47,
    text: "Welchen HTTP-Statuscode würden Sie beim Aufruf eines Backends erwarten, wenn ein interner Serverfehler auftritt?",
    options: ["500", "400", "200", "404"],
    correctAnswers: [0],
  },
  {
    id: 48,
    text: "Welchen Hook verwenden Sie in React, wenn Sie innerhalb einer Komponente veränderliche Daten speichern wollen?",
    options: ["useContext", "useParam", "useEffect", "useState"],
    correctAnswers: [3],
  },
  {
    id: 52,
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
    id: 54,
    text: "Mit welcher Prop registrieren Sie eine Validierungsfunktion einer Controlled-Component, wenn Sie bei jedem Tastendruck eine Validierung durchführen wollen?",
    options: ["onInput", "onSubmit", "onChange", "onBlur"],
    correctAnswers: [2],
  },
  {
    id: 55,
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
    id: 56,
    text: "Was macht die Methode verify der JavaScript-Bibliothek jsonwebtoken?",
    options: [
      "Sie entschlüsselt und verifiziert ein JSON-Objekt.",
      "Sie wandelt einen String in ein JSON-Objekt und erzeugt einen Hashcode, der mit Teilen des Eingabestrings (Signatur) übereinstimmen muss.",
      "Sie entschlüsselt ein Base64-codierte Binärdatei und erzeugt daraus ein JSON-Objekt.",
    ],
    correctAnswers: [1],
  },
  {
    id: 59,
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
    id: 60,
    text: "Was ist eine Ressource im Kontext von REST?",
    options: [
      "Eine Ressource ist eine Entität aus dem Entitäts- bzw. Domänenklassenmodell.",
      "Eine Ressource ist ein JSON-Objekt, das von einer URI identifiziert werden kann.",
      "Eine Ressource ist eine abstrakte Entität, die von einer URI identifiziert werden kann.",
      "Eine Ressource ist ein HTML-Objekt, das von einer URI identifiziert werden kann.",
    ],
    correctAnswers: [2],
  },
];
