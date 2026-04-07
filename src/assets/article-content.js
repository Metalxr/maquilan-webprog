import basics from "./basics.jpg";
import types from "./types.png";
import battle from "./battle.jpg";
import evolution from "./evolution.jpg";
import training from "./training.jpg";
import abilities from "./abilities.png";
import items from "./items.jpg";
import gyms from "./gyms.jpg";
import legendary from "./legendary.jpg";
import regions from "./regions.png";

const articles = [
  {
    name: "pokemon-basics",
    title: "Introduction to Pokémon",
    image: basics,
    content: [
      "Pokémon are creatures that trainers catch, train, and battle with. The franchise began with games developed by Nintendo, Game Freak, and Creatures.",
      "Each Pokémon has unique stats, abilities, and types such as Fire, Water, Grass, Electric, and more.",
      "Example:\nPikachu (Electric Type)\nCharmander (Fire Type)\nSquirtle (Water Type)",
      "The goal of a Pokémon Trainer is often to complete the Pokédex and become a Pokémon Master."
    ]
  },
  {
    name: "pokemon-types",
    title: "Understanding Pokémon Types",
    image: types,
    content: [
      "Pokémon types determine strengths and weaknesses in battle. For example, Water-type moves are strong against Fire-type Pokémon.",
      "There are many types including Fire, Water, Grass, Electric, Psychic, Dragon, and Fairy.",
      "Example:\nFire > Grass\nWater > Fire\nElectric > Water",
      "Learning type matchups is essential to winning battles and building a strong team."
    ]
  },
  {
    name: "pokemon-battles",
    title: "Pokémon Battle Mechanics",
    image: battle,
    content: [
      "Pokémon battles are turn-based. Each trainer selects moves that their Pokémon will use against the opponent.",
      "Moves have power, accuracy, and type. Some moves can also cause status effects like burn, paralysis, or sleep.",
      "Example:\nThunderbolt (Electric)\nFlamethrower (Fire)\nHydro Pump (Water)",
      "Strategy plays a big role — switching Pokémon and predicting your opponent can determine the outcome."
    ]
  },
  {
    name: "pokemon-evolution",
    title: "Pokémon Evolution",
    image: evolution,
    content: [
      "Evolution allows Pokémon to transform into stronger forms, increasing their stats and sometimes changing their type.",
      "Some Pokémon evolve by leveling up, while others require items or special conditions.",
      "Example:\nCharmander → Charmeleon → Charizard",
      "Evolution is key to building powerful teams and unlocking stronger abilities."
    ]
  },

  {
    name: "pokemon-training",
    title: "Training Your Pokémon",
    image: training,
    content: [
      "Training Pokémon involves battling to gain experience points (XP) and level up.",
      "You can also improve stats using items, EV training, and proper move selection.",
      "Example:\nUsing Rare Candy to level up\nTeaching moves like Ice Beam or Earthquake",
      "A well-trained Pokémon team is balanced, strategic, and ready for any type of opponent."
    ]
  },

  {
    name: "pokemon-abilities",
    title: "Pokémon Abilities",
    image: abilities,
    content: [
      "Abilities are special passive powers that give Pokémon unique advantages in battle.",
      "Each Pokémon can have one or more possible abilities.",
      "Example:\nLevitate (immune to Ground moves)\nIntimidate (lowers opponent's attack)",
      "Choosing Pokémon with strong abilities can greatly improve your battle strategy."
    ]
  },
  {
    name: "pokemon-items",
    title: "Held Items in Pokémon",
    image: items,
    content: [
      "Pokémon can hold items that provide bonuses during battle.",
      "Some items restore HP, while others boost attack or speed.",
      "Example:\nLeftovers (restores HP)\nChoice Band (boosts attack)",
      "Held items can turn the tide of battle when used strategically."
    ]
  },
  {
    name: "pokemon-gyms",
    title: "Pokémon Gyms and Badges",
    image: gyms,
    content: [
      "Gym Leaders are powerful trainers that specialize in a specific Pokémon type.",
      "Defeating them earns you badges, which prove your skill as a trainer.",
      "Example:\nBrock (Rock-type)\nMisty (Water-type)",
      "Collecting badges allows you to challenge the Pokémon League."
    ]
  },
  {
    name: "pokemon-legendary",
    title: "Legendary Pokémon",
    image: legendary,
    content: [
      "Legendary Pokémon are rare and powerful creatures often tied to the lore of the Pokémon world.",
      "They usually have very high stats and unique abilities.",
      "Example:\nMewtwo\nRayquaza\nDialga",
      "Catching a Legendary Pokémon is considered a major achievement."
    ]
  },
  {
    name: "pokemon-regions",
    title: "Pokémon Regions",
    image: regions,
    content: [
      "The Pokémon world is divided into regions, each with its own unique Pokémon and environments.",
      "Every region introduces new Pokémon and stories.",
      "Example:\nKanto\nJohto\nHoenn\nSinnoh",
      "Exploring different regions expands your Pokédex and adventure."
    ]
  }
];

export default articles;