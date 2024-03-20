import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import questions from './data'

function App() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredQuestions(questions);
    } else {
      const filtered = questions.filter(question =>
        question.tags.includes(selectedTag)
      );
      setFilteredQuestions(filtered);
    }
    setCurrentPage(1)
  }, [selectedTag, questions]);

  const handleTagClick = tag => {
    setSelectedTag(tag);
  };

  const renderTags = () => {
    const allTags = ['All', ...new Set(questions.flatMap(q => q.tags))];
    return allTags.map(tag => (
      <span
        key={tag}
        onClick={() => handleTagClick(tag)}
        className={`tag-button ${tag === selectedTag ? 'active' : ''}`}
      >
        {tag}
      </span>
    ));
  };

  // Pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Render page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredQuestions.length / questionsPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <>
      <Navbar />
      <main>
        <h1>Product Management Interview Questions</h1>
        <p>Browse 1000+ questions from top tech companies</p>
        <div className='tag-button-container'>{renderTags()}</div>
        <div className='question-section'>
          {currentQuestions.map((question, index) => (
            <div key={index} className='question'>
              <h3>{question.question}</h3>
              {question.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          ))}
        </div>
        {/* Pagination */}
      <div className="pagination">
        <span>
          Showing {indexOfFirstQuestion + 1} - {Math.min(indexOfLastQuestion, filteredQuestions.length)} of {filteredQuestions.length} questions
        </span>
        <ul className="page-numbers">
          {pageNumbers.map(number => (
            <li key={number} >
              <button onClick={() => paginate(number)} className={`pagination-number-button ${number === currentPage ? 'active' : ''}`}>{number}</button>
            </li>
          ))}
        </ul>
      </div>
      </main>
      <Footer />
    </>
  )
}

export default App
