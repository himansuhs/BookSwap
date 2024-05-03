import Book from "../Model/book.modal.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
};
