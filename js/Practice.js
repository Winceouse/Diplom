const items = [
    {
        title: 'Про відкриття провадження у справі про неплатоспроможність',
        practiceNumber: '910/2953/22',
        practiceText: 'Фізична особа ОСОБА_1 звернувся до суду із заявою про відкриття провадження у справі про неплатоспроможність у зв`язку з неможливістю погасити заборгованість у розмірі 525  994,24 грн.',
        practiceLink: 'https://reyestr.court.gov.ua/Review/103824760'
    },
    {
        title: 'Затвердження плану санації боржника до відкриття провадження у справі про банкрутство',
        practiceNumber: '910/2820/22',
        practiceText: 'Заява про затвердження плану санації боржника до відкриття провадження у справі про банкрутство в порядку ст. 5 Кодексу України з процедур банкрутства.',
        practiceLink: 'https://reyestr.court.gov.ua/Review/103824764'
    },
    {
        title: 'Касаційна скарга на постанову апеляційного суду',
        practiceNumber: '515/995/20',
        practiceText: 'У серпні 2020 року ОСОБА_1 звернулася до суду з позовом до ОСОБА_2 про витребування земельної ділянки та, уточнивши позовні вимоги, просила суд витребувати від ОСОБА_2 земельну ділянку',
        practiceLink: 'https://reyestr.court.gov.ua/Review/103826271'
    },
    {
        title: 'Повернення судового збору, сплаченого за подання касаційної скарги до Верховного Суду',
        practiceNumber: '910/2169/21',
        practiceText: 'Ухвалою Верховного Суду від 19.01.2022 відмовлено у відкритті касаційного провадження у справі №910/2169/21 за касаційною скаргою Товариства з обмеженою відповідальністю "АП-Групп" на рішення Господарського суду міста Києва та постанову Північного апеляційного господарського суду.',
        practiceLink: 'https://reyestr.court.gov.ua/Review/103836955'
    },
    {
        title: 'Питання про скасування постанови',
        practiceNumber: '1-кс/991/1369/22',
        practiceText: 'Вирішується питання про скасування постанови від 16 березня 2022 року детектива Першого відділу детективів Третього підрозділу детективів Головного підрозділу детективів Національного антикорупційного бюро України ОСОБА_5 про зупинення досудового розслідування у кримінальному провадженні за №12021000000000510 від 09 квітня 2021 року.',
        practiceLink: 'https://reyestr.court.gov.ua/Review/103822313'
    }
];
const mainContainer = document.getElementById('contentContainer');
let caseCounter = 0;
let itemWrappers = 1;
for (let item of items) {
    if (caseCounter % 2 == 0) {
        let itemsWrapper = document.createElement('div');
        itemsWrapper.classList.add('itemsWrapper');
        itemsWrapper.id = `itemsWrapper${itemWrappers}`;
        mainContainer.append(itemsWrapper);
    }
    let contentItem = document.createElement('div');
    contentItem.classList.add('contentItem');
    contentItem.innerHTML = `<h3>${item.title}</h3><span>Номер справи : ${item.practiceNumber}</span><p>${item.practiceText}</p><span>Натисність щоб переглянути більше</span>`;
    contentItem.addEventListener("click", () => { location.href = item.practiceLink; });
    let contentWrapper = document.getElementById(`itemsWrapper${itemWrappers}`);
    console.log(`itemsWrapper${itemWrappers}`);
    contentWrapper.append(contentItem);
    caseCounter++;
    if (caseCounter % 2 == 0) {
        itemWrappers++;
    }
}
