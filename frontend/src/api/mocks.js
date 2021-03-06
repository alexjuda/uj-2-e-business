async function sleepMs(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

export async function allProducts(apiProps) {
    await sleepMs(200);

    return [{
        id: 1,
        name: "Fender Made in Japan Traditional 60S Stratocaster Fiesta Red",
        details: "Since it is used, there is damage due to normal use as a whole, but there is no problem in playing.",
        currency: "usd",
        unitPrice: 80940,
        categoryId: 1,
    }, {
        id: 2,
        name: "Fernandes LIMITED EDITION JB-55 Natural Made in Japan 1992s",
        details: "This is a limited edition model produced only in 1992. It was produced at the Fujigen factory from the data of Neck.",
        currency: "usd",
        unitPrice: 62035,
        categoryId: 1,
    }, {
        id: 3,
        name: "Fender japan tl62b",
        currency: "usd",
        unitPrice: 96900,
        categoryId: 1,
    }, {
        id: 4,
        name: "1966 Fender Precision Bass Lake Placid Blue, 100% Original w/ Case",
        details: "Up for sale, a 1966 Fender Precision Bass in exceptional, 100% original condition and in perfect working order, complete with the original hardshell case. This factory double custom color bass features a lightly greened Lake Placid Blue finish over Candy Apple Red with a white primer coat, stunningly well-kept for the past 55 years. Weighing 9lbs 3oz and strung with flatwound 50-110 strings, this P Bass has an authoritative and round sound. The tonewood combination of an alder body, maple neck, and Brazilian rosewood fingerboard yields a balanced, detailed tone with excellent treble detail and smooth thump with the Tone knob rolled back to taste. Professionally setup, we've had this bass dialed in here at Mike & Mike's Guitar Bar to ensure optimal action and intonation.",
        currency: "usd",
        unitPrice: 1649999,
        categoryId: 1,
    }, {
        id: 101,
        name: "Ficus Elastica",
        details: "Ficus elastica, the rubber fig, rubber bush, rubber tree, rubber plant, or Indian rubber bush, Indian rubber tree, is a species of plant in the fig genus, native to eastern parts of South Asia and southeast Asia. It has become naturalized in Sri Lanka, the West Indies, and the US State of Florida.",
        unitPrice: 1299,
        currency: "pln",
        categoryId: 2,
    }, {
        id: 102,
        name: "Sansevieria",
        details: "Sansevieria is a historically recognized genus of flowering plants, native to Africa, notably Madagascar, and southern Asia, now included in the genus Dracaena on the basis of molecular phylogenetic studies.",
        unitPrice: 2999,
        currency: "pln",
        categoryId: 2,
    }];
}

export async function productsByCategory(apiProps, categoryId) {
    await sleepMs(200);

    return (await allProducts(apiProps)).filter(product => {
        return product.categoryId === categoryId; 
    });
}

export async function allCategories(apiProps) {
    await sleepMs(200);

    return [{
        id: 1,
        name: "music",
    }, {
        id: 2,
        name: "plants",
    }];
}
