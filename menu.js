let data = new Date()
let month = data.getMonth() + 1 // Month  1 - 12
let getDate = data.getDate()    // dey    1 - 31

switch (month) {
    case 1:
        January()
        break;
    case 2:
        February()
        break;
    case 3:
        March()
        break;
    case 4:
        April()
        break;
    case 5:
        May()
        break;
    case 6:
        June()
        break;
    case 7:
        July()
        break;
    case 8:
        August()
        break;
    case 9:
        September()
        break;
    case 10:
        October()
        break;
    case 11:
        November()
        break;
    case 12:
        December()
        break;
}

// _________________________January_____________________________
function January() {

    // Հունվար / շաբաթ - 1
    if (month == 1 && getDate > 0 && getDate <= 7) {
        console.log(`Հունվար ${getDate} | January ${getDate},`)

        let cont = document.querySelector('.container')
        cont.innerHTML = `
        <ul class="menu-cont">
            <ol class="menu-cont-title">երկուշաբթի</ol>
            <li>09։30-Վարսակի Փաթիլներով Շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Հավի Կրծքամսով Դդմիկով Ապուր</li>
            <li>16։30-Վերմիշելով Փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">Երեքշաբթի</ol>
            <li>09։30-Բրնձով Շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Հավի Կրծքամսով Աստղիկով Ապուր</li>
            <li>16։30-կարտոֆիլով պյուրե</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">չորեքշաբթի</ol>
            <li>09։30-Ալադիկ Սերգեֆիլի Կոմպոտ</li>
            <li>11։00-Միրգ Խնձոր Բանան Սանձ</li>
            <li>12։00-Տավարի Մսով Կաղամբապուր</li>
            <li>16։30-Բրնծով Գազարով Փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">հինգշաբթի</ol>
            <li>09։30-Հնդկաձավարով Շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Հավի Կրծքամսով Բրոկոլիով Ապուր</li>
            <li>16։30-Վերմիշելով Փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">ուրբաթ</ol>
            <li>09։30-Խաշած Ձու Թեյ</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Տավարի Մսով Վերմիշելով Ապուր</li>
            <li>16։30-Հնդկաձավարով Փլավ</li>
        </ul>`
    }

    // Հունվար / շաբաթ - 2
    if (month == 1 && getDate >= 8 && getDate <= 14) {
        console.log(`Հունվար ${getDate} | January ${getDate},`)

        let cont = document.querySelector('.container')
        cont.innerHTML = `
        <ul class="menu-cont">
            <ol class="menu-cont-title">երկուշաբթի</ol>
            <li>09։30-վարսակի շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-բրնծով Հավի Կրծքամսով Ապուր</li>
            <li>16։30-Վերմիշելով Փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">Երեքշաբթի</ol>
            <li>09։30-Հնդկաձավարով Շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Տավարի Մսով Կաղամբապուր</li>
            <li>16։30-մակարոնօվ փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">չորեքշաբթի</ol>
            <li>09։30-Բրնծով Շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-աստղիկով հավի կրծքամսով ապուր</li>
            <li>16։30-կարտոֆիլով պյուրե</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">հինգշաբթի</ol>
            <li>09։30-ալադի թեյ</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Վերմիշելով տավարի մսով Ապուր</li>
            <li>16։30-հնդկաձավարով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">ուրբաթ</ol>
            <li>09։30-Խաշած Ձու Թեյ</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-ոսպով ապուր</li>
            <li>16։30-մակառնով տավարի աղացած մսով Փլավ</li>
        </ul>`
    }

    // Հունվար / շաբաթ - 3
    if (month == 1 && getDate >= 15 && getDate <= 21) {
        console.log(`Հունվար ${getDate} | January ${getDate},`)

        let cont = document.querySelector('.container')
        cont.innerHTML = `
        <ul class="menu-cont">
            <ol class="menu-cont-title">երկուշաբթի</ol>
            <li>09։30-ձվածեղ թեը</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-Վերմիշելով տավարի մսով ապուր</li>
            <li>16։30-հնդկաձավարով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">Երեքշաբթի</ol>
            <li>09։30-վարսակի շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-դեղին ոլոռով ապուր</li>
            <li>16։30-կարտոֆիլով պյուրե, քյուֆթա</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">չորեքշաբթի</ol>
            <li>09։30-հնդկաձավարով Շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-հավի կրծքամսով,բռոկոլիով ապուր</li>
            <li>16։30-վերմիշելով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">հինգշաբթի</ol>
            <li>09։30-կեքս խնձորի սերկևֆիլի կոմպոտ</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-կաղամբԱպուր տավարի մսով</li>
            <li>16։30-մակառնով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">ուրբաթ</ol>
            <li>09։30-հաց, կարագ, պանիր, թեյ</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-աստղիկով հավի կրծքամսով ապուր</li>
            <li>16։30-բրնձով գազարով փլավ</li>
        </ul>`
    }

    // Հունվար / շաբաթ - 4
    if (month == 1 && getDate >= 22 && getDate <= 31) {
        console.log(`Հունվար ${getDate} | January ${getDate},`)

        let cont = document.querySelector('.container')
        cont.innerHTML = `
        <ul class="menu-cont">
            <ol class="menu-cont-title">երկուշաբթի</ol>
            <li>09։30-հնդկաձավարով շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-բռոկոլիով, հավի կրծքամսով ապուր</li>
            <li>16։30-մակառոնով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">Երեքշաբթի</ol>
            <li>09։30-ալադի կոմպոտ</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-դդմիկով հավի կրծքամսով ապուր</li>
            <li>16։30-բրնձով գազարով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">չորեքշաբթի</ol>
            <li>09։30-կինոաի շիլա,հաց պանիր</li>
            <li>11։00-կաղամբապուր տավարի մսով</li>
            <li>12։00-հավի կրծքամսով,բռոկոլիով ապուր</li>
            <li>16։30-վերմիշելով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">հինգշաբթի</ol>
            <li>09։30-բրնձով շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-աստղիկով հավի կրծքամսով ապուր</li>
            <li>16։30-հնդկաձավարով փլավ</li>
        </ul>

        <ul class="menu-cont">
            <ol class="menu-cont-title">ուրբաթ</ol>
            <li>09։30-վարսակի շիլա</li>
            <li>11։00-Միրգ Խնձոր Բանան</li>
            <li>12։00-բրնձով սպաս</li>
            <li>16։30-մակառոնով փլավ, աղացած տավարի մսով</li>
        </ul>`
    }

}
// ________________________February_____________________________
function February() {
    console.log(`Փետրվար ${month} | Օր ${getDate}`);
}
// __________________________March______________________________
function March() {
    console.log(`Մարտ ${month} | Օր ${getDate}`);
}
// __________________________April______________________________
function April() {
    console.log(`Ապրիլ ${month} | Օր ${getDate}`);
}
// __________________________May________________________________
function May() {
    console.log(`Մայիս ${month} | Օր ${getDate}`);
}
// __________________________June_______________________________
function June() {
    console.log(`Հունիս ${month} | Օր ${getDate}`);
}
// __________________________July_______________________________
function July() {
    console.log(`Հուլիս ${month} | Օր ${getDate}`);
}
// _________________________August______________________________
function August() {
    console.log(`Օգոստոս ${month} | Օր ${getDate}`);
}
// ________________________September____________________________
function September() {
    console.log(`Սեպտեմբեր ${month} | Օր ${getDate}`);
}
// ________________________October______________________________
function October() {
    console.log(`Հոկտեմբեր ${month} | Օր ${getDate}`);
}
// ________________________November_____________________________
function November() {
    console.log(`Նոյեմբեր ${month} | Օր ${getDate}`);
}
// ________________________December_____________________________
function December() {
    console.log(`Դեկտեմբեր ${month} | Օր ${getDate}`);
}