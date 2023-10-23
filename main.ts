import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let sumSeasons: number = 0;
const avgSeasonsElm: HTMLElement = document.getElementById("average")!;
const seriesCardBody: HTMLElement = document.getElementById("seriesCard")!;


renderSeriesInTable(data);
avgSeasonsElm.innerHTML = `${sumSeasons/data.length}`


function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    sumSeasons = 0;
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.setAttribute("class","colorwhitesmoke")
      trElement.innerHTML = `<td><strong>${serie.num}</strong></td>
                             <td style="color:blue;">${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
      sumSeasons += serie.seasons;
      trElement.addEventListener("click", () => {renderCard(serie);});
    });

  }

function renderCard(serie: Serie): void{
    seriesCardBody.innerHTML = `<div class="card" style="width: 19rem;">
                                    <img class="card-img-top" src=${serie.image} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">${serie.name}</h5>
                                        <p class="card-text">${serie.description}</p>
                                        <a href=${serie.link} target="_blank">Go to TV show's website</a>
                                    </div>
                                </div>`;
}

