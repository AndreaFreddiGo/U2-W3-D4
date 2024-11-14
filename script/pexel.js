//cerco di targhettizzare tutte le immagini delle card una volta sola in modo da poterle modificare al click dei bottoni
const previousImages = document.getElementsByClassName('bd-placeholder-img')
const tag9mins = document.getElementsByTagName('small')

// creo una funzione che mi farà partire una fetch per il recupero delle immagini e che verrà invocata al click del bottono
const getImages = () => {
  // vado a recuperare le immagini che mi interessano, per esempio provo con immagini della Grecia
  // contatteremo 'https://api.pexels.com/v1/search?query=[greece]'
  const pexelGreeceUrl = 'https://api.pexels.com/v1/search?query=[greece]'

  //faccio un'operazione di 'GET'
  fetch(pexelGreeceUrl, {
    headers: {
      Authorization: 'UQnil3XBT3Z488aTXX46rMhukiHpI6uUcEhN06ctExpUHv4xTubtedkQ',
    },
  })
    .then((response) => {
      console.log('RESPONSE', response)
      if (response.ok) {
        //se la chiamata è corretta ed andata a buon fine allora posso recuperare i dati in formato JSON
        return response.json()
      } else {
        throw new Error('Errore nel recupero dei dati dal server')
      }
    })
    .then((arrayOfImages) => {
      console.log('arrayOfImages', arrayOfImages)
      for (let i = 0; i < previousImages.length; i++) {
        previousImages[i].src = arrayOfImages.photos[i].src.original
        tag9mins[i].innerText = arrayOfImages.photos[i].id
      }
      //   con questo ciclo riesco a sostituire tutte le foto presenti nelle card con foto nuove della Grecia prese da Pexel
    })

    .catch((error) => {
      console.log('ERROR', error)
    })
}

const getOtherImages = () => {
  // vado a recuperare le immagini che mi interessano, per esempio provo con immagini della Grecia
  // contatteremo 'https://api.pexels.com/v1/search?query=[greece]'
  const pexelGreeceUrl = 'https://api.pexels.com/v1/search?query=[crete]'

  //faccio un'operazione di 'GET'
  fetch(pexelGreeceUrl, {
    headers: {
      Authorization: 'UQnil3XBT3Z488aTXX46rMhukiHpI6uUcEhN06ctExpUHv4xTubtedkQ',
    },
  })
    .then((response) => {
      console.log('RESPONSE', response)
      if (response.ok) {
        //se la chiamata è corretta ed andata a buon fine allora posso recuperare i dati in formato JSON
        return response.json()
      } else {
        throw new Error('Errore nel recupero dei dati dal server')
      }
    })
    .then((arrayOfImages) => {
      console.log('arrayOfImages', arrayOfImages)
      for (let i = 0; i < previousImages.length; i++) {
        previousImages[i].src = arrayOfImages.photos[i].src.original
        tag9mins[i].innerText = arrayOfImages.photos[i].id
      }
      //   con questo ciclo riesco a sostituire tutte le foto presenti nelle card con foto nuove della Grecia prese da Pexel
    })

    .catch((error) => {
      console.log('ERROR', error)
    })
}
