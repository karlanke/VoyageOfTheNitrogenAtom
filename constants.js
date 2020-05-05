const nh4 = "NH<sub>4</sub><sup>+</sup>"
export const transitions = {
    'AtmosphericNitrogen': [
        {
            "chance": 2,
            "state": "BacterialProtein",
            "text": `You’ve been fixed into ammonium by a free-living, nitrogen-fixing bacterium. Within microseconds, you’re converted to an amino acid. Go directly to BACTERIAL PROTEIN (but don’t forget that you existed briefly as ${nh4}).`
        },
        {
            "chance": 1,
            "state": "BacteroidAmmonia",
            "text": `You’ve been fixed into ammonium by a symbiotic nitrogen-fixing bacterium. This symbiont (called a \"bacteroid\") is a nitrogen-fixing slave for the host plant. Go to BACTEROID AMMONIA.`
        },
        {
            "chance": 1,
            "state": "Ammonium",
            "text": `Lightning strike! Now you’re reduced to ammonium. Go to ${nh4}.`
        },
        {
            "chance": 1,
            "state": "Ammonium",
            "text": `Deep within the vats of a fertilizer factory, a lot of money is spent to reduce you to ammonium. Go to ${nh4}.`
        },
        {
            "chance": 10,
            "state": "AtmosphericNitrogen",
            "text": `You’re still atmospheric nitrogen gas, so don’t go anywhere. Wait 10 seconds, then draw another card from the NITROGEN GAS station.`
        },
    ],
    'Ammonium': [
        {
            "chance": 5,
            "state": "Nitrites",
            "text": `You are oxidized to provide energy to a lithotrophic bacterium as it respires. Go to NITRITE.`
        },
        {
            "chance": 5,
            "state": "Plants",
            "text": `You are taken up by a plant root and—within a plant cell—assimilated into an amino acid. Go directly to PLANT PROTEIN.`
        },
        {
            "chance": 5,
            "state": "BacterialProtein",
            "text": `You are taken up by a bacterial cell and assimilated into an amino acid. Go directly to BACTERIAL PROTEIN.`
        },
    ],
    'Nitrates': [
        {
            "chance": 4,
            "state": "Plants",
            "text": ` You are taken up by a plant root and—within a plant cell—assimilated into an amino acid. Go directly to PLANT PROTEIN.`
        },
        {
            "chance": 4,
            "state": "BacterialProtein",
            "text": `You are taken up by a bacterial cell and are assimilated into an amino acid. Go directly to BACTERIAL PROTEIN.`
        },
        {
            "chance": 3,
            "state": "Nitrites",
            "text": `A bacterium has used you as a terminal electron acceptor during respiration. This process reduces you to nitrite. Go to NITRITES.`
        },
        {
            "chance": 2,
            "state": "AtmosphericNitrogen",
            "text": `A bacterium has used you as a terminal electron acceptor during respiration. This process reduces you to nitrogen gas. Go to NITROGEN GAS.`
        },
        {
            "chance": 2,
            "state": "Nitrates",
            "text": `You are in an environment without much biological activity, so stay here. Wait 10 seconds, then draw another card from the NITRATE station.`
        },
    ],
    'Nitrites': [
        {
            "chance": 7,
            "state": "Nitrates",
            "text": `A lithotrophic bacterium has used you as an electron donor during respiration. This process oxidizes you to nitrate. Go to NITRATE.`
        },
        {
            "chance": 6,
            "state": "AtmosphericNitrogen",
            "text": `A bacterium has used you as a terminal electron acceptor during respiration. This process reduces you to nitrogen gas. Go to NITROGEN GAS.`
        },
        {
            "chance": 2,
            "state": "Nitrites",
            "text": `You are in an environment without much biological activity, so stay here. Wait 10 seconds, then draw another card from the NITRITE station.`
        },
    ],
    'BacterialProtein': [
        {
            "chance": 7,
            "state": "Animals",
            "text": `Uh, OH! You’ve just been ingested by some kind of microscopic animal. You’re still an amino acid, but now...go to ANIMAL PROTEIN.`
        },
        {
            "chance": 4,
            "state": "Ammonium",
            "text": `Within the bacterial cytoplasm, amino acids are continually recycled. Decomposition of amino acids can liberate free ammonium. Go to ${nh4}`
        },
        {
            "chance": 4,
            "state": "BacterialProtein",
            "text": `Within the bacterial cytoplasm, amino acids are continually recycled as new proteins are needed, so don’t go anywhere. Wait 10 seconds, then draw another card from the BACTERIAL PROTEIN station.`
        },
    ],
    'Plants': [
        {
            "chance": 4,
            "state": "Animals",
            "text": `Uh, OH! You’ve just been ingested by some kind of animal. You’re still an amino acid, but now...go to ANIMAL PROTEIN`
        },
        {
            "chance": 3,
            "state": "Ammonium",
            "text": `Uh, OH! The plant in which you reside has just died. Soil microorganisms move in, decompose the plant protein into amino acids, and liberate some ammonium in the process. Go to ${nh4}.`
        },
        {
            "chance": 4,
            "state": "BacterialProtein",
            "text": `Uh, OH! The plant in which you reside has just died. Soil microorganisms move in to decompose the plant protein and use the amino acids for themselves. Go to BACTERIAL PROTEIN.`
        },
        {
            "chance": 4,
            "state": "Plants",
            "text": `Inside the plant cell, amino acids are continually recycled as new proteins are needed. So stay here, wait 10 seconds, then draw again from PLANT PROTEIN.`
        },
    ],
    'Animals': [
        {
            "chance": 4,
            "state": "Ammonium",
            "text": `Animal cell metabolism has converted you into urine molecules, and you’re excreted from the animal’s body. Soil microorganisms quickly decompose you. Go directly to ${nh4}.`
        },
        {
            "chance": 2,
            "state": "Ammonium",
            "text": `Uh, OH! The animal in which you reside has just died. Soil microorganisms decompose the dead proteins to amino acids, sometimes liberating ammonium. Go to ${nh4}.`
        },
        {
            "chance": 2,
            "state": "BacterialProtein",
            "text": `Uh, OH! The animal in which you reside has just died. Soil microorganisms decompose the dead proteins to valuable amino acids which are quickly taken up by soil bacteria. Go to BACTERIAL PROTEIN.`
        },
        {
            "chance": 4,
            "state": "BacterialProtein",
            "text": `Uh, OH! The animal in which you reside has just been eaten by a bigger animal! After proteases in the animal’s gut degrade you to amino acids, you’re taken up by a gut bacterium! Within a few hours you find yourself as part of a smelly pile on the ground. Go to BACTERIAL PROTEIN.`
        },
        {
            "chance": 3,
            "state": "Animals",
            "text": `Uh, OH! The animal in which you reside has just been eaten by a bigger animal. Stay here because you’re still within animal protein, but wait 10 seconds before drawing another card from ANIMAL PROTEIN.`
        },
    ],
    'BacteroidAmmonia': [
        {
            "chance": 15,
            "state": "Plants",
            "text": `You’re quickly passed from the bacteroid to the host plant, where you’re assimilated. Go to PLANT PROTEIN.`
        },
    ]
}