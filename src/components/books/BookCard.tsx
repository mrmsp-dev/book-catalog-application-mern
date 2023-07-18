/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import SingleCard from "./SingleCard";
import { useGetBooksWithFilterQuery } from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";

interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}

const BookCard = () => {
  const { queryString } = useAppSelector((state) => state.filterCategory);
  const { data: filteredBooks } = useGetBooksWithFilterQuery(queryString);

  const firstTenBooks: IBook[] = filteredBooks
    ? filteredBooks.data.slice(0, 10)
    : [];
  return (
    <section className="wrapper  ">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
        {firstTenBooks.map((book: IBook) => (
          <SingleCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookCard;
