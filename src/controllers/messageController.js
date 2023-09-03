const create = async (req, res) => {
   res.send('Message Created successfully');
};

const read = async (req, res) => {
   res.send('Message Read successfull');
};

const deleted = async (req, res) => {
   res.send('Message Deleted successfully');
};

const update = async (req, res) => {
   res.send('Message Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
