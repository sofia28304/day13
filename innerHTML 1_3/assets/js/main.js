let Galerie = document.getElementById("gallery");
Galerie.innerHTML = '<figure><img src="https://unsplash.it/200/200"><figcaption>Fig.1</figcaption></figure><figure><img src="https://unsplash.it/200/200"><figcaption>Fig.2</figcaption></figure><figure><img src="https://unsplash.it/200/200"><figcaption>Fig.3</figcaption></figure>';
Galerie.innerHTML += '<figure><img src="https://unsplash.it/200/200"><figcaption>Fig.4</figcaption></figure><figure><img src="https://unsplash.it/200/200"><figcaption>Fig.5</figcaption></figure><figure><img src="https://unsplash.it/200/200"><figcaption>Fig.6</figcaption></figure>';
// das += fügt hier einen weiteren Block hinzu. Nur ein = würde hier den ersten Block mit dem zweiten Block überschreiben. Wegen Flex stehen die in horizontaler Reihe. 

Galerie.style.display = "flex";








// https://unsplash.com/photos/tzON0Fn2xgE