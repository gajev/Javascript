function Inventory(array) {
    let heroes = []
    array.forEach(currentHeroData => {
        const [name, level, items] = currentHeroData.split(" / ");
        let hero = {
            heroName : name,
            heroLevel: level,
            heroItems: items
        }
        heroes.push(hero)
    });
    heroes.sort((a, b) => a.heroLevel - b.heroLevel);
    heroes.forEach(currentHero => {
        console.log(`Hero: ${currentHero.heroName} 
level => ${currentHero.heroLevel} 
items => ${currentHero.heroItems}`)
    });
}

Inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])

Inventory([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ])