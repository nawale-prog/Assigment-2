 //Day 2 Exercises: Solutions
let dealerName = "  karibu Groceries INC. "; 
let location = "NAIROBI, Kenya";
let product = "Fresh Avocados";
let price = 50; 
let quantity = "100"; 
let recordId = "kgl-12345-001";


console.log("--- 1. String Concatenation Challenge ---");
const message1 = "Dealer: " + dealerName.trim() + " | Location: " + location + " | Product: " + product + " | Price: " + price;

console.log(message1);

console.log("Coercion Check (Price + Quantity): " + (price + quantity)); // Output will be "50100" (string concatenation)


console.log("\n--- 2. Template Literal Practice ---");

const message2 = `Dealer: ${dealerName.trim()} | Location: ${location} | Product: ${product} | Price: ${price}`;

console.log(message2);


console.log("\n--- 3. Type Checking and Conversion ---");

console.log(`Type of 'price' (original): ${typeof price}`); // number
console.log(`Type of 'quantity' (original): ${typeof quantity}`); // string

const numericQuantity = Number(quantity);
console.log(`'quantity' converted to Number: ${numericQuantity} (Type: ${typeof numericQuantity})`); // 100 (number)

const stringPrice = String(price);
console.log(`'price' converted to String: ${stringPrice} (Type: ${typeof stringPrice})`); // "50" (string)


console.log(`Boolean("") (Falsy): ${Boolean("")}`); // false
console.log(`Boolean(numericQuantity) (Truthy): ${Boolean(numericQuantity)}`); // true

console.log("\n--- 4. String Method Challenge ---");

let dealerInfo = dealerName;

let standardizedDealerName = dealerInfo.trim().toLowerCase();
console.log(`Standardized Name (trim, toLowerCase): ${standardizedDealerName}`); // "karibu groceries inc."

const includesInc = standardizedDealerName.includes("inc.");
console.log(`Does the name include "inc."? ${includesInc}`); // true

const nameParts = standardizedDealerName.split(" ");
console.log(`Name split by space: ${nameParts}`); // ["karibu", "groceries", "inc."]

let cleanedLocation = location.replace("Kenya", "KE").toUpperCase();
console.log(`Location (replace, toUpperCase): ${cleanedLocation}`); // "NAIROBI, KE"



console.log("\n--- 5. KGL Data Formatting Task ---");

const formattedDealerName = dealerName.trim().toUpperCase(); // "KARIBU GROCERIES INC."
const formattedLocation = location.toUpperCase(); // "NAIROBI, KENYA"
const formattedRecordId = recordId.toUpperCase().trim(); // "KGL-12345-001"

const idParts = formattedRecordId.split('-');
const isValidRecord = idParts.length === 3; // Check for 3 parts (Prefix, Code, Seq)
console.log(`Is Record ID valid (3 parts)? ${isValidRecord}`);

const finalDatabaseRecord = `
    --- KGL DATABASE ENTRY ---
    ID: ${formattedRecordId}
    DEALER_NAME: ${formattedDealerName}
    LOCATION: ${formattedLocation}
    PRODUCT: ${product}
    PRICE_PER_UNIT: ${price}
    QTY: ${numericQuantity} (Type: ${typeof numericQuantity})
`;

console.log(finalDatabaseRecord);