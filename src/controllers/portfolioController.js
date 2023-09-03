const create = async (req, res) => {
   res.send('Portfolio Created successfully');
};

const read = async (req, res) => {
   res.send('Portfolio Read successfull');
};

const deleted = async (req, res) => {
   res.send('Portfolio Deleted successfully');
};

const update = async (req, res) => {
   res.send('Portfolio Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
