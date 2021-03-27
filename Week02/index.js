var isHotOutside        = true;
var isWeekday           = true;
var hasMoneyInPocket    = true;


var costOfMilk          = 2.50;
var moneyInWallet       = 5.00
var thirstLevel         = 6;

var shouldByIcecream    = isHotOutside && hasMoneyInPocket;
var willGoSwimming      = isHotOutside && !isWeekday;
var isAGoodDay          = isHotOutside && hasMoneyInPocket && ! isWeekday;
var willBuyMilk         = isHotOutside && (thirstLevel >= 3) && (moneyInWallet >= (2*costOfMilk));


console.log('VARIABLES');
console.log('isHotOutside     ' + isHotOutside      );
console.log('isWeekday        ' + isWeekday         );
console.log('hasMoneyInPocket ' + hasMoneyInPocket  );
console.log('costOfMilk       ' + costOfMilk        );
console.log('moneyInWallet    ' + moneyInWallet     );
console.log('thirstLevel      ' + thirstLevel       );

console.log('CALCULATIONS');
console.log('   shouldByIcecream : ' + shouldByIcecream);
console.log('   willGoSwimming   : ' + willGoSwimming);
console.log('   isAGoodDay       : ' + isAGoodDay); 
console.log('   willBuyMilk      : ' + willBuyMilk);



