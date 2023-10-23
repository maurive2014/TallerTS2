import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var sumSeasons = 0;
var avgSeasonsElm = document.getElementById("average");
var seriesCardBody = document.getElementById("seriesCard");
renderSeriesInTable(data);
avgSeasonsElm.innerHTML = "".concat(sumSeasons / data.length);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    sumSeasons = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("class", "colorwhitesmoke");
        trElement.innerHTML = "<td><strong>".concat(serie.num, "</strong></td>\n                             <td style=\"color:blue;\">").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        sumSeasons += serie.seasons;
        trElement.addEventListener("click", function () { renderCard(serie); });
    });
}
function renderCard(serie) {
    seriesCardBody.innerHTML = "<div class=\"card\" style=\"width: 19rem;\">\n                                    <img class=\"card-img-top\" src=".concat(serie.image, " alt=\"Card image cap\"/>\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                                        <p class=\"card-text\">").concat(serie.description, "</p>\n                                        <a href=").concat(serie.link, " target=\"_blank\">Go to TV show's website</a>\n                                    </div>\n                                </div>");
}
