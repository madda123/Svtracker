import Expense from "../models/Expense.js";

export const getAllExpense = async (req, res) => {
  try {
    const userId = req.user._id;

    const expense = await Expense.find({ userId })
      .sort({ date: -1 })
      .populate("category");

    res.status(200).json({ expense, message: "Fetching expense successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addExpense = async (req, res) => {
  try {
    const userId = req.user._id;

    const { category, amount, date } = req.body;

    if (!category || !amount) {
      return res.status(400).json({ message: "Request body is empty" });
    }

    await Expense.create({
      userId,
      category,
      amount,
      date: new Date(date),
    });

    res.status(201).json({ message: "Create new expense successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Expense deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
