export const createItem = (Model) => async (req, res) => {
  try {
    const data = { ...req.body, user: req.user._id };
    const item = await Model.create(data);
    res.json(item);
  } catch (err) { res.status(500).json({ message: 'Server error' }) }
};

export const listItems = (Model) => async (req, res) => {
  try {
    const items = await Model.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) { res.status(500).json({ message: 'Server error' }) }
};

export const getItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findOne({ _id: req.params.id, user: req.user._id });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) { res.status(500).json({ message: 'Server error' }) }
};

export const updateItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) { res.status(500).json({ message: 'Server error' }) }
};

export const deleteItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: 'Server error' }) }
};
