import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Lacho", text: "Learning React is great!" },
  { id: "q2", author: "Lachezar", text: "Learning Angular is fun!" },
  { id: "q3", author: "Lenny", text: "Understanding redux requires practice!" },
  { id: "q4", author: "Lacho", text: "Learn it and master it!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
