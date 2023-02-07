// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const readline = require('readline');
const os = require('os');
const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`
];

const askQuestion = () => {
  console.log('Que souhaitez-vous faire ?');
}

const handleAnswer = (answer) => {
  const prompt = answer.split(' ');

  switch (prompt[0]) {
      case 'chante':
          console.log(os.EOL + `Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
          break;
      case 'classement':
          for(let i = 0; i < hitParade.length; i++) {
              console.log(`${i + 1} - ${hitParade[i]}`);
          }
          break;
      case 'position':
          const song = hitParade[prompt[1] - 1];
          if(song) {
              console.log(song);
          } else {
              console.log("Aucune chanson trouvé à cette position");
          }
          break;
      case 'quitter':
          console.log("Au revoir !");
          rl.close();
          break;
      default: 
          console.log("Je n'ai pas compris la commande.");
  }

}

rl.on('line', handleAnswer);


askQuestion();
