const create = async (req, res) => {
   res.send('Comment Created successfully');
};

const read = async (req, res) => {
   res.send('Comment Read successfull');
};

const deleted = async (req, res) => {
   res.send('Comment Deleted successfully');
};

const update = async (req, res) => {
   res.send('Comment Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
