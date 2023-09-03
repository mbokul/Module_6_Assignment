const create = async (req, res) => {
   res.send('Service Created successfully');
};

const read = async (req, res) => {
   res.send('Service Read successfull');
};

const deleted = async (req, res) => {
   res.send('Service Deleted successfully');
};

const update = async (req, res) => {
   res.send('Service Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
