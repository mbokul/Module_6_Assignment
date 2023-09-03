const create = async (req, res) => {
   res.send('Blog Details Created successfully');
};

const read = async (req, res) => {
   res.send('Blog Details Read successfull');
};

const deleted = async (req, res) => {
   res.send('Blog Details Deleted successfully');
};

const update = async (req, res) => {
   res.send('Blog Details Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
