import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Books = (book) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  return (
    <div className="books">
      <div className="book-container">
        <div className="first-column">
          <div>
            <p className="book-title">{ title }</p>
            <p className="book-author">{ author }</p>
          </div>
          <div>
            <ul className="book-edits">
              <li className="book-option">
                <button type="button" className="remove-button" onClick={() => dispatch(removeBook(id))}>Remove</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
