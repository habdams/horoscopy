document.querySelector('#confirm').addEventListener('click',checkHoroscope);

// else if((getMonth === 'may' && getDay >= 21)||(getMonth === 'june' && getDay <= 20)){
//     result=("")
// }

function checkHoroscope(){
    let getMonth = document.querySelector('#month').value;
    let getDay = document.querySelector('#day').value;

    let result;
    let sign;

    if ((getMonth === 'march' && getDay >= 21)||(getMonth === 'april' && getDay <= 19)){
        sign="Aries";
        result= "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations." 
        console.log(getMonth);
      }
    else if((getMonth === 'april' && getDay >= 20)||(getMonth === 'may' && getDay <= 20)){
        sign="Taurus";
        result= "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."
    
      }
    else if((getMonth === 'may' && getDay >= 21)||(getMonth === 'june' && getDay <= 20)){
        sign="Gemini";
        result= "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself."
      }
    else if((getMonth === 'june' && getDay >= 21)||(getMonth === 'july' && getDay <= 22)){
        sign="Cancer";
        result= "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room."
    }
    else if((getMonth === 'july' && getDay >= 23)||(getMonth === 'august' && getDay <= 22)){
        sign="Leo";
        result= "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves."
    }
    else if((getMonth === 'august' && getDay >= 23)||(getMonth === 'september' && getDay <= 22)){
        sign="Virgo";
        result= "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice."
    }
    else if((getMonth === 'september' && getDay >= 23)||(getMonth === 'october' && getDay <= 22)){
        sign="Libra";
        result= "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life."
    }
    else if((getMonth === 'october' && getDay >= 23)||(getMonth === 'november' && getDay <= 21)){
        sign="Scorpio";
        result= "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm."
    }
    else if((getMonth === 'november' && getDay >= 22)||(getMonth === 'december' && getDay <= 21)){
        sign="Sagittarius"
        result= "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures."
    }
    else if((getMonth === 'december' && getDay >= 22)||(getMonth === 'january' && getDay <= 19)){
        sign="Capricorn";
        result= "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms."
    }
    else if((getMonth === 'january' && getDay >= 20)||(getMonth === 'february' && getDay <= 20)){
        sign="Aquarius";
        result= "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign."
    }
    else if((getMonth === 'february' && getDay >= 19)||(getMonth === 'march' && getDay <= 20)){
        sign="Pisces";
        result= "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs."
    }
    else{
        sign="Let's try again!"
        result= "you have not selected a correct date"
    }

    document.querySelector('#sign').innerHTML = sign;
    document.querySelector('#result').innerHTML = result;

}

