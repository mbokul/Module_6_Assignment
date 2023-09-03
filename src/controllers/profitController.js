const create = async (req, res) => {
   res.send('Profit Created successfully');
};

const read = async (req, res) => {
   res.send('Profit Read successfull');
};

const deleted = async (req, res) => {
   res.send('Profit Deleted successfully');
};

const update = async (req, res) => {
   res.send('Profit Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
