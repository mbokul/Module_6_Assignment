const create = async (req, res) => {
   res.send('Project Created successfully');
};

const read = async (req, res) => {
   res.send('Project Read successfull');
};

const deleted = async (req, res) => {
   res.send('Project Deleted successfully');
};

const update = async (req, res) => {
   res.send('Project Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
