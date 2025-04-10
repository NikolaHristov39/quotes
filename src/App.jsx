import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./App.css";

function App() {
  const quotes = [
    {
      id: 1,
      author: "- Albert Einstein",
      message:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      id: 2,
      author: "- Steve Jobs",
      message:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    },
    {
      id: 3,
      author: "- Mahatma Gandhi",
      message: "Be the change that you wish to see in the world.",
    },
    {
      id: 4,
      author: "- Winston Churchill",
      message:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
      id: 5,
      author: "- William Shakespeare",
      message: "To be, or not to be, that is the question.",
    },
    {
      id: 6,
      author: "- Mark Twain",
      message: "The secret of getting ahead is getting started.",
    },
    {
      id: 7,
      author: "- Abraham Lincoln",
      message: "The best way to predict your future is to create it.",
    },
    {
      id: 8,
      author: "- Franklin D. Roosevelt",
      message: "The only thing we have to fear is fear itself.",
    },
    {
      id: 9,
      author: "- Oscar Wilde",
      message: "Be yourself; everyone else is already taken.",
    },
    {
      id: 10,
      author: "- Albert Einstein",
      message: "Imagination is more important than knowledge.",
    },
    {
      id: 11,
      author: "- Thomas Edison",
      message:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
    },
    {
      id: 12,
      author: "- Pablo Picasso",
      message: "Everything you can imagine is real.",
    },
    {
      id: 13,
      author: "- Nelson Mandela",
      message: "It always seems impossible until it’s done.",
    },
    {
      id: 14,
      author: "- Leonardo da Vinci",
      message: "Simplicity is the ultimate sophistication.",
    },
    {
      id: 15,
      author: "- Henry Ford",
      message:
        "Whether you think you can, or you think you can't – you're right.",
    },
    {
      id: 16,
      author: "- Steve Jobs",
      message:
        "The people who are crazy enough to think they can change the world are the ones who do.",
    },
    {
      id: 17,
      author: "- Nikola Tesla",
      message:
        "If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.",
    },
    {
      id: 18,
      author: "- Mother Teresa",
      message:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    },
    { id: 19, author: "- Martin Luther King Jr.", message: "I have a dream." },
    {
      id: 20,
      author: "- John Lennon",
      message: "Life is what happens when you're busy making other plans.",
    },
    {
      id: 21,
      author: "- Charles Darwin",
      message:
        "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    },
    {
      id: 22,
      author: "- Albert Einstein",
      message:
        "Try not to become a man of success, but rather try to become a man of value.",
    },
    {
      id: 23,
      author: "- Aristotle",
      message: "The more you know, the more you realize you don't know.",
    },
    {
      id: 24,
      author: "- Socrates",
      message: "The only true wisdom is in knowing you know nothing.",
    },
    {
      id: 25,
      author: "- John F. Kennedy",
      message:
        "Ask not what your country can do for you – ask what you can do for your country.",
    },
    {
      id: 26,
      author: "- Thomas Jefferson",
      message:
        "In matters of style, swim with the current; in matters of principle, stand like a rock.",
    },
    {
      id: 27,
      author: "- Benjamin Franklin",
      message: "An investment in knowledge pays the best interest.",
    },
    {
      id: 28,
      author: "- Marilyn Monroe",
      message: "Give a girl the right shoes, and she can conquer the world.",
    },
    {
      id: 29,
      author: "- Bruce Lee",
      message:
        "Absorb what is useful, discard what is not, add what is uniquely your own.",
    },
    {
      id: 30,
      author: "- Walt Disney",
      message: "The way to get started is to quit talking and begin doing.",
    },
    {
      id: 31,
      author: "- Confucius",
      message:
        "Our greatest glory is not in never falling, but in rising every time we fall.",
    },
    {
      id: 32,
      author: "- Michael Jordan",
      message:
        "I can accept failure, everyone fails at something. But I can't accept not trying.",
    },
    {
      id: 33,
      author: "- Bill Gates",
      message:
        "Your most unhappy customers are your greatest source of learning.",
    },
    {
      id: 34,
      author: "- Steve Wozniak",
      message:
        "Sometimes life hits you in the head with a brick. Don’t lose faith.",
    },
    {
      id: 35,
      author: "- Bill Gates",
      message:
        "If you are born poor it's not your mistake, but if you die poor it's your mistake.",
    },
    {
      id: 36,
      author: "- Helen Keller",
      message: "Alone we can do so little; together we can do so much.",
    },
    {
      id: 37,
      author: "- Eleanor Roosevelt",
      message:
        "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      id: 38,
      author: "- Jim Carrey",
      message:
        "You can fail at what you don't want, so you might as well take a chance on doing what you love.",
    },
    {
      id: 39,
      author: "- Mark Zuckerberg",
      message: "The biggest risk is not taking any risk.",
    },
    {
      id: 40,
      author: "- Ralph Waldo Emerson",
      message:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    },
    {
      id: 41,
      author: "- Malala Yousafzai",
      message:
        "One child, one teacher, one book, one pen can change the world.",
    },
    {
      id: 42,
      author: "- Bob Marley",
      message:
        "Don’t worry about a thing, 'cause every little thing gonna be all right.",
    },
    {
      id: 43,
      author: "- Maya Angelou",
      message:
        "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    },
    {
      id: 44,
      author: "- Helen Keller",
      message: "Life is either a daring adventure or nothing at all.",
    },
    {
      id: 45,
      author: "- Victor Hugo",
      message: "Even the darkest night will end and the sun will rise.",
    },
    {
      id: 46,
      author: "- George Orwell",
      message: "In a time of deceit telling the truth is a revolutionary act.",
    },
    {
      id: 47,
      author: "- Anne Frank",
      message:
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    },
    {
      id: 48,
      author: "- Bob Dylan",
      message: "The times they are a-changin’.",
    },
    {
      id: 49,
      author: "- Leo Tolstoy",
      message:
        "Everyone thinks of changing the world, but no one thinks of changing himself.",
    },
    {
      id: 50,
      author: "- Martin Luther King Jr.",
      message: "Injustice anywhere is a threat to justice everywhere.",
    },
  ];

  const [quoteId, setQuoteId] = useState(0);
  const [favorite, setFavorite] = useState(false);

  function randomQuote() {
    const randomId = Math.floor(Math.random() * quotes.length);
    setQuoteId(randomId);
  }

  const quote = quotes[quoteId];

  const toggleFavorites = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div>
        <h1 className="header">Your daily quotes</h1>
        <div className="buttonsDiv">
          <button onClick={randomQuote} className="btnQuotes1">
            New quote
          </button>
          <button onClick={toggleFavorites} className="btnQuotes2">
            {favorite ? <FaStar /> : <FaRegStar />}
          </button>
        </div>
        <div className="messageQuotes">"{quote?.message}"</div>
        <div className="authorQuotes">{quote?.author}</div>
      </div>
    </>
  );
}

export default App;
