var d = [
    {
        sekil: "/img/YOLDA QALAN İZLƏR.jpg",
        yazi: "YOLDA QALAN İZLƏR",
        cat: "Azərbaycan ədəbiyyatı",
        p: "İLYAS QƏMGİN (ALLAHVERDİYEV) (müəllif), Tanınmış yazıçı-publisitin Seçilmiş əsərlərinin I cildi kimi nəşrə hazırlanan bu kitabda yazıçının müxtəlif illərdə qələmə aldığı bədii nəsr, poeziya və publisitika nümunələri yer alıb."
    },
    {
        sekil: "/img/Mektub.jpg",
        yazi: "Sevənlərə məktub",
        cat: "Azərbaycan ədəbiyyatı",
        p: "İSKƏNDƏR ETİBAR (müəllif), Fəlsəfi pıçıltılar silsiləsindən I Kitab. Sevənlərə məktub. Müasir Azərbaycanın tanınmış şair-publisisti İskəndər Etibarın bu kitabına seçilmiş lirik-ictimai, satirik şeirləri daxil edilib..."
    },
    {
        sekil: "/img/İSMAYIL ŞIXLI.jpg",
        yazi: "DƏLİ KÜR",
        cat: "Azərbaycan ədəbiyyatı",
        p: "ISMAYIL ŞIXLI (müəllif), İsmayıl Şıxlı. Seçilmiş əsərləri. İki cilddə. II cild. XX əsrin on ən dəyərli romanından biri - Dəli Kür ...İsmayıl Şıxlı zaman-zaman oxunacaq bir kitabdır - Dəli Kürdür...."
    },
    {
        sekil: "/img/AŞIQ ALI.jpg",
        yazi: "AŞIQ SƏNƏTİ",
        cat: "Klassika",
        p: "AŞIQ ALI (müəllif),  Kitaba böyük el sənətkarı aşıq Alının ictimai-əxlaqı, mənəvi-psixoloji mündəricəli əsərləri - gəraylıları, qoşmaları, divaniləri, təcnisləri, habelə ona həsr olunmuş üç rəvayət - dastan daxil edilmişdir"
    },
    {
        sekil: "/img/NUR DƏRƏSİ'.jpg",
        yazi: "NUR DƏRƏSİ",
        cat: "Çağdaş ədəbiyyat",
        p: "TƏHMASİB NOVRUZOV (müəllif), Əsər XX əsrin əvvəllərində və sovet hakimiyyəti qurulanda Azərbaycanın bölgələrindən birində, Qarabağın Abdal - Gülablı kəndində baş verən hadisələrdən bəhs edir. Səfəvi dövlətinin səraslanı Dədəbəyin nəslindən olan Binnət Fərzəliyevin ətrafında baş verən real tarixi hadisələrdən, erməni məkrindən və sovet repressiyalarından bəhs edən romandır."
    },
    {
        sekil: "/img/BULUDLARA SƏYAHƏT.jpg",
        yazi: "BULUDLARA SƏYAHƏT",
        cat: "Çağdaş ədəbiyyat",
        p: "NAZİLƏ RAHİBQIZI (müəllif), Ədəbi prosesə lirik şeirlər balaca oxuculara ünvanlanmış əsərlər müəllifi kimi qoşulmuş istedadlı pedaqoq-şairənin bu yeni kitabı uşaq ədəbiyyatının maraqlı nümunələrini özündə cəmləyir. Uşaqlar üçün poetik və bədii nəsr əsərlərindən ibarət toplu."
    },
    {
        sekil: "/img/LEV TOLSTOY.jpg",
        yazi: "BİR GENCİN DRAMI",
        cat: "Dünya ədəbiyyatı",
        p: "LEV TOLSTOY (müəllif),Bir gencin dramı. Türk dilində povest. Klassik rus və dünya ədəbiyyatının görkəmli nümayəndəsinin ən maraqlı əsərlərindən biri..."
    },
    {
        sekil: "/img/PAULO KOELYO.jpg",
        yazi: "АЛХИМИК - KİMYAGƏR",
        cat: "Dünya ədəbiyyatı",
        p: "PAULO KOELYO (müəllif),Алхимик - Kimyagər: Dünyada ən çox satılan kitab... Уже одна возможность превращать металл в золото или открыть Эликсир Бессмертия слишком соблазнительна для всякого, кто делает первые шаги в магии."
    }
]
for (let i = 0; i < d.length; i++) {
    document.querySelector(".bas1").innerHTML +=
        `
    <div class="bas2" category="${d[i].cat}" onclick=eq(${i})>
            <img src="${d[i].sekil}" alt="" id="i5">
            <h1>${d[i].yazi}</h1>
            </div>
    `
}
document.querySelectorAll(".ham").forEach(x => {
    x.addEventListener("click", function () {
        console.log(x.innerHTML);
        document.querySelectorAll(".bas1 .bas2").forEach(y => {
            if (y.getAttribute("category") == x.innerHTML || x.innerHTML == "Hamisi") {
                y.style.display = "block"
            }
            else {
                y.style.display = "none"
            }
        });
    })
});
function eq(i) {
    $(".etrafli1").css("display", "flex")
    $(".bas1").css("filter", "blur(10px)")
    $(".etrafli1").html(
        `
        <div class="etrafli2">
                <img src="${d[i].sekil}" alt="">
            </div>
            <div class="etrafli3">
                <h1>${d[i].yazi}</h1>
                <p>${d[i].p}</p>
                <i class="fa-solid fa-x" onclick=e(${i})></i>
            </div>
        `
    )
}
function e(i) {
    $(".etrafli1").css("display", "none")
    $(".bas1").css("filter", "blur(0px)")
}