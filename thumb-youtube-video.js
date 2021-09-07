function getUrl(codYoutube) {
    console.log('input -> ', codYoutube);
    return `https://i.ytimg.com/vi/${codYoutube.split('&')[0]}/maxresdefault.jpg`;
}

console.log('1 output -> ', getUrl('rVX8z5iiKSw&list=PL9lh4wvvgovy16CSQhHnpM7Pi_KmGUY4V&index=1'));
console.log('2 output -> ', getUrl('rVX8z5iiKSw'));

// input ->  rVX8z5iiKSw&list=PL9lh4wvvgovy16CSQhHnpM7Pi_KmGUY4V&index=1
// 1 output ->  https://i.ytimg.com/vi/rVX8z5iiKSw/maxresdefault.jpg
// input ->  rVX8z5iiKSw
// 2 output ->  https://i.ytimg.com/vi/rVX8z5iiKSw/maxresdefault.jpg
