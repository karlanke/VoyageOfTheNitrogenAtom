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
    ]
}