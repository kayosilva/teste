const getUrl = (codYoutube) => {
    console.log('input -> ', codYoutube);
    return `https://i.ytimg.com/vi/${codYoutube.split('&')[0]}/maxresdefault.jpg`;
};

console.log('1 output -> ', getUrl('rVX8z5iiKSw&list=PL9lh4wvvgovy16CSQhHnpM7Pi_KmGUY4V&index=1'));
console.log('2 output -> ', getUrl('rVX8z5iiKSw'));