"use strict";
const flashcards=[
["Czym różni się budowa płazińców, nicieni i pierścienic?","Płazińce są płaskie, nicienie nitkowate i zwężone na końcach, a pierścienice mają ciało podzielone na segmenty."],
["Gdzie żyją wypławki?","Głównie w wodzie; są drapieżnikami."],
["Po co wypławkom rzęski?","Pomagają poruszać się w wodzie."],
["Jak wypławki chwytają zdobycz?","Wysuwaną, umięśnioną gardzielą."],
["Z jakich części składa się tasiemiec?","Z główki, szyjki i licznych członów."],
["Jak tasiemiec pobiera pokarm?","Wchłania składniki odżywcze całą powierzchnią ciała."],
["Co odróżnia główkę tasiemca uzbrojonego od nieuzbrojonego?","Uzbrojony ma przyssawki i haczyki; nieuzbrojony ma cztery przyssawki, bez haczyków."],
["Czym jest żywiciel pośredni?","Organizmem, w którym przebywają larwy pasożyta."],
["Czym jest żywiciel ostateczny?","Organizmem, w którym żyje dorosła postać pasożyta."],
["Kto jest żywicielem pośrednim tasiemca uzbrojonego?","Świnia. U nieuzbrojonego — krowa."],
["Czym jest wągier?","Larwalną postacią tasiemca w postaci pęcherzyka wypełnionego płynem."],
["Dlaczego tasiemce produkują bardzo dużo jaj?","Zwiększa to szanse przetrwania i dotarcia potomstwa do właściwego żywiciela."],
["Jak uniknąć tasiemczycy?","Jeść przebadane weterynaryjnie i dobrze przygotowane termicznie mięso."],
["Co chroni ciało nicieni?","Gruby oskórek, odporny na szkodliwe substancje i enzymy trawienne."],
["Jak można zarazić się glistą?","Połknąć jaja z zanieczyszczoną wodą, nieumytymi warzywami lub owocami."],
["Gdzie wędrują larwy glisty?","Przez różne narządy, między innymi płuca, zanim wrócą do jelita."],
["Jaki jest charakterystyczny objaw owsicy?","Swędzenie okolic odbytu nasilające się w nocy."],
["Jak zapobiegać owsicy?","Myć ręce, obcinać krótko paznokcie i myć używane zabawki."],
["Jak człowiek zaraża się włośnicą?","Jedząc surowe lub niedogotowane mięso świni albo dzika zawierające larwy włośnia."],
["Gdzie znajdują się larwy włośnia?","Docierają do mięśni, gdzie zwijają się w spirale i otaczają ochronną torebką."],
["Co oznacza segmentacja ciała?","Podział ciała na powtarzające się odcinki, czyli segmenty."],
["Do czego dżdżownicy służą szczecinki?","Zaczepiają się o podłoże i ułatwiają poruszanie."],
["Do czego służy siodełko dżdżownicy?","Odgrywa ważną rolę w rozmnażaniu płciowym."],
["Jak dżdżownice pomagają glebie?","Rozkładają szczątki, przyczyniają się do powstawania próchnicy i spulchniają glebę."],
["Co wyróżnia nereidę?","Morski drapieżnik z wyodrębnioną głową, oczami, czułkami, wąsami oraz wyrostkami ze szczecinkami."],
["Jakie przystosowania ma pijawka?","Dwie przyssawki, szczęki i ślina zawierająca substancje przeciwkrzepliwe."],
["Gdzie można spotkać pijawkę lekarską?","W płytkich, stojących wodach słodkich, np. stawach."],
["Jakie korzyści płyną z obecności pierścienic?","Są pokarmem zwierząt, użyźniają glebę, uczestniczą w oczyszczaniu wód, niektóre wykorzystuje się w medycynie."]
];
let flashIndex=0,flashFlipped=false;
const flashText=document.querySelector("#flash-text"),flashLabel=document.querySelector("#flash-label"),flashCount=document.querySelector("#flash-count");
function renderFlash(){flashLabel.textContent=flashFlipped?"ODPOWIEDŹ":"PYTANIE";flashText.textContent=flashcards[flashIndex][flashFlipped?1:0];flashCount.textContent=(flashIndex+1)+" / "+flashcards.length;document.querySelector("#flashcard").style.background=flashFlipped?"#e6dffa":"#d4f274"}
function flip(){flashFlipped=!flashFlipped;renderFlash()}
document.querySelector("#flashcard").addEventListener("click",flip);
document.querySelector("#flashcard").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}});
document.querySelector("#flash-next").addEventListener("click",()=>{flashIndex=(flashIndex+1)%flashcards.length;flashFlipped=false;renderFlash()});
document.querySelector("#flash-prev").addEventListener("click",()=>{flashIndex=(flashIndex-1+flashcards.length)%flashcards.length;flashFlipped=false;renderFlash()});renderFlash();
const questions=[
{q:"Która cecha jest charakterystyczna dla płazińców?",a:["Ciało podzielone na segmenty","Ciało silnie spłaszczone","Ciało nitkowate i zwężone na końcach","Pancerz z chityny"],c:1,e:"Płazińce mają wydłużone, silnie spłaszczone ciało."},
{q:"Gdzie najczęściej żyją wolno żyjące wypławki?",a:["W wodzie","W płucach człowieka","W mięśniach świni","W glebie pustynnej"],c:0,e:"Wypławki są wodnymi drapieżnikami."},
{q:"Jak wypławek chwyta zdobycz?",a:["Haczykami na główce","Dwiema przyssawkami","Wysuwaną, umięśnioną gardzielą","Odnóżami z pazurkami"],c:2,e:"Wypławki używają silnie umięśnionej, wysuwanej gardzieli."},
{q:"Czemu służą rzęski na nabłonku wypławków?",a:["Produkcji jaj","Przyczepianiu do jelita","Oddychaniu płucami","Poruszaniu się w wodzie"],c:3,e:"Rzęski ułatwiają przemieszczanie się w wodzie."},
{q:"Która odpowiedź poprawnie opisuje ciało tasiemca?",a:["Główka, szyjka, człony","Głowa, tułów, odnóża","Segmenty ze szczecinkami","Samodzielne pierścienie z oczami"],c:0,e:"Ciało dorosłego tasiemca składa się z główki, szyjki i członów."},
{q:"Jak tasiemiec pobiera składniki pokarmowe?",a:["Chwyta zdobycz gardzielą","Wchłania całą powierzchnią ciała","Pobiera przez szczecinki","Filtruje wodę"],c:1,e:"Tasiemce wchłaniają substancje odżywcze z jelita żywiciela całą powierzchnią ciała."},
{q:"Co ma tasiemiec uzbrojony, a nie ma nieuzbrojony?",a:["Szyjkę","Człony","Haczyki na główce","Przyssawki"],c:2,e:"Uzbrojony ma haczyki i przyssawki; nieuzbrojony — tylko przyssawki."},
{q:"Żywicielem pośrednim tasiemca uzbrojonego jest…",a:["Człowiek","Krowa","Dżdżownica","Świnia"],c:3,e:"W świni rozwijają się larwy tasiemca uzbrojonego."},
{q:"Żywicielem ostatecznym obu omawianych tasiemców jest…",a:["Człowiek","Świnia","Krowa","Ryba"],c:0,e:"Dorosłe tasiemce uzbrojony i nieuzbrojony żyją w jelicie człowieka."},
{q:"Wągier to…",a:["Dorosły tasiemiec","Larwa tasiemca w pęcherzyku","Jajo glisty","Odmiana pijawki"],c:1,e:"Wągier to postać larwalna tasiemca występująca m.in. w mięśniach żywiciela pośredniego."},
{q:"Który zestaw pomaga uniknąć tasiemczycy?",a:["Picie zimnej wody","Dokładne żucie surowego mięsa","Przebadane i dobrze przygotowane mięso","Unikanie warzyw"],c:2,e:"Ważne jest badanie mięsa i odpowiednia obróbka termiczna."},
{q:"Dlaczego tasiemce wytwarzają tak dużo jaj?",a:["By przyspieszać pływanie","Aby chronić się przed słońcem","Żeby wytwarzać śluz","By zwiększyć szanse przetrwania potomstwa"],c:3,e:"Wiele jaj zwiększa prawdopodobieństwo kontynuacji cyklu pasożyta."},
{q:"Ciało nicieni jest zwykle…",a:["Nitkowate, zwężone na końcach","Płaskie jak liść","Podzielone na segmenty","Pokryte piórami"],c:0,e:"To cecha rozpoznawcza nicieni."},
{q:"Co chroni nicienie przed szkodliwymi substancjami?",a:["Siodełko","Gruby oskórek","Rzęski","Wągry"],c:1,e:"Nicienie mają odporny, gruby oskórek."},
{q:"W jaki sposób można zarazić się glistą ludzką?",a:["Przez ugryzienie komara","Dotykając dżdżownicy","Połykając jaja z zabrudzonym pokarmem lub wodą","Jedząc przebadane mięso"],c:2,e:"Jaja glisty mogą być na nieumytych warzywach i owocach lub w wodzie."},
{q:"Przez jaki narząd wędrują larwy glisty ludzkiej?",a:["Wątrobę wyłącznie","Skórę wyłącznie","Kości","Płuca"],c:3,e:"W cyklu rozwojowym larwy wędrują m.in. przez płuca."},
{q:"Który objaw najbardziej kojarzy się z owsicą?",a:["Nocny świąd okolic odbytu","Silny ból stawów po wysiłku","Utrata koloru włosów","Kaszel po jedzeniu"],c:0,e:"Samice owsika składają jaja nocą w okolicach odbytu, co wywołuje swędzenie."},
{q:"Jak człowiek może zarazić się włośniem spiralnym?",a:["Jedząc umyte jabłko","Jedząc surowe mięso dzika z larwami","Dotykając mokrej gleby","Pijąc przegotowaną wodę"],c:1,e:"Włośnica wiąże się ze spożyciem surowego lub niedogotowanego mięsa z larwami."},
{q:"Gdzie docierają larwy włośnia spiralnego?",a:["Do nasion roślin","Do paznokci","Do mięśni","Do włosów"],c:2,e:"Larwy docierają z krwią do mięśni, gdzie się zwijają i otaczają torebką."},
{q:"Nicienie pasożytnicze opisane w podręczniku rozwijają się…",a:["Zawsze w trzech żywicielach","Tylko poza organizmem","Wyłącznie w glebie","W jednym żywicielu"],c:3,e:"To ważna różnica między nimi a omawianymi tasiemcami."},
{q:"Najważniejsza cecha budowy pierścienic to…",a:["Podział ciała na segmenty","Spłaszczenie ciała","Haczyki tasiemca","Brak oskórka"],c:0,e:"Segmenty, czyli pierścienie, są cechą charakterystyczną pierścienic."},
{q:"Co ułatwia dżdżownicy poruszanie się w glebie?",a:["Haczyki na główce","Szczecinki i śluz","Jama chłonąco-trawiąca","Skrzela w kształcie płetw"],c:1,e:"Szczecinki zaczepiają się o podłoże, a śluz zmniejsza tarcie i chroni ciało."},
{q:"Jaką rolę odgrywa siodełko dżdżownicy?",a:["Służy do polowania","Służy do oddychania płucami","Jest związane z rozmnażaniem","Jest żołądkiem"],c:2,e:"Siodełko pełni ważną funkcję podczas rozmnażania płciowego."},
{q:"Które zdanie o pierścienicach jest prawdziwe?",a:["Nereida żyje tylko w jelicie człowieka","Pijawka ma rzęski jak wypławek","Dżdżownica jest pasożytem krwi","Dżdżownica spulchnia glebę, a pijawka ma dwie przyssawki"],c:3,e:"Dżdżownica drąży korytarze w glebie, a pijawka ma przyssawki na obu końcach ciała."}
];
let current=0,answers=Array(questions.length).fill(null),finished=false;
const content=document.querySelector("#quiz-content"),back=document.querySelector("#quiz-back"),next=document.querySelector("#quiz-next");
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function renderQuiz(){const score=answers.reduce((s,a,i)=>s+(a===questions[i].c?1:0),0);document.querySelector("#quiz-score").textContent=finished?score+" / "+questions.length:answers.filter(x=>x!==null).length+" odpowiedzi";document.querySelector("#quiz-progress").textContent=finished?"Twój wynik":"Pytanie "+(current+1)+" z "+questions.length;document.querySelector("#quiz-bar").style.width=(finished?100:(current+1)/questions.length*100)+"%";content.replaceChildren();
if(finished){const wrap=el("div","result-box");wrap.append(el("div","result-score",score+" / "+questions.length),el("h3",null,score>=21?"Świetna robota!":score>=16?"Dobry wynik — jeszcze trochę powtórki!":"Warto przejrzeć lekcje i spróbować ponownie."),el("p",null,"Poprawne odpowiedzi: "+Math.round(score/questions.length*100)+"%. Poniżej wyjaśnienia pytań, na które odpowiedziano niepoprawnie."));content.append(wrap);let n=0;questions.forEach((q,i)=>{if(answers[i]===q.c)return;n++;const box=el("div","review-item"),title=el("b",null,(i+1)+". "+q.q),bad=el("p","incorrect","Twoja odpowiedź: "+(answers[i]===null?"brak":q.a[answers[i]])),good=el("p","correct","Poprawnie: "+q.a[q.c]),explain=el("p",null,q.e);box.append(title,bad,good,explain);content.append(box)});if(!n)content.append(el("p",null,"Brawo! Wszystkie odpowiedzi są poprawne."));back.hidden=true;next.textContent="Rozwiąż ponownie ↻";next.disabled=false;return}
const q=questions[current];content.append(el("h3","question-title",q.q));const opts=el("div","answers");q.a.forEach((a,i)=>{const b=el("button","answer"+(answers[current]===i?" selected":""),undefined);b.type="button";b.setAttribute("aria-pressed",answers[current]===i?"true":"false");b.append(el("span","letter","ABCD"[i]),el("span",null,a));b.addEventListener("click",()=>{answers[current]=i;renderQuiz()});opts.append(b)});content.append(opts);back.hidden=false;back.disabled=current===0;next.textContent=current===questions.length-1?"Zakończ i sprawdź wynik ✓":"Dalej →";next.disabled=answers[current]===null}
back.addEventListener("click",()=>{if(current>0){current--;renderQuiz()}});
next.addEventListener("click",()=>{if(finished){finished=false;current=0;answers.fill(null)}else if(answers[current]!==null){if(current===questions.length-1)finished=true;else current++}renderQuiz()});renderQuiz();