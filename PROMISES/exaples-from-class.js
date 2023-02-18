const getUser = () => {
    const myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = {
                name: 'Pera',
                surname: 'Peric',
                id: 22,
            };
            if (Math.random() < 0.5) {
                resolve(user);
            }else {
                reject('Invalid')
            }
        }, 2000);
    });
    return myPromise;
}
getUser()
.then((u) => console.log(u))
.catch((e) => console.log(e))

//promises = js objekat koji hendluje asinhrone radnje
/*Promises su JavaScript objekti koji se koriste za upravljanje asinhronim radnjama.Oni pružaju način da se asinhroni kod izvrši u pravilnom redosledu i omogućuju nam da se nosimo sa situacijama u kojima je potrebno da se sačeka izvršenje neke funkcije pre nego što se nastavi sa daljim izvršavanjem koda.Promises objekat ima tri osnovna stanja : pending(čeka se na izvršenje)
resolved(uspešno izvršeno)
rejected(neuspešno izvršeno).Kada se promise uspešno završi,
tada se poziva metoda.then(),
a kada se desi greška,
tada se poziva metoda.catch().Ovaj model asinhronog programiranja čini JavaScript efikasnijim i pouzdanijim u radu sa asinhronim operacijama.
*/

//svaka funkcija koja vraca promises je asinhrona funkcija


//kada hocemo da damo nekoj metodi tri id-ja i hocemo da posaljemo tri rekvesta u isto vreme i treba sva tri da se ispune da bi se nesto izvrsilo.
const getShowByIds = (id1 , id2, id3) => {
    return Promise.all([
fetch(`: http://api.tvmaze.com/shows/${id1}?embed[]=season&embed[]=cast`),
fetch(`: http://api.tvmaze.com/shows/${id2}?embed[]=season&embed[]=cast`),
fetch(`: http://api.tvmaze.com/shows/${id3}?embed[]=season&embed[]=cast`),


    ]).then(values => Promise.all(response.map((res) => res.json())));
}
getShowByIds(1, 2, 3).then((values) => {console.log(values)});


//fetch iza zavese inplemented promises