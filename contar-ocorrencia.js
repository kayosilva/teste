const stringInput = "Guitar Drums Bass|Keyboard Keyboard Bass|Guitar Keyboard Drums|Drumstick drums";
const result = [];
stringInput.split('|').map(item => item.split(' ').sort().map(item => {
    if (item) {
        const itemName = item.toLowerCase();
        if (!result[itemName]) {
            result[itemName] = 1;
            return;
        }
        ++result[itemName];
        return;
    }
}));
console.log(result);
