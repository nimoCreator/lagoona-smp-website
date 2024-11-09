export const apiPath = "http://localhost/lagoonaAPIs/";

export const mcmmoSkills = {
        'acrobatics':   { id: 'acrobatics', imgSrc: 'Acrobatics.png',   text: 'Acrobatics' },
        'alchemy':      { id: 'alchemy',    imgSrc: 'Alchemy.png',      text: 'Alchemy' },
        'archery':      { id: 'archery',    imgSrc: 'Archery.png',      text: 'Archery' },
        'axes':         { id: 'axes',       imgSrc: 'Axes.png',         text: 'Axes' },
        'crossbows':    { id: 'crossbows',  imgSrc: 'Crossbows.png',    text: 'Crossbows' },
        'excavation':   { id: 'excavation', imgSrc: 'Excavation.png',   text: 'Excavation' },
        'fishing':      { id: 'fishing',    imgSrc: 'Fishing.png',      text: 'Fishing' },
        'herbalism':    { id: 'herbalism',  imgSrc: 'Herbalism.png',    text: 'Herbalism' },
        'maces':        { id: 'maces',      imgSrc: 'Maces.png',        text: 'Maces' },
        'mining':       { id: 'mining',     imgSrc: 'Mining.png',       text: 'Mining' },
        'repair':       { id: 'repair',     imgSrc: 'Repair.png',       text: 'Repair' },
        'swords':       { id: 'swords',     imgSrc: 'Swords.png',       text: 'Swords' },
        'taming':       { id: 'taming',     imgSrc: 'Taming.png',       text: 'Taming' },
        'tridents':     { id: 'tridents',   imgSrc: 'Tridents.png',     text: 'Tridents' },
        'unarmed':      { id: 'unarmed',    imgSrc: 'Unarmed.png',      text: 'Unarmed' },
        'woodcutting':  { id: 'woodcutting',imgSrc: 'Woodcutting.png',  text: 'Woodcutting' },
}

export const mcmmmoSkillsExtras = {
    'Total':        { id: 'Total',      imgSrc: 'Total.png',        text: 'Power' },
    'Legacy':       { id: 'Legacy',     imgSrc: 'Legacy.png',       text: 'Legacy' },
    'lastlogin':    { id: 'lastlogin',  imgSrc: 'LastLogin.png',    text: 'Last Online' },
}

export const mcmmoSkillsFull = { ...mcmmmoSkillsExtras, ...mcmmoSkills };