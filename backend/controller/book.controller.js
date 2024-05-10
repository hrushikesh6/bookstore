import Book from '../modal/Book.js';

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({books});

    } catch (error) {
        console("Error: " + error)
        res.status(500).json({ message: error.message });
    }
    
};

export const getFreeBooks = async (req, res) => {
    try {
        const books = await Book.aggregate([
            {
                $match: {
                    "price": 0
                }
            }
        ])
        res.status(200).json(books); 
    }catch (err) {
        console.log(err);
    }
}