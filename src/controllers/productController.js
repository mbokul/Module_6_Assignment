const create = async (req, res) => {
   res.send('Product Created successfully');
};

const read = async (req, res) => {
   res.send('Product Read successfull');
};

const deleted = async (req, res) => {
   res.send('Product Deleted successfully');
};

const update = async (req, res) => {
   res.send('Product Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
