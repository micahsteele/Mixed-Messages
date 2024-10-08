const starSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius',
    'Capricorn', 'Aquarius', 'Pisces'];
const fortune = ['good', 'bad', 'terrible', 'awful', 'extraordinary', 'ordinary'];
const luck = ['fortune', 'luck', 'aura', 'vibes'];

function displayText() {
    let message = `You are a ${starSign[Math.floor(Math.random() * starSign.length)]}, you will have 
    ${fortune[Math.floor(Math.random() * fortune.length)]} ${luck[Math.floor(Math.random() * luck.length)]}`;
    return alert(message)
};
