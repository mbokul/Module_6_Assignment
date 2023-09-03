const create = async (req, res) => {
   res.send('Title Created successfully');
};

const read = async (req, res) => {
   res.send('Title Read successfull');
};

const deleted = async (req, res) => {
   res.send('Title Deleted successfully');
};

const update = async (req, res) => {
   res.send('Title Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
